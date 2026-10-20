import ServiceTools from '@/components/services/ServiceTools'
import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ title, description, href }) => {
    return (
        <article
            className='p-5 sm:p-7 rounded-lg flex flex-col h-full min-h-[390px]'
            style={{
                background: 'var(--card-gradient)'
            }}
        >
            <ServiceTools title={title} floating />

            <div className='mt-6 text-center'>
                <h4 className='font-clash font-semibold sm:text-[22px] text-xl text-dark leading-tight'>
                    {title}
                </h4>
                <p className='mt-3 text-gray-600 sm:text-base text-sm leading-relaxed'>
                    {description}
                </p>
            </div>
            {href && (
                <Link href={href} aria-label={`Learn more about ${title}`} className='mt-auto pt-6 text-center text-secondary font-semibold underline underline-offset-4 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4'>
                    Learn more
                </Link>
            )}
        </article>
    )
}

export default ServiceCard
