import BlogHeader from '@/components/blogs/blogDetails/BlogHeader'
import RelatedPosts from '@/components/blogs/blogDetails/RelatedPosts'
import Axios from '@/config/api'
import Head from 'next/head';
import React, { cache } from 'react'


const getBlog = cache(async (slug) => {
    try {
        const { data: { data: { doc, relatedBlogs } } } = await Axios(`/blog/slug/${slug}`)
        return { blog: doc, relatedBlogs }
    } catch (error) {
        console.error("Error fetching blog details:", error);
        throw new Error("Could not fetch blog details. Please try again later.");
    }
});

export const generateMetadata = async ({ params }) => {
    const { blog } = await getBlog(params.slug);
    const { metaTags } = blog;

    const metadata = {
        title: blog?.title || 'Blog Details',
    };

    return metadata;
};


const page = async ({ params }) => {
    const { blog, relatedBlogs } = await getBlog(params.slug);

    return (
        <>
            <div className=''>
                <header>
                    <BlogHeader blog={blog} />
                </header>
                <div className='container mx-auto py-10 border-b-2 '>
                    <div className='px-3'>
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: blog?.content }}
                        />
                    </div>
                    <div>
                        <RelatedPosts blogs={relatedBlogs} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page