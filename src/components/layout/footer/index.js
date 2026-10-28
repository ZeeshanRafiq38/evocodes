import React from 'react'
import CircleGradientSvg from './CircleGradientSvg'
import Image from 'next/image'
import logoWhite from '@/assets/svgs/logoWhite.svg'
import navLinks from '@/constants/nav.constants'
import services from '@/constants/services.constants'
import Link from 'next/link'
import socialLinks from '@/constants/socialLinks.constants';
import ContactInfo from './ContactInfo'
import CookieSettingsButton from '@/components/legal/CookieSettingsButton'

const headingClass = 'text-lg font-semibold font-clash'
const linkClass = 'link-grow text-gray-200 hover:text-white'

const Footer = () => {
    return (
        <div className='site-footer relative bg-secondary text-pure overflow-hidden md:pt-20 sm:pt-12 pt-10 pb-8 px-5 xl:px-0'>
            <div className='container mx-auto relative z-10 grid gap-10 md:grid-cols-2 xl:grid-cols-[1.3fr_0.8fr_1.3fr_1.2fr]'>
                <div>
                    <Image src={logoWhite} alt='Vaforus' className='sm:w-[200px] w-[150px] h-auto' />
                    <p className='mt-6 text-gray-100 max-w-[300px]'>No empty promises, just results that speak for themselves.</p>
                    <ul className="mt-6 flex gap-4 text-sm">
                        {
                            socialLinks?.map(item => (
                                <li key={item.id}>
                                    <Link href={item.url} target='_blank' rel='noopener noreferrer' aria-label={item.name} className='social-icon text-gray-200'>
                                        <item.icon />
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <nav aria-label='Company'>
                    <h2 className={headingClass}>Company</h2>
                    <ul className="mt-3 flex flex-col text-sm">
                        {
                            navLinks?.filter(item => item.name !== 'Services').map(item => (
                                <li key={item.id}>
                                    <Link href={item.path}><span className={linkClass}>{item.name}</span></Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <nav aria-label='Services'>
                    <h2 className={headingClass}>Services</h2>
                    <ul className="mt-3 flex flex-col text-sm">
                        {
                            services.map(item => (
                                <li key={item.href}>
                                    <Link href={item.href}><span className={linkClass}>{item.title}</span></Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <ContactInfo />
            </div>

            <div className='container mx-auto relative z-10 mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-gray-300'>
                <p className='!text-sm'>© {new Date().getFullYear()} Vaforus. All rights reserved.</p>
                <ul className='flex flex-wrap items-center gap-x-5'>
                    <li><Link href='/privacy-policy'><span className={linkClass}>Privacy Policy</span></Link></li>
                    <li><Link href='/terms'><span className={linkClass}>Terms of Use</span></Link></li>
                    <li><CookieSettingsButton className='min-h-[44px] text-sm text-gray-200 hover:text-white link-grow' /></li>
                </ul>
            </div>
            
            <div className='pointer-events-none absolute sm:-bottom-20 -bottom-40 sm:-left-10 -left-40 sm:rotate-0 rotate-45'>
                <CircleGradientSvg />
            </div>
        </div>
    )
}

export default Footer
