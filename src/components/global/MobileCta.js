'use client'
import { useEffect, useState } from 'react'
import { WhatsAppSvg } from '@/assets/svgs'
import app from '@/constants/app.constants'

// Phones get a fixed bottom bar once the hero is passed; larger screens get a floating WhatsApp button.
export default function MobileCta() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 480)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <div
                aria-hidden={!visible}
                inert={visible ? undefined : ''}
                className={`md:hidden fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur border-t border-gray-200 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom,0px))] flex items-center gap-3 motion-safe:transition-transform motion-safe:duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className='btn-primary flex-1 min-w-0 px-4 py-3 text-sm leading-tight font-medium'>
                    {app.ctaLabel}
                </a>
                <a href={app.whatsappUrl} target='_blank' rel='noopener noreferrer' aria-label='Chat with us on WhatsApp' className='w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-[#25D366] text-white'>
                    <WhatsAppSvg size={22} />
                </a>
            </div>
            <a
                href={app.whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Chat with us on WhatsApp'
                className={`hidden md:flex fixed right-6 bottom-6 z-40 w-14 h-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] motion-safe:transition-[transform,opacity] motion-safe:duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-4'}`}
                tabIndex={visible ? undefined : -1}
            >
                <WhatsAppSvg size={26} />
            </a>
        </>
    )
}
