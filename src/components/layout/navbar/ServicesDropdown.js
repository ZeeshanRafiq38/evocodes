'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { serviceGroups } from '@/constants/services.constants'

export default function ServicesDropdown({ mobile = false, onNavigate }) {
    const [open, setOpen] = useState(false)
    const id = useId()
    const close = () => {
        setOpen(false)
        onNavigate?.()
    }

    return (
        <div
            className={mobile ? 'w-full' : 'relative'}
            onMouseEnter={() => !mobile && setOpen(true)}
            onMouseLeave={() => !mobile && setOpen(false)}
            onBlur={event => {
                if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
            }}
            onKeyDown={event => {
                if (event.key === 'Escape') {
                    if (open) event.stopPropagation()
                    setOpen(false)
                    event.currentTarget.querySelector('button')?.focus()
                }
            }}
        >
            <div className={mobile ? 'flex items-center gap-1' : 'flex items-center justify-center gap-1'}>
                <Link href='/#services' onClick={close} onFocus={() => !mobile && setOpen(true)} className={`transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${mobile ? 'flex items-center min-h-11 pl-3 pr-1 py-2 hover:text-orange-200 focus-visible:outline-white' : 'inline-flex items-center min-h-11 hover:text-primary focus-visible:outline-primary'}`}>
                    Services
                </Link>
                <button
                    type='button'
                    aria-label='Toggle services'
                    aria-expanded={open}
                    aria-controls={id}
                    onClick={() => setOpen(value => !value)}
                    className={`${mobile ? 'w-11 h-11 shrink-0' : 'w-7 h-8'} flex items-center justify-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary`}
                >
                    <span aria-hidden='true' className={`block w-2 h-2 border-b-2 border-r-2 border-current motion-safe:transition-transform motion-safe:duration-200 ${open ? 'rotate-[225deg]' : 'rotate-45'}`} />
                </button>
            </div>
            <div
                id={id}
                inert={open ? undefined : ''}
                aria-hidden={!open}
                className={`${mobile ? 'grid' : 'absolute left-1/2 top-full w-[880px] -translate-x-1/2 pt-3'} motion-safe:transition-all motion-safe:duration-200 ${open ? 'visible opacity-100 translate-y-0 grid-rows-[1fr]' : 'invisible opacity-0 -translate-y-2 pointer-events-none grid-rows-[0fr]'}`}
            >
                <div className='overflow-hidden min-h-0'>
                    <div className={mobile ? 'ml-3 mb-2 border-l border-white/20 pl-3 space-y-3 text-left' : 'grid grid-cols-3 gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-xl text-dark'}>
                        {serviceGroups.map(group => (
                            <div key={group.title} className='min-w-0'>
                                <p className={`px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-[.08em] whitespace-nowrap ${mobile ? 'text-orange-200' : 'text-primary'}`}>
                                    {group.title}
                                </p>
                                <ul>
                                    {group.services.map(service => (
                                        <li key={service.href}>
                                            <Link href={service.href} onClick={close} tabIndex={open ? undefined : -1} className={`block rounded-lg px-3 py-2.5 leading-snug transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${mobile ? 'text-sm hover:bg-white/10' : 'hover:bg-[rgba(248,237,231,0.8)] group/item'}`}>
                                                <span className={`block text-sm font-medium ${mobile ? '' : 'text-secondary group-hover/item:text-primary-hover'}`}>{service.title}</span>
                                                {!mobile && <span className='block mt-0.5 text-xs text-light'>{service.tagline}</span>}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
