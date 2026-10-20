import { getImageUrl } from '@/utils/getImageUrl';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const PrimaryBlog = ({ blog }) => {
    return (
        <div className='flex items-center md:flex-row flex-col gap-6 md:gap-10 group'>
            <div className='overflow-hidden rounded-lg'>
                <Image
                    src={getImageUrl(blog?.image)}
                    width={500}
                    height={300}
                    alt='Blog'
                    className='group-hover:scale-[1.1] rounded-lg duration-200 ease-in'
                />
            </div>
            <div className='flex-1 min-w-0 w-full'>
                <span className='sm:text-sm text-xs text-light'>Date: {moment(blog?.createdAt)?.format('DD MMM YYYY')}</span>
                <div className='flex flex-wrap items-center gap-3 mt-4'>
                    {
                        blog?.tags?.map(item => (
                            <div key={item} className='bg-primary-soft text-primary-hover py-1.5 px-2.5 rounded-md text-[13px]'>
                                {item}
                            </div>
                        ))
                    }
                </div>
                <h3 className='font-clash w-spacing-sm tracking-wide md:text-2xl sm:text-lg text-base sm:font-semibold font-medium mt-2'>
                    {blog?.title}
                </h3>
                <p className='text-dark sm:mt-4 mt-2 sm:mb-6 mb-4 sm:text-sm text-[13px]'>
                    {blog?.shortDescription}
                </p>
                <Link
                href={`/blogs/${blog?.slug}`} 
                className="btn-primary py-2 px-4 sm:text-sm text-xs"
                >
                    LEARN MORE
                </Link>
            </div>
        </div>
    )
}

export default PrimaryBlog
