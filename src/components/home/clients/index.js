import { ChatSvg } from '@/assets/svgs'
import React from 'react'
import HappyClients from './HappyClients'
import ShapeLeft from './ShapeLeft'
import ShapeRight from './ShapeRight'
import SlideOnScroll from '@/components/global/SlideOnScroll'

const Clients = () => {
    return (
        <div className='section bg-secondary relative overflow-hidden' id='discovery-call'>
            <SlideOnScroll direction='top'>
                <div className='container mx-auto xl:px-20'>
                    <div className='flex lg:flex-row flex-col items-center justify-between gap-6'>
                        <div className='flex-1'>
                            <h3
                            className='sm:text-2xl font-medium font-clash w-spacing-sm tracking-wider'
                            style={{
                                background: 'linear-gradient(90.15deg, #5832CE -19.16%, #02C6F7 46.21%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}  
                            >
                                Let’s Fix the Problem Together
                            </h3>
                            <p className='font-clash md:text-2xl sm:text-xl text-sm text-pure sm:font-medium w-spacing-sm tracking-wide mt-4'>
                                In just 15 minutes, we’ll get to the bottom of what’s not working with your current solutions—and start building the path to something better. It’s simple, fast, and free.
                            </p>
                        </div>
                        <div className='flex-1 bg-pure rounded-lg p-4  flex items-center justify-center flex-col gap-4'>
                            <div className='sm:w-[200px] w-[130px]'>
                                <ChatSvg className='w-full' />
                            </div>
                            <h6 className='font-clash font-medium sm:text-lg text-base'>
                                Let’s Have A Chat!
                            </h6>
                            <p className='text-dark sm:text-sm text-xs'>
                                Have a great idea in your mind? Let discuss.
                            </p>
                            <div>
                                <button className="btn-primary sm:text-base text-sm py-2 px-4 font-clash w-spacing-sm tracking-wider mt-2">
                                    15-minute discovery call
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:mt-12 mt-8'>
                        <HappyClients />
                    </div>
                </div>
            </SlideOnScroll>

            <div className='absolute left-0 -top-[100%]'>
                <ShapeLeft />
            </div>
            <div className='absolute right-0 top-[0%] md:block hidden'>
                <ShapeRight />
            </div>
        </div>
    )
}






export default Clients