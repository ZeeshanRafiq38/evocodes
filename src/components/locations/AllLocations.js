import Axios from '@/config/api'
import Link from 'next/link'
import React from 'react'

const fetchLocations = async () => {
    try {
        const { data : { data : { docs } } } = await Axios(`/location`);
        return docs
    } catch (error) {
        console.error("Error fetching locations:", error);
        throw new Error("Could not fetch locations. Please try again later."); // Optionally throw a user-friendly error
    }
};

const AllLocations = async () => {
    const locations = await fetchLocations();
    
    return (
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:mt-10 mt-6 mb-20'>
            {
                locations?.map(item => (
                    <Link
                    href={`/locations/${item?.slug}`} 
                    key={item?._id} 
                    className='rounded-md px-4 py-6 text-center bg-gray-100 bg-[image:var(--card-gradient)] sm:text-lg font-medium hover:bg-secondary hover:bg-[image:var(--section-gradient)] duration-200 ease-in hover:text-pure cursor-pointer hover:scale-[1.05] text-dark'
                    >
                        {item?.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default AllLocations
