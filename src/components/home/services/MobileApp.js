import Image from 'next/image'
import React from 'react'

const MobileApp = () => {
    return (
        <div 
        className='p-4 rounded-lg'
        style={{
            background: "linear-gradient(180deg, rgba(243, 243, 252, 0) 0%, #F3F3FC 100%)"
        }}
        >
            <div className='flex items-center justify-center'>
                <Image
                src='/images/mobileAppDev.png'
                width={400}
                height={250}
                alt='Mobile App Technologies'
                />
            </div>
            <h6 className='font-clash font-semibold sm:text-2xl text-xl text-center -translate-y-3'>
                Mobile App <br /> Development
            </h6>
        </div>
    )
}

export default MobileApp