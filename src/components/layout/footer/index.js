import React from 'react'
import CircleGradientSvg from './CircleGradientSvg'
import Image from 'next/image'
import logoWhite from '@/assets/svgs/logoWhite.svg'
import navLinks from '@/constants/nav.constants'
import Link from 'next/link'
import socialLinks from '@/constants/socialLinks.constants';
import ContactInfo from './ContactInfo'

const Footer = () => {
    return (
        <div className='relative bg-secondary text-pure overflow-hidden md:pt-20 sm:pt-12 pt-8 sm:pb-12 pb-8 lg:px-28 sm:px-16 px-6'>
            <div className='flex justify-between md:flex-row flex-col gap-6 relative z-10 '>
                <div>
                    <Image src={logoWhite} alt='Vaforus' className='sm:w-[200px] w-[150px] h-auto' />
                    <p className='mt-6 sm:text-base text-sm text-gray-100 max-w-[300px]'>No empty promises, just results that speak for themselves.</p>
                    <ul className="mt-6 flex gap-4 text-sm">
                        {
                            socialLinks?.map(item => (
                                <li
                                className='text-gray-200 hover:scale-[1.4] duration-200 ease-in-out' 
                                key={item.id}
                                >
                                    <Link href={item.url} target='_blank' rel='noopener noreferrer' aria-label={item.name}>
                                        <item.icon />
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='sm:my-0 my-3'>
                    <h6 className='text-lg font-medium font-clash tracking-wide w-spacing-sm'>
                        MAIN LINKS
                    </h6>
                    <ul className="mt-4 flex flex-col gap-4 text-sm">
                        {
                            navLinks?.map(item => (
                                <li
                                className='text-gray-200 hover:underline' 
                                key={item.id}
                                >
                                    <Link href={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
                <div>
                    <ContactInfo />
                </div>

            </div>
            
            <div className='absolute sm:-bottom-20 -bottom-40 sm:-left-10 -left-40 sm:rotate-0 rotate-45'>
                <CircleGradientSvg />
            </div>
        </div>
    )
}

export default Footer
