import React from 'react'
import Bracket from './Bracket'
import FadeOnScroll from '@/components/global/FadeOnScroll'
import app from '@/constants/app.constants'

const Banner = () => (
    <section className='bg-secondary px-4 text-pure' style={{ backgroundImage: 'var(--section-gradient)' }}>
        <div className='container mx-auto py-12 md:py-16 lg:py-20'>
            <FadeOnScroll>
                <div className='flex items-center gap-6 lg:gap-10'>
                    <div aria-hidden='true' className='hidden sm:block shrink-0 rotate-180 opacity-60'>
                        <Bracket className='w-8 lg:w-12 h-auto' />
                    </div>
                    <div className='min-w-0 flex-1 grid lg:grid-cols-[1.2fr_1fr] items-center gap-8 lg:gap-12 text-center lg:text-left'>
                        <h2 className='font-clash font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-normal'>
                            An Extension
                            <span className='block mt-2'>Of Your Team</span>
                            <span aria-hidden='true' className='block w-16 h-1 bg-primary mt-6 mx-auto lg:mx-0' />
                        </h2>
                        <div className='min-w-0'>
                            <p className='text-base sm:text-lg leading-relaxed text-gray-200 max-w-md mx-auto lg:mx-0'>
                                Let&apos;s discuss how Vaforus can become an extension of your team.
                            </p>
                            <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className='btn-primary inline-flex justify-center mt-6 px-6 py-3.5 font-clash font-medium text-base max-w-full text-center'>
                                Schedule a Call With Us
                            </a>
                        </div>
                    </div>
                    <div aria-hidden='true' className='hidden sm:block shrink-0 opacity-60'>
                        <Bracket className='w-8 lg:w-12 h-auto' />
                    </div>
                </div>
            </FadeOnScroll>
        </div>
    </section>
)

export default Banner
