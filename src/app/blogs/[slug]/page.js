import BlogHeader from '@/components/blogs/blogDetails/BlogHeader'
import RelatedPosts from '@/components/blogs/blogDetails/RelatedPosts'
import Axios from '@/config/api'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import pageMetadata from '@/utils/pageMetadata'
import { getImageUrl } from '@/utils/getImageUrl'


const getBlog = cache(async (slug) => {
    try {
        const { data: { data: { doc, relatedBlogs } } } = await Axios(`/blog/slug/${slug}`)
        return { blog: doc, relatedBlogs }
    } catch (error) {
        // The API answers an unknown slug with "Blog not found"; send a real 404 so Google drops it.
        if (/not found/i.test(error?.response?.data?.message || '')) return null
        console.error("Error fetching blog details:", error);
        throw new Error("Could not fetch blog details. Please try again later.");
    }
});

export const generateMetadata = async ({ params }) => {
    const data = await getBlog(params.slug);
    if (!data?.blog) notFound();
    const { blog } = data;
    const metadata = pageMetadata(`${blog.title} | Vaforus`, blog.shortDescription, `/blogs/${blog.slug}`);
    const image = getImageUrl(blog.image);
    return {
        ...metadata,
        openGraph: { ...metadata.openGraph, type: 'article', publishedTime: blog.createdAt, modifiedTime: blog.updatedAt, images: [image] },
        twitter: { ...metadata.twitter, card: 'summary_large_image', images: [image] },
    };
};


const page = async ({ params }) => {
    const data = await getBlog(params.slug);
    if (!data?.blog) notFound();
    const { blog, relatedBlogs } = data;

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