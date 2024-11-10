import { BookSvg, EmailSvg, PhoneSvg } from '@/assets/svgs'
import Loader from '@/components/global/Loader'
import AllLocations from '@/components/locations/AllLocations'
import React, { Suspense } from 'react'

const Locations = () => {
    return (
        <div>
            <header className='bg-secondary md:py-20 sm:py-12 py-10 flex flex-col items-center justify-center text-center text-pure'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-clash w-spacing-sm tracking-wide font-semibold'>
                    Where Innovation Meets Your Location
                </h1>
                <p className='md:mt-5 mt-2 sm:text-sm text-xs sm:w-full w-[250px] mx-auto text-gray-300'>
                    From here to anywhere, we bring solutions closer to you with personalized service and local insight.
                </p>
            </header>
            <div className='container mx-auto px-3'>
                <div className='sm:my-12 my-8 rounded-lg'>
                    <div className='grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-4'>
                        <div className='bg-gray-200 rounded-tl-lg rounded-bl-lg md:rounded-none rounded-lg p-4'>
                            <a href='tel:+11234567890'>
                                <div className='flex items-center gap-4'>
                                    <PhoneSvg className='md:w-[50px] w-[30px] text-primary' />
                                    <h4 className='md:text-xl sm:text-lg text-base font-semibold text-primary'>CALL US</h4>
                                </div>
                                <p className='md:ml-[66px] ml-[46px]'>
                                    +1 (123) 456-7890
                                </p>
                            </a>
                        </div>

                        <div className='bg-gray-200 md:border-x-2 border-x-pure md:rounded-none rounded-lg p-4'>
                            <a href='mailto:contact@evocodes.com'>
                                <div className='flex items-center gap-4'>
                                    <EmailSvg className='md:w-[50px] w-[30px] text-primary' />
                                    <h4 className='md:text-xl sm:text-lg text-base font-semibold text-primary'>EMAIL US</h4>
                                </div>
                                <p className='md:ml-[66px] ml-[46px]'>
                                    contact@evocodes.com
                                </p>
                            </a>
                        </div>
                        <div className='bg-gray-200 rounded-tr-lg rounded-br-lg p-4 md:rounded-none rounded-lg'>
                            <div className='flex items-center gap-4'>
                                <BookSvg className='md:w-[50px] w-[30px] text-primary' />
                                <h4 className='md:text-xl sm:text-lg text-base font-semibold text-primary'>BOOK A CALL</h4>
                            </div>
                            <div className='md:ml-[66px] ml-[46px]'>
                                15 Minute Discovery Call
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-4 '>
                    <h3 className="section-heading text-center">
                        Our Locations
                    </h3>
                    <div>
                        <Suspense fallback={<Loader />}>
                            <AllLocations />
                        </Suspense>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Locations