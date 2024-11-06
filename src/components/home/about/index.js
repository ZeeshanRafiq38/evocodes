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
                        <div className='sm:mt-6 mt-4 text-gray-300 sm:text-base text-sm'>
                            <p>
                                Through collaborationperse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.
                            </p>
                            <br />
                            <p>
                                Through collaborationperse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.
                            </p>
                        </div>
                        <div className="w-full flex-col justify-center items-start gap-6 flex sm:mt-8 mt-6">
                            <div className="w-full justify-start items-center sm:gap-8 gap-6 grid md:grid-cols-2 grid-cols-1">
                                <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300">
                                    <h4 className=" sm:text-xl font-semibold leading-9">
                                        33+ Years
                                    </h4>
                                    <p className="text-gray-400 sm:text-base text-sm font-normal leading-relaxed mt-2">
                                        Influencing Digital Landscapes Together
                                    </p>
                                </div>
                                <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300">
                                    <h4 className=" sm:text-xl font-semibold leading-9">
                                        125+ Projects
                                    </h4>
                                    <p className="text-gray-400 sm:text-base text-sm font-normal leading-relaxed mt-2">
                                        Excellence Achieved Through Success
                                    </p>
                                </div>
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