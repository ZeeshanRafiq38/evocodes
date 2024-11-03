import Image from 'next/image'
import React from 'react'

const WebApp = () => {
    return (
        <div 
        className='p-4 rounded-lg sm:px-12'
        style={{
            background: "linear-gradient(180deg, rgba(243, 243, 252, 0) 0%, #F3F3FC 100%)"
        }}
        >
            <div className='flex items-center justify-center'>
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
            <h6 className='sm:mt-32 mt-24 font-clash font-semibold sm:text-2xl text-xl text-center'>
                Web App <br /> Development
            </h6>
        </div>
    )
}

export default WebApp