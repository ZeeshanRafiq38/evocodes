"use client"
import { AgileDevSvg, ClearPlanningSvg, DiscoverCallSvg, LaunchAndSupportSvg, SunSvg } from '@/assets/svgs'
import React, { useState } from 'react'
import DiscoveryCall from './DiscoveryCall'
import ClearPlanning from './ClearPlanning'
import AgileDevelopment from './AgileDevelopment'
import LaunchAndSupport from './LaunchAndSupport'
import { useWindowSize } from 'react-use'

const tabs = [
    {
        id : 1 ,
        name : 'Discovery Call' ,
        icon : DiscoverCallSvg
    } ,
    {
        id : 2 ,
        name : 'Define the Scope' ,
        icon : ClearPlanningSvg
    } ,
    {
        id : 3 ,
        name : 'Build Your Vaforus Team' ,
        icon : AgileDevSvg
    } ,
    {
        id : 4 ,
        name : 'Managed Execution' ,
        icon : LaunchAndSupportSvg
    } ,
]


const Tabs = () => {
    const { width } = useWindowSize();
    const [activeTab , setActiveTab] = useState(1);

    return (
        <div>
            <ul className='flex items-center justify-between border-b-2 border-b-gray-300'>
                {
                    tabs?.map(item => (
                        <li 
                        key={item.id}
                        className={`
                            p-4 cursor-pointer duration-200 ease-in-out transition-all border-b-4  flex items-center gap-1.5
                            ${activeTab === item?.id ? 'border-b-primary font-medium text-dark' : 'border-b-transparent text-gray-400'}
                        `}
                        onClick={() => setActiveTab(item?.id)}
                        >
                            <div className={`sm:block hidden ${activeTab === item.id ? 'opacity-1' : 'opacity-50'}`}>
                                <item.icon size={20} />
                            </div>
                            <span className='sm:text-base text-sm'>
                                {
                                    width > 800 
                                    ? 
                                        item.name 
                                    :
                                        `Step ${item.id}`
                                }
                                
                            </span>
                        </li>
                    ))
                }
            </ul>
            <div className='md:mt-16 mt-8'>
                {
                    activeTab === 1 
                    ? 
                        <DiscoveryCall />
                    : 
                    activeTab === 2 
                    ? 
                        <ClearPlanning />
                    : 
                    activeTab === 3 
                    ? 
                        <AgileDevelopment />
                    : 
                    activeTab === 4 
                    ? 
                        <LaunchAndSupport />
                    :  ''
                }
            </div>
        </div>
    )
}

export default Tabs;
