import React from 'react'
import Blog from '../Blog'

const RelatedPosts = () => {
    return (
        <div className='border-t-2 border-t-gray-400 my-10 px-3'>
            <h3 className='lg:text-3xl sm:text-2xl text-xl font-semibold font-clash w-spacing-sm tracking-wide text-center py-6 text-secondary'>
                Related Posts
            </h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    [...Array(3).keys()].map(item => (
                        <Blog key={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedPosts