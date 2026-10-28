import Image from 'next/image'
import Link from 'next/link'
import app from '@/constants/app.constants'
import FadeOnScroll from '@/components/global/FadeOnScroll'
import pageMetadata from '@/utils/pageMetadata'
import ServiceTools from '@/components/services/ServiceTools'
import Testimonials from '@/components/home/testimonials'
import RelatedServices from '@/components/services/RelatedServices'

export const metadata = pageMetadata(
    'Web Development Outsourcing Services | Vaforus',
    'Outsource web development to Vaforus. Our remote development team builds, improves, and maintains business websites without the cost of an in-house team.',
    '/services/web-development'
)

const capabilities = [
    'Business website development',
    'Website redesigns and improvements',
    'Landing pages',
    'Appointment and booking functionality',
    'Website maintenance and updates',
    'Mobile-responsive development',
    'Website performance improvements',
    'Ongoing development support'
]

const callClass = 'btn-primary inline-flex items-center justify-center gap-2 px-7 py-3 font-medium text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4'

export default function WebDevelopmentPage() {
    return (
        <div className='service-page'>
            <section className='relative isolate overflow-hidden bg-secondary text-pure'>
                <Image src='/images/cover-web-development.jpg' alt='' fill priority sizes='100vw' className='object-cover object-center -z-20' />
                <div className='absolute inset-0 bg-[image:var(--service-overlay)] -z-10' />
                <div className='container px-5 py-12 md:py-20'>
                    <nav aria-label='Breadcrumb' className='text-sm text-gray-200 mb-10'>
                        <Link href='/#services' className='underline underline-offset-4 hover:text-white'>Our Services</Link>
                        <span aria-hidden='true' className='mx-3'>/</span>
                        <span aria-current='page'>Web Development</span>
                    </nav>
                    <h1 className='page-title'>Web Development</h1>
                    <p className='service-hook mt-5 max-w-3xl font-clash'>Your website shouldn&apos;t become another task on your to-do list</p>
                    <p className='mt-5 max-w-2xl text-gray-200 leading-relaxed'>A website needs more than a good design. It needs to be fast, functional, mobile-friendly, easy to manage, and built to turn visitors into customers.</p>
                    <a href='#discovery-call' className={`${callClass} mt-8`}>{app.ctaLabel}</a>
                </div>
            </section>

            <section className='section'>
                <div className='container px-5'>
                    <FadeOnScroll>
                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-gray-200 pb-10'>
                        <p className='max-w-2xl text-lg leading-relaxed text-dark'>Our developers handle the technical work while our internal team manages the project, keeping communication, execution, and quality under one roof.</p>
                        <div className='w-full md:w-[280px] shrink-0'>
                            <ServiceTools title='Web Development' />
                        </div>
                    </div>
                    </FadeOnScroll>
                    <h2 className='section-heading mt-12'>What We Can Help With</h2>
                    <ul className='grid md:grid-cols-2 gap-x-12 mt-8'>
                        {capabilities.map((item, index) => (
                            <li key={item} className='border-b border-gray-200 group'>
                                <FadeOnScroll>
                                <div className='flex items-baseline gap-4 py-5 px-2 -mx-2 rounded-md motion-safe:transition-[background-color,transform] motion-safe:duration-200 group-hover:bg-[rgba(248,237,231,0.6)] motion-safe:group-hover:translate-x-1'>
                                <span aria-hidden='true' className='text-primary text-sm font-semibold'>{String(index + 1).padStart(2, '0')}</span>
                                <h3 className='font-clash text-lg md:text-xl font-medium'>{item}</h3>
                                </div>
                                </FadeOnScroll>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className='section bg-[#F3F6F7]'>
                <FadeOnScroll>
                <div className='container px-5 grid md:grid-cols-2 gap-8 md:gap-16'>
                    <div>
                        <h2 className='section-heading'>Why Outsource Web Development to Vaforus?</h2>
                        <p className='mt-6 text-xl leading-relaxed'>You don&apos;t need to recruit a developer every time your website needs work.</p>
                    </div>
                    <div className='space-y-5 leading-relaxed'>
                        <p>Our remote development team gives you access to ongoing technical support without the overhead of building a full-time development department.</p>
                        <p className='font-semibold text-secondary'>You tell us what needs to be built or improved. Our team handles the execution.</p>
                        <p>Your project is managed internally by Vaforus, so you&apos;re not left coordinating different freelancers or managing the development process yourself.</p>
                    </div>
                </div>
                </FadeOnScroll>
            </section>

            <Testimonials category='/services/web-development' />

            <section id='discovery-call' className='section bg-secondary bg-[image:var(--section-gradient)] text-pure'>
                <FadeOnScroll>
                <div className='container px-5 text-center'>
                    <h2 className='section-heading !text-pure max-w-2xl mx-auto'>Build Better Without Building Another Team</h2>
                    <p className='mt-6 max-w-2xl mx-auto text-gray-200 leading-relaxed'>Whether you need a new business website, ongoing development support, or help maintaining an existing site, Vaforus can work alongside your business as your outsourced web development team.</p>
                    <p className='mt-5 font-medium'>Get the development work done without adding another full-time hire.</p>
                    <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className={`${callClass} mt-8`}>{app.ctaLabel}</a>
                    <div className='mt-6'><Link href='/#services' className='text-sm underline underline-offset-4 hover:text-white'>Explore all services</Link></div>
                </div>
                </FadeOnScroll>
            </section>
            <RelatedServices href='/services/web-development' />
        </div>
    )
}
