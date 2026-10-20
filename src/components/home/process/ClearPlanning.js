import { ClearPlanningSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import Image from 'next/image'
import React from 'react'

const ClearPlanning = () => {
    return (
        <div className='flex justify-between gap-8 md:flex-row flex-col'>
            <div className='flex-1'>
                <SlideOnScroll direction='left'>
                    <div className='w-16 h-16 flex items-center justify-center bg-pure shadow-circle rounded-full text-primary'>
                        <ClearPlanningSvg />
                    </div>
                    <div className="sm:mt-8 mt-6">
                        <h4 className='font-clash leading-[1.1] tracking-wide w-spacing-sm md:text-2xl text-xl text-dark font-semibold'>
                            Define the Scope
                        </h4>
                        <p className='mt-3 text-dark sm:text-base text-sm'>
                            We agree on the services, responsibilities, priorities, and workflow. You don&apos;t have to recruit or manage individual freelancers. Vaforus takes responsibility for managing the outsourced work internally.
                        </p>
                    </div>
                </SlideOnScroll>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <SlideOnScroll direction='right' className='w-full md:w-auto max-w-full min-w-0'>
                    <div className='relative w-full md:w-[500px] max-w-full aspect-[3/2] overflow-hidden rounded-lg'>
                        <Image
                        src='/images/clearPlanning.png'
                        className='object-cover'
                        alt='clear planning'
                        fill
                        sizes='(min-width: 768px) 500px, 100vw'
                        />
                    </div>
                </SlideOnScroll>
            </div>
        </div>
    )
}

export default ClearPlanning
