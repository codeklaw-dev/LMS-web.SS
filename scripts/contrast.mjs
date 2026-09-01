/**
 * WCAG contrast audit for the landing token layer.
 * Recomputes every pair the design relies on and fails (exit 1) if any
 * text pair drops below 4.5:1 (or 3:1 for the non-text pairs marked as such).
 *
 * Usage: node scripts/contrast.mjs
 */
const lum = (hex) => {
  const h = hex.replace('#', '')
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const ratio = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x)
  return (l1 + 0.05) / (l2 + 0.05)
}

const PAIRS = [
  // -- light mode -------------------------------------------------------
  ['#320B35 on #ECE9BE (text/ground)', '#320B35', '#ECE9BE', 4.5],
  ['#5C3A5E on #ECE9BE (muted/ground)', '#5C3A5E', '#ECE9BE', 4.5],
  ['#6F5A72 on #ECE9BE (subtle/ground)', '#6F5A72', '#ECE9BE', 4.5],
  ['#320B35 on #F3F1CE (text/elevated)', '#320B35', '#F3F1CE', 4.5],
  ['#320B35 on #E4E1B0 (text/inset)', '#320B35', '#E4E1B0', 4.5],
  ['#6D28D9 on #ECE9BE (accent text/ground)', '#6D28D9', '#ECE9BE', 4.5],
  ['#5B21B6 on #EFE4F1 (trust-700/trust-100)', '#5B21B6', '#EFE4F1', 4.5],
  ['#43124A on #EFE4F1 (warm-700/warm-100)', '#43124A', '#EFE4F1', 4.5],
  ['#F6F4DA on #320B35 (band-text/band)', '#F6F4DA', '#320B35', 4.5],
  ['#C084FC on #2A0930 (uv-300/cta gradient dark end)', '#C084FC', '#2A0930', 4.5],
  ['#F6F4DA on #6D28D9 (btn label/gradient light end)', '#F6F4DA', '#6D28D9', 4.5],
  // -- dark mode --------------------------------------------------------
  ['#ECE9BE on #320B35 (text/ground)', '#ECE9BE', '#320B35', 4.5],
  ['#C4B8C6 on #320B35 (muted/ground)', '#C4B8C6', '#320B35', 4.5],
  ['#A899AB on #320B35 (subtle/ground)', '#A899AB', '#320B35', 4.5],
  ['#ECE9BE on #3C1440 (text/elevated)', '#ECE9BE', '#3C1440', 4.5],
  ['#C084FC on #320B35 (accent text/ground)', '#C084FC', '#320B35', 4.5],
  ['#C084FC on #3C1440 (accent text/elevated)', '#C084FC', '#3C1440', 4.5],
  ['#250826 on #A855F7 (btn label/gradient light end)', '#250826', '#A855F7', 4.5],
  ['#250826 on #A855F7 (legacy: dark btn gradient end)', '#250826', '#A855F7', 4.5],
  ['#320B35 on #C084FC (btn label/fill, dark)', '#320B35', '#C084FC', 4.5],
  ['#D8B4FE on #320B35 (trust-300/ground)', '#D8B4FE', '#320B35', 4.5],
  ['#E4E1B0 on #320B35 (warm-300/ground)', '#E4E1B0', '#320B35', 4.5],
]

// Hairline separators are decorative: separation is carried by the section
// rhythm (negative space first, per the design system), so they are exempt
// from WCAG 1.4.11 — logged for reference, never gating.
const DECORATIVE = [
  ['#4A2050 border on #320B35 (dark hairline)', '#4A2050', '#320B35'],
  ['#D9D5A8 border on #ECE9BE (light hairline)', '#D9D5A8', '#ECE9BE'],
]

let failed = 0
for (const [label, fg, bg, floor] of PAIRS) {
  const r = ratio(fg, bg)
  const ok = r >= floor
  if (!ok) failed++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2).padStart(6)}  (≥${floor})  ${label}`)
}
for (const [label, fg, bg] of DECORATIVE) {
  console.log(`INFO  ${ratio(fg, bg).toFixed(2).padStart(6)}  (decorative, exempt)  ${label}`)
}
console.log(failed ? `\n${failed} pair(s) failed` : '\nAll pairs pass')
process.exit(failed ? 1 : 0)
