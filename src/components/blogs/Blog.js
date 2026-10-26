import { getImageUrl } from '@/utils/getImageUrl'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = ({ blog }) => {
    return (
        <div className='article-card bg-gray-100 bg-[image:var(--card-gradient)] p-5 group'>
            <div className='overflow-hidden rounded-lg'>
                <Image
                    src={getImageUrl(blog?.image)}
                    width={500}
                    height={300}
                    alt={blog?.title || 'Vaforus article'}
                    className='article-image rounded-lg'
                />
            </div>
            <div className='mt-4'>
                <span className='text-sm text-light'>Date: {moment(blog?.createdAt)?.format('DD MMM YYYY')}</span>
                <div className='flex flex-wrap items-center gap-3 mt-4'>
                    {
                        blog?.tags?.map(item => (
                            <div key={item} className='bg-primary-soft text-primary-hover py-1.5 px-2.5 rounded-md text-[13px]'>
                                {item}
                            </div>
                        ))
                    }
                </div>
                
                <h3 className='article-title mt-3'>
                    <Link href={`/blogs/${blog?.slug}`} className='hover:text-primary'>{blog?.title}</Link>
                </h3>
                <Link
                href={`/blogs/${blog?.slug}`} 
                className="inline-block mt-4 btn-primary py-2 px-4 text-sm">
                    LEARN MORE
                </Link>
            </div>
        </div>
    )
}

export default Blog
