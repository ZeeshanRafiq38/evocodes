import React from 'react'
import Tabs from './Tabs'
import { ProcessLeftShapeSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'

const Process = () => {
    return (
        <div className='relative overflow-hidden'>
            <SlideOnScroll direction='top'>
                <div className='section container mx-auto relative z-10'>
                    <header className='text-center'>
                        <h3 className='section-heading'>
                            Our Process, Built <br /> Around Your Needs    
                        </h3>
                        <p className='sub-text'>
                        We know that every project brings its own set of challenges. That’s why our process is built to handle the unexpected while keeping you informed every step of the way.
                        </p>
                    </header>
                    <div className='md:mt-12 mt-8'>
                        <Tabs />
                    </div>
                </div>
            </SlideOnScroll>


            <div className='absolute -top-[400px] left-0 sm:block hidden'>
                <ProcessLeftShapeSvg />
            </div>
        </div>

    )
}

export default Process