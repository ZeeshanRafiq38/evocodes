import Image from 'next/image';
import Link from 'next/link';

const PrimaryBlog = () => {
    return (
        <div className='flex items-center md:flex-row flex-col md:gap-10 group'>
            <div className='overflow-hidden rounded-lg'>
                <Image
                    src={'/images/blog.png'}
                    width={500}
                    height={300}
                    alt='Blog'
                    className='group-hover:scale-[1.1] rounded-lg duration-200 ease-in'
                />
            </div>
            <div className='flex-1 '>
                <span className='sm:text-sm text-xs text-light'>Date: December 1 2023</span>
                <h3 className='font-clash w-spacing-sm tracking-wide md:text-2xl sm:text-lg text-base sm:font-semibold font-medium mt-2'>
                    Cultural Representation in Media: Progress and Potential
                </h3>
                <p className='text-dark sm:mt-4 mt-2 sm:mb-6 mb-4 sm:text-sm text-[13px]'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.
                </p>
                <Link
                href='/blogs/details' 
                className="btn-primary py-2 px-4 sm:text-sm text-xs"
                >
                    LEARN MORE
                </Link>
            </div>
        </div>
    )
}

export default PrimaryBlog