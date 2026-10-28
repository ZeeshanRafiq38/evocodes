'use client'
import { useId, useState } from 'react'

export default function FaqItem({ item }) {
    const [open, setOpen] = useState(false)
    const id = useId()
    return (
        <div className={`border-b border-gray-200 border-l-2 pl-4 sm:pl-5 motion-safe:transition-colors motion-safe:duration-200 ${open ? 'border-l-primary bg-[rgba(248,237,231,0.6)]' : 'border-l-transparent'}`}>
            <h3>
                <button type='button' aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)} className={`group flex w-full items-center justify-between gap-5 py-5 pr-2 text-left font-clash text-lg sm:text-xl font-medium leading-snug transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${open ? 'text-primary-hover' : 'text-secondary'}`}>
                    {item.question}
                    <span aria-hidden='true' className={`relative w-8 h-8 shrink-0 rounded-full border motion-safe:transition-all motion-safe:duration-300 ${open ? 'rotate-45 bg-primary border-primary text-white' : 'border-gray-300 text-primary group-hover:border-primary'}`}>
                        <span className='absolute left-1/2 top-1/2 w-3 h-[2px] -translate-x-1/2 -translate-y-1/2 bg-current' />
                        <span className='absolute left-1/2 top-1/2 h-3 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-current' />
                    </span>
                </button>
            </h3>
            <div id={id} aria-hidden={!open} className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className='overflow-hidden min-h-0'>
                    <p className='pb-6 pr-10 text-base leading-relaxed text-gray-600'>{item.answer}</p>
                </div>
            </div>
        </div>
    )
}
