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
                            Our Team Becomes an Extension of Yours
                        </h3>
                        <div className='mt-4 text-gray-300 sm:text-base text-sm'>
                            <p>
                                <strong className='text-pure'>Lower operating costs</strong><br />
                                Access skilled remote professionals without the overhead associated with hiring full-time employees, including salaries, workspace, benefits, and other employment costs.
                            </p>
                            <p className='mt-4'>
                                <strong className='text-pure'>One team instead of multiple freelancers</strong><br />
                                Your outsourced work is managed through Vaforus rather than requiring you to coordinate several independent contractors.
                            </p>
                            <p className='mt-4'>
                                <strong className='text-pure'>Founder-led supervision</strong><br />
                                Our leadership stays involved in projects to maintain standards and accountability.
                            </p>
                            <p className='mt-4'>
                                <strong className='text-pure'>Flexible outsourcing</strong><br />
                                Outsource one function, several services, or ongoing day-to-day tasks depending on what your business needs.
                            </p>
                            <p className='mt-4'>
                                <strong className='text-pure'>Global remote talent</strong><br />
                                Our remote team gives businesses access to skilled professionals beyond their local hiring market.
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
