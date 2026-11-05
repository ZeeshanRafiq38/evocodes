import React from 'react'
import { ServicesShapeRightSvg, ServicesShapLeftSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import ServiceCard from './ServiceCard'

import services from '@/constants/services.constants'

const groups = [
    {
        title: 'Outsource Website Development, Apps & AI',
        hrefs: ['/services/web-development', '/services/app-development', '/services/ui-ux-graphic-design', '/services/ai-integrations'],
    },
    {
        title: 'Outsource Digital Marketing & Sales',
        hrefs: ['/services/seo-content', '/services/lead-generation-outbound-sales', '/services/social-media-management', '/services/email-marketing', '/services/digital-advertising'],
    },
]

const Services = ({ shapes = true }) => {
    return (
        <div className='relative overflow-hidden px-3'>
                <div className='section container mx-auto relative z-10'>
                    <SlideOnScroll direction='bottom'>
                    <header className='text-center'>
                        <p className='home-eyebrow mb-4'>Our services</p>
                        <h3 className='section-heading'>
                            What Can We Take Off Your Plate?
                        </h3>
                        <p className='sub-text'>
                            Choose the expertise you need and outsource business tasks across development, marketing and sales. We coordinate the specialists and manage delivery.
                        </p>
                    </header>
                    </SlideOnScroll>
                    {groups.map((group, index) => (
                        <div key={group.title} className={index === 0 ? 'mt-14' : 'mt-16'}>
                            <h4 className='text-center font-clash text-xl sm:text-2xl font-semibold text-secondary'>{group.title}</h4>
                            {/* Flex-wrap instead of grid so a short last row sits centred under the full rows. */}
                            <div className='mt-8 flex flex-wrap justify-center gap-6'>
                                {group.hrefs.map(href => services.find(service => service.href === href)).map(service => (
                                    <SlideOnScroll key={service.title} direction='bottom' className='w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-0'>
                                        <ServiceCard {...service} />
                                    </SlideOnScroll>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            {
                shapes && (
                    <>
                        <div className='absolute -left-[3%] -top-[15%] sm:block hidden'>
                            <ServicesShapLeftSvg />
                        </div>
                        <div className='absolute -right-[0%] -bottom-[100%] md:block hidden'>
                            <ServicesShapeRightSvg />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Services
