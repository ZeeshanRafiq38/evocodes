import { LaunchAndSupportSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import Image from 'next/image'
import React from 'react'

const LaunchAndSupport = () => {
    return (
        <div className='flex justify-between gap-8 md:flex-row flex-col'>
            <div className='flex-1'>
                <SlideOnScroll direction='left'>
                    <div className='w-16 h-16 flex items-center justify-center bg-pure shadow-circle rounded-full text-yellow-500'>
                        <LaunchAndSupportSvg />
                    </div>
                    <div className="sm:mt-8 mt-6">
                        <h4 className='font-clash leading-[1.1] tracking-wide w-spacing-sm md:text-2xl text-xl text-dark font-semibold'>
                            Transparent Launch & <br />  Ongoing Support
                        </h4>
                        <p className='mt-3 text-dark sm:text-base text-sm'>
                            When it’s time to go live, we don’t just disappear. We make sure everything works as expected and stick around to provide ongoing support whenever you need us. Your success is our success.
                        </p>
                    </div>
                </SlideOnScroll>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <SlideOnScroll direction='right'>
                    <Image
                    src='/images/support.png'
                    className='w-auto h-auto '
                    alt='launch and support'
                    width={500}c
                    height={500}
                    />
                </SlideOnScroll>
            </div>
        </div>
    )
}

export default LaunchAndSupport