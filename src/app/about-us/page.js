import Image from 'next/image'
import Link from 'next/link'
import FadeOnScroll from '@/components/global/FadeOnScroll'
import app from '@/constants/app.constants'
import pageMetadata from '@/utils/pageMetadata'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import team from '@/constants/team.constants'

export const metadata = pageMetadata(
    'About Us | Vaforus',
    'Meet Vaforus, a founder-led remote outsourcing team supporting businesses with development, marketing, sales, and day-to-day execution.',
    '/about-us'
)

const introduction = [
    "Running a growing business often means wearing too many hats. You need a website updated, content written, social media managed, leads generated, prospects followed up with, and marketing tasks completed, but hiring a full-time employee for every function isn't always practical.",
    "Vaforus helps businesses outsource the work they don't need to handle in-house.",
    'We provide remote outsourcing services across web development, SEO and content, social media management, graphic design, lead generation, outbound sales, email marketing, and digital advertising.',
    "Our team works as an extension of your business, taking responsibility for the day-to-day execution of the work you outsource to us. We don't act as a marketplace or simply introduce you to freelancers. We manage projects internally, supervise our team, and remain accountable for the quality of the work delivered.",
    'This gives you access to skilled remote talent without the cost and overhead associated with building every function in-house.'
]

const whyVaforus = [
    'Remote work has made it possible for businesses to access talented professionals from around the world. However, finding, hiring, training, and managing the right people can take significant time and resources.',
    'Freelancing platforms can also leave business owners managing multiple individuals themselves, with no guarantee that the relationship will develop into a reliable long-term arrangement.',
    'Vaforus was built to take that responsibility off your plate.',
    'Our team handles the work internally, with projects managed and supervised by our founder-led team. We focus on understanding your requirements, maintaining quality, and making sure the work gets done consistently.',
    'Whether you need ongoing marketing support, a development team, outbound sales assistance, or help with everyday business tasks, our model allows you to outsource specific functions without the cost of building an entire in-house team.'
]

const founderNote = [
    'I studied aeronautical engineering in Christchurch, New Zealand, and graduated in 2019. When COVID-19 changed the way businesses operated, I began working remotely as a virtual assistant through freelancing platforms.',
    'That experience showed me both sides of remote work. There is exceptional talent around the world, but businesses often struggle with finding the right people, while talented professionals struggle to find stable, long-term opportunities.',
    'I also saw how difficult it can be for businesses to manage remote talent without the right structure, communication, and understanding of international work expectations.',
    'That experience led to Vaforus.',
    'Today, we provide outsourced business services and remote teams that help companies get more done without taking on the cost and complexity of building every function internally.'
]

export default function AboutUsPage() {
    return (
        <div className='service-page'>
            <header className='relative isolate overflow-hidden bg-secondary text-pure'>
                <Image src='/images/about.jpg' alt='' fill priority sizes='100vw' className='object-cover object-center -z-20' />
                <div aria-hidden='true' className='absolute inset-0 -z-10 bg-[image:var(--service-overlay)]' />
                <div className='container px-5 py-12 md:py-20'>
                    <nav aria-label='Breadcrumb' className='text-sm text-gray-200 mb-10'>
                        <Link href='/' className='underline underline-offset-4 hover:text-white'>Home</Link>
                        <span aria-hidden='true' className='mx-3'>/</span>
                        <span aria-current='page'>About Us</span>
                    </nav>
                    <h1 className='page-title'>About Vaforus</h1>
                    <p className='service-hook mt-5 max-w-3xl font-clash'>Outsource the work. Keep your focus on the business.</p>
                    <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className='btn-primary mt-8 px-7 py-3 text-base font-medium'>{app.ctaLabel}</a>
                </div>
            </header>

            <section className='section' aria-label='About Vaforus'>
                <div className='container px-5'>
                    <FadeOnScroll>
                        <div className='max-w-3xl mx-auto space-y-5 text-base sm:text-lg text-dark'>
                            {introduction.map((text, index) => (
                                <p key={text} className={index === 1 ? 'font-semibold text-secondary' : undefined}>{text}</p>
                            ))}
                        </div>
                    </FadeOnScroll>
                </div>
            </section>

            <section className='section bg-[image:var(--card-gradient)]' aria-labelledby='why-vaforus'>
                <div className='container px-5'>
                    <FadeOnScroll>
                        <div className='grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16'>
                            <div className='min-w-0'>
                                <h2 id='why-vaforus' className='section-heading'>Why Vaforus?</h2>
                                <div aria-hidden='true' className='mt-6 h-1 w-16 rounded-full bg-primary' />
                            </div>
                            <div className='min-w-0 space-y-5 text-base text-dark'>
                                {whyVaforus.map((text, index) => (
                                    <p key={text} className={index === 2 ? 'font-semibold text-secondary' : undefined}>{text}</p>
                                ))}
                            </div>
                        </div>
                    </FadeOnScroll>
                </div>
            </section>

            <section className='section' aria-labelledby='founder-note'>
                <div className='container px-5'>
                    <FadeOnScroll>
                        <div className='grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16'>
                            <div className='min-w-0'>
                                <h2 id='founder-note' className='section-heading'>A Note From Our Founder</h2>
                                <div aria-hidden='true' className='mt-6 h-1 w-16 rounded-full bg-primary' />
                            </div>
                            <div className='min-w-0 md:pt-2'>
                                <span aria-hidden='true' className='block font-clash text-7xl leading-none text-[rgba(196,81,34,0.3)] -mb-4'>&ldquo;</span>
                                <div className='space-y-5 text-base sm:text-lg text-dark leading-relaxed'>
                                    {founderNote.map((text, index) => (
                                        <p key={text} className={index === 3 ? 'font-clash text-xl sm:text-2xl font-semibold text-secondary' : undefined}>{text}</p>
                                    ))}
                                </div>
                                <div className='mt-8 flex items-center gap-4'>
                                    <span className='relative w-14 h-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[rgba(196,81,34,0.4)]'>
                                        <Image src={team.founder.image} alt='' fill sizes='56px' className='object-cover object-top' />
                                    </span>
                                    <span>
                                        <span className='block font-clash text-xl font-semibold text-secondary'>{team.founder.name}</span>
                                        <span className='block text-light text-base'>{team.founder.role}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </FadeOnScroll>
                </div>
            </section>

            <section className='section bg-[image:var(--card-gradient)]' aria-labelledby='leadership'>
                <div className='container px-5'>
                    <FadeOnScroll>
                        <header className='text-center'>
                            <p className='home-eyebrow mb-4'>Leadership</p>
                            <h2 id='leadership' className='section-heading mx-auto'>The People Accountable for Your Work</h2>
                            <p className='sub-text'>You work with a small leadership team that stays involved from the first call through delivery.</p>
                        </header>
                    </FadeOnScroll>
                    <ul className='mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto'>
                        {team.leadership.map((person, index) => (
                            <li key={person.name} className='min-w-0'>
                                <SlideOnScroll direction='bottom' delay={index * 0.1} className='h-full'>
                                    <article className='card-accent group h-full rounded-2xl border border-gray-200 bg-white p-4 motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 hover:shadow-[0_20px_40px_rgba(24,34,48,0.10)] motion-safe:hover:-translate-y-1.5'>
                                        <div className='relative aspect-square overflow-hidden rounded-xl bg-secondary'>
                                            <Image src={person.image} alt={`${person.name}, ${person.role}`} fill sizes='(min-width: 640px) 360px, 100vw' className='object-cover object-top motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.03]' />
                                        </div>
                                        <div className='px-2 pt-5 pb-2'>
                                            <h3 className='font-clash text-xl font-semibold text-secondary'>{person.name}</h3>
                                            <p className='text-primary font-medium text-sm mt-1'>{person.role}</p>
                                            <p className='text-dark text-base leading-relaxed mt-3'>{person.bio}</p>
                                        </div>
                                    </article>
                                </SlideOnScroll>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className='section bg-secondary bg-[image:var(--section-gradient)] text-pure'>
                <div className='container px-5 text-center'>
                    <FadeOnScroll>
                        <h2 className='section-heading !text-pure max-w-3xl mx-auto'>You focus on growing the business. We take care of the work behind it.</h2>
                        <div className='mt-8 flex flex-col sm:flex-row justify-center items-center gap-4'>
                            <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className='btn-primary w-full sm:w-auto px-7 py-3 text-base font-medium'>{app.ctaLabel}</a>
                            <Link href='/#services' className='home-secondary-button w-full sm:w-auto px-7 py-3 text-base font-medium'>Explore Our Services</Link>
                        </div>
                    </FadeOnScroll>
                </div>
            </section>
        </div>
    )
}
