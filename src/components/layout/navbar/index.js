import logo from '@/assets/svgs/logo.svg'
import navLinks from '@/constants/nav.constants'
import Link from 'next/link'
import React from 'react'
import NavContainer from './NavContainer'
import NavLink from './NavLink'
import MobMenu from './MobMenu'
import Image from 'next/image'
import ServicesDropdown from './ServicesDropdown'
import app from '@/constants/app.constants'

const Navbar = () => {
    return (
        <NavContainer>
            <nav aria-label='Main navigation' className='lg:px-0 px-3 border-b border-gray-100'>
                <div className='container sm:py-4 py-2 sm:group-data-[scrolled=true]/nav:py-2.5 transition-[padding] duration-300 flex items-center justify-between gap-4'>
                    <Link href='/' className='shrink-0'>
                        <Image
                            src={logo}
                            alt='Vaforus'
                            className='w-[120px] md:w-[160px] md:group-data-[scrolled=true]/nav:w-[140px] transition-[width] duration-300 h-auto'
                            priority
                        />
                    </Link>
                    <ul className='xl:flex hidden items-center gap-7 text-dark '>
                        {
                            navLinks?.map(item => (
                                <li key={item.id} className='nav-link'>
                                    {item.name === 'Services' ? <ServicesDropdown /> : <NavLink href={item.path}>{item.name}</NavLink>}
                                </li>
                            ))
                        }
                    </ul>
                    <div className='xl:flex hidden items-center gap-4'>
                        <a
                        href={app.discoveryCallUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className="btn-primary py-3 px-6 text-[15px] font-medium">
                            {app.ctaLabel}
                        </a>
                    </div>
                    <div className="xl:hidden block">
                        <MobMenu />
                    </div>
                </div>
            </nav>
        </NavContainer>
    )
}

export default Navbar
