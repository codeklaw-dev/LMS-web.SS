/**
 * Motion vocabulary — ported unchanged from the SPA (§4.5).
 * 150–250ms, ease-out on enter. Scroll-reveal guides, it does not perform.
 */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
}

/** Shared viewport config so every reveal fires at the same point. */
export const viewport = { once: true, amount: 0.25, margin: '0px 0px -80px 0px' }
