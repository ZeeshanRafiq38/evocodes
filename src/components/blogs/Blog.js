import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
    return (
        <div className='bg-gray-100 p-4 rounded-md duration-300 ease-in-out group'>
            <div className='overflow-hidden rounded-lg'>
                <Image
                    src={'/images/blog.png'}
                    width={500}
                    height={300}
                    alt='Blog'
                    className='group-hover:scale-[1.1] rounded-lg duration-200 ease-in'
                />
            </div>
            <div className='mt-2'>
                <span className='sm:text-sm text-xs text-light'>Date: December 1 2023</span>
                <h3 className='font-clash w-spacing-sm tracking-wide sm:text-lg text-base font-medium mt-2'>
                    Cultural Representation in Media: Progress and Potential
                </h3>
                <Link
                href={'/blogs/details'}
                className="inline-block mt-4 btn-primary py-2 px-4 sm:text-sm text-xs">
                    LEARN MORE
                </Link>
            </div>
        </div>
    )
}

export default Blog