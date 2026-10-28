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
        <div className='flex flex-wrap justify-center gap-4 sm:mt-10 mt-6 mb-20'>
            {
                locations?.map(item => (
                    <Link
                    href={`/locations/${item?.slug}`} 
                    key={item?._id} 
                    className='location-card w-full sm:w-[420px] px-6 py-7 text-center bg-primary bg-[image:var(--primary-gradient)] hover:bg-[image:var(--primary-gradient-hover)] text-pure !border-transparent shadow-[0_14px_34px_rgba(135,53,22,0.25)] hover:-translate-y-1 transition-[transform,border-color,box-shadow] duration-300 sm:text-lg font-medium cursor-pointer'
                    >
                        {item?.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default AllLocations
