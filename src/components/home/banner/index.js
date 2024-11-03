import React from 'react'
import ElipseLeft from './ElipseLeft'
import ElipseRight from './ElipseRight'
import Bracket from './Bracket'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import FadeOnScroll from '@/components/global/FadeOnScroll'

const Banner = () => {
    return (
        <div className='w-full bg-[#150C31] relative overflow-hidden px-3'>
            <div className='absolute bottom-0 -left-0 '>
                <ElipseLeft />
            </div>
            <div className='absolute sm:top-0 -top-48 right-0'>
                <ElipseRight />
            </div>
            <div className='relative z-10 flex items-center justify-between container mx-auto md:py-20 sm:py-12 py-10'>
                <div className='rotate-180 sm:block hidden'>
                    <SlideOnScroll direction='right'>
                        <Bracket />
                    </SlideOnScroll>
                </div>
                <div className='text-pure mx-auto'>
                    <SlideOnScroll direction='bottom'>
                        <div className='xl:text-[100px] lg:text-[70px] md:text-[50px] text-[30px] font-clash w-spacing-md leading-[1] font-semibold'>
                            Crafting Tomorrow,
                        </div>
                        <div className='flex lg:flex-row flex-col items-center justify-between lg:gap-10 gap-4'>
                            <span
                                className="xl:text-[100px] lg:text-[70px] md:text-[50px] text-[30px] font-clash font-semibold inline-block sm:mt-0 mt-2"
                                style={{
                                    background: "linear-gradient(104.5deg, #F46C3F 20.94%, #F4A941 76%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent"
                                }}
                            >
                                Today
                            </span>


                            <span className='sm:text-base text-sm'>
                                Let’s explore your vision in just 15 minutes.
                            </span>
                            <button className="block sm:mt-0 mt-3 btn-primary sm:py-4 py-2 sm:px-12 px-8 font-clash font-medium w-spacing-sm tracking-wider">
                                15-minute discovery call
                            </button>
                        </div>
                    </SlideOnScroll>
                </div>
                <div className='sm:block hidden'>
                    <SlideOnScroll direction='right'>
                        <Bracket />
                    </SlideOnScroll>
                </div>
            </div>
        </div>
    )
}

export default Banner