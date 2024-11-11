import React from 'react'
import FaqItem from './FaqItem'
import { ProcessLeftShapeSvg, ServicesShapLeftSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'

const Faqs = ({ faqsData }) => {
    return (
        <div className='relative overflow-hidden px-3 '>
            <SlideOnScroll direction='bottom'>
                <div className='section container mx-auto relative z-10'>
                    <header className='text-center'>
                        <h3 className='section-heading'>
                            Frequently <br /> Asked Questions
                        </h3>
                    </header>
                    <div className='lg:w-[60%] md:w-[80%] sm:w-[90%] w-full mx-auto md:mt-12 mt-8'>
                        {
                            faqsData?.map(item => (
                                <FaqItem key={item.question} item={item} />
                            ))
                        }
                    </div>
                </div>
            </SlideOnScroll>

            <div className='absolute -top-[20%] left-0 sm:block hidden'>
                <ProcessLeftShapeSvg />
            </div>
            <div className='absolute -top-[70%] right-0 rotate-180 sm:block hidden'>
                <ServicesShapLeftSvg />
            </div>
        </div>
    )
}

export default Faqs