import { BookSvg, EmailSvg, PhoneSvg } from '@/assets/svgs'
import Loader from '@/components/global/Loader'
import AllLocations from '@/components/locations/AllLocations'
import app from '@/constants/app.constants';
import React, { Suspense } from 'react';

export const dynamic = 'force-dynamic'


export const metadata = {
    title: 'All Locations | Vaforus Global Services',
};

const Locations = () => {
    return (
        <div>
            <header className='listing-header bg-secondary bg-[image:var(--section-gradient)] text-center text-pure'>
                <h1 className='page-title'>
                    Where Innovation Meets Your Location
                </h1>
                <p className='page-intro'>
                    From here to anywhere, we bring solutions closer to you with personalized service and local insight.
                </p>
            </header>
            <div className='container mx-auto px-3'>
                <div className='sm:my-12 my-8 rounded-lg'>
                    <div className='grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-4'>
                        <div className='bg-gray-100 bg-[image:var(--card-gradient)] rounded-tl-lg rounded-bl-lg md:rounded-none rounded-lg p-4'>
                            <a href={`tel:${app.contactForCall}`}>
                                <div className='flex items-center gap-4'>
                                    <PhoneSvg className='md:w-[50px] w-[30px] text-secondary' />
                                    <h4 className='md:text-xl sm:text-lg text-base font-semibold text-secondary'>CALL US</h4>
                                </div>
                                <p className='md:ml-[66px] ml-[46px]'>
                                    {app.contactNo}
                                </p>
                            </a>
                        </div>

                        <div className='bg-gray-100 bg-[image:var(--card-gradient)] md:border-x-2 border-x-pure md:rounded-none rounded-lg p-4'>
                            <a href={`mailto:${app.email}`}>
                                <div className='flex items-center gap-4'>
                                    <EmailSvg className='md:w-[50px] w-[30px] text-secondary' />
                                    <h4 className='md:text-xl sm:text-lg text-base font-semibold text-secondary'>EMAIL US</h4>
                                </div>
                                <p className='md:ml-[66px] ml-[46px] break-words'>
                                    {app.email}
                                </p>
                            </a>
                        </div>
                        <div className='bg-gray-100 bg-[image:var(--card-gradient)] rounded-tr-lg rounded-br-lg p-4 md:rounded-none rounded-lg'>
                            <a 
                            href={app.discoveryCallUrl}
                            target='_blank'
                            >
                                <div className='flex items-center gap-4'>
                                    <BookSvg className='md:w-[50px] w-[30px] text-secondary' />
                                    <h4 className='md:text-xl sm:text-lg text-base font-semibold text-secondary'>BOOK A CALL</h4>
                                </div>
                                <div className='md:ml-[66px] ml-[46px]'>
                                    15 Minute Discovery Call
                                </div>
                            </a>
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
