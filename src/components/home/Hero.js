import React from 'react'
import SlideOnScroll from '../global/SlideOnScroll'
import FadeOnScroll from '../global/FadeOnScroll'

const Hero = () => {
    return (
        <div
        className="bg-[url('/images/hero.png')] bg-cover w-full 2xl:h-[86vh] lg:h-[90vh] md:h-[70vh] sm:h-[60vh] h-full py-16 relative text-pure sm:px-0 px-4 overflow-hidden"
        style={{
            backgroundPosition : 'bottom'
        }}
        >
            {/* <div className='absolute top-0 left-0 w-full h-full bg-secondary opacity-65'></div> */}
            <div className='flex items-center justify-center flex-col md:gap-10 sm:gap-8 gap-6 h-full relative z-10'>
                <h1 className='font-clash 2xl:text-[72px] lg:text-[62px] md:text-[50px] sm:text-[40px] text-[22px] 2xl:w-[60%] lg:w-[72%] sm:w-[80%] w-full text-center tracking-medium !leading-[1] font-semibold md:px-0 px-2 sm:scale-1 scale-[1.1] tracking-wide'>
                    Don’t Gamble with Your Next Project. Partner with Experts Who Deliver.
                </h1>
                <h4 className='text-center md:text-lg sm:text-base text-[13px] sm:w-full w-[250px] text-gray-200 shadow-md'>
                    No empty promises, just results that speak for themselves.
                </h4>
                <div className='mt-2'>
                    <a 
                    href='#discovery-call'
                    className="btn-primary sm:py-3 py-2 sm:px-18 px-6 font-medium sm:text-lg text-sm font-clash tracking-wider"
                    
                    >
                        15-minute discovery call
                    </a>
                </div>
            </div>



            {/*  Gradients */}
            <div className='absolute bottom-0 left-0 w-full h-full'
            style={{
                background: 'linear-gradient(180deg, rgba(21, 12, 49, 0) 0%, #150C31 100%)'
            }}
            >
            </div>
            <div className='absolute sm:-top-52 -top-20 left-0 w-full h-full'
            style={{
                background: 'linear-gradient(180deg, rgba(21, 12, 49, 0) 0%, #150C31 100%)',
                transform: 'matrix(1, 0, 0, -1, 0, 0)'
            }}
            >
            </div>

        </div>
    )
}

export default Hero