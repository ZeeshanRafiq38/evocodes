import { FigmaSvg, MySqlSvg } from '@/assets/svgs/technologies'
import React from 'react'

const HappyClients = () => {
    return (
        <div>
            <h4
            className='sm:text-2xl font-medium font-clash w-spacing-sm tracking-wider'
            style={{
                background: 'linear-gradient(104.5deg, #F46C3F 20.94%, #F4A941 76%), #FFFFFF',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
            }}  
            >
                The Who&apos;s is Who of Happy Clients
            </h4>
            <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 md:gap-12 gap-6 mt-6'>
                {
                    [...Array(6).keys()].map(item => (
                        <div key={item}>
                            <MySqlSvg className='sm:w-[110px] w-[70px]' />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default HappyClients