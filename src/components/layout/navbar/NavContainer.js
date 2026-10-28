'use client';
import React, { useEffect, useState } from 'react'

const NavContainer = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div data-scrolled={scrolled} className='group/nav relative'>
            {/* Blur lives on its own layer: backdrop-filter on an ancestor would trap the fixed mobile menu. */}
            <div aria-hidden='true' className={`absolute inset-0 -z-10 transition-[box-shadow,background-color] duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-[0_6px_24px_rgba(24,34,48,0.08)]' : 'bg-white'}`} />
            {children}
        </div>
    )
}

export default NavContainer
