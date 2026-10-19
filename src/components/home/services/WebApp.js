import Image from 'next/image'
import React from 'react'

const WebApp = () => {
    return (
        <div 
        className='p-4 rounded-lg sm:px-12 flex md:flex-col flex-col-reverse md:gap-[124px] gap-12'
        style={{
            background: "linear-gradient(180deg, rgba(243, 246, 247, 0) 0%, #F3F6F7 100%)"
        }}
        >
            <div className='flex items-center justify-center md:pb-0 pb-20 md:translate-x-0 -translate-x-6'>
                <div className='bg-pure rounded-lg service-shadow p-4 translate-y-16 translate-x-12'>
                    <Image 
                    src='/images/mern.png'
                    width={200}
                    height={100}
                    alt='MERN Stack'
                    className='h-[50px] w-[120px] object-cover scale-[1.35]'
                    />
                </div>
                <div className='bg-pure rounded-lg service-shadow p-4'>
                    <Image 
                    src='/images/mean.png'
                    width={200}
                    height={100}
                    alt='MERN Stack'
                    className='h-[50px] w-[120px] object-cover '
                    />
                </div>
            </div>
            <h6 className=' font-clash font-semibold sm:text-2xl text-xl text-center'>
                Web App <br /> Development
            </h6>
        </div>
    )
}

export default WebApp
