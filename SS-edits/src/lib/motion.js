/**
 * Motion vocabulary — Blueprint §4.5.
 * 150–250ms, ease-out on enter. Scroll-reveal guides, it does not perform.
 * If a motion can be removed without losing meaning, it is not here.
 */

export const EASE_OUT = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: EASE_OUT } },
};

/** Parent that staggers its children into view. */
export const stagger = (delayChildren = 0, staggerChildren = 0.07) => ({
  hidden: {},
  visible: { transition: { delayChildren, staggerChildren } },
});

/** Shared viewport config so every reveal fires at the same point. */
export const viewport = { once: true, amount: 0.25, margin: '0px 0px -80px 0px' };
