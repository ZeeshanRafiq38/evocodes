import { DarkLogoSvg } from '@/assets/svgs'
import navLinks from '@/constants/nav.constants'
import Link from 'next/link'
import React from 'react'
import NavContainer from './NavContainer'
import MobMenu from './MobMenu'

const Navbar = () => {
    return (
        <NavContainer>
            <nav className='lg:px-0 px-3 sticky top-0 z-50'>
                <div className='container sm:py-4 py-2 flex items-center justify-between gap-4'>
                    <h3 className='text-2xl font-semibold'>
                        <Link href='/'>
                            <DarkLogoSvg className={'sm:w-[160px] w-[120px]'} />
                        </Link>
                    </h3>
                    <ul className='md:flex hidden items-center gap-10 text-dark '>
                        {
                            navLinks?.map(item => (
                                <li key={item.id} className='nav-link'>
                                    <Link href={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='md:flex hidden items-center gap-4'>
                        <button className="btn-primary py-3 w-spacing-sm px-6 font-clash tracking-widest text-sm font-medium">
                            15-MINUTE DISCOVERY CALL
                        </button>
                    </div>
                    <div className="md:hidden block">
                        <MobMenu />
                    </div>
                </div>
            </nav>
        </NavContainer>
    )
}

export default Navbar