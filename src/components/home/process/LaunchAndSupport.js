import { LaunchAndSupportSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import Image from 'next/image'
import React from 'react'

const LaunchAndSupport = () => {
    return (
        <div className='flex justify-between gap-8 md:flex-row flex-col'>
            <div className='flex-1'>
                <SlideOnScroll direction='left'>
                    <div className='w-16 h-16 flex items-center justify-center bg-pure shadow-circle rounded-full text-primary'>
                        <LaunchAndSupportSvg />
                    </div>
                    <div className="sm:mt-8 mt-6">
                        <h4 className='font-clash leading-[1.1] tracking-wide w-spacing-sm md:text-2xl text-xl text-dark font-semibold'>
                            Managed Execution
                        </h4>
                        <p className='mt-3 text-dark sm:text-base text-sm'>
                            Once your project is underway, our team handles the agreed work and communicates with you throughout the process. Our founder-led team supervises projects internally to maintain quality, consistency, and accountability.
                        </p>
                    </div>
                </SlideOnScroll>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <SlideOnScroll direction='right'>
                    <div className='relative w-[500px] max-w-full aspect-[3/2] overflow-hidden rounded-lg'>
                        <Image
                        src='/images/managed-execution.jpg'
                        className='object-cover'
                        alt='Project manager supervising an active workflow'
                        fill
                        sizes='(min-width: 768px) 500px, 100vw'
                        />
                    </div>
                </SlideOnScroll>
            </div>
        </div>
    )
}

export default LaunchAndSupport
