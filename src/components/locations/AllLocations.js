import Link from 'next/link'
import React from 'react'

const AllLocations = async () => {
    
    return (
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:mt-10 mt-6 mb-20'>
            {
                [...Array(30).keys()].map(item => (
                    <Link
                    href='/locations/new-york' 
                    key={item} 
                    className='rounded-md px-4 py-6 text-center bg-gray-200 sm:text-lg font-medium hover:bg-primary duration-200 ease-in hover:text-pure cursor-pointer hover:scale-[1.05] text-dark'
                    >
                        New York
                    </Link>
                ))
            }
        </div>
    )
}

export default AllLocations