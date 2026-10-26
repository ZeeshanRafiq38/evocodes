'use client'
import { useId, useState } from 'react'

export default function FaqItem({ item }) {
    const [open, setOpen] = useState(false)
    const id = useId()
    return (
        <div className='border-b border-gray-200 py-2'>
            <h3>
                <button type='button' aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)} className='flex w-full items-start justify-between gap-5 py-5 text-left font-clash text-lg font-medium leading-snug hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'>
                    {item.question}
                    <span aria-hidden='true' className='text-primary shrink-0 text-xl'>{open ? '-' : '+'}</span>
                </button>
            </h3>
            <div id={id} aria-hidden={!open} className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-200 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className='overflow-hidden min-h-0'>
                    <p className='pb-5 text-base leading-relaxed text-gray-600'>{item.answer}</p>
                </div>
            </div>
        </div>
    )
}
