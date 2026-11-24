import React from 'react'
import Link from 'next/link'
import Blog from '../Blog'

// Related articles under a blog post. Hidden when there is nothing to show.
const RelatedPosts = ({ blogs }) => {
    if (!blogs?.length) return null

    return (
        <section className='mt-16 pt-12 border-t border-gray-200 px-3' aria-labelledby='related-articles'>
            <div className='flex flex-col md:flex-row md:items-end justify-between gap-4'>
                <div>
                    <p className='home-eyebrow mb-3'>Keep reading</p>
                    <h2 id='related-articles' className='section-heading'>Related Articles</h2>
                </div>
                <Link href='/blogs' className='shrink-0 font-semibold text-primary'>
                    <span className='link-grow'>View all articles</span> <span aria-hidden='true' className='arrow-icon'>→</span>
                </Link>
            </div>
            <div className='mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {blogs.map(item => (
                    <Blog key={item?._id || item?.slug} blog={item} />
                ))}
            </div>
        </section>
    )
}

export default RelatedPosts
