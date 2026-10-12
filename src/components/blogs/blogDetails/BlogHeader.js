import { FacebookCircleSvg, LinkedInFilledSvg, WhatsAppSvg } from '@/assets/svgs';
import Breadcrumbs from '@/components/global/Breadcrumbs';
import { getImageUrl } from '@/utils/getImageUrl';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const crumbs = [
    {
        id : 1 ,
        label : 'Home' ,
        path : '/'
    } ,
    {
        id : 2 ,
        label : 'Blogs' ,
        path : '/blogs'
    } ,
    {
        id : 3 ,
        label : 'Details' ,
        path : ''
    } ,
]

const BlogHeader = ({ blog }) => {
    return (
        <div className='bg-secondary md:py-20 sm:py-12 py-8 relative text-pure lg:px-0 px-3'>
            <div className='container mx-auto'>
                <div className=''>
                    <Breadcrumbs crumbs={crumbs} />
                </div>
                <h1 
                className='font-clash w-spacing-sm tracking-wide lg:text-4xl md:text-2xl text-xl   font-medium sm:my-8 my-8'
                >
                    {blog?.title}
                </h1>
                <div className=' flex items-center gap-4 justify-between'>
                    <div>
                        <div className='sm:text-base text-sm'>
                            <span className='text-gray-200'>By </span>
                            <span className='font-medium font-clash w-spacing-sm tracking-wide'>
                                {blog?.author?.username}
                            </span>
                        </div>
                        <p className='text-light text-xs mt-1.5'>
                            {moment(blog?.createdAt).format('DD MMM YYYY')} • 5 min read
                        </p>
                    </div>
                    <div className='flex items-center sm:gap-3 gap-2'>
                        {/* <div className='bg-pure sm:w-[30px] w-[28px] sm:h-[30px] h-[28px] rounded-full flex items-center justify-center hover:scale-[1.2] duration-200 ease-in cursor-pointer'>
                            <FacebookCircleSvg size={18} />
                        </div>
                        <div className='bg-pure sm:w-[30px] w-[28px] sm:h-[30px] h-[28px] rounded-full flex items-center justify-center hover:scale-[1.2] duration-200 ease-in cursor-pointer'>
                            <WhatsAppSvg size={18} />
                        </div>
                        <div className='bg-pure sm:w-[30px] w-[28px] sm:h-[30px] h-[28px] rounded-full flex items-center justify-center hover:scale-[1.2] duration-200 ease-in cursor-pointer'>
                            <LinkedInFilledSvg size={18} />
                        </div> */}
                        {
                            blog?.tags?.map(item => (
                                <div key={item} className='bg-green-200 text-green-700 sm:py-1.5 py-1 sm:px-2.5 px-2 rounded-md sm:text-[13px] text-xs'>
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex items-center justify-center sm:mt-16 mt-12'>
                <Image
                src={getImageUrl(blog?.image)}
                alt='blog details'
                width={800}
                height={800}
                className='w-full max-h-[500px] object-cover rounded-lg'
                />
            </div>
        </div>
    )
}

export default BlogHeader;
