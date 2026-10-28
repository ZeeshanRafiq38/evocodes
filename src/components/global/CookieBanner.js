'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CONSENT_KEY, OPEN_SETTINGS_EVENT } from '@/constants/consent.constants'

const readChoice = () => {
    try { return localStorage.getItem(CONSENT_KEY) } catch { return null }
}

// Withdrawing consent should also remove analytics cookies that were already set.
const clearAnalyticsCookies = () => {
    const domains = ['', location.hostname, `.${location.hostname.replace(/^www\./, '')}`]
    document.cookie.split(';').map(c => c.split('=')[0].trim()).filter(name => name.startsWith('_ga')).forEach(name => {
        domains.forEach(domain => {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ''}`
        })
    })
}

const saveChoice = choice => {
    try { localStorage.setItem(CONSENT_KEY, choice) } catch {}
    window.gtag?.('consent', 'update', { analytics_storage: choice })
    if (choice === 'denied') clearAnalyticsCookies()
}

// Analytics stays off until the visitor accepts. Ad storage is never requested because the site runs no ads.
export default function CookieBanner() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!readChoice()) setOpen(true)
        const reopen = () => setOpen(true)
        window.addEventListener(OPEN_SETTINGS_EVENT, reopen)
        return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen)
    }, [])

    const choose = choice => {
        saveChoice(choice)
        setOpen(false)
    }

    if (!open) return null

    return (
        <section
            role='region'
            aria-label='Cookie preferences'
            className='fixed z-50 inset-x-3 bottom-3 md:inset-x-auto md:left-6 md:bottom-6 md:max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_20px_50px_rgba(24,34,48,0.18)] motion-safe:animate-[rise-in_400ms_cubic-bezier(.2,.8,.2,1)_both]'
        >
            <h2 className='font-clash text-lg font-semibold text-secondary'>Cookies on this site</h2>
            <p className='mt-2 text-sm leading-relaxed text-dark'>
                We use essential cookies to run the site. With your permission, we also use Google Analytics cookies to understand how visitors use it. You can change your choice at any time.{' '}
                <Link href='/privacy-policy#cookies' className='font-medium text-primary underline underline-offset-2'>Learn more</Link>
            </p>
            <div className='mt-4 flex flex-col-reverse sm:flex-row gap-2'>
                <button type='button' onClick={() => choose('denied')} className='flex-1 min-h-[44px] rounded-full border border-gray-300 px-5 text-sm font-medium text-secondary hover:border-secondary transition-colors'>
                    Reject analytics
                </button>
                <button type='button' onClick={() => choose('granted')} className='btn-primary flex-1 px-5 text-sm font-medium'>
                    Accept analytics
                </button>
            </div>
        </section>
    )
}
