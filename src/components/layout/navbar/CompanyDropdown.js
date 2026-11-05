'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { companyLinks } from '@/constants/nav.constants'

// Desktop-only dropdown for About Us and Locations. Opens on hover, focus or click,
// closes on Escape or when focus leaves, same as the Services dropdown.
export default function CompanyDropdown() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const id = useId()
    const active = companyLinks.some(link => pathname.startsWith(link.path))

    return (
        <div
            className='relative'
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
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
            <button
                type='button'
                aria-expanded={open}
                aria-controls={id}
                onClick={() => setOpen(value => !value)}
                className={`inline-flex items-center gap-2.5 min-h-11 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${active ? 'text-primary' : ''}`}
            >
                Company
                <span aria-hidden='true' className={`block w-2 h-2 border-b-2 border-r-2 border-current motion-safe:transition-transform motion-safe:duration-200 ${open ? 'rotate-[225deg] translate-y-0.5' : 'rotate-45 -translate-y-0.5'}`} />
            </button>
            <div
                id={id}
                inert={open ? undefined : ''}
                aria-hidden={!open}
                className={`absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-3 motion-safe:transition-all motion-safe:duration-200 ${open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2 pointer-events-none'}`}
            >
                <ul className='rounded-xl border border-gray-200 bg-white p-2 shadow-xl text-dark'>
                    {companyLinks.map(link => {
                        const current = pathname.startsWith(link.path)
                        return (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    onClick={() => setOpen(false)}
                                    tabIndex={open ? undefined : -1}
                                    aria-current={current ? 'page' : undefined}
                                    className='group/item block rounded-lg px-3 py-2.5 leading-snug transition-colors hover:bg-[rgba(248,237,231,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'
                                >
                                    <span className={`block text-sm font-medium group-hover/item:text-primary-hover ${current ? 'text-primary' : 'text-secondary'}`}>{link.name}</span>
                                    <span className='block mt-0.5 text-xs text-light'>{link.description}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
