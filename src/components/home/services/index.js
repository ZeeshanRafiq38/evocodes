import React from 'react'
import { ServicesShapeRightSvg, ServicesShapLeftSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import ServiceCard from './ServiceCard'

import services from '@/constants/services.constants'

const Services = ({ shapes = true }) => {
    return (
        <div className='relative overflow-hidden px-3'>
            <SlideOnScroll>
                <div className='section container mx-auto relative z-10'>
                    <header className='text-center'>
                        <h3 className='section-heading'>
                            Our Services
                        </h3>
                        <p className='sub-text'>
                            Flexible outsourced support across development, marketing, sales, and digital operations.
                        </p>
                    </header>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16'>
                        {services.map(service => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </div>
                </div>
            </SlideOnScroll>

            {
                shapes && (
                    <>
                        <div className='absolute -left-[3%] -top-[15%] sm:block hidden'>
                            <ServicesShapLeftSvg />
                        </div>
                        <div className='absolute -right-[0%] -bottom-[100%] md:block hidden'>
                            <ServicesShapeRightSvg />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Services
