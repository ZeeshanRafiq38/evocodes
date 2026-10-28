'use client'
import { useMemo } from 'react'
import Marquee from 'react-fast-marquee'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import { getTestimonials } from '@/constants/testimonials.constants'

// One 24px line icon per service, used as the card avatar instead of a person.
const serviceIcons = {
    '/services/web-development': <><path d='m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14' /></>,
    '/services/ai-integrations': <><path d='M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z' /><path d='M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z' /></>,
    '/services/ui-ux-graphic-design': <><path d='M12 20h9' /><path d='M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z' /></>,
    '/services/seo-content': <><circle cx='11' cy='11' r='7' /><path d='m20 20-3.5-3.5' /></>,
    '/services/social-media-management': <><circle cx='18' cy='5' r='3' /><circle cx='6' cy='12' r='3' /><circle cx='18' cy='19' r='3' /><path d='m8.6 13.5 6.8 4M15.4 6.5l-6.8 4' /></>,
    '/services/email-marketing': <><rect x='3' y='5' width='18' height='14' rx='2' /><path d='m3 7 9 6 9-6' /></>,
    '/services/lead-generation-outbound-sales': <><circle cx='12' cy='12' r='9' /><circle cx='12' cy='12' r='5' /><circle cx='12' cy='12' r='1' /></>,
    '/services/digital-advertising': <><path d='M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1Z' /><path d='M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12' /></>,
}

const ReviewCard = ({ review, servicePage = false }) => {
    const profile = servicePage ? review.innerDemoProfile : (review.demoProfile || review.innerDemoProfile)
    return (
    <figure className='relative flex min-h-[430px] w-[min(320px,calc(100vw-32px))] sm:w-[380px] flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(24,34,48,0.05)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(24,34,48,0.10)]'>
        <svg aria-hidden='true' viewBox='0 0 32 24' className='w-8 h-6 text-[rgba(196,81,34,0.25)]' fill='currentColor'>
            <path d='M0 24V14.4C0 6.4 4.3 1.6 12.8 0l1.6 3.2C10 4.5 7.8 7 7.4 10.8H13V24H0Zm18.9 0V14.4C18.9 6.4 23.2 1.6 31.7 0l1.6 3.2c-4.4 1.3-6.6 3.8-7 7.6h5.6V24H18.9Z' />
        </svg>
        <blockquote className='mt-4 flex-1 text-base leading-relaxed text-dark'>
            &ldquo;{review.text}&rdquo;
        </blockquote>
        <figcaption className='mt-6 pt-5 border-t border-gray-100 flex items-center gap-3'>
            {!servicePage && review.demoProfile ? (
                <span aria-hidden='true' className='w-12 h-12 shrink-0 rounded-full bg-gray-100 ring-2 ring-white shadow-sm' style={{
                    backgroundImage: 'url(/images/testimonial-demo/fictional-profiles.png)',
                    backgroundSize: '444% 296%',
                    backgroundPosition: review.demoProfile.position,
                    backgroundRepeat: 'no-repeat',
                }} />
            ) : <span aria-hidden='true' className='relative w-12 h-12 shrink-0 overflow-hidden rounded-2xl bg-[image:var(--primary-gradient)] text-white flex items-center justify-center ring-1 ring-[rgba(196,81,34,0.35)] shadow-[0_8px_18px_rgba(196,81,34,0.28)] before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-gradient-to-b before:from-white/25 before:to-transparent'>
                <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='relative w-[22px] h-[22px]'>
                    {serviceIcons[review.href]}
                </svg>
            </span>}
            <span className='min-w-0 text-sm leading-relaxed'>
                <span className='block font-semibold text-secondary'>{profile?.name || `${review.label} client`}</span>
                {profile && <>
                    <span className='block text-light'>{profile.region}{!servicePage && ` · ${review.label}`}</span>
                </>}
            </span>
        </figcaption>
    </figure>
)
}

// Mix services so the strip doesn't show six cards about the same service in a row.
const interleave = items => {
    const buckets = items.reduce((map, item) => map.set(item.href, [...(map.get(item.href) || []), item]), new Map())
    const lists = [...buckets.values()]
    const mixed = []
    for (let i = 0; lists.some(list => list[i]); i++) lists.forEach(list => list[i] && mixed.push(list[i]))
    return mixed
}

const Strip = ({ items, fade, servicePage }) => (
    <Marquee className='testimonial-strip' speed={32} pauseOnHover gradient gradientColor={fade} gradientWidth={80}>
        {items.map((review, index) => (
            <div key={`${review.href}-${index}`} className='mx-3 py-3 self-stretch flex'>
                <ReviewCard review={review} servicePage={servicePage} />
            </div>
        ))}
    </Marquee>
)

// Homepage: every testimonial. Service pages: pass `category` (the page href)
// to show only that service's feedback; nothing renders if there is none.
const Testimonials = ({ className = '', category }) => {
    // Edge fade must match the section background (grey on the homepage, white on service pages).
    const fade = className.includes('#F3F6F7') ? '#F3F6F7' : '#FFFFFF'

    const items = useMemo(() => {
        if (category) return getTestimonials(category)
        return interleave(getTestimonials())
    }, [category])

    if (!items.length) return null

    return (
        <div className={`section ${className}`}>
            <div className='container mx-auto'>
                <SlideOnScroll direction='bottom'>
                    <header className='text-center'>
                        <p className='home-eyebrow mb-4'>Client reviews</p>
                        <h2 className='section-heading mx-auto'>What Clients Say</h2>
                        <p className='sub-text'>
                            {category ? 'What clients have said about this work, shown as written.' : 'Feedback from clients across our services, shown as written.'}
                        </p>
                    </header>
                </SlideOnScroll>

            </div>

            <div key={category || 'all'} className='relative mt-10'>
                <Strip items={items} fade={fade} servicePage={Boolean(category)} />
            </div>
        </div>
    )
}

export default Testimonials
