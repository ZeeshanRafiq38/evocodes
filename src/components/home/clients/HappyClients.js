import { FigmaSvg, MySqlSvg } from '@/assets/svgs/technologies'
import clients from '@/constants/clients.constants'
import React from 'react'
import Marquee from 'react-fast-marquee'

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
            <Marquee
            speed={30}
            className='mt-6'
            >
                <div className="flex items-center sm:gap-8 gap-4 mx-4 py-2">
                    {
                        clients.map(item => (
                            <div key={item.id}>
                                <item.icon className='sm:w-[150px] w-[100px] sm:h-[100px] h-[60px]' />
                            </div>
                        ))
                    }
                </div>
            </Marquee>

        </div>
    )
}

export default HappyClients