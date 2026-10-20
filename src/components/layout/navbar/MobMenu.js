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
            <button aria-label='Open navigation' aria-expanded={showMenu} onClick={() => setShowMenu(true)}>
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
                <ul className='flex flex-col items-center gap-4 py-12 px-6 w-full'>
                    {
                        navLinks.map(item => (
                            <li key={item.id} className='hover:text-primary'>
                                {item.name === 'Services' ? <ServicesDropdown mobile onNavigate={() => setShowMenu(false)} /> : <Link 
                                href={item.path} 
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
