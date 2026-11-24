import Link from 'next/link'
import services from '@/constants/services.constants'

// Links a blog post to the service page its topic belongs to (the topic-cluster
// "pillar"). Renders nothing for general articles with no single service.
const BlogServiceCta = ({ href }) => {
    const service = services.find(item => item.href === href)
    if (!service) return null

    return (
        <aside className='mt-12 px-3' aria-label='Related service'>
            <Link
                href={service.href}
                className='group card-accent flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 hover:shadow-[0_16px_36px_rgba(24,34,48,0.08)] motion-safe:hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
            >
                <span className='min-w-0'>
                    <span className='block text-sm font-semibold uppercase tracking-wider text-primary'>Related service</span>
                    <span className='block mt-2 font-clash text-xl sm:text-2xl font-semibold text-secondary group-hover:text-primary-hover transition-colors'>{service.title}</span>
                    <span className='block mt-2 text-light'>{service.description}</span>
                </span>
                <span className='shrink-0 inline-flex items-center gap-2 font-semibold text-primary'>
                    <span className='link-grow'>Explore {service.title}</span>
                    <span aria-hidden='true' className='w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-colors'>
                        <svg viewBox='0 0 16 16' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' className='arrow-icon w-4 h-4'>
                            <path d='M3 8h10M9 4l4 4-4 4' />
                        </svg>
                    </span>
                </span>
            </Link>
        </aside>
    )
}

export default BlogServiceCta
