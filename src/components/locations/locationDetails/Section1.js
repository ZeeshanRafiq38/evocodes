import CalendlyWidget from '@/components/global/CalendlyWidget'
import Image from 'next/image'
import React from 'react'

const Section1 = () => {
    return (
        <div className='flex lg:flex-row flex-col lg:gap-0 gap-6 items-center justify-between'>
            <div className='flex-1'>
                <h3 className='font-clash w-spacing-sm tracking-wide md:text-3xl sm:text-2xl text-xl font-semibold text-secondary'>
                    Section One Heading
                </h3>
                <div className='sm:mt-3 mt-2 flex flex-col gap-4 text-dark sm:text-base text-sm'>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore incidunt laboriosam molestiae tenetur atque. Dolor blanditiis, fugit nemo similique asperiores, eum, tempora dolorum praesentium enim rem molestias magnam explicabo!
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia blanditiis amet impedit voluptas perspiciatis, unde consectetur dolor laudantium sit soluta molestiae illum repudiandae dolores perferendis possimus inventore, eligendi tempora maiores.
                    </p>

                </div>
            </div>
            <div className='flex-1'>
               <CalendlyWidget />
            </div>
        </div>
    )
}

export default Section1