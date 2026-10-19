import { FlutterSvg, JavaSvg, KotlinSvg } from '@/assets/svgs'
import Image from 'next/image'
import React from 'react'

const MobileApp = () => {
    return (
        <div 
        className='p-4 rounded-lg sm:px-12 flex md:flex-col flex-col-reverse sm:gap-12 gap-10'
        style={{
            background: "linear-gradient(180deg, rgba(243, 246, 247, 0) 0%, #F3F6F7 100%)"
        }}
        >
            <div className=''>
                <div className='flex items-center justify-center sm:gap-6 gap-4'>
                    <div className='bg-pure rounded-lg service-shadow p-4'>
                         
                        <Image 
                        src='/images/kotlin.png'
                        width={200}
                        height={100}
                        alt='Kotlin'
                        className='h-[40px] w-[120px] object-cover'
                        />
                    </div>
                    <div className='bg-pure rounded-lg service-shadow p-4'>
                        <Image 
                        src='/images/java.png'
                        width={200}
                        height={100}
                        alt='Flutter'
                        className='h-[40px] w-[120px] object-cover'
                        />
                        
                    </div>
                </div>
                <div className='mt-4 flex items-center justify-center'>
                    <div className='w-fit bg-pure rounded-lg service-shadow p-4 sm:scale-[0.9] scale-[0.8]'>
                        <Image 
                        src='/images/flutter.png'
                        width={200}
                        height={100}
                        alt='Flutter'
                        className='h-[40px] sm:w-full w-[150px] object-cover '
                        />
                    </div>
                </div>
            </div>
            <h6 className=' font-clash font-semibold sm:text-2xl text-xl text-center '>
                Mobile App <br /> Development
            </h6>
        </div>
    )
}

export default MobileApp

