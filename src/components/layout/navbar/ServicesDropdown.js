'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import services from '@/constants/services.constants'

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
                    setOpen(false)
                    event.currentTarget.querySelector('button')?.focus()
                }
            }}
        >
            <div className={mobile ? 'flex items-center gap-1' : 'flex items-center justify-center gap-1'}>
                <Link href='/#services' onClick={close} onFocus={() => !mobile && setOpen(true)} className={`hover:text-primary transition-colors ${mobile ? 'flex items-center min-h-11 pl-3 pr-1 py-2' : ''}`}>
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
                    <span aria-hidden='true' className={`block w-2 h-2 border-b-2 border-r-2 motion-safe:transition-transform motion-safe:duration-200 ${open ? 'rotate-[225deg]' : 'rotate-45'}`} />
                </button>
            </div>
            <div
                id={id}
                inert={open ? undefined : ''}
                aria-hidden={!open}
                className={`${mobile ? 'grid' : 'absolute left-1/2 top-full w-[440px] -translate-x-1/2 pt-3'} motion-safe:transition-all motion-safe:duration-200 ${open ? 'visible opacity-100 translate-y-0 grid-rows-[1fr]' : 'invisible opacity-0 -translate-y-2 pointer-events-none grid-rows-[0fr]'}`}
            >
                <div className='overflow-hidden min-h-0'>
                    <ul className={mobile ? 'ml-3 mb-2 border-l border-white/20 pl-3 space-y-1 text-left' : 'grid grid-cols-2 gap-1 rounded-lg border border-gray-200 bg-white p-3 shadow-xl text-dark'}>
                        {services.map(service => (
                            <li key={service.href}>
                                <Link href={service.href} onClick={close} tabIndex={open ? undefined : -1} className={`block rounded px-3 py-3 text-sm leading-snug transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${mobile ? 'hover:bg-white/10' : 'hover:bg-primary-soft hover:text-primary-hover'}`}>
                                    {service.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
