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
                <span className='text-sm text-light'><time dateTime={blog?.createdAt}>{moment(blog?.createdAt)?.format('DD MMM YYYY')}</time></span>
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
                <Link href={`/blogs/${blog?.slug}`} className='inline-flex items-center gap-1.5 mt-4 font-semibold text-primary'>
                    <span className='link-grow'>Read article</span> <span aria-hidden='true' className='arrow-icon'>→</span>
                    <span className='sr-only'>: {blog?.title}</span>
                </Link>
            </div>
        </div>
    )
}

export default Blog
