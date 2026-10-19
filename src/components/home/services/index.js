import React from 'react'
import { ServicesShapeRightSvg, ServicesShapLeftSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import ServiceCard from './ServiceCard'

const services = [
    {
        title: 'Web Development',
        href: '/services/web-development',
        description: 'Build and maintain professional websites without hiring an in-house development team.'
    },
    {
        title: 'App Development',
        href: '/services/app-development',
        description: 'Create fast, reliable mobile applications for iOS and Android with scalable cross-platform technology.'
    },
    {
        title: 'UI/UX & Graphic Design',
        href: '/services/ui-ux-graphic-design',
        description: 'Design intuitive digital experiences and polished brand visuals that are clear, consistent, and easy to use.'
    },
    {
        title: 'AI Integrations',
        href: '/services/ai-integrations',
        description: 'Connect practical AI tools with your products and workflows to automate tasks and improve customer experiences.'
    },
    {
        title: 'SEO & Content',
        href: '/services/seo-content',
        description: 'Create search-focused content and support your organic growth with ongoing SEO execution.'
    },
    {
        title: 'Lead Generation & Outbound Sales',
        href: '/services/lead-generation-outbound-sales',
        description: 'Build prospect lists, manage outreach, and support your outbound sales process with dedicated specialists.'
    },
    {
        title: 'Social Media Management',
        href: '/services/social-media-management',
        description: 'Keep your social channels active with consistent content, scheduling, and day-to-day management.'
    },
    {
        title: 'Email Marketing',
        href: '/services/email-marketing',
        description: 'Plan and execute email marketing campaigns and retention activities without adding another specialist to your team.'
    },
    {
        title: 'Digital Advertising',
        href: '/services/digital-advertising',
        description: 'Get support managing your Google and Meta advertising campaigns and the work that happens behind them.'
    }
]

const Services = ({ shapes = true }) => {
    return (
        <div className='relative overflow-hidden px-3'>
            <SlideOnScroll>
                <div className='section container mx-auto relative z-10'>
                    <header className='text-center'>
                        <h3 className='section-heading'>
                            Our Services
                        </h3>
                        <p className='sub-text'>
                            Flexible outsourced support across development, marketing, sales, and digital operations.
                        </p>
                    </header>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16'>
                        {services.map(service => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </div>
                </div>
            </SlideOnScroll>

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
