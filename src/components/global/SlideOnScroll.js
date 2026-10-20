// components/SlideInOnScroll.js
"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function SlideOnScroll({ children, direction = "left", className }) {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    observer.unobserve(ref.current); // Stop observing after the first animation
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasAnimated]);

    // Animation settings based on direction
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
            y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
        },
        visible: { opacity: 1, x: 0, y: 0 },
    };

    return (
        <motion.div
            className={className}
            ref={ref}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.75 , ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
