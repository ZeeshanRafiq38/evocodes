import logo from '@/assets/svgs/logo.svg'
import navLinks from '@/constants/nav.constants'
import Link from 'next/link'
import React from 'react'
import NavContainer from './NavContainer'
import MobMenu from './MobMenu'
import Image from 'next/image'
import ServicesDropdown from './ServicesDropdown'

const Navbar = () => {
    return (
        <NavContainer>
            <nav className='lg:px-0 px-3 sticky top-0 z-50'>
                <div className='container sm:py-4 py-2 flex items-center justify-between gap-4'>
                    <h3 className='text-2xl font-semibold'>
                        <Link href='/'>
                            <Image
                                src={logo}
                                alt='Vaforus'
                                className='w-[120px] md:w-[160px] h-auto'
                                priority
                            />
                        </Link>
                    </h3>
                    <ul className='xl:flex hidden items-center gap-6 text-dark '>
                        {
                            navLinks?.map(item => (
                                <li key={item.id} className='nav-link'>
                                    {item.name === 'Services' ? <ServicesDropdown /> : <Link href={item.path}>
                                        {item.name}
                                    </Link>}
                                </li>
                            ))
                        }
                    </ul>
                    <div className='xl:flex hidden items-center gap-4'>
                        <a 
                        href='#discovery-call'
                        className="btn-primary py-3 w-spacing-sm px-6 font-clash tracking-widest text-sm font-medium">
                            15-MINUTE DISCOVERY CALL
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
