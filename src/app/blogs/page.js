import AllBlogs from '@/components/blogs/AllBlogs';
import Loader from '@/components/global/Loader';
import React, { Suspense } from 'react';

export const dynamic = 'force-dynamic'


export const metadata = {
    title: 'Blogs & Resources | Vaforus',
};

const Page = async () => {
    
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
                <Suspense fallback={<Loader />}>
                    <AllBlogs />
                </Suspense>
            </div>
        </div>
    );
};

export default Page;
