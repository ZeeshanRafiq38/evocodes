import Link from 'next/link'
import app from '@/constants/app.constants'
import { serviceGroups } from '@/constants/services.constants'

export const metadata = {
    title: 'Page Not Found | Vaforus',
    robots: { index: false },
}

export default function NotFound() {
    return (
        <div className='bg-secondary bg-[image:var(--section-gradient)] text-white'>
            <div className='container mx-auto px-5 py-20 sm:py-28 text-center'>
                <p className='font-clash text-7xl sm:text-8xl font-semibold text-orange-200'>404</p>
                <h1 className='mt-6 font-clash text-3xl sm:text-4xl font-semibold'>We couldn&apos;t find that page</h1>
                <p className='mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-gray-300'>
                    The link may be broken or the page may have moved. Here are a few places to pick up from.
                </p>
                <div className='mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4'>
                    <Link href='/' className='btn-primary px-7 py-4 font-medium'>
                        Back to homepage
                    </Link>
                    <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className='home-secondary-button px-7 py-4 font-medium'>
                        {app.ctaLabel}
                    </a>
                </div>

                <div className='mt-16 pt-10 border-t border-white/10 grid sm:grid-cols-3 gap-8 text-left max-w-4xl mx-auto'>
                    {serviceGroups.map(group => (
                        <nav key={group.title} aria-label={group.title}>
                            <p className='text-xs font-semibold uppercase tracking-[.08em] text-orange-200'>{group.label}</p>
                            <p className='mt-1 font-clash text-lg font-semibold'>{group.title}</p>
                            <ul className='mt-3 space-y-1.5'>
                                {group.services.map(service => (
                                    <li key={service.href}>
                                        <Link href={service.href} className='text-sm text-gray-300 hover:text-white'>
                                            <span className='link-grow'>{service.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
            </div>
        </div>
    )
}
