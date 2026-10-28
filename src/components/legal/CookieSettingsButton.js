'use client'
import { OPEN_SETTINGS_EVENT } from '@/constants/consent.constants'

// Reopens the cookie banner so visitors can change or withdraw their choice.
export default function CookieSettingsButton({ className = 'font-semibold text-primary underline underline-offset-2' }) {
    return (
        <button type='button' onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))} className={className}>
            Cookie settings
        </button>
    )
}
