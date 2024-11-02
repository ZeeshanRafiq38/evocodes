import { AgileDevSvg } from '@/assets/svgs'
import Image from 'next/image'
import React from 'react'

const AgileDevelopment = () => {
    return (
        <div className='flex justify-between gap-8 md:flex-row flex-col'>
            <div className='flex-1'>
                <div className='w-16 h-16 flex items-center justify-center bg-pure shadow-circle rounded-full text-blue-300'>
                    <AgileDevSvg />
                </div>
                <div className="sm:mt-8 mt-6">
                    <h4 className='font-clash leading-[1.1] tracking-wide w-spacing-sm md:text-2xl text-xl  text-dark font-semibold'>
                        Agile Development
                    </h4>
                    <p className='mt-3 text-dark sm:text-base text-sm'>
                        We know that every project brings its own set of challenges. That’s why our process is built to handle the unexpected while keeping you informed every step of the way.
                    </p>
                </div>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <Image
                src='/images/call.png'
                className='w-auto h-auto '
                alt='Agile development'
                width={500}
                height={500}
                />
            </div>
        </div>
    )
}

export default AgileDevelopment