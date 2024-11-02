import React from 'react'
import SlideOnScroll from '../global/SlideOnScroll'
import FadeOnScroll from '../global/FadeOnScroll'

const Hero = () => {
    return (
        <div
        className="bg-[url('/images/hero.png')] bg-cover w-full lg:h-[85vh] md:h-[60vh] sm:h-[50vh] h-full py-16 relative text-pure sm:px-0 px-4"
        style={{
            backgroundPosition : 'bottom'
        }}
        >
            <div className='absolute top-0 left-0 w-full h-full bg-secondary opacity-65'></div>
            <div className='flex items-center justify-center flex-col md:gap-10 sm:gap-8 gap-6 h-full relative z-10'>
                <h1 className='font-clash lg:text-5xl md:text-4xl sm:text-3xl text-2xl 2xl:w-[45%] xl:w-[50%] lg:w-[60%] md:w-[70%] sm:w-80% w-full text-center tracking-wide w-spacing-sm !leading-[1.2] font-bold'>
                    Don’t Gamble with Your Next Project. Partner with Experts Who Deliver.
                </h1>
                <h4 className='text-center sm:text-base text-sm'>
                    No empty promises, just results that speak for themselves.
                </h4>
                <div className='mt-2'>
                    <button className="btn-primary sm:py-3 py-2 sm:px-18 px-6 font-medium sm:text-lg text-sm font-clash tracking-wider">
                        15-minute discovery call
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero