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
                            How Does It Work?
                        </h3>
                        <p className='sub-text'>
                            From understanding your needs to managing delivery, Vaforus keeps the entire outsourcing process clear and accountable.
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
