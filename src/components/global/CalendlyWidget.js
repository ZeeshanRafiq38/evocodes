"use client"
import React, { useEffect, useRef, useState } from 'react';
import app from '@/constants/app.constants';

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

// Calendly's script is heavy, so it only loads once the widget is close to the viewport.
const CalendlyWidget = ({ height = 500 }) => {
    const ref = useRef(null);
    const [load, setLoad] = useState(false);
    // 'loading' until Calendly injects its iframe; 'failed' if it never does (blocked script, offline).
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setLoad(true);
                observer.disconnect();
            }
        }, { rootMargin: '300px' });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!load) return;
        const fail = () => setStatus(current => current === 'ready' ? current : 'failed');
        const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
        if (existing) {
            window.Calendly?.initInlineWidgets?.();
        } else {
            const script = document.createElement('script');
            script.src = SCRIPT_SRC;
            script.async = true;
            script.onerror = fail;
            document.body.appendChild(script);
        }
        const observer = new MutationObserver(() => {
            if (ref.current?.querySelector('iframe')) {
                setStatus('ready');
                observer.disconnect();
            }
        });
        observer.observe(ref.current, { childList: true, subtree: true });
        const timer = setTimeout(fail, 12000);
        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, [load]);

    return (
        <div className="relative" style={{ height }}>
            <div
                ref={ref}
                className="calendly-inline-widget !bg-gray-100 rounded-lg overflow-hidden"
                data-url={load ? app.discoveryCallUrl : undefined}
                style={{ width: '100%', minWidth: 0, height }}
            ></div>
            {status !== 'ready' && (
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-100 p-6 text-center">
                    {status === 'loading' ? (
                        <p className="text-sm text-light">Loading available times…</p>
                    ) : (
                        <>
                            <p className="font-clash text-xl font-semibold text-secondary">The calendar didn&apos;t load here</p>
                            <p className="max-w-xs text-sm leading-relaxed text-light">It may be blocked by your browser. You can still pick a time directly on Calendly.</p>
                            <a href={app.discoveryCallUrl} target="_blank" rel="noopener noreferrer" className="pointer-events-auto btn-primary px-6 py-3 text-sm font-medium">
                                Open the booking calendar
                            </a>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default CalendlyWidget;
