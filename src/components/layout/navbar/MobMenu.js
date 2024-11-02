"use client"
import { CloseSvg } from '@/assets/svgs';
import HamburgerSvg from '@/assets/svgs/HamburgerSvg';
import navLinks from '@/constants/nav.constants';
import React, { useRef, useState } from 'react'
import useClickOutside from '@/utils/clickOutside'
import Link from 'next/link';

const MobMenu = () => {
    const navRef = useRef();
    const [showMenu , setShowMenu] = useState(false)

    useClickOutside(navRef , () => setShowMenu(false))

    return (
        <div>
            <button onClick={() => setShowMenu(true)}>
                <HamburgerSvg />
            </button>
            <div
                ref={navRef}
                style={{
                    height: showMenu ? `250px` : '0px',
                    overflow: 'hidden',
                    transition: 'height 0.3s ease',
                }}
                className='bg-secondary fixed top-0 left-0 w-full flex items-center justify-center flex-col gap-4 z-[999] text-pure'
            >
                <button
                    className='absolute top-3 right-3 hover:opacity-85'
                    onClick={() => setShowMenu(false)}
                >
                    <CloseSvg />
                </button>
                <ul className='flex flex-col items-center gap-4'>
                    {
                        navLinks.map(item => (
                            <li key={item.id} className='hover:text-primary'>
                                <Link 
                                href={item.path} 
                                onClick={() => setShowMenu(false)}
                                >
                                    {item?.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default MobMenu