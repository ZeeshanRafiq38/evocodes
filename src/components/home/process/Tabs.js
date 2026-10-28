'use client'
import { useId, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { AgileDevSvg, ClearPlanningSvg, DiscoverCallSvg, LaunchAndSupportSvg } from '@/assets/svgs'

const STEP_DURATION = 6000

const steps = [
    {
        name: 'Discovery Call',
        icon: DiscoverCallSvg,
        image: '/images/call.png',
        alt: 'Discovery call with a client',
        text: 'We learn about your business, the work you need completed, and the areas where your existing team needs support. We discuss your goals, priorities, and the services we can manage for you.',
    },
    {
        name: 'Define the Scope',
        icon: ClearPlanningSvg,
        image: '/images/clearPlanning.png',
        alt: 'Planning the project scope',
        text: "We agree on the services, responsibilities, priorities, and workflow. You don't have to recruit or manage individual freelancers. Vaforus takes responsibility for managing the outsourced work internally.",
    },
    {
        name: 'Build Your Team',
        icon: AgileDevSvg,
        image: '/images/build-vaforus-team.jpg',
        alt: 'Vaforus remote team collaborating online',
        text: 'Your work is handled by the relevant Vaforus specialists, including designers, developers, copywriters, social media managers, SEO specialists, and outbound professionals.',
    },
    {
        name: 'Managed Execution',
        icon: LaunchAndSupportSvg,
        image: '/images/managed-execution.jpg',
        alt: 'Project manager supervising an active workflow',
        text: 'Once your project is underway, our team handles the agreed work and communicates with you throughout the process. Our founder-led team supervises projects internally to maintain quality, consistency, and accountability.',
    },
]

export default function Tabs() {
    const [active, setActive] = useState(0)
    const [paused, setPaused] = useState(false)
    const [userChose, setUserChose] = useState(false)
    const rootRef = useRef(null)
    const tabRefs = useRef([])
    const inView = useInView(rootRef, { amount: 0.4 })
    const reduceMotion = useReducedMotion()
    const id = useId()
    // Auto-advance is driven by the progress bar's animationend, so pausing the bar pauses the timer too.
    // It stops for good once the visitor picks a step themselves.
    const autoAdvance = !userChose && !reduceMotion
    const running = autoAdvance && inView && !paused

    const select = index => {
        setUserChose(true)
        setActive(index)
    }

    const onKeyDown = event => {
        const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }
        let next
        if (event.key in keys) next = (active + keys[event.key] + steps.length) % steps.length
        else if (event.key === 'Home') next = 0
        else if (event.key === 'End') next = steps.length - 1
        else return
        event.preventDefault()
        select(next)
        tabRefs.current[next]?.focus()
    }

    const step = steps[active]
    const Icon = step.icon

    return (
        <div ref={rootRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
            <div role='tablist' aria-label='Our delivery process' onKeyDown={onKeyDown} className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                {steps.map((item, index) => {
                    const selected = active === index
                    return (
                        <button
                            key={item.name}
                            ref={el => (tabRefs.current[index] = el)}
                            type='button'
                            role='tab'
                            id={`${id}-tab-${index}`}
                            aria-selected={selected}
                            aria-controls={`${id}-panel`}
                            tabIndex={selected ? 0 : -1}
                            onClick={() => select(index)}
                            className={`relative overflow-hidden text-left px-4 sm:px-5 py-4 rounded-lg min-h-[88px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${selected ? 'bg-primary-soft text-primary-hover' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-secondary'}`}
                        >
                            <span className={`block text-xs font-semibold mb-2 ${selected ? 'text-primary' : 'text-gray-400'}`}>0{index + 1}</span>
                            <span className='block text-sm sm:text-base font-medium leading-snug'>{item.name}</span>
                            <span aria-hidden='true' className='absolute inset-x-0 bottom-0 h-[3px] bg-gray-200'>
                                {selected && (
                                    <span
                                        key={active}
                                        className={`block h-full bg-primary ${autoAdvance ? `tab-progress ${running ? '' : 'is-paused'}` : ''}`}
                                        style={{ '--tab-duration': `${STEP_DURATION}ms` }}
                                        onAnimationEnd={() => setActive((active + 1) % steps.length)}
                                    />
                                )}
                            </span>
                        </button>
                    )
                })}
            </div>
            <div id={`${id}-panel`} role='tabpanel' aria-labelledby={`${id}-tab-${active}`} className='mt-8 md:mt-12'>
                <AnimatePresence mode='wait' initial={false}>
                    <motion.div
                        key={active}
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                        className='flex justify-between items-center gap-8 md:gap-12 md:flex-row flex-col'
                    >
                        <div className='flex-1 min-w-0'>
                            <div className='w-16 h-16 flex items-center justify-center bg-pure shadow-circle rounded-full text-primary'>
                                <Icon />
                            </div>
                            <h3 className='sm:mt-8 mt-6 font-clash leading-tight md:text-3xl text-2xl text-secondary font-semibold'>
                                {step.name}
                            </h3>
                            <p className='mt-4 text-dark text-base sm:text-lg leading-relaxed max-w-xl'>
                                {step.text}
                            </p>
                        </div>
                        <div className='flex-1 w-full flex items-center justify-center min-w-0'>
                            <div className='relative w-full md:w-[500px] max-w-full aspect-[3/2] overflow-hidden rounded-xl'>
                                <Image src={step.image} className='object-cover' alt={step.alt} fill sizes='(min-width: 768px) 500px, 100vw' />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
