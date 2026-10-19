'use client';
import React, { useEffect, useRef, useState } from 'react'

const NavContainer = ({ children }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const navRef = useRef(null);

    useEffect(() => {
        const navbar = navRef.current;
        if (!navbar) return;

        const measure = () => setNavHeight(navbar.getBoundingClientRect().height);
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(navbar);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={isSticky ? { height: navHeight } : undefined}>
            <div ref={navRef} className={`transition-shadow duration-300 ${isSticky ? 'fixed top-0 left-0 w-full shadow-md bg-white z-50' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default NavContainer
