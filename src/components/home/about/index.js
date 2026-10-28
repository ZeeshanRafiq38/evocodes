import React from 'react'
import ShapeLeft from './ShapeLeft'
import ShapeRight from './ShapeRight'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import CountUp from '@/components/global/CountUp'
import Image from 'next/image'
import Link from 'next/link'
import team from '@/constants/team.constants'

const benefits = [
    { icon: '↓', title: 'Lower operating costs', text: 'Skilled remote professionals without salaries, workspace, benefits, and other full-time hiring costs.' },
    { icon: '◎', title: 'One team, not five freelancers', text: 'Your work is managed through Vaforus instead of you coordinating several contractors.' },
    { icon: '★', title: 'Founder-led supervision', text: 'Leadership stays involved in every project to maintain standards and accountability.' },
    { icon: '⇄', title: 'Flexible outsourcing', text: 'Outsource one function, several services, or ongoing day-to-day tasks as your needs change.' },
    { icon: '↗', title: 'Global remote talent', text: 'Access skilled professionals beyond your local hiring market.' },
]

const stats = [
    { value: 4, suffix: '+', label: 'Years delivering for clients' },
    { value: 50, suffix: '+', label: 'Websites, apps and campaigns shipped' },
    { value: 9, suffix: '', label: 'Services managed under one team' },
]

const About = () => {
    return (
        <div className='section relative bg-secondary text-pure' style={{ backgroundImage: 'var(--section-gradient)' }}>
            <div className="container mx-auto relative z-10 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
                <div className='min-w-0'>
                    <SlideOnScroll direction='left'>
                        <p className='home-eyebrow !text-orange-200 mb-4'>Why Vaforus</p>
                        <h2 className='section-heading !text-pure'>
                            More Support.<span className='block'>Less Hiring Overhead.</span>
                        </h2>
                    </SlideOnScroll>
                    <ul className='mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-6'>
                        {benefits.map((item, index) => (
                            <li key={item.title} className='min-w-0'>
                                <SlideOnScroll direction='bottom' delay={index * 0.08}>
                                    <div className='flex gap-4'>
                                        <span aria-hidden='true' className='w-10 h-10 shrink-0 rounded-lg bg-[rgba(196,81,34,0.15)] border border-[rgba(196,81,34,0.3)] text-orange-200 flex items-center justify-center text-lg'>{item.icon}</span>
                                        <div>
                                            <h3 className='font-clash text-lg font-semibold text-pure leading-snug'>{item.title}</h3>
                                            <p className='mt-1.5 text-[15px] leading-relaxed text-gray-300'>{item.text}</p>
                                        </div>
                                    </div>
                                </SlideOnScroll>
                            </li>
                        ))}
                    </ul>
                    <dl className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/15 pt-8">
                        {stats.map(stat => (
                            <div key={stat.label} className='min-w-0 flex flex-col-reverse justify-end'>
                                <dt className='mt-2 text-xs sm:text-sm leading-snug text-gray-300'>{stat.label}</dt>
                                <dd className='font-clash text-3xl sm:text-5xl font-semibold leading-none text-orange-200'>
                                    <CountUp value={stat.value} suffix={stat.suffix} />
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="w-full min-w-0 max-w-[560px] mx-auto">
                    <SlideOnScroll direction='right'>
                        <div className="w-full bg-white/10 border border-white/15 rounded-3xl p-3 sm:p-4">
                            <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-2xl">
                            <Image
                                className="object-cover object-center motion-safe:transition-transform motion-safe:duration-700 hover:scale-[1.03]"
                                src="/images/about.jpg"
                                fill
                                sizes="(min-width: 1280px) 530px, (min-width: 1024px) 420px, (min-width: 640px) 528px, calc(100vw - 48px)"
                                alt="Team collaborating on a project"
                            />
                            </div>
                        </div>
                        <Link href='/about-us' className='group relative z-10 -mt-12 mx-4 sm:mx-8 flex items-center gap-4 rounded-2xl bg-white p-4 text-secondary shadow-[0_20px_40px_rgba(0,0,0,0.25)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'>
                            <span className='relative w-14 h-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[rgba(196,81,34,0.5)]'>
                                <Image src={team.founder.image} alt='' fill sizes='56px' className='object-cover object-top' />
                            </span>
                            <span className='min-w-0'>
                                <span className='block text-xs font-semibold uppercase tracking-[.08em] text-primary'>Founder-led</span>
                                <span className='block font-clash text-lg font-semibold leading-tight mt-0.5'>{team.founder.name}</span>
                                <span className='block text-sm text-light'>Supervises every engagement <span aria-hidden='true' className='arrow-icon'>→</span></span>
                            </span>
                        </Link>
                    </SlideOnScroll>
                </div>
            </div>


            <div className='pointer-events-none absolute left-0 -top-[30%] rotate-0'>
                <ShapeLeft />
            </div>
            <div className='pointer-events-none absolute right-0 top-[0%] md:block hidden'>
                <ShapeRight />
            </div>
        </div>
    )
}

export default About
