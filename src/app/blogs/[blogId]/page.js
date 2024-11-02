import BlogHeader from '@/components/blogs/blogDetails/BlogHeader'
import RelatedPosts from '@/components/blogs/blogDetails/RelatedPosts'
import React from 'react'

const page = () => {
    return (
        <div className=''>
            <header>
                <BlogHeader />
            </header>
            <div className='container mx-auto pt-20 border-b-2 '>
                <div>
                    <h6 className="text-2xl text-center">
                        Blog Content
                    </h6>
                </div>
                <div>
                    <RelatedPosts />
                </div>
            </div>
        </div>
    )
}

export default page