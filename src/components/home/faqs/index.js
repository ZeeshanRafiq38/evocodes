import React from 'react'
import FaqItem from './FaqItem'
import SlideOnScroll from '@/components/global/SlideOnScroll'

const Faqs = ({ faqsData }) => {
    return (
        <div className='relative overflow-hidden bg-[#F3F6F7]'>
            <SlideOnScroll direction='bottom'>
                <div className='section container mx-auto relative z-10'>
                    <header className='text-center'>
                        <p className='home-eyebrow mb-4'>FAQ</p>
                        <h2 className='section-heading'>
                            Frequently Asked Questions
                        </h2>
                    </header>
                    <div className='lg:w-[60%] md:w-[80%] sm:w-[90%] w-full mx-auto md:mt-12 mt-8'>
                        {
                            faqsData?.map(item => (
                                <FaqItem key={item.question} item={item} />
                            ))
                        }
                        <p className='mt-10 text-center text-dark'>
                            Still have questions?{' '}
                            <a href='#discovery-call' className='group font-semibold text-primary'>
                                <span className='link-grow'>Ask us on a quick call</span> <span aria-hidden='true' className='arrow-icon'>→</span>
                            </a>
                        </p>
                    </div>
                </div>
            </SlideOnScroll>
        </div>
    )
}

export default Faqs