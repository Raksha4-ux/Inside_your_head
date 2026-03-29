// characters.js — all 9 emotion characters with their SVG avatars

const CHARS = [
  {
    id: 'joy',
    name: 'Joy',
    emotion: 'HAPPINESS',
    color: '#FFD600',
    svg: `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="45" cy="61" rx="22" ry="25" fill="#FFE066"/>
      <circle cx="45" cy="34" r="22" fill="#FFE066"/>
      <ellipse cx="45" cy="13" rx="19" ry="9" fill="#5EC8F5"/>
      <ellipse cx="29" cy="18" rx="10" ry="7" fill="#5EC8F5"/>
      <ellipse cx="61" cy="18" rx="10" ry="7" fill="#5EC8F5"/>
      <ellipse cx="38" cy="33" rx="4.2" ry="4.8" fill="#fff"/>
      <ellipse cx="52" cy="33" rx="4.2" ry="4.8" fill="#fff"/>
      <circle cx="39" cy="34" r="2.4" fill="#3a3000"/>
      <circle cx="53" cy="34" r="2.4" fill="#3a3000"/>
      <circle cx="40.2" cy="32.8" r="0.9" fill="#fff"/>
      <circle cx="54.2" cy="32.8" r="0.9" fill="#fff"/>
      <path d="M33 42 Q45 52 57 42" stroke="#3a3000" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <text x="8"  y="22" font-size="11" fill="#FFD600">✦</text>
      <text x="68" y="18" font-size="9"  fill="#FFD600">✦</text>
      <text x="12" y="54" font-size="8"  fill="#fff" opacity="0.8">★</text>
    </svg>`
  },
  {
    id: 'sadness',
    name: 'Sadness',
    emotion: 'MELANCHOLY',
    color: '#5B9BD5',
    svg: `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="45" cy="62" rx="20" ry="24" fill="#5B9BD5"/>
      <rect x="25" y="58" width="40" height="7" rx="2" fill="#4A88C5"/>
      <ellipse cx="45" cy="34" rx="20" ry="22" fill="#7EBDE8"/>
      <path d="M28 28 Q28 10 45 10 Q62 10 62 28" fill="#2C5F8A"/>
      <rect x="28" y="20" width="34" height="10" rx="2" fill="#2C5F8A"/>
      <rect x="30" y="30" width="12" height="9" rx="4" stroke="#fff" stroke-width="2" fill="rgba(255,255,255,0.12)"/>
      <rect x="47" y="30" width="12" height="9" rx="4" stroke="#fff" stroke-width="2" fill="rgba(255,255,255,0.12)"/>
      <line x1="42" y1="34.5" x2="47" y2="34.5" stroke="#fff" stroke-width="1.5"/>
      <circle cx="36" cy="34.5" r="2" fill="#1A4A7A"/>
      <circle cx="53" cy="34.5" r="2" fill="#1A4A7A"/>
      <path d="M36 43 Q45 39 54 43" stroke="#1A4A7A" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <ellipse cx="36" cy="46" rx="1.5" ry="2.8" fill="#5B9BD5" opacity="0.9"/>
    </svg>`
  },
  {
    id: 'anger',
    name: 'Anger',
    emotion: 'RAGE',
    color: '#E8412A',
    svg: `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="52" width="46" height="35" rx="6" fill="#C0260F"/>
      <polygon points="45,57 42,70 45,67 48,70" fill="#fff" opacity="0.85"/>
      <rect x="20" y="20" width="50" height="38" rx="8" fill="#E8412A"/>
      <path d="M32 20 Q36 7 45 13 Q52 3 58 20" fill="#FF8C00" opacity="0.95"/>
      <path d="M38 20 Q41 11 45 15 Q49 11 52 20" fill="#FFD600"/>
      <path d="M22 28 L38 35" stroke="#6a0000" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M52 35 L68 28" stroke="#6a0000" stroke-width="3.5" stroke-linecap="round"/>
      <ellipse cx="34" cy="38" rx="5.5" ry="4" fill="#fff"/>
      <ellipse cx="56" cy="38" rx="5.5" ry="4" fill="#fff"/>
      <circle cx="34" cy="38" r="2.2" fill="#6a0000"/>
      <circle cx="56" cy="38" r="2.2" fill="#6a0000"/>
      <path d="M31 49 L45 45 L59 49" stroke="#6a0000" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </svg>`
  },
  {
    id: 'fear',
    name: 'Fear',
    emotion: 'ANXIETY',
    color: '#9B59B6',
    svg: `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="45" cy="64" rx="14" ry="22" fill="#9B59B6"/>
      <polygon points="38,53 44,57 38,61" fill="#7D3C98"/>
      <polygon points="52,53 46,57 52,61" fill="#7D3C98"/>
      <circle cx="45" cy="57" r="2.8" fill="#BCA0D0"/>
      <rect x="41" y="40" width="8" height="9" rx="2" fill="#BCA0D0"/>
      <ellipse cx="45" cy="28" rx="18" ry="20" fill="#BCA0D0"/>
      <ellipse cx="45" cy="10" rx="14" ry="7" fill="#7D3C98"/>
      <ellipse cx="37" cy="27" rx="6.5" ry="7.5" fill="#fff"/>
      <ellipse cx="53" cy="27" rx="6.5" ry="7.5" fill="#fff"/>
      <circle cx="37" cy="28" r="3.2" fill="#4A0080"/>
      <circle cx="53" cy="28" r="3.2" fill="#4A0080"/>
      <circle cx="38.2" cy="26.5" r="1.2" fill="#fff"/>
      <circle cx="54.2" cy="26.5" r="1.2" fill="#fff"/>
      <path d="M36 38 Q45 36 54 38" stroke="#7D3C98" stroke-width="2" stroke-linecap="round" fill="none"/>
      <ellipse cx="63" cy="20" rx="2" ry="3.2" fill="#BCA0D0" opacity="0.7"/>
    </svg>`
  },
  {
    id: 'disgust',
    name: 'Disgust',
    emotion: 'CONTEMPT',
    color: '#27AE60',
    svg: `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="45" cy="62" rx="20" ry="24" fill="#27AE60"/>
      <path d="M25 60 Q45 73 65 60" stroke="#1A8A48" stroke-width="2" fill="none"/>
      <ellipse cx="45" cy="32" rx="19" ry="22" fill="#A8E6C0"/>
      <path d="M26 27 Q28 9 45 11 Q62 9 64 27" fill="#1A8A48"/>
      <path d="M26 27 Q21 18 30 14" fill="#1A8A48"/>
      <path d="M64 27 Q69 18 60 14" fill="#1A8A48"/>
      <path d="M31 24 Q37 19 42 23" stroke="#0A5A28" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M48 23 Q53 19 59 24" stroke="#0A5A28" stroke-width="2" stroke-linecap="round" fill="none"/>
      <ellipse cx="37" cy="30" rx="5" ry="4.2" fill="#fff"/>
      <ellipse cx="53" cy="30" rx="5" ry="4.2" fill="#fff"/>
      <path d="M32 28 Q37 26 42 28" stroke="#0A5A28" stroke-width="2" fill="none"/>
      <path d="M48 28 Q53 26 58 28" stroke="#0A5A28" stroke-width="2" fill="none"/>
      <ellipse cx="37" cy="31" rx="3" ry="2.5" fill="#0A5A28"/>
      <ellipse cx="53" cy="31" rx="3" ry="2.5" fill="#0A5A28"/>
      <path d="M36 41 Q45 38 54 41" stroke="#0A5A28" stroke-width="2.2" stroke-linecap="round" fill="none"/>
    </svg>`
  },
  {
    id: 'anxiety',
    name: 'Anxiety',
    emotion: 'SPIRAL',
    color: '#FF7C2A',
    svg: `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="45" cy="62" rx="19" ry="22" fill="#FF7C2A"/>
      <path d="M34 50 Q45 56 56 50" stroke="#D45A0A" stroke-width="2" fill="none"/>
      <ellipse cx="45" cy="33" rx="20" ry="21" fill="#FFB07A"/>
      <path d="M25 30 Q20 14 33 11 Q39 7 45 9 Q51 7 57 11 Q70 14 65 30" fill="#E8681A"/>
      <circle cx="26" cy="21" r="5.5" fill="#E8681A"/>
      <circle cx="64" cy="21" r="5.5" fill="#E8681A"/>
      <circle cx="33" cy="13" r="4.5" fill="#E8681A"/>
      <circle cx="57" cy="13" r="4.5" fill="#E8681A"/>
      <ellipse cx="37" cy="32" rx="5.5" ry="6.2" fill="#fff"/>
      <ellipse cx="53" cy="32" rx="5.5" ry="6.2" fill="#fff"/>
      <circle cx="37" cy="33" r="3" fill="#7A3000"/>
      <circle cx="53" cy="33" r="3" fill="#7A3000"/>
      <circle cx="38.2" cy="31.5" r="1.2" fill="#fff"/>
      <circle cx="54.2" cy="31.5" r="1.2" fill="#fff"/>
      <path d="M30 25 Q37 22 42 26" stroke="#7A3000" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M48 26 Q53 22 60 25" stroke="#7A3000" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M36 42 Q40 40 45 41 Q50 40 54 42" stroke="#7A3000" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <path d="M65 26 Q70 21 67 17" stroke="#FF7C2A" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6"/>
      <path d="M67 23 Q72 22 70 18" stroke="#FF7C2A" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5"/>
    </svg>`
  },
  {
    id: 'envy',
    name: 'Envy',
    emotion: 'WANTING',
    color: '#1ABC9C',
    svg: `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="45" cy="65" rx="16" ry="21" fill="#1ABC9C"/>
      <circle cx="45" cy="36" r="19" fill="#3DD6B5"/>
      <path d="M26 32 Q30 13 45 15 Q60 13 64 32" fill="#0E9278"/>
      <path d="M45 15 L43 7 L45 5 L47 7 Z" fill="#0E9278"/>
      <ellipse cx="37" cy="35" rx="5.2" ry="3.8" fill="#fff"/>
      <ellipse cx="53" cy="35" rx="5.2" ry="3.8" fill="#fff"/>
      <path d="M32 29 Q37 26 41 30" stroke="#0A4A38" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <path d="M49 30 Q53 26 58 29" stroke="#0A4A38" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <ellipse cx="37" cy="36" rx="3" ry="2.2" fill="#0A4A38"/>
      <ellipse cx="53" cy="36" rx="3" ry="2.2" fill="#0A4A38"/>
      <path d="M37 44 Q45 42 53 44" stroke="#0A4A38" stroke-width="2" stroke-linecap="round" fill="none"/>
      <circle cx="26" cy="58" r="4.2" fill="#3DD6B5"/>
      <circle cx="64" cy="58" r="4.2" fill="#3DD6B5"/>
    </svg>`
  },
  {
    id: 'ennui',
    name: 'Ennui',
    emotion: 'BOREDOM',
    color: '#7070C8',
    svg: `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="52" width="30" height="35" rx="4" fill="#3A3A7A"/>
      <rect x="55" y="60" width="10" height="17" rx="2" fill="#1A1A3A"/>
      <rect x="56.5" y="62" width="7" height="12" rx="1" fill="#4A90D9" opacity="0.65"/>
      <ellipse cx="45" cy="32" rx="17" ry="22" fill="#5A5AAA"/>
      <path d="M28 28 Q28 9 45 9 Q62 9 62 28" fill="#1A1A4A"/>
      <rect x="28" y="20" width="34" height="10" rx="2" fill="#1A1A4A"/>
      <ellipse cx="37" cy="32" rx="5.2" ry="4.2" fill="#fff"/>
      <ellipse cx="53" cy="32" rx="5.2" ry="4.2" fill="#fff"/>
      <path d="M32 29.5 Q37 27.5 42 29.5" stroke="#1A1A4A" stroke-width="3.2" fill="none"/>
      <path d="M48 29.5 Q53 27.5 58 29.5" stroke="#1A1A4A" stroke-width="3.2" fill="none"/>
      <circle cx="37" cy="33" r="2.6" fill="#1A1A4A"/>
      <circle cx="53" cy="33" r="2.6" fill="#1A1A4A"/>
      <line x1="36" y1="41.5" x2="54" y2="41.5" stroke="#1A1A4A" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'embarrass',
    name: 'Embarrassment',
    emotion: 'MORTIFIED',
    color: '#E91E8C',
    svg: `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="45" cy="63" rx="26" ry="26" fill="#E91E8C"/>
      <circle cx="45" cy="33" r="24" fill="#F48FB1"/>
      <circle cx="29" cy="38" r="7.5" fill="#E91E8C" opacity="0.38"/>
      <circle cx="61" cy="38" r="7.5" fill="#E91E8C" opacity="0.38"/>
      <ellipse cx="37" cy="32" rx="4.8" ry="5.2" fill="#fff"/>
      <ellipse cx="53" cy="32" rx="4.8" ry="5.2" fill="#fff"/>
      <ellipse cx="37" cy="34" rx="2.6" ry="2.6" fill="#7A0040"/>
      <ellipse cx="53" cy="34" rx="2.6" ry="2.6" fill="#7A0040"/>
      <path d="M39 10 Q45 5 51 10 Q48 7.5 45 9 Q42 7.5 39 10" fill="#C2185B"/>
      <path d="M37 43 Q45 47 53 43" stroke="#7A0040" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <ellipse cx="45" cy="45" rx="10" ry="5.5" fill="#F48FB1" opacity="0.65"/>
      <ellipse cx="45" cy="44.5" rx="7.5" ry="3.8" fill="#FBBFD6"/>
    </svg>`
  }
];
