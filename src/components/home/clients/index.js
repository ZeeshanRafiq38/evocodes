import SlideOnScroll from '@/components/global/SlideOnScroll'
import CalendlyWidget from '@/components/global/CalendlyWidget'
import app from '@/constants/app.constants'
import team from '@/constants/team.constants'
import Image from 'next/image'

const expectations = ['Understand your priorities and current workload', 'Identify which services fit', 'See if there\'s a good fit for working together']

export default function Clients() {
    return (
        <section className='section bg-secondary px-5 text-white' style={{ backgroundImage: 'var(--section-gradient)' }} id='discovery-call'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center'>
                    <SlideOnScroll direction='left' className='min-w-0'>
                        <p className='home-eyebrow !text-orange-200 mb-4'>Start with a conversation</p>
                        <h2 className='section-heading !text-white'>Tell Us Where Your Team Needs Support</h2>
                        <p className='text-base sm:text-lg leading-relaxed text-gray-200 mt-5 max-w-xl'>
                            Share your goals, the work taking up your time, and where you need extra expertise. We&apos;ll discuss which services fit and what working together could look like.
                        </p>
                        <h3 className='mt-8 font-clash text-lg font-semibold'>In 15 minutes, we&apos;ll:</h3>
                        <ul className='mt-4 space-y-3'>
                            {expectations.map(item => (
                                <li key={item} className='flex gap-3 text-gray-200'>
                                    <span aria-hidden='true' className='mt-0.5 w-5 h-5 shrink-0 rounded-full bg-primary text-white text-[11px] flex items-center justify-center'>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className='mt-8 text-sm text-gray-300'>
                            Prefer chatting first?{' '}
                            <a href={app.whatsappUrl} target='_blank' rel='noopener noreferrer' className='link-grow text-orange-200 font-medium'>Message us on WhatsApp</a>
                            {' '}or email <a href={`mailto:${app.email}`} className='link-grow text-orange-200 font-medium break-all'>{app.email}</a>
                        </p>
                    </SlideOnScroll>
                    <SlideOnScroll direction='right' className='min-w-0'>
                        <div className='bg-white text-dark rounded-2xl p-3 sm:p-4 shadow-[0_24px_60px_rgba(0,0,0,0.25)]'>
                            <div className='flex items-center gap-3 px-2 pt-1 pb-4'>
                                <span className='relative w-12 h-12 shrink-0 overflow-hidden rounded-full'>
                                    <Image src={team.founder.image} alt='' fill sizes='48px' className='object-cover object-top' />
                                </span>
                                <p className='text-sm leading-snug'>
                                    <span className='block text-light'>You&apos;ll speak with</span>
                                    <span className='block font-clash text-base font-semibold text-secondary'>{team.founder.name}, Founder</span>
                                </p>
                            </div>
                            <CalendlyWidget height={620} />
                            <p className='text-center text-sm text-light pt-3 pb-1'>
                                {app.ctaNote} ·{' '}
                                <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className='link-grow text-primary font-medium'>Open in Calendly</a>
                            </p>
                        </div>
                    </SlideOnScroll>
                </div>
            </div>
        </section>
    )
}
