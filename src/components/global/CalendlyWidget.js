"use client"
import React, { useEffect } from 'react';
import app from '@/constants/app.constants';

const CalendlyWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget !bg-gray-100"
            data-url={app.discoveryCallUrl}
            style={{ minWidth: '320px', height: '500px' }}
        ></div>

    );
};

export default CalendlyWidget;
