'use client'
import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

// Counts from 0 to `value` the first time it scrolls into view. Server render shows the final number.
export default function CountUp({ value, suffix = '' }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.6 })
    const reduceMotion = useReducedMotion()
    const [display, setDisplay] = useState(value)
    const started = useRef(false)

    useEffect(() => {
        if (!inView || reduceMotion || started.current) return
        started.current = true
        const controls = animate(0, value, {
            duration: 1.4,
            ease: [0.2, 0.8, 0.2, 1],
            onUpdate: latest => setDisplay(Math.round(latest)),
        })
        return () => controls.stop()
    }, [inView, reduceMotion, value])

    return <span ref={ref} className='tabular-nums'>{display}{suffix}</span>
}
