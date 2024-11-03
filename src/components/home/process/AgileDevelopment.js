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
                        Agile Development – Stay <br /> in Control
                    </h4>
                    <p className='mt-3 text-dark sm:text-base text-sm'>
                        As we build your solution, you’ll be part of the process. You’ll see early prototypes, give feedback, and shape the outcome. We stay flexible to ensure the final product is what you need, not just what was spec’d out months ago.
                    </p>
                </div>
            </div>
            <div className='flex-1 flex justify-center'>
                <Image
                src='/images/agileDev4.png'
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