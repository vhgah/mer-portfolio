// Shared color palettes for Mer Mer portfolio.
// Palette "pdf" = main colors from the source PDF (soft pink–lilac pastel).
export const PALETTE_ORDER = ['pdf', 'terra', 'pop', 'mint'];

export const PALETTES = {
  pdf: {
    label: 'Hồng Pastel',
    note: 'Màu chính trong PDF gốc',
    swatch: ['#d65f93', '#b58fd6', '#7fa9e0', '#3a2535', '#fbeef4'],
    vars: {
      bg: '#fbeef4', bg2: '#f4e4ef', ink: '#3a2535',
      accent: '#d65f93', accent2: '#7fa9e0', accent3: '#8ed0c2',
      accent4: '#b58fd6', accent5: '#f2a6c4', 'accent-soft': '#f3c5da',
      muted: '#9a7d8e', line2: '#e6cfde',
      'on-dark': '#fbeef4', 'on-dark-muted': '#d6bccd',
      'ph-a': '#f1d9e7', 'ph-b': '#e8c9dc', 'ph-da': '#4a3343', 'ph-db': '#573a50',
    },
  },
  terra: {
    label: 'Terracotta',
    note: 'Đất nung ấm, kem cổ điển',
    swatch: ['#c4502e', '#d98b3a', '#7d9b80', '#2b201a', '#f6ede0'],
    vars: {
      bg: '#f6ede0', bg2: '#efe1cf', ink: '#2b201a',
      accent: '#c4502e', accent2: '#d98b3a', accent3: '#7d9b80',
      accent4: '#b5654a', accent5: '#e0967c', 'accent-soft': '#e9a98c',
      muted: '#7a6552', line2: '#d9bfa3',
      'on-dark': '#f6ede0', 'on-dark-muted': '#d8c6b3',
      'ph-a': '#efdcc7', 'ph-b': '#e7cdb2', 'ph-da': '#3a2d24', 'ph-db': '#473628',
    },
  },
  pop: {
    label: 'Pop Citrus',
    note: 'Rực rỡ, trẻ trung, nhiều màu',
    swatch: ['#ff5a3c', '#ffc14d', '#7cc7b5', '#2a1c2e', '#fff1e6'],
    vars: {
      bg: '#fff1e6', bg2: '#ffe7d6', ink: '#2a1c2e',
      accent: '#ff5a3c', accent2: '#ffc14d', accent3: '#7cc7b5',
      accent4: '#b94be0', accent5: '#ff8fb0', 'accent-soft': '#ffb59f',
      muted: '#7a6580', line2: '#f0d3bf',
      'on-dark': '#fff1e6', 'on-dark-muted': '#d7c6dd',
      'ph-a': '#ffd9c2', 'ph-b': '#ffc7ad', 'ph-da': '#3a2c3e', 'ph-db': '#48374e',
    },
  },
  mint: {
    label: 'Mint Fresh',
    note: 'Pastel mát, hiện đại tươi mới',
    swatch: ['#2f9e7e', '#f2a65a', '#6db5c9', '#1d2b27', '#eef6f0'],
    vars: {
      bg: '#eef6f0', bg2: '#e2efe6', ink: '#1d2b27',
      accent: '#2f9e7e', accent2: '#f2a65a', accent3: '#6db5c9',
      accent4: '#e08aa8', accent5: '#9cc456', 'accent-soft': '#8fd0bb',
      muted: '#6a8077', line2: '#cfe2d6',
      'on-dark': '#eef6f0', 'on-dark-muted': '#bcd3c6',
      'ph-a': '#dcebe1', 'ph-b': '#cee0d4', 'ph-da': '#19332b', 'ph-db': '#234a3e',
    },
  },
};

export function getPaletteKeyFromUrl() {
  try {
    const k = new URLSearchParams(location.search).get('p');
    return PALETTES[k] ? k : 'pdf';
  } catch (e) { return 'pdf'; }
}

export function applyPalette(el, key) {
  const p = PALETTES[key] || PALETTES.pdf;
  if (!el) return;
  for (const [k, v] of Object.entries(p.vars)) el.style.setProperty('--' + k, v);
}

// Build the literal default inline var string (palette 1) for instant first paint.
export function defaultVarString(key) {
  const p = PALETTES[key || 'pdf'] || PALETTES.pdf;
  return Object.entries(p.vars).map(([k, v]) => '--' + k + ':' + v).join(';');
}
