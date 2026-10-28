'use client'
import { motion, useReducedMotion } from 'framer-motion'

export default function SlideOnScroll({ children, direction = 'left', className, delay = 0 }) {
    const reduceMotion = useReducedMotion()
    const horizontal = direction === 'left' || direction === 'right'
    const offset = direction === 'left' || direction === 'top' ? -24 : 24
    const hidden = horizontal ? { opacity: 0, x: offset } : { opacity: 0, y: offset }

    return (
        <motion.div
            className={className}
            initial={reduceMotion ? false : hidden}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay, ease: [0.2, 0.8, 0.2, 1] }}
        >
            {children}
        </motion.div>
    )
}
