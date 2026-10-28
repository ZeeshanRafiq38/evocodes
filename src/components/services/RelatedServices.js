import Link from 'next/link'
import FadeOnScroll from '@/components/global/FadeOnScroll'
import { serviceGroups } from '@/constants/services.constants'

// Other services from the same group as the current page.
export default function RelatedServices({ href, className = '' }) {
    const group = serviceGroups.find(g => g.hrefs.includes(href))
    if (!group) return null
    const related = group.services.filter(service => service.href !== href)

    return (
        <section className={`section ${className}`} aria-labelledby='related-services'>
            <div className='container px-5'>
                <FadeOnScroll>
                    <div className='flex flex-col md:flex-row md:items-end justify-between gap-4'>
                        <div>
                            <p className='home-eyebrow mb-3'>{group.title}</p>
                            <h2 id='related-services' className='section-heading'>Related Services</h2>
                        </div>
                        <Link href='/#services' className='shrink-0 font-semibold text-primary'>
                            <span className='link-grow'>See all services</span> <span aria-hidden='true' className='arrow-icon'>→</span>
                        </Link>
                    </div>
                    <ul className={`mt-8 grid gap-4 ${related.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                        {related.map(service => (
                            <li key={service.href}>
                                <Link
                                    href={service.href}
                                    className='group card-accent h-full flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 hover:shadow-[0_16px_36px_rgba(24,34,48,0.08)] motion-safe:hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
                                >
                                    <span className='min-w-0'>
                                        <span className='block font-clash text-lg font-semibold text-secondary group-hover:text-primary-hover transition-colors'>{service.title}</span>
                                        <span className='block mt-1 text-sm text-light'>{service.tagline}</span>
                                    </span>
                                    <span aria-hidden='true' className='shrink-0 w-9 h-9 rounded-full border border-gray-300 text-primary flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-colors'>
                                        <svg viewBox='0 0 16 16' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' className='arrow-icon w-4 h-4'>
                                            <path d='M3 8h10M9 4l4 4-4 4' />
                                        </svg>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </FadeOnScroll>
            </div>
        </section>
    )
}
