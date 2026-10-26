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
            <header className='listing-header bg-secondary bg-[image:var(--section-gradient)] text-center text-pure'>
                <h1 className='page-title'>
                    Blogs and Resources
                </h1>
                <p className='page-intro'>
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
