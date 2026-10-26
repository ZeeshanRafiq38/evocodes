'use client'
import { useState } from 'react'
import DiscoveryCall from './DiscoveryCall'
import ClearPlanning from './ClearPlanning'
import AgileDevelopment from './AgileDevelopment'
import LaunchAndSupport from './LaunchAndSupport'

const steps = [
    { name: 'Discovery Call', component: DiscoveryCall },
    { name: 'Define the Scope', component: ClearPlanning },
    { name: 'Build Your Team', component: AgileDevelopment },
    { name: 'Managed Execution', component: LaunchAndSupport },
]

export default function Tabs() {
    const [active, setActive] = useState(0)
    const Content = steps[active].component
    return (
        <div>
            <div aria-label='Our delivery process' className='grid grid-cols-2 md:grid-cols-4 border-b border-gray-200 gap-2'>
                {steps.map((step, index) => (
                    <button key={step.name} type='button' aria-pressed={active === index} onClick={() => setActive(index)} className={`text-left px-3 sm:px-5 py-4 border-b-2 min-h-[88px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${active === index ? 'border-primary bg-primary-soft text-primary-hover' : 'border-transparent text-gray-600 hover:bg-gray-50'}`}>
                        <span className='block text-xs font-semibold mb-2'>0{index + 1}</span>
                        <span className='block text-sm sm:text-base font-medium leading-snug'>{step.name}</span>
                    </button>
                ))}
            </div>
            <div className='mt-8 md:mt-12'><Content key={active} /></div>
        </div>
    )
}
