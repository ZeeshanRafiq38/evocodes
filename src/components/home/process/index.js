import React from 'react'
import Tabs from './Tabs'
import SlideOnScroll from '@/components/global/SlideOnScroll'

const Process = () => {
    return (
        <div className='relative overflow-hidden'>
            <SlideOnScroll direction='bottom'>
                <div className='section container mx-auto relative z-10'>
                    <header className='text-center'>
                        <p className='home-eyebrow mb-4'>How it works</p>
                        <h2 className='section-heading'>
                            From First Call to Managed Delivery
                        </h2>
                        <p className='sub-text'>
                            From understanding your needs to managing delivery, Vaforus keeps the entire outsourcing process clear and accountable.
                        </p>
                    </header>
                    <div className='md:mt-12 mt-8'>
                        <Tabs />
                    </div>
                </div>
            </SlideOnScroll>
        </div>

    )
}

export default Process
