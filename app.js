// app.js — all interaction logic for Inside Your Head

// !! PASTE YOUR GEMINI API KEY HERE !!
// Get one free at https://aistudio.google.com
const API_KEY = "AIzaSyC3Z0BB5UZ2qyszcWspA_biqpjkIIbPcyA";

/* ── State ───────────────────────────────────────────────── */
const responses = {};
let activeId = CHARS[0].id;
let isLoading = false;

/* ── Init ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildParticles();
  buildTabs();

  document.getElementById('idea-input').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      runEmotions();
    }
  });
});

/* ── Floating particles ──────────────────────────────────── */
function buildParticles() {
  const container = document.getElementById('particles');
  const colors = CHARS.map(ch => ch.color);

  for (let i = 0; i < 22; i++) {
    const el = document.createElement('div');
    el.className = 'particle';
    const color = colors[i % colors.length];
    const size = 10 + Math.random() * 30;
    el.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      top: ${20 + Math.random() * 70}%;
      left: ${Math.random() * 100}%;
      --d: ${10 + Math.random() * 12}s;
      --delay: ${Math.random() * 8}s;
    `;
    container.appendChild(el);
  }
}

/* ── Build character tabs ────────────────────────────────── */
function buildTabs() {
  const row = document.getElementById('tabs-row');
  row.innerHTML = '';

  CHARS.forEach(ch => {
    const tab = document.createElement('div');
    tab.className = `tab${ch.id === activeId ? ' active' : ''}`;
    tab.id = `tab-${ch.id}`;
    tab.style.setProperty('--tc', ch.color);
    tab.onclick = () => switchTab(ch.id);
    tab.innerHTML = `
      <div class="tab-dot"></div>
      <div class="tab-avatar">${ch.svg}</div>
      <div class="tab-name">${ch.name}</div>
    `;
    row.appendChild(tab);
  });
}

/* ── Switch active tab ───────────────────────────────────── */
function switchTab(id) {
  activeId = id;

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`tab-${id}`).classList.add('active');

  const ch = CHARS.find(c => c.id === id);
  updatePanel(ch, responses[id]);
  updatePanelTheme(ch);

  document.documentElement.style.setProperty('--active', ch.color);
}

/* ── Update panel glow / border ─────────────────────────── */
function updatePanelTheme(ch) {
  const panel = document.getElementById('panel');
  panel.style.borderColor = `${ch.color}44`;
  panel.style.boxShadow = `0 0 40px ${ch.color}22, inset 0 0 60px ${ch.color}08`;

  document.getElementById('panel-glow').style.background =
    `radial-gradient(ellipse at 10% 50%, ${ch.color}18 0%, transparent 60%)`;
}

/* ── Render panel content ────────────────────────────────── */
function updatePanel(ch, resp) {
  let responseHtml;

  if (!resp) {
    responseHtml = `<div class="panel-response idle">click "Feel it" to hear what ${ch.name} thinks…</div>`;
  } else if (resp === 'loading') {
    responseHtml = `<div class="panel-response"><div class="ldots"><span></span><span></span><span></span></div></div>`;
  } else {
    responseHtml = `<div class="panel-response">${escHtml(resp)}</div>`;
  }

  document.getElementById('panel-inner').innerHTML = `
    <div class="panel-big-avatar ${ch.id}" style="filter:drop-shadow(0 8px 24px ${ch.color}66)">
      ${ch.svg}
    </div>
    <div class="panel-text-col">
      <div class="panel-char-name" style="color:${ch.color}">${ch.name}</div>
      <div class="panel-char-emotion">${ch.emotion}</div>
      ${responseHtml}
    </div>
  `;
}

/* ── Main: fetch all emotion responses ───────────────────── */
async function runEmotions() {
  const idea = document.getElementById('idea-input').value.trim();
  if (!idea || isLoading) return;

  if (!API_KEY || API_KEY === "YOUR_NEW_GEMINI_KEY_HERE") {
    alert("Please open app.js and paste your Gemini API key at the top of the file.");
    return;
  }

  isLoading = true;
  document.getElementById('go-btn').disabled = true;
  document.getElementById('reset-btn').classList.remove('show');

  // Clear old state
  Object.keys(responses).forEach(k => delete responses[k]);
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('loaded'));

  // Mark all as loading
  CHARS.forEach(ch => { responses[ch.id] = 'loading'; });

  // Show HQ and loading state for active tab
  document.getElementById('hq').classList.add('visible');
  const activeCh = CHARS.find(c => c.id === activeId);
  updatePanel(activeCh, 'loading');
  updatePanelTheme(activeCh);

  try {
    const res = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: buildPrompt(idea) }] }],
          generationConfig: { maxOutputTokens: 2500 }
        })
      }
    );

    const data = await res.json();
    console.log("Full Gemini API response:", data); // check F12 console if broken

    // Gemini response shape is different from Anthropic
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const parsed = parseResponse(raw);

    if (!parsed) {
      throw new Error("Could not parse Gemini response. Check browser console (F12) for details.");
    }

    // Stagger-reveal each character tab
    CHARS.forEach((ch, i) => {
      setTimeout(() => {
        responses[ch.id] = parsed[ch.id] || '...';
        document.getElementById(`tab-${ch.id}`).classList.add('loaded');
        if (ch.id === activeId) updatePanel(ch, responses[ch.id]);
      }, i * 80);
    });

    setTimeout(() => {
      document.getElementById('reset-btn').classList.add('show');
      isLoading = false;
    }, CHARS.length * 80 + 300);

  } catch (err) {
    console.error('API error:', err);
    CHARS.forEach(ch => { responses[ch.id] = 'Something went wrong. Try again?'; });
    const ac = CHARS.find(c => c.id === activeId);
    updatePanel(ac, responses[activeId]);
    document.getElementById('go-btn').disabled = false;
    isLoading = false;
  }
}

/* ── Build the prompt ────────────────────────────────────── */
function buildPrompt(idea) {
  return `The user has an idea or thought: "${idea}"

You are ALL 9 Inside Out 2 emotions responding at once. Each has a completely distinct voice.
Respond ONLY as a raw JSON object — no markdown, no backticks, no extra text:
{
  "joy": "...",
  "sadness": "...",
  "anger": "...",
  "fear": "...",
  "disgust": "...",
  "anxiety": "...",
  "envy": "...",
  "ennui": "...",
  "embarrass": "..."
}

Voice guide — make each response SPECIFIC to "${idea}", not generic:
- joy:       Genuinely excited, warm, a little over the top, 2-3 sentences
- sadness:   Soft, gently melancholic, trailing off, 2-3 sentences
- anger:     Direct, one word in CAPS, takes it personally, 2-3 sentences
- fear:      Stammers with "...", catastrophizes from small to disaster, 2-3 sentences
- disgust:   Sarcastic, high standards, occasionally reveals she cares, 2 sentences
- anxiety:   Starts reasonable, spirals to 15-years-into-future by sentence 2, 2-3 sentences
- envy:      Compares to something/someone better, slightly bitter, 1-2 punchy sentences
- ennui:     Maximum flatness, minimum words, possibly one French word/phrase, 1-2 sentences
- embarrass: Gentle, mumbling, doesn't want to cause trouble, sweet underneath, 2 sentences

Be sharp and funny. Every response must feel unique to the specific idea.`;
}

/* ── Parse JSON from Gemini response ─────────────────────── */
function parseResponse(raw) {
  console.log("Gemini raw response:", raw); // open browser console (F12) to see this

  // Strip markdown fences — Gemini adds these even when told not to
  let cleaned = raw.replace(/```json/gi, '').replace(/```/g, '').trim();

  // Extract just the JSON object if there's surrounding text
  const match = cleaned.match(/\{[\s\S]*\}/);
  if (match) cleaned = match[0];

  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.error("JSON parse failed. Cleaned text:", cleaned);
    return null;
  }
}

/* ── Reset everything ────────────────────────────────────── */
function resetAll() {
  CHARS.forEach(ch => { delete responses[ch.id]; });
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('loaded'));
  document.getElementById('go-btn').disabled = false;
  document.getElementById('idea-input').value = '';
  document.getElementById('reset-btn').classList.remove('show');
  document.getElementById('hq').classList.remove('visible');
  isLoading = false;
}

/* ── Utility ─────────────────────────────────────────────── */
function escHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
