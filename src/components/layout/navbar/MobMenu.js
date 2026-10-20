"use client"
import { CloseSvg } from '@/assets/svgs';
import HamburgerSvg from '@/assets/svgs/HamburgerSvg';
import navLinks from '@/constants/nav.constants';
import React, { useRef, useState } from 'react'
import useClickOutside from '@/utils/clickOutside'
import Link from 'next/link';
import ServicesDropdown from './ServicesDropdown';

const MobMenu = () => {
    const navRef = useRef();
    const [showMenu , setShowMenu] = useState(false)

    useClickOutside(navRef , () => setShowMenu(false))

    return (
        <div>
            <button className='w-11 h-11 flex items-center justify-center' aria-label='Open navigation' aria-expanded={showMenu} onClick={() => setShowMenu(true)}>
                <HamburgerSvg />
            </button>
            <div
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
                    className='absolute top-3 right-3 hover:opacity-85'
                    onClick={() => setShowMenu(false)}
                >
                    <CloseSvg />
                </button>
                <ul className='flex flex-col gap-1 py-12 px-6 w-full max-w-lg text-left'>
                    {
                        navLinks.map(item => (
                            <li key={item.id} className='w-full min-w-0'>
                                {item.name === 'Services' ? <ServicesDropdown mobile onNavigate={() => setShowMenu(false)} /> : <Link 
                                href={item.path} 
                                className='flex items-center min-h-11 px-3 py-2 hover:text-primary transition-colors'
                                onClick={() => setShowMenu(false)}
                                >
                                    {item?.name}
                                </Link>}
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default MobMenu
