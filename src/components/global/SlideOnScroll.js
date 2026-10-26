'use client'
import { motion, useReducedMotion } from 'framer-motion'

export default function SlideOnScroll({ children, direction = 'left', className }) {
    const reduceMotion = useReducedMotion()
    const horizontal = direction === 'left' || direction === 'right'
    const offset = direction === 'left' || direction === 'top' ? -16 : 16

    return (
        <motion.div
            className={className}
            initial={false}
            whileInView={reduceMotion ? undefined : horizontal ? { x: [offset, 0] } : { y: [offset, 0] }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}
