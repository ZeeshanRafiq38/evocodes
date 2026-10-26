"use client"
import { CloseSvg } from '@/assets/svgs';
import HamburgerSvg from '@/assets/svgs/HamburgerSvg';
import navLinks from '@/constants/nav.constants';
import React, { useEffect, useRef, useState } from 'react'
import useClickOutside from '@/utils/clickOutside'
import Link from 'next/link';
import ServicesDropdown from './ServicesDropdown';
import app from '@/constants/app.constants';

const MobMenu = () => {
    const navRef = useRef();
    const triggerRef = useRef();
    const [showMenu , setShowMenu] = useState(false)

    useClickOutside(navRef , () => setShowMenu(false))

    useEffect(() => {
        if (!showMenu) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        navRef.current?.querySelector('button')?.focus();
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setShowMenu(false);
            }
            if (event.key === 'Tab') {
                const elements = Array.from(navRef.current.querySelectorAll('a[href], button'))
                    .filter(element => element.tabIndex >= 0 && element.getClientRects().length && !element.closest('[aria-hidden="true"]'));
                const first = elements[0];
                const last = elements[elements.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last?.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first?.focus();
                }
            }
        };
        const desktop = window.matchMedia('(min-width: 1280px)');
        const onResize = () => { if (desktop.matches) setShowMenu(false); };
        document.addEventListener('keydown', onKeyDown);
        desktop.addEventListener('change', onResize);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', onKeyDown);
            desktop.removeEventListener('change', onResize);
            triggerRef.current?.focus();
        };
    }, [showMenu]);

    return (
        <div>
            <button ref={triggerRef} className='w-11 h-11 flex items-center justify-center rounded hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary' aria-label='Open navigation' aria-controls='mobile-navigation' aria-haspopup='dialog' aria-expanded={showMenu} onClick={() => setShowMenu(true)}>
                <HamburgerSvg />
            </button>
            <div
                id='mobile-navigation'
                role='dialog'
                aria-modal={showMenu ? true : undefined}
                aria-label='Navigation menu'
                aria-hidden={!showMenu}
                ref={navRef}
                style={{
                    maxHeight: showMenu ? '85dvh' : '0px',
                    visibility: showMenu ? 'visible' : 'hidden',
                    overflowY: 'auto',
                }}
                className='bg-secondary fixed top-0 left-0 w-full flex items-center flex-col gap-4 z-[999] text-pure motion-safe:transition-[max-height,visibility] motion-safe:duration-300'
            >
                <button
                    aria-label='Close navigation'
                    className='absolute top-3 right-3 w-11 h-11 flex items-center justify-center rounded hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
                    onClick={() => setShowMenu(false)}
                >
                    <CloseSvg />
                </button>
                <ul className='flex flex-col gap-1 pt-16 pb-3 px-6 w-full max-w-lg text-left'>
                    {
                        navLinks.map(item => (
                            <li key={item.id} className='w-full min-w-0'>
                                {item.name === 'Services' ? <ServicesDropdown mobile onNavigate={() => setShowMenu(false)} /> : <Link 
                                href={item.path} 
                                className='flex items-center min-h-11 px-3 py-2 rounded hover:bg-white/10 hover:text-orange-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
                                onClick={() => setShowMenu(false)}
                                >
                                    {item?.name}
                                </Link>}
                            </li>
                        ))
                    }
                </ul>
                <div className='w-full max-w-lg px-9 pb-8'>
                    <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' onClick={() => setShowMenu(false)} className='btn-primary w-full px-5 py-3.5 text-sm font-medium'>Book a 15-Minute Discovery Call</a>
                </div>

            </div>
        </div>
    )
}

export default MobMenu
