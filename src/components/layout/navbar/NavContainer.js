'use client';
import React, { useEffect, useState } from 'react'

const NavContainer = ({ children }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 w-full shadow-md bg-white z-50' : ''}`}>
            {children}
        </div>
    )
}

export default NavContainer