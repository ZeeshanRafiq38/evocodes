import Image from 'next/image'
import Link from 'next/link'
import app from '@/constants/app.constants'
import FadeOnScroll from '@/components/global/FadeOnScroll'
import pageMetadata from '@/utils/pageMetadata'
import ServiceTools from '@/components/services/ServiceTools'
import Testimonials from '@/components/home/testimonials'
import RelatedServices from '@/components/services/RelatedServices'
import Faqs from '@/components/home/faqs'

export const metadata = pageMetadata(
    'Web Development Outsourcing Services | Vaforus',
    'Outsource web development to Vaforus. Get managed WordPress, Shopify, Webflow and custom website development services without hiring a full-time team.',
    '/services/web-development'
)

const capabilities = [
    { title: 'Business website development', problem: 'Need a professional website but do not have the time or technical resources to build one?', solution: 'Our team creates functional, responsive websites that support your business goals.' },
    { title: 'Website redesigns and improvements', problem: 'An outdated website can affect how customers perceive your business.', solution: 'We improve its design, functionality, structure, and user experience without leaving you to manage development.' },
    { title: 'Landing pages', problem: 'Have a campaign ready but no focused page to support it?', solution: 'We build conversion-focused landing pages for advertising, lead generation, and sales activities.' },
    { title: 'Appointment and booking functionality', problem: 'Still handling customer appointments manually?', solution: 'We implement booking functionality that makes it easier for customers to schedule your services.' },
    { title: 'Website maintenance and updates', problem: 'Website changes should not keep getting pushed to next week.', solution: 'We handle content updates, technical fixes, maintenance, and ongoing improvements.' },
    { title: 'Mobile-responsive development', problem: 'A website that performs poorly on mobile can cost you potential customers.', solution: 'We deliver a consistent, usable experience across screen sizes and devices.' },
    { title: 'Website performance improvements', problem: 'Slow loading times and technical issues frustrate visitors.', solution: 'We improve performance, functionality, and usability so your website works as it should.' },
    { title: 'Ongoing development support', problem: 'Do not have enough development work to justify a full-time hire?', solution: 'Use our managed development team as your technical requirements change.' }
]

const platforms = [
    { name: 'WordPress', label: 'Content websites', description: 'Website updates, functionality changes, improvements, and ongoing WordPress development support.' },
    { name: 'Shopify', label: 'Ecommerce stores', description: 'Store improvements, design updates, and functionality changes that keep your ecommerce operation moving.' },
    { name: 'Webflow', label: 'Marketing websites', description: 'Managed Webflow development, site improvements, and updates without the technical guesswork.' },
    { name: 'Custom Development', label: 'Specific requirements', description: 'Custom website development shaped around your functionality, business requirements, and project scope.' }
]

const benefits = [
    ['No additional full-time hire', 'Access web development services without committing to another permanent employee.'],
    ['Managed project execution', 'Our internal team oversees development work, communication, and delivery.'],
    ['One team to work with', 'Avoid coordinating separate freelancers for design, development, and updates.'],
    ['Flexible development support', 'Get help with a single project or ongoing requirements as your business grows.'],
    ['More time for your business', 'Spend less time chasing developers and managing technical tasks.']
]

const outsourceSignals = [
    ['Your website updates keep getting delayed', 'Changes need to be made, but nobody is available to handle them.'],
    ['Your marketing team needs technical support', 'Campaigns are ready, but landing pages, integrations, or website changes are holding them up.'],
    ['You cannot justify hiring a developer', 'Your requirements do not warrant the cost of another full-time employee.'],
    ['Your current developer is overloaded', 'Website improvements and maintenance keep losing out to other priorities.'],
    ['Managing freelancers takes too much time', 'You spend more time coordinating developers than getting website work completed.'],
    ['You need ongoing development support', 'The website needs regular updates and maintenance, but not an entire in-house department.']
]

const faqs = [
    { question: 'What is web development outsourcing?', answer: 'Web development outsourcing means hiring an external team to handle website development, maintenance, updates, and technical improvements instead of recruiting an in-house development team. It gives your business access to development expertise while reducing recruitment, employment, and operational overhead.' },
    { question: 'Why outsource web development instead of hiring an in-house developer?', answer: 'Outsourcing gives you development support without the ongoing cost of a full-time employee. It also reduces the time spent on recruitment, developer management, and technical coordination. Vaforus manages projects internally, giving you one team responsible for execution.' },
    { question: 'What web development services can I outsource?', answer: 'You can outsource business websites, redesigns, landing pages, WordPress, Shopify and Webflow development, website maintenance, performance improvements, integrations, and ongoing technical support.' },
    { question: 'How much does outsourced web development cost?', answer: 'Cost depends on your platform, website complexity, required functionality, project scope, and ongoing support needs. Smaller updates generally require less investment than a complete website build. Contact Vaforus for an estimate based on your requirements.' },
    { question: 'Can I outsource ongoing website maintenance and updates?', answer: 'Yes. Vaforus can manage content updates, technical fixes, performance improvements, maintenance, and functionality changes so website tasks do not remain delayed by other internal priorities.' },
    { question: 'Which website platforms does Vaforus support?', answer: 'We support WordPress, Shopify, Webflow, and custom website development based on your business requirements and agreed project scope.' },
    { question: 'How does Vaforus manage outsourced development projects?', answer: 'Our developers handle technical execution while the Vaforus team oversees project coordination, communication, delivery, and quality. You work with one managed team instead of coordinating individual freelancers.' },
    { question: 'Can I outsource development without hiring a full-time developer?', answer: 'Yes. This model is useful for startups, small businesses, and growing companies that need development work completed but do not have enough continuous work to justify a permanent development hire.' }
]

const callClass = 'btn-primary inline-flex items-center justify-center gap-2 px-7 py-3 font-medium text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4'

export default function WebDevelopmentPage() {
    return (
        <div className='service-page overflow-hidden'>
            <section className='relative isolate overflow-hidden bg-secondary text-pure'>
                <Image src='/images/cover-web-development.jpg' alt='' fill priority sizes='100vw' className='object-cover object-center -z-20' />
                <div className='absolute inset-0 bg-[image:var(--service-overlay)] -z-10' />
                <div className='container px-5 py-12 md:py-20'>
                    <nav aria-label='Breadcrumb' className='mb-10 text-sm text-gray-200'>
                        <Link href='/#services' className='underline underline-offset-4 hover:text-white'>Our Services</Link>
                        <span aria-hidden='true' className='mx-3'>/</span>
                        <span aria-current='page'>Web Development</span>
                    </nav>
                    <p className='mb-4 text-sm font-semibold uppercase tracking-[.14em] text-[#FFDCBE]'>Managed website development</p>
                    <h1 className='page-title'>Web Development Outsourcing Services</h1>
                    <p className='service-hook mt-5 max-w-3xl font-clash'>Your website shouldn&apos;t become another task on your to-do list.</p>
                    <p className='mt-5 max-w-2xl text-gray-200'>Get a managed development team to build, improve, and maintain your website—without hiring full-time developers or coordinating multiple freelancers.</p>
                    <div className='mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center'>
                        <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className={callClass}>{app.ctaLabel}</a>
                        <span className='text-sm text-gray-300'>{app.ctaNote}</span>
                    </div>
                </div>
            </section>

            <section className='section bg-white'>
                <div className='container px-5'>
                    <FadeOnScroll>
                        <div className='grid gap-10 border-b border-gray-200 pb-12 md:grid-cols-[1fr_280px] md:items-center'>
                            <div className='max-w-3xl'>
                                <p className='home-eyebrow mb-4'>The problem we solve</p>
                                <h2 className='section-heading'>Technical work should move your business forward—not keep pulling you away from it.</h2>
                                <div className='mt-6 space-y-4 text-lg text-gray-600'>
                                    <p>A website needs more than a good design. It needs to be fast, functional, mobile-friendly, easy to manage, and built to turn visitors into customers.</p>
                                    <p>When updates get delayed, projects sit unfinished, or technical work keeps interrupting your day, Vaforus gives you a managed development team without the cost and commitment of full-time hires.</p>
                                    <p className='font-semibold text-secondary'>Our developers handle the technical work while our internal team manages communication, execution, and quality under one roof.</p>
                                </div>
                            </div>
                            <ServiceTools title='Web Development' />
                        </div>
                    </FadeOnScroll>

                    <div className='mt-14 text-center'>
                        <p className='home-eyebrow mb-4'>What we can help with</p>
                        <h2 className='section-heading'>Website work that no longer sits on your to-do list</h2>
                        <p className='sub-text mx-auto mt-5 max-w-2xl text-gray-600'>From building a new website to maintaining an existing one, we manage the technical work your business needs.</p>
                    </div>

                    <div className='mt-10 grid gap-5 md:grid-cols-2'>
                        {capabilities.map((item, index) => (
                            <FadeOnScroll key={item.title}>
                                <article className='group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_30px_rgba(24,34,48,.04)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_36px_rgba(24,34,48,.09)] sm:p-7'>
                                    <div className='flex items-start gap-4'>
                                        <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(196,81,34,.1)] text-sm font-bold text-primary'>{String(index + 1).padStart(2, '0')}</span>
                                        <div>
                                            <h3 className='font-clash text-xl font-semibold text-secondary'>{item.title}</h3>
                                            <p className='mt-3 font-medium text-dark'>{item.problem}</p>
                                            <p className='mt-2 text-gray-600'>{item.solution}</p>
                                        </div>
                                    </div>
                                </article>
                            </FadeOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section className='section bg-[#F3F6F7]'>
                <div className='container px-5'>
                    <FadeOnScroll>
                        <div className='max-w-3xl'>
                            <p className='home-eyebrow mb-4'>Platform coverage</p>
                            <h2 className='section-heading'>Web Development Services Across the Platforms You Use</h2>
                            <p className='mt-5 text-lg text-gray-600'>Your business should not have to find a different developer every time something changes. Work with one managed team across your website platforms.</p>
                        </div>
                    </FadeOnScroll>
                    <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                        {platforms.map((platform, index) => (
                            <FadeOnScroll key={platform.name}>
                                <article className='h-full rounded-2xl border border-gray-200 bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_14px_30px_rgba(24,34,48,.08)]'>
                                    <span className='text-xs font-semibold uppercase tracking-[.12em] text-primary'>{platform.label}</span>
                                    <h3 className='mt-3 font-clash text-xl font-semibold text-secondary'>{platform.name}</h3>
                                    <p className='mt-4 text-gray-600'>{platform.description}</p>
                                    <span aria-hidden='true' className='mt-6 block text-2xl text-primary'>0{index + 1}</span>
                                </article>
                            </FadeOnScroll>
                        ))}
                    </div>
                    <p className='mt-8 text-center font-semibold text-secondary'>One managed development team. Different platforms. No need to coordinate multiple freelancers.</p>
                </div>
            </section>

            <section className='section bg-white'>
                <div className='container grid gap-10 px-5 lg:grid-cols-[.85fr_1.15fr] lg:gap-16'>
                    <FadeOnScroll>
                        <div className='lg:sticky lg:top-28 lg:self-start'>
                            <p className='home-eyebrow mb-4'>Why Vaforus</p>
                            <h2 className='section-heading'>Why Outsource Web Development?</h2>
                            <p className='mt-6 text-xl text-dark'>You do not need to recruit a developer every time your website needs work.</p>
                            <p className='mt-4 text-gray-600'>Vaforus provides an alternative to the overhead of an in-house hire and the coordination burden of individual freelancers.</p>
                        </div>
                    </FadeOnScroll>
                    <div className='divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-[#F8FAFA] px-6 sm:px-8'>
                        {benefits.map(([title, text]) => (
                            <FadeOnScroll key={title}>
                                <div className='flex gap-4 py-6'>
                                    <span aria-hidden='true' className='mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm text-white'>✓</span>
                                    <div>
                                        <h3 className='font-clash text-lg font-semibold text-secondary'>{title}</h3>
                                        <p className='mt-1 text-gray-600'>{text}</p>
                                    </div>
                                </div>
                            </FadeOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section className='section bg-secondary bg-[image:var(--section-gradient)] text-pure'>
                <div className='container px-5'>
                    <FadeOnScroll>
                        <div className='max-w-3xl'>
                            <p className='mb-4 text-sm font-semibold uppercase tracking-[.14em] text-[#FFDCBE]'>Is it time to outsource?</p>
                            <h2 className='section-heading !text-pure'>You probably do not need another full-time employee. You need the website work to get done.</h2>
                        </div>
                    </FadeOnScroll>
                    <div className='mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                        {outsourceSignals.map(([title, text]) => (
                            <FadeOnScroll key={title}>
                                <article className='h-full rounded-2xl border border-white/15 bg-white/[.06] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#FFDCBE]/60 hover:bg-white/[.1]'>
                                    <h3 className='font-clash text-lg font-semibold text-white'>{title}</h3>
                                    <p className='mt-3 text-gray-300'>{text}</p>
                                </article>
                            </FadeOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials category='/services/web-development' />
            <Faqs faqsData={faqs} />

            <section id='discovery-call' className='section bg-secondary bg-[image:var(--section-gradient)] text-pure'>
                <div className='container px-5 text-center'>
                    <FadeOnScroll>
                        <p className='mb-4 text-sm font-semibold uppercase tracking-[.14em] text-[#FFDCBE]'>Your next step</p>
                        <h2 className='section-heading !text-pure mx-auto max-w-3xl'>Build Better Without Building Another Team</h2>
                        <div className='mx-auto mt-6 max-w-3xl space-y-4 text-gray-200'>
                            <p>Whether you need a new business website, ongoing support, or help maintaining an existing site, Vaforus can work alongside your business as its outsourced development team.</p>
                            <p>We handle the technical execution while our internal team manages the work—without recruiting developers, coordinating individual freelancers, or expanding your in-house team.</p>
                        </div>
                        <p className='mt-6 font-semibold text-white'>Get the development work done without adding another full-time hire.</p>
                        <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className={`${callClass} mt-8`}>{app.ctaLabel}</a>
                        <p className='mt-3 text-sm text-gray-300'>{app.ctaNote}</p>
                        <div className='mt-6'><Link href='/#services' className='text-sm underline underline-offset-4 hover:text-white'>Explore all services</Link></div>
                    </FadeOnScroll>
                </div>
            </section>
            <RelatedServices href='/services/web-development' />
        </div>
    )
}
