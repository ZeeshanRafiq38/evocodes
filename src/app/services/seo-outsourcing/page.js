import Image from 'next/image'
import Link from 'next/link'
import app from '@/constants/app.constants'
import FadeOnScroll from '@/components/global/FadeOnScroll'
import pageMetadata from '@/utils/pageMetadata'
import ServiceTools from '@/components/services/ServiceTools'
import Testimonials from '@/components/home/testimonials'
import RelatedServices from '@/components/services/RelatedServices'
import Faqs from '@/components/home/faqs'

const PATH = '/services/seo-outsourcing'
const COVER = '/images/cover-seo-content.jpg'
const COVER_ALT = 'Organic search performance report'

const baseMetadata = pageMetadata(
    'SEO Outsourcing Services for Agencies & Brands | Vaforus',
    'Outsource SEO to a dedicated team. Vaforus delivers white label SEO, link building, content and GEO/AEO with founder-led management. Book a free call.',
    PATH
)

export const metadata = {
    ...baseMetadata,
    robots: { index: true, follow: true },
    openGraph: {
        ...baseMetadata.openGraph,
        title: 'SEO Outsourcing Services | Vaforus',
        description: 'Dedicated SEO, GEO and AEO team under founder-led management. Book a free call.',
        images: [{ url: COVER, alt: COVER_ALT }],
    },
    twitter: {
        ...baseMetadata.twitter,
        title: 'SEO Outsourcing Services | Vaforus',
        description: 'Dedicated SEO, GEO and AEO team under founder-led management. Book a free call.',
    },
}

const capabilities = [
    { title: 'SEO Audits and Strategy', text: "Not sure why your website isn't generating organic traffic? We review your website, identify technical and content gaps, assess competitors, and build a practical SEO strategy around your business goals. Our SEO audit and keyword research help establish what needs attention first. This gives your SEO outsourcing services a clear starting point." },
    { title: 'Technical SEO', text: 'A website can look fine to visitors and still create technical SEO problems for search engines. We identify and address issues involving crawlability, indexing, site structure, page speed, and other factors that can affect how search engines access your pages.' },
    { title: 'On-Page SEO', text: "If your pages aren't targeting the right searches or answering what visitors need to know, rankings alone won't deliver much value. We improve page titles, headings, internal links, content structure, and search intent alignment through focused on-page SEO. Strong on-page SEO also makes the page's purpose clearer." },
    { title: 'SEO Content and Content Creation', text: 'Publishing content without a clear strategy can leave your blog full of articles that attract little relevant traffic. Our SEO content work includes content planning, briefs, optimisation, and content creation designed around search intent, topical relevance, and the questions your customers are asking. We align these SEO services with the topics that matter to your buyers.' },
    { title: 'Link Building', text: "Relevant backlinks can strengthen your website's authority and help important pages compete in search results. We support white-hat link building through a quality-focused approach that prioritises relevance and credibility over shortcuts or bulk links." },
    { title: 'Local SEO', text: 'Need to reach customers in specific service areas? We can support local SEO activities that help improve your visibility for location-based searches and make it easier for nearby customers to find your business.' },
    { title: 'SEO Reporting and Rank Tracking', text: "You shouldn't have to guess what your SEO team is working on or whether the work is making a difference. We monitor keyword performance, track progress, and provide SEO reporting that connects completed activities with visibility, traffic, and business objectives. Our SEO services are reviewed against agreed priorities." },
]

const aiSearch = [
    { label: 'GEO', title: 'Generative Engine Optimization (GEO)', text: 'GEO focuses on improving how your brand and content can appear in generative AI search experiences. We strengthen content clarity, topical coverage, entity information, and supporting signals so AI systems can better understand what your business offers and when it is relevant.' },
    { label: 'AEO', title: 'Answer Engine Optimization (AEO)', text: 'AEO helps structure your content to answer specific questions clearly. We identify useful questions, improve page structure, and create concise, well-supported answers that can serve search features and answer engines.' },
    { label: 'AI Search', title: 'AI Search Visibility', text: 'Traditional SEO remains important, but search behaviour is changing. We consider how your business can be discovered across Google Search, AI Overviews, and LLM-powered tools as part of a joined-up organic visibility strategy.' },
]

const whiteLabel = [
    'SEO audits and keyword research for client websites.',
    'Technical optimisation and on-page improvements.',
    'SEO content planning, briefs, and content creation.',
    'White-hat link building and authority-building activities.',
    'AI search visibility improvements.',
    'Rank tracking, progress updates, and SEO reporting.',
]

const benefits = [
    ['No additional full-time hires', 'Access SEO services without the recruitment process and ongoing overhead of building an in-house department.'],
    ['Managed execution', 'Our team coordinates the agreed work, priorities, communication, and delivery.'],
    ['One team across organic search', 'Bring technical SEO, content, link building, GEO, and AEO together instead of managing separate providers.'],
    ['Founder-led oversight', 'Work is supervised internally, giving you a clear point of accountability rather than another layer of sales handoffs.'],
    ['Flexible, cost-effective support', 'Scale the SEO work you need without committing to a full-time team before your workload justifies one.'],
    ['More time to run your business', 'Spend less time chasing updates and reviewing disconnected tasks, and more time focusing on customers and growth.'],
]

const outsourceSignals = [
    ["Your website isn't attracting qualified traffic", "You're publishing occasionally, but organic visibility isn't translating into relevant enquiries."],
    ['SEO tasks keep getting pushed back', 'Technical fixes, content updates, and optimisation are always competing with more urgent work.'],
    ["You can't justify hiring SEO specialists", 'You need ongoing expertise, but not enough to warrant several full-time roles.'],
    ['Your marketing team needs execution support', "Your strategy is clear, but there isn't enough capacity to carry out the work consistently."],
    ['Managing freelancers is becoming a job of its own', "You're spending time coordinating writers, technical specialists, and link builders instead of moving the business forward."],
    ['Your agency is reaching delivery capacity', 'New client work is coming in, but your existing team cannot absorb more SEO accounts.'],
    ['You want to improve AI search visibility', 'You need to consider AI search visibility alongside the SEO foundations that support organic discovery.'],
]

const faqs = [
    { question: 'What are SEO outsourcing services?', answer: 'SEO outsourcing services give your business access to external SEO expertise and execution without hiring a full in-house team. With Vaforus, the work is handled by a managed remote team and overseen internally, covering the agreed strategy, optimisation, content, and reporting priorities.' },
    { question: 'Do you offer white label SEO?', answer: 'Yes. We provide white label SEO support for agencies that need additional delivery capacity. Your agency owns the client relationship, while our team works behind the scenes on the agreed scope and keeps delivery organised.' },
    { question: 'How does SEO outsourcing work?', answer: 'We start by understanding your business, website, audience, and goals. We review the current search performance, agree on priorities, and define the work to be delivered. Our team then carries out the agreed tasks, shares progress, and adjusts priorities as your needs evolve. Our SEO strategists keep the work focused on the outcomes that matter.' },
    { question: "What's the difference between SEO, generative engine optimization, and answer engine optimization?", answer: 'SEO focuses on improving visibility in traditional search results. Generative engine optimization (GEO) focuses on how brands and content are understood and surfaced in generative AI experiences. Answer engine optimization focuses on structuring useful, direct answers for search features and answer engines. They overlap, but each addresses a different part of how people discover information.' },
    { question: 'How long does SEO outsourcing take to show results?', answer: "SEO is an ongoing process, not an instant switch. The timeframe depends on your website's current condition, competition, industry, and the work required. Technical fixes and page improvements may show effects sooner, while building authority and sustained organic growth typically takes longer. We focus on consistent execution and meaningful progress rather than promising overnight rankings." },
]

// Structured data mirrors the visible content only (Service + FAQ). Organization is site-wide in layout.js.
const schema = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'SEO Outsourcing Services',
        serviceType: 'SEO outsourcing',
        url: `https://vaforus.com${PATH}`,
        description: 'Managed SEO outsourcing covering SEO audits, technical SEO, on-page SEO, SEO content, link building, local SEO, reporting, GEO and AEO, plus white label SEO for agencies.',
        provider: { '@type': 'Organization', name: 'Vaforus', url: 'https://vaforus.com' },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
    },
]

const callClass = 'btn-primary inline-flex items-center justify-center gap-2 px-7 py-3 font-medium text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4'

const Tick = () => (
    <span aria-hidden='true' className='mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm text-white'>✓</span>
)

export default function SeoOutsourcingPage() {
    return (
        <div className='service-page overflow-hidden'>
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            {/* 1. Hero */}
            <section className='relative isolate overflow-hidden bg-secondary text-pure'>
                <Image src={COVER} alt={COVER_ALT} fill priority sizes='100vw' className='object-cover object-center -z-20' />
                <div className='absolute inset-0 bg-[image:var(--service-overlay)] -z-10' />
                <div className='container px-5 py-12 md:py-20'>
                    <nav aria-label='Breadcrumb' className='mb-10 text-sm text-gray-200'>
                        <Link href='/#services' className='underline underline-offset-4 hover:text-white'>Our Services</Link>
                        <span aria-hidden='true' className='mx-3'>/</span>
                        <span aria-current='page'>SEO Outsourcing</span>
                    </nav>
                    <p className='mb-4 text-sm font-semibold uppercase tracking-[.14em] text-[#FFDCBE]'>Managed SEO team</p>
                    <h1 className='page-title max-w-[24ch]'>SEO Outsourcing Services That Turn Search Into Leads and Revenue</h1>
                    <p className='service-hook mt-5 max-w-3xl font-clash'>Your search visibility shouldn&apos;t depend on how much time you have left after running your business.</p>
                    <div className='mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center'>
                        <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className={callClass}>{app.ctaLabel}</a>
                        <span className='text-sm text-gray-300'>{app.ctaNote}</span>
                    </div>
                </div>
            </section>

            {/* Intro + 2. What we can help with */}
            <section className='section bg-white'>
                <div className='container px-5'>
                    <FadeOnScroll>
                        <div className='grid gap-10 border-b border-gray-200 pb-12 md:grid-cols-[1fr_280px] md:items-center'>
                            <div className='max-w-3xl'>
                                <p className='home-eyebrow mb-4'>The problem we solve</p>
                                <div className='space-y-4 text-lg text-gray-600'>
                                    <p>Ranking on Google takes more than publishing a few blog posts. Your website needs the right technical foundations, useful content, relevant links, and a strategy that turns search visibility into qualified leads.</p>
                                    <p>But when keyword research keeps getting postponed, technical issues go unresolved, and content never makes it onto the calendar, organic growth becomes another job you don&apos;t have time to manage.</p>
                                    <p>Vaforus provides SEO outsourcing services for businesses that need consistent search execution without recruiting and managing an in-house SEO department. Our managed team handles the work while our internal team oversees priorities, communication, and delivery. These SEO services are planned around your goals, not a generic checklist.</p>
                                    <p className='font-semibold text-secondary'>When you outsource SEO, you avoid adding another full-time hire or coordinating a different freelancer for every task. You get a dedicated team working as an extension of your business, with founder-led oversight from Vaforus.</p>
                                </div>
                            </div>
                            <ServiceTools title='SEO Outsourcing' />
                        </div>
                    </FadeOnScroll>

                    <div className='mt-14 text-center'>
                        <p className='home-eyebrow mb-4'>What we can help with</p>
                        <h2 className='section-heading'>What We Can Help With</h2>
                        <p className='sub-text mx-auto mt-5 max-w-2xl text-gray-600'>From fixing the issues holding your website back to building a stronger presence across search and AI platforms, our SEO services cover the work required to improve visibility and attract the right audience.</p>
                    </div>

                    <div className='mt-10 grid gap-5 md:grid-cols-2'>
                        {capabilities.map((item, index) => (
                            <div key={item.title} className={index === capabilities.length - 1 ? 'md:col-span-2' : ''}>
                            <FadeOnScroll>
                                <article className='group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_30px_rgba(24,34,48,.04)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_36px_rgba(24,34,48,.09)] sm:p-7'>
                                    <div className='flex items-start gap-4'>
                                        <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(196,81,34,.1)] text-sm font-bold text-primary'>{String(index + 1).padStart(2, '0')}</span>
                                        <div>
                                            <h3 className='font-clash text-xl font-semibold text-secondary'>{item.title}</h3>
                                            <p className='mt-3 text-gray-600'>{item.text}</p>
                                        </div>
                                    </div>
                                </article>
                            </FadeOnScroll>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Beyond traditional search */}
            <section className='section bg-[#F3F6F7]'>
                <div className='container px-5'>
                    <FadeOnScroll>
                        <div className='max-w-3xl'>
                            <p className='home-eyebrow mb-4'>GEO &amp; AEO</p>
                            <h2 className='section-heading'>Get Found Beyond Traditional Search</h2>
                            <p className='mt-5 text-xl text-dark'>Your next customer may not discover your business through a list of blue links.</p>
                            <div className='mt-4 space-y-4 text-lg text-gray-600'>
                                <p>People are increasingly using AI Overviews, ChatGPT, and other LLMs to research services, compare providers, and find answers. If your brand is missing from those answers, you may be overlooked before a potential customer even visits Google.</p>
                                <p>Our GEO (generative engine optimization) and AEO (answer engine optimization) work helps make your website and brand information easier for AI-driven search experiences to understand, retrieve, and reference.</p>
                            </div>
                        </div>
                    </FadeOnScroll>
                    <div className='mt-10 grid gap-5 lg:grid-cols-3'>
                        {aiSearch.map(item => (
                            <FadeOnScroll key={item.title}>
                                <article className='h-full rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_14px_30px_rgba(24,34,48,.08)]'>
                                    <span className='text-xs font-semibold uppercase tracking-[.12em] text-primary'>{item.label}</span>
                                    <h3 className='mt-3 font-clash text-xl font-semibold text-secondary'>{item.title}</h3>
                                    <p className='mt-4 text-gray-600'>{item.text}</p>
                                </article>
                            </FadeOnScroll>
                        ))}
                    </div>
                    <p className='mt-8 mx-auto max-w-3xl text-center font-semibold text-secondary'>GEO is part of that wider visibility effort. The goal isn&apos;t to chase every new AI platform. It&apos;s to make sure your business has clear, useful, credible information wherever potential customers are searching for answers.</p>
                </div>
            </section>

            {/* 4. White label for agencies */}
            <section className='section bg-white'>
                <div className='container grid gap-10 px-5 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:items-start'>
                    <FadeOnScroll>
                        <div>
                            <p className='home-eyebrow mb-4'>For agencies</p>
                            <h2 className='section-heading'>White Label SEO Services for Agencies</h2>
                            <p className='mt-6 text-xl text-dark'>Your agency shouldn&apos;t have to turn down SEO work because your team is already at capacity.</p>
                            <div className='mt-4 space-y-4 text-gray-600'>
                                <p>Taking on more clients can mean more audits, content requirements, technical fixes, link building, reporting, and deadlines. Hiring specialists for every new account adds overhead, while relying on multiple freelancers can leave your team managing the work instead of managing client relationships.</p>
                                <p>Vaforus provides white label SEO support for agencies that want to expand delivery capacity without building another department. Our SEO outsourcing services give your agency a managed delivery partner.</p>
                                <p className='font-semibold text-secondary'>Your agency manages the client relationship. Our team works behind the scenes on the agreed SEO scope, with internal oversight to keep execution organised and consistent.</p>
                            </div>
                        </div>
                    </FadeOnScroll>
                    <FadeOnScroll>
                        <div className='rounded-2xl bg-secondary bg-[image:var(--section-gradient)] p-7 sm:p-9 text-white'>
                            <h3 className='font-clash text-xl font-semibold'>Our white label SEO support can include:</h3>
                            <ul className='mt-6 space-y-4'>
                                {whiteLabel.map(item => (
                                    <li key={item} className='flex gap-3 text-gray-200'>
                                        <span aria-hidden='true' className='mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white'>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-7 border-t border-white/15 pt-6 text-sm leading-relaxed text-gray-300'>Whether agencies need support for selected accounts or a dedicated SEO team to help manage ongoing delivery, we work as an extension of your agency.</p>
                        </div>
                    </FadeOnScroll>
                </div>
            </section>

            {/* 5. Why outsource to Vaforus */}
            <section className='section bg-[#F3F6F7]'>
                <div className='container grid gap-10 px-5 lg:grid-cols-[.85fr_1.15fr] lg:gap-16'>
                    <FadeOnScroll>
                        <div className='lg:sticky lg:top-28 lg:self-start'>
                            <p className='home-eyebrow mb-4'>Why Vaforus</p>
                            <h2 className='section-heading'>Why Outsource SEO to Vaforus?</h2>
                            <p className='mt-6 text-xl text-dark'>You don&apos;t need another person to manage. You need the SEO work to move forward.</p>
                            <div className='mt-4 space-y-4 text-gray-600'>
                                <p>Building an in-house SEO function means recruiting specialists, managing workloads, and taking on ongoing employment costs. Hiring individual contractors can create another layer of work: briefing different people, checking deliverables, chasing deadlines, and connecting the pieces yourself.</p>
                                <p>Vaforus offers a managed alternative as an SEO outsourcing company built around supervised execution. As your SEO outsourcing company, we keep delivery under one roof.</p>
                                <p>Our internal team oversees the work, making our managed SEO services easier to work with. You&apos;re not left managing a collection of freelancers or trying to coordinate every task.</p>
                            </div>
                        </div>
                    </FadeOnScroll>
                    <div>
                        <p className='mb-4 font-semibold text-secondary'>Here&apos;s what that means for your business:</p>
                        <div className='divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white px-6 sm:px-8'>
                            {benefits.map(([title, text]) => (
                                <FadeOnScroll key={title}>
                                    <div className='flex gap-4 py-6'>
                                        <Tick />
                                        <div>
                                            <h3 className='font-clash text-lg font-semibold text-secondary'>{title}</h3>
                                            <p className='mt-1 text-gray-600'>{text}</p>
                                        </div>
                                    </div>
                                </FadeOnScroll>
                            ))}
                        </div>
                        <div className='mt-6 space-y-3 text-gray-600'>
                            <p>Our managed SEO services are delivered by a remote team working as an extension of your business. These managed SEO services keep execution consistent as requirements change.</p>
                            <p className='font-semibold text-secondary'>You stay involved in direction and approvals; we take responsibility for moving the agreed work forward.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. When to outsource */}
            <section className='section bg-secondary bg-[image:var(--section-gradient)] text-pure'>
                <div className='container px-5'>
                    <FadeOnScroll>
                        <div className='max-w-3xl'>
                            <p className='mb-4 text-sm font-semibold uppercase tracking-[.14em] text-[#FFDCBE]'>Is it time to outsource?</p>
                            <h2 className='section-heading !text-pure'>When Should You Outsource SEO?</h2>
                            <p className='mt-5 text-lg text-gray-200'>You may not need another full-time employee. You may need the SEO work that keeps slipping down your priority list to finally get done.</p>
                            <p className='mt-6 font-semibold text-white'>SEO outsourcing makes sense when:</p>
                        </div>
                    </FadeOnScroll>
                    <div className='mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                        {outsourceSignals.map(([title, text]) => (
                            <FadeOnScroll key={title}>
                                <article className='h-full rounded-2xl border border-white/15 bg-white/[.06] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#FFDCBE]/60 hover:bg-white/[.1]'>
                                    <h3 className='font-clash text-lg font-semibold text-white'>{title}</h3>
                                    <p className='mt-3 text-gray-300'>{text}</p>
                                </article>
                            </FadeOnScroll>
                        ))}
                    </div>
                    <p className='mt-10 max-w-3xl text-gray-200'>Instead of letting your SEO backlog grow or hiring before you&apos;re ready, outsource SEO services to a managed team that can take ownership of execution while you focus on running the business.</p>
                </div>
            </section>

            <Testimonials category={PATH} />

            {/* 7. FAQ */}
            <Faqs faqsData={faqs} />

            {/* 8. Final CTA */}
            <section id='discovery-call' className='section bg-secondary bg-[image:var(--section-gradient)] text-pure'>
                <div className='container px-5 text-center'>
                    <FadeOnScroll>
                        <p className='mb-4 text-sm font-semibold uppercase tracking-[.14em] text-[#FFDCBE]'>Your next step</p>
                        <h2 className='section-heading !text-pure mx-auto max-w-3xl'>Turn Search Visibility Into a Consistent Growth Channel</h2>
                        <div className='mx-auto mt-6 max-w-3xl space-y-4 text-gray-200'>
                            <p>Whether you need help improving existing rankings, building a stronger content strategy, or preparing your brand for AI-driven discovery, Vaforus can work alongside your business as your SEO outsourcing partner.</p>
                            <p>From technical SEO and on-page improvements to content, link building, GEO, and AEO, our team brings the work together under one managed approach.</p>
                            <p>You get dedicated SEO support without recruiting specialists, coordinating individual freelancers, or expanding your in-house team. Our SEO strategists focus on the agreed priorities while Vaforus manages execution internally.</p>
                        </div>
                        <p className='mt-6 font-semibold text-white'>Build a stronger search presence without building another department.</p>
                        <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className={`${callClass} mt-8`}>{app.ctaLabel}</a>
                        <p className='mt-3 text-sm text-gray-300'>{app.ctaNote}</p>
                        <div className='mt-6'><Link href='/#services' className='text-sm underline underline-offset-4 hover:text-white'>Explore all services</Link></div>
                    </FadeOnScroll>
                </div>
            </section>
            <RelatedServices href={PATH} />
        </div>
    )
}
