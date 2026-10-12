import { getImageUrl } from '@/utils/getImageUrl'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = ({ blog }) => {
    return (
        <div className='bg-gray-100 p-4 rounded-md duration-300 ease-in-out group'>
            <div className='overflow-hidden rounded-lg'>
                <Image
                    src={getImageUrl(blog?.image)}
                    width={500}
                    height={300}
                    alt='Blog'
                    className='group-hover:scale-[1.1] rounded-lg duration-200 ease-in sm:h-[250px] object-cover'
                />
            </div>
            <div className='mt-4'>
                <span className='sm:text-sm text-xs text-light'>Date: {moment(blog?.createdAt)?.format('DD MMM YYYY')}</span>
                <div className='flex items-center gap-3 mt-4'>
                    {
                        blog?.tags?.map(item => (
                            <div key={item} className='bg-green-200 text-green-700 py-1.5 px-2.5 rounded-md text-[13px]'>
                                {item}
                            </div>
                        ))
                    }
                </div>
                
                <h3 className='font-clash w-spacing-sm tracking-wide sm:text-lg text-base font-medium mt-2'>
                    {blog?.title}
                </h3>
                <Link
                href={`/blogs/${blog?.slug}`} 
                className="inline-block mt-4 btn-primary py-2 px-4 sm:text-sm text-xs">
                    LEARN MORE
                </Link>
            </div>
        </div>
    )
}

export default Blog
