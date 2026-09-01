'use client'

import { motion } from 'motion/react'
import { fadeUp, viewport } from '../lib/motion'
import { useReducedMotion } from '../lib/hooks'

/**
 * Scroll-reveal used sparingly, to guide the eye down a long argument.
 * Under prefers-reduced-motion it renders plain content — no transform at all.
 */
export default function Reveal({
  as = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}: {
  as?: keyof React.JSX.IntrinsicElements
  delay?: number
  className?: string
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLElement>) {
  const reduced = useReducedMotion()
  const Tag = (motion as unknown as Record<string, typeof motion.div>)[as] ?? motion.div

  if (reduced) {
    const Plain = as
    return (
      <Plain className={className} {...(rest as Record<string, unknown>)}>
        {children}
      </Plain>
    )
  }

  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </Tag>
  )
}
