'use client'
import { ErrorSvg } from '@/assets/svgs'
import returnErrorMsg from '@/utils/returnErrorMsg'
import React, { memo } from 'react'
import { useWindowSize } from 'react-use'

const DisplayError = ({ error }) => {
    const { width } = useWindowSize();

    return (
        <div className='container mx-auto h-[50vh] flex items-center justify-center'>
            <div className='w-full sm:h-[250px] h-[180px] rounded-md flex items-center flex-col gap-4 mt-4 justify-center sm:text-2xl text-lg sm:font-semibold font-medium border border-red-600 text-red-500'>
                <ErrorSvg size={width > 600 ? 120 : 70} />
                <span>
                    {returnErrorMsg(error)}
                </span>
            </div>
        </div>
    )
}

export default memo(DisplayError)