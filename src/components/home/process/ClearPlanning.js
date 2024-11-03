import { ClearPlanningSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import Image from 'next/image'
import React from 'react'

const ClearPlanning = () => {
    return (
        <div className='flex justify-between gap-8 md:flex-row flex-col'>
            <div className='flex-1'>
                <div className='w-16 h-16 flex items-center justify-center bg-pure shadow-circle rounded-full text-purple-500'>
                    <ClearPlanningSvg />
                </div>
                <div className="sm:mt-8 mt-6">
                    <h4 className='font-clash leading-[1.1] tracking-wide w-spacing-sm md:text-2xl text-xl text-dark font-semibold'>
                        Clear Planning – No <br /> More Moving Targets
                    </h4>
                    <p className='mt-3 text-dark sm:text-base text-sm'>
                        After the discovery, we lay out a clear project roadmap. You’ll have a timeline, milestone updates, and the exact deliverables we’ll provide. No surprises, no guesswork.
                    </p>
                </div>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <Image
                src='/images/clearPlanning.png'
                className='w-auto h-auto '
                alt='clear planning'
                width={500}
                height={500}
                />
            </div>
        </div>
    )
}

export default ClearPlanning