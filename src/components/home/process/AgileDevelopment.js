import { AgileDevSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import Image from 'next/image'
import React from 'react'

const AgileDevelopment = () => {
    return (
        <div className='flex justify-between gap-8 md:flex-row flex-col'>
            <div className='flex-1'>
                <SlideOnScroll direction='left'>
                    <div className='w-16 h-16 flex items-center justify-center bg-pure shadow-circle rounded-full text-primary'>
                        <AgileDevSvg />
                    </div>
                    <div className="sm:mt-8 mt-6">
                        <h4 className='font-clash leading-[1.1] tracking-wide w-spacing-sm md:text-2xl text-xl  text-dark font-semibold'>
                            Build Your Vaforus Team
                        </h4>
                        <p className='mt-3 text-dark sm:text-base text-sm'>
                            Your work is handled by the relevant Vaforus specialists, including designers, developers, copywriters, social media managers, SEO specialists, and outbound professionals.
                        </p>
                    </div>
                </SlideOnScroll>
            </div>
            <div className='flex-1 flex justify-center'>
                <SlideOnScroll direction='right'>
                    <div className='relative w-[500px] max-w-full aspect-[3/2] overflow-hidden rounded-lg'>
                        <Image
                        src='/images/build-vaforus-team.jpg'
                        className='object-cover'
                        alt='Vaforus remote team collaborating online'
                        fill
                        sizes='(min-width: 768px) 500px, 100vw'
                        />
                    </div>
                </SlideOnScroll>
            </div>
        </div>
    )
}

export default AgileDevelopment
