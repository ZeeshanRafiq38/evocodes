import Image from 'next/image'
import React from 'react'
import MobileApp from './MobileApp'
import WebApp from './WebApp'
import { ServicesShapeRightSvg, ServicesShapLeftSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'

const Services = ({ shapes = true }) => {
    return (
        <div className='relative overflow-hidden px-3'>
            <SlideOnScroll>
                <div className='section container mx-auto relative z-10'>
                    <header className='text-center'>
                        <h3 className='section-heading'>
                            Provide Powerful <br /> Solutions At All Time    
                        </h3>
                        <p className='sub-text'>
                            Powerful technology solutions drive innovation, optimize processes, and boost efficiency. Leveraging AI, cloud computing, and automation, they solve complex problems, enhance decision-making, and help businesses stay competitive.
                        </p>
                    </header>
                    <div className='flex justify-center md:flex-row flex-col gap-6 mt-16'>
                        <MobileApp />
                        <WebApp />
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