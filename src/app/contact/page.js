import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/contact/ContactForm'
import app from '@/constants/app.constants'
import team from '@/constants/team.constants'
import pageMetadata from '@/utils/pageMetadata'

export const metadata = pageMetadata(
    'Contact Vaforus | Book a Free Discovery Call',
    'Contact Vaforus about business outsourcing services. Send a message and we reply within 24 hours, or book a free 15-minute discovery call with our founder.',
    '/contact'
)

const icon = path => (
    <svg aria-hidden='true' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'>{path}</svg>
)

const contactItems = [
    { label: 'Email', value: app.email, href: `mailto:${app.email}`, icon: icon(<><rect x='3' y='5' width='18' height='14' rx='2' /><path d='m3 7 9 6 9-6' /></>) },
    { label: 'Phone', value: app.contactNo, href: `tel:${app.contactForCall}`, icon: icon(<path d='M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2' />) },
    { label: 'WhatsApp', value: 'Chat with us', href: app.whatsappUrl, external: true, icon: icon(<path d='M4 20l1.3-3.9A8 8 0 1 1 8 19z' />) },
    { label: 'Office', value: app.officeAddress, icon: icon(<><path d='M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z' /><circle cx='12' cy='10' r='2.5' /></>) },
]

export default function ContactPage() {
    return (
        <div>
            <header className='listing-header bg-secondary bg-[image:var(--section-gradient)] text-center text-pure'>
                <nav aria-label='Breadcrumb' className='text-sm text-gray-300 mb-6'>
                    <Link href='/' className='underline underline-offset-4 hover:text-white'>Home</Link>
                    <span aria-hidden='true' className='mx-3'>/</span>
                    <span aria-current='page'>Contact</span>
                </nav>
                <h1 className='page-title'>Contact Us</h1>
                <p className='page-intro'>Tell us what you need help with and we&apos;ll get back to you within 24 hours. Prefer to talk it through? Book a free discovery call instead.</p>
            </header>

            <section className='section bg-[#F3F6F7]'>
                <div className='container mx-auto px-5 grid lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-10 items-start'>
                    <div className='min-w-0 rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-[0_20px_50px_rgba(24,34,48,0.06)]'>
                        <p className='home-eyebrow mb-4'>Send a message</p>
                        <h2 className='font-clash text-2xl sm:text-3xl font-semibold text-secondary'>How can we help?</h2>
                        <p className='mt-2 mb-8 text-base text-gray-600'>Tell us a bit about your project. We reply within 24 hours.</p>
                        <ContactForm />
                    </div>

                    <aside className='min-w-0 space-y-6 lg:sticky lg:top-28'>
                        <ul className='rounded-2xl border border-gray-200 bg-white p-2 shadow-[0_10px_30px_rgba(24,34,48,0.05)]'>
                            {contactItems.map(item => {
                                const content = (
                                    <>
                                        <span className='w-11 h-11 shrink-0 rounded-xl bg-primary-soft text-primary flex items-center justify-center'>{item.icon}</span>
                                        <span className='min-w-0'>
                                            <span className='block text-xs font-semibold uppercase tracking-[.08em] text-light'>{item.label}</span>
                                            <span className='block mt-0.5 font-medium text-secondary break-words'>{item.value}</span>
                                        </span>
                                    </>
                                )
                                return (
                                    <li key={item.label}>
                                        {item.href ? (
                                            <a href={item.href} {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                                                className='flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'>
                                                {content}
                                            </a>
                                        ) : (
                                            <div className='flex items-center gap-4 p-4'>{content}</div>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>

                        <div className='rounded-2xl bg-secondary bg-[image:var(--section-gradient)] p-6 sm:p-7 text-white'>
                            <div className='flex items-center gap-3'>
                                <span className='relative w-12 h-12 shrink-0 overflow-hidden rounded-full ring-2 ring-[rgba(196,81,34,0.5)]'>
                                    <Image src={team.founder.image} alt='' fill sizes='48px' className='object-cover object-top' />
                                </span>
                                <span>
                                    <span className='block text-sm text-gray-300'>Prefer to talk?</span>
                                    <span className='block font-clash text-lg font-semibold'>Book a call with {team.founder.name.split(' ')[0]}</span>
                                </span>
                            </div>
                            <p className='mt-4 text-sm leading-relaxed text-gray-300'>A 15-minute call to understand your priorities and see where we can help.</p>
                            <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className='btn-primary mt-5 w-full px-5 py-3 text-sm font-medium'>
                                {app.ctaLabel}
                            </a>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    )
}
