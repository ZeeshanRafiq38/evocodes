import CalendlyWidget from '@/components/global/CalendlyWidget'
import Image from 'next/image'
import React from 'react'

const Section1 = ({ location }) => {
    return (
        <div className='flex lg:flex-row flex-col lg:gap-0 gap-6 items-center justify-between'>
            <div className='flex-1 min-w-0 w-full'>
                <h3 className='font-clash w-spacing-sm tracking-wide md:text-3xl sm:text-2xl text-xl font-semibold text-secondary'>
                    {location?.sectionOne?.heading}
                </h3>
                <div className='sm:mt-3 mt-2 flex flex-col gap-4 text-dark sm:text-base text-sm'>
                    <p >
                        {location?.sectionOne?.firstParagraph}
                    </p>
                    <p>
                        {location?.sectionOne?.secondParagraph}
                    </p>

                </div>
            </div>
            <div className='flex-1 min-w-0 w-full'>
               <CalendlyWidget />
            </div>
        </div>
    )
}

export default Section1
