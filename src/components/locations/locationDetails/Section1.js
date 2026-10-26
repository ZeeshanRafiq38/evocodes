import CalendlyWidget from '@/components/global/CalendlyWidget'
import Image from 'next/image'
import React from 'react'

const Section1 = ({ location }) => {
    return (
        <div className='flex lg:flex-row flex-col lg:gap-12 gap-8 items-center justify-between'>
            <div className='flex-1 min-w-0 w-full'>
                <h3 className='section-heading'>
                    {location?.sectionOne?.heading}
                </h3>
                <div className='mt-5 flex flex-col gap-4 text-dark text-base leading-relaxed'>
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
