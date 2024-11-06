import Blog from '@/components/blogs/Blog'
import PrimaryBlog from '@/components/blogs/PrimaryBlog'
import Axios from '@/config/api';
import React from 'react';

export const metadata = {
    title: 'All Blogs',
};

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

const fetchBlogs = async () => {
    try {
        const { data : { data : { docs } } } = await Axios(`/blog`);
        return docs
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw new Error("Could not fetch blogs. Please try again later."); // Optionally throw a user-friendly error
    }
};



const Page = async () => {
    const blogs = await fetchBlogs();

    return (
        <div>
            <header className='bg-secondary md:py-20 sm:py-12 py-8 text-center text-pure'>
                <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-clash w-spacing-sm tracking-wide font-semibold'>
                    Blogs and Resources
                </h1>
                <p className='md:mt-4 mt-2 sm:text-sm text-xs sm:w-full w-[250px] mx-auto text-gray-300'>
                    No empty promises, just results that speak for themselves.
                </p>
            </header>
            <div className="container mx-auto sm:py-16 py-6 lg:px-0 px-3">
                <div className='bg-gray-100 rounded-md py-4 px-4'>
                    <PrimaryBlog blog={blogs[0]} />
                </div>
                <div className='sm:mt-16 mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8'>
                    {blogs?.slice(1).map((blog, index) => (
                        <Blog key={index} blog={blog} /> // Pass the blog data as props
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
