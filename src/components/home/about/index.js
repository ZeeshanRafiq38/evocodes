import React from 'react'
import ShapeLeft from './ShapeLeft'
import ShapeRight from './ShapeRight'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import Image from 'next/image'

const About = () => {
    return (
        <div className='section relative bg-secondary text-pure'>
            <div className="container mx-auto flex md:flex-row flex-col md:gap-8 gap-12 items-center">
                <div className='flex-1'>
                    <SlideOnScroll direction='left'>
                        <h3 className='section-heading !text-pure'>
                            About Us
                        </h3>
                        <div className='mt-4 text-gray-300 sm:text-base text-sm'>
                            <p>
                                Founded in 2019 in Houston, Texas, Evocodes has established itself as a trusted partner in digital transformation, specializing in web and mobile application development. We've built our reputation on a simple yet powerful premise: no empty promises, just results that speak for themselves.
                            </p>
                            <br />
                            <p>
                                Our team of 15-30 skilled professionals brings together diverse expertise in development, design, and project management. This collaborative strength allows us to tackle complex challenges and deliver innovative solutions that drive business growth. Whether it's creating intuitive web applications or developing powerful mobile solutions, we approach each project with the same level of dedication and attention to detail.
                            </p>
                        </div>
                        <div className="sm:mt-8 mt-6 w-full justify-start items-center sm:gap-8 gap-6 grid md:grid-cols-2 grid-cols-1">
                            <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300">
                                <h4 className=" sm:text-[18px] font-semibold leading-9">
                                    4+ Years
                                </h4>
                                <p className="text-gray-400 sm:text-base text-sm font-normal leading-relaxed mt-2">
                                    Influencing Digital Landscapes Together
                                </p>
                            </div>
                            <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300">
                                <h4 className=" sm:text-[18px] font-semibold leading-9">
                                    50+ Projects
                                </h4>
                                <p className="text-gray-400 sm:text-base text-sm font-normal leading-relaxed mt-2">
                                    Excellence Achieved Through Success
                                </p>
                            </div>
                        </div>

                        <div className='sm:mt-12 mt-10'>
                            <a 
                            href="#discovery-call" 
                            className='btn-primary sm:py-4 py-3 sm:px-6 px-4 font-clash w-spacing-sm tracking-wide font-medium'
                            >
                                15-MINUTE DISCOVERY CALL
                            </a>
                        </div>
                    </SlideOnScroll>
                </div>
                <div className="flex-1 w-full justify-center items-start flex">
                    <SlideOnScroll direction='right'>
                        <div className="sm:w-[85%] w-full h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                            <Image
                                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src="/images/about.jpg"
                                width={500}
                                height={500}
                                alt="about Us"
                            />
                        </div>
                    </SlideOnScroll>
                </div>
            </div>


            <div className='absolute left-0 -top-[30%] rotate-0'>
                <ShapeLeft />
            </div>
            <div className='absolute right-0 top-[0%] md:block hidden'>
                <ShapeRight />
            </div>
        </div>
    )
}

export default About