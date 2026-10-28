'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, children }) {
    const pathname = usePathname()
    const active = !href.includes('#') && pathname.startsWith(href)
    return (
        <Link
            href={href}
            aria-current={active ? 'page' : undefined}
            className={`inline-flex items-center min-h-11 hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 ${active ? 'text-primary' : ''}`}
        >
            {children}
        </Link>
    )
}
