import BlogHeader from '@/components/blogs/blogDetails/BlogHeader'
import RelatedPosts from '@/components/blogs/blogDetails/RelatedPosts'
import BlogServiceCta from '@/components/blogs/blogDetails/BlogServiceCta'
import Axios from '@/config/api'
import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import pageMetadata from '@/utils/pageMetadata'
import { getImageUrl } from '@/utils/getImageUrl'
import { pickRelatedBlogs, getBlogServiceHref } from '@/utils/relatedBlogs'


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

// All published blogs, used to pick related articles. Never breaks the page:
// if this fails, the related section is simply hidden.
const getAllBlogs = cache(async () => {
    try {
        const { data: { data: { docs } } } = await Axios('/blog', { params: { pageSize: 100 } })
        return docs || []
    } catch (error) {
        console.error('Error fetching blogs for related posts:', error)
        return []
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
    const related = pickRelatedBlogs(blog, await getAllBlogs(), relatedBlogs);
    const serviceHref = getBlogServiceHref(blog);

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
                    <BlogServiceCta href={serviceHref} />
                    <RelatedPosts blogs={related} />
                </div>
            </div>
        </>
    )
}

export default page