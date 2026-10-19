import Image from 'next/image'
import Link from 'next/link'
import FadeOnScroll from '@/components/global/FadeOnScroll'
import app from '@/constants/app.constants'
import ServiceTools from './ServiceTools'

const callClass = 'btn-primary inline-flex items-center justify-center px-7 py-3 font-clash font-medium text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4'

export default function ServicePage({ service }) {
    return (
        <div className='overflow-hidden'>
            <section className='relative isolate overflow-hidden bg-secondary text-pure'>
                <Image src={service.coverImage} alt='' fill priority sizes='100vw' className='object-cover object-center -z-20' />
                <div className='absolute inset-0 bg-black/65 -z-10' />
                <div className='container px-5 py-12 md:py-20'>
                    <nav aria-label='Breadcrumb' className='text-sm text-gray-200 mb-10'>
                        <Link href='/#services' className='underline underline-offset-4 hover:text-white'>Our Services</Link>
                        <span aria-hidden='true' className='mx-3'>/</span>
                        <span aria-current='page'>{service.title}</span>
                    </nav>
                    <h1 className='font-clash font-semibold text-4xl md:text-6xl leading-tight break-words'>{service.title}</h1>
                    <p className='mt-5 max-w-3xl font-clash text-2xl md:text-3xl leading-snug'>{service.headline}</p>
                    <p className='mt-5 max-w-2xl text-gray-200 leading-relaxed'>{service.intro[0]}</p>
                    <a href='#discovery-call' className={`${callClass} mt-8`}>15-minute discovery call</a>
                </div>
            </section>
            <section className='section'>
                <div className='container px-5'>
                    <FadeOnScroll>
                        <div className='flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-gray-200 pb-10'>
                            <div className='max-w-2xl space-y-4 text-lg leading-relaxed'>
                                {service.intro.slice(1).map(text => <p key={text}>{text}</p>)}
                            </div>
                            <div className='w-full md:w-[280px] shrink-0'>
                                <ServiceTools title={service.title} />
                            </div>
                        </div>
                    </FadeOnScroll>
                    <h2 className='section-heading mt-12'>{service.capabilitiesTitle}</h2>
                    <ul className='grid md:grid-cols-2 gap-x-12 mt-8'>
                        {service.capabilities.map((item, index) => (
                            <li key={item} className='border-b border-gray-200'>
                                <FadeOnScroll>
                                    <div className='flex items-baseline gap-4 py-5'>
                                        <span aria-hidden='true' className='text-primary text-sm font-semibold'>{String(index + 1).padStart(2, '0')}</span>
                                        <h3 className='font-clash text-lg md:text-xl font-medium'>{item}</h3>
                                    </div>
                                </FadeOnScroll>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {service.sections.map(section => (
                <section key={section.title} className='section bg-[#F3F6F7]'>
                    <div className='container px-5'>
                        <FadeOnScroll>
                            <div className='grid md:grid-cols-2 gap-8 md:gap-16'>
                                <h2 className='section-heading'>{section.title}</h2>
                                <div className='space-y-5 leading-relaxed'>{section.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
                            </div>
                        </FadeOnScroll>
                    </div>
                </section>
            ))}
            <section id='discovery-call' className='section bg-secondary text-pure'>
                <div className='container px-5 text-center'>
                    <FadeOnScroll>
                        <h2 className='section-heading !text-pure max-w-2xl mx-auto'>{service.ctaTitle}</h2>
                        <div className='mt-6 max-w-2xl mx-auto space-y-4 text-gray-200 leading-relaxed'>
                            {service.ctaParagraphs.map(text => <p key={text}>{text}</p>)}
                        </div>
                        <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className={`${callClass} mt-8`}>15-minute discovery call</a>
                        <div className='mt-6'><Link href='/#services' className='text-sm underline underline-offset-4 hover:text-white'>Explore all services</Link></div>
                    </FadeOnScroll>
                </div>
            </section>
        </div>
    )
}
