'use client'
import Link from 'next/link'
import { ErrorSvg } from '@/assets/svgs'
import app from '@/constants/app.constants'
import returnErrorMsg from '@/utils/returnErrorMsg'
import React, { memo } from 'react'

const DisplayError = ({ error, reset }) => {
    return (
        <div className='container mx-auto px-5 min-h-[60vh] flex items-center justify-center py-16'>
            <div className='w-full max-w-xl text-center'>
                <div className='w-20 h-20 mx-auto rounded-full bg-primary-soft text-primary flex items-center justify-center'>
                    <ErrorSvg size={44} />
                </div>
                <h1 className='mt-6 font-clash text-3xl font-semibold text-secondary'>Something went wrong</h1>
                <p className='mt-3 text-light leading-relaxed'>{returnErrorMsg(error)}</p>
                <div className='mt-8 flex flex-col sm:flex-row gap-3 justify-center'>
                    {reset && <button type='button' onClick={reset} className='btn-primary px-6 py-3 font-medium'>Try again</button>}
                    <Link href='/' className='inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-full border border-gray-300 font-medium text-secondary hover:border-primary hover:text-primary transition-colors'>Go to homepage</Link>
                </div>
                <p className='mt-6 text-sm text-light'>
                    Need help now? <a href={`mailto:${app.email}`} className='link-grow text-primary font-medium'>{app.email}</a>
                </p>
            </div>
        </div>
    )
}

export default memo(DisplayError)
