import { getImageUrl } from '@/utils/getImageUrl';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const PrimaryBlog = ({ blog }) => {
    return (
        <div className='featured-article grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 group'>
            <div className='min-w-0 w-full overflow-hidden rounded-lg'>
                <Image
                    src={getImageUrl(blog?.image)}
                    width={500}
                    height={300}
                    alt={blog?.title || 'Vaforus article'}
                    className='article-image rounded-lg'
                />
            </div>
            <div className='flex-1 min-w-0 w-full'>
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
                <p className='text-dark mt-4 mb-6 text-base leading-relaxed'>
                    {blog?.shortDescription}
                </p>
                <Link
                href={`/blogs/${blog?.slug}`} 
                className="btn-primary py-2 px-4 text-sm"
                >
                    LEARN MORE
                </Link>
            </div>
        </div>
    )
}

export default PrimaryBlog
