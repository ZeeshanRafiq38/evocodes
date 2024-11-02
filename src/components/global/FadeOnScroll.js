// components/AnimateOnScroll.js
"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function FadeOnScroll({ children }) {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false); // Track animation status

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    observer.unobserve(ref.current); // Stop observing after first animation
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 , y : 50 }}
            animate={hasAnimated ? { opacity: 1 , y : 0 } : {}}
            transition={{ duration: 0.75, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
