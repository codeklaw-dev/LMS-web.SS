/**
 * Scopes a stylesheet under `.landing` so the landing page's hand-written CSS
 * cannot collide with the platform's Tailwind/shadcn token layer when the
 * route tree is dropped into apps/web.
 *
 * Rules:
 *   :root                    -> .landing
 *   :root[data-theme="dark"] -> .landing[data-theme="dark"]
 *   html / body              -> .landing
 *   body[data-menu-open=..]  -> .landing[data-menu-open=..]
 *   * , *::before            -> .landing *, .landing *::before
 *   .foo, h1, a              -> .landing .foo, .landing h1, .landing a
 * At-rules (@media, @supports) are walked into; @keyframes bodies are not.
 */
import { readFileSync, writeFileSync } from 'node:fs'

const SKIP_AT = /^@(keyframes|font-face|property|import|charset|layer\s*[^{]*;)/i

function scopeSelector(sel) {
  const s = sel.trim()
  if (!s || s.startsWith('%')) return s
  if (s.startsWith('.landing')) return s
  if (s === ':root') return '.landing'
  if (s.startsWith(':root')) return '.landing' + s.slice(':root'.length)
  if (s === 'html' || s === 'body') return '.landing'
  if (s.startsWith('html[') || s.startsWith('html.')) return '.landing' + s.slice(4)
  if (s.startsWith('body[') || s.startsWith('body.')) return '.landing' + s.slice(4)
  if (s.startsWith('html ')) return '.landing ' + s.slice(5)
  if (s.startsWith('body ')) return '.landing ' + s.slice(5)
  if (s.startsWith('::selection')) return '.landing ::selection'
  if (s.startsWith(':focus')) return '.landing ' + s
  return '.landing ' + s
}

function transform(css) {
  let out = ''
  let i = 0
  const len = css.length

  function block(endAtBrace) {
    while (i < len) {
      // whitespace + comments pass through
      const ch = css[i]
      if (ch === '}' && endAtBrace) { out += css[i++]; return }
      if (ch === '/' && css[i + 1] === '*') {
        const end = css.indexOf('*/', i)
        out += css.slice(i, end + 2)
        i = end + 2
        continue
      }
      if (/\s/.test(ch)) { out += css[i++]; continue }
      if (ch === '@') {
        // at-rule
        let j = i
        while (j < len && css[j] !== '{' && css[j] !== ';') j++
        const prelude = css.slice(i, j)
        if (css[j] === ';') { out += css.slice(i, j + 1); i = j + 1; continue }
        out += prelude + '{'
        i = j + 1
        if (SKIP_AT.test(prelude.trim())) {
          // copy raw until matching close
          let depth = 1
          while (i < len && depth > 0) {
            if (css[i] === '{') depth++
            else if (css[i] === '}') depth--
            if (depth === 0) { out += css[i++]; break }
            out += css[i++]
          }
        } else {
          block(true)
        }
        continue
      }
      // rule: read selector list
      let j = i
      while (j < len && css[j] !== '{' && css[j] !== '}') j++
      if (j >= len) { out += css.slice(i); i = len; return }
      const selectors = css.slice(i, j)
      const scoped = selectors
        .split(',')
        .map((part) => {
          const lead = part.match(/^\s*/)[0]
          const trail = part.match(/\s*$/)[0]
          return lead + scopeSelector(part) + trail
        })
        .join(',')
      out += scoped + '{'
      i = j + 1
      // copy declarations (no nesting expected in these files)
      let depth = 1
      while (i < len && depth > 0) {
        if (css[i] === '{') depth++
        else if (css[i] === '}') { depth--; if (depth === 0) { out += css[i++]; break } }
        out += css[i++]
      }
    }
  }

  block(false)
  return out
}

const file = process.argv[2]
const out = process.argv[3]
const result = transform(readFileSync(file, 'utf8'))
if (out) {
  writeFileSync(out, result)
} else {
  process.stdout.write(result)
}
