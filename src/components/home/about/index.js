import React from 'react'
import ShapeLeft from './ShapeLeft'
import ShapeRight from './ShapeRight'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import Image from 'next/image'

const About = () => {
    return (
        <div className='section relative bg-secondary text-pure' style={{ backgroundImage: 'var(--section-gradient)' }}>
            <div className="container mx-auto relative z-10 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
                <div className='min-w-0'>
                    <SlideOnScroll direction='left'>
                        <h3 className='section-heading !text-pure'>
                            More Support. Less Hiring Overhead.
                        </h3>
                        <div className='mt-6 text-gray-200 text-base leading-relaxed'>
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
                                <h4 className=" text-2xl sm:text-3xl font-semibold leading-tight">
                                    4+ Years
                                </h4>
                                <p className="text-gray-300 text-base font-normal leading-relaxed mt-2">
                                    Influencing Digital Landscapes Together
                                </p>
                            </div>
                            <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300">
                                <h4 className=" text-2xl sm:text-3xl font-semibold leading-tight">
                                    50+ Projects
                                </h4>
                                <p className="text-gray-300 text-base font-normal leading-relaxed mt-2">
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
                <div className="w-full min-w-0 max-w-[560px] mx-auto">
                    <SlideOnScroll direction='right'>
                        <div className="w-full bg-gray-100 rounded-3xl p-3 sm:p-4">
                            <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-2xl">
                            <Image
                                className="object-cover object-center"
                                src="/images/about.jpg"
                                fill
                                sizes="(min-width: 1280px) 530px, (min-width: 1024px) 420px, (min-width: 640px) 528px, calc(100vw - 48px)"
                                alt="Team collaborating on a project"
                            />
                            </div>
                        </div>
                    </SlideOnScroll>
                </div>
            </div>


            <div className='pointer-events-none absolute left-0 -top-[30%] rotate-0'>
                <ShapeLeft />
            </div>
            <div className='pointer-events-none absolute right-0 top-[0%] md:block hidden'>
                <ShapeRight />
            </div>
        </div>
    )
}

export default About
