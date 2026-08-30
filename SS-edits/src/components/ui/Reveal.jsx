import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../lib/motion';
import { useReducedMotion } from '../../lib/hooks';

/**
 * Scroll-reveal used sparingly, to guide the eye down a long argument.
 * Under prefers-reduced-motion it renders plain content — no transform at all.
 */
export default function Reveal({ as = 'div', delay = 0, className = '', children, ...rest }) {
  const reduced = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  if (reduced) {
    const Plain = as;
    return <Plain className={className} {...rest}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
