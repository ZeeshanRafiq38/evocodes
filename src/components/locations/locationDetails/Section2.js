import { baseURL } from '@/config/api'
import Image from 'next/image'
import React from 'react'

const Section2 = ({ location }) => {
    return (
        <div className='flex md:flex-row flex-col md:gap-12 gap-8 items-center justify-between'>
            <div className='flex-1 min-w-0 w-full'>
                <Image
                src={baseURL + location?.sectionTwo?.image}
                alt='Location'
                width={500}
                height={500}
                className='object-cover'
                />
            </div>
            <div className='flex-1 min-w-0 w-full'>
                <h3 className='section-heading'>
                    {location?.sectionTwo?.heading}
                </h3>
                <div className='mt-5 flex flex-col gap-4 text-dark text-base leading-relaxed'>
                    <p >
                        {location?.sectionTwo?.firstParagraph}
                    </p>
                    <p>
                        {location?.sectionTwo?.secondParagraph}
                    </p>

                </div>
            </div>
            
        </div>
    )
}

export default Section2
