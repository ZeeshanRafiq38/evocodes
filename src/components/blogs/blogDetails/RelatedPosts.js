import React from 'react'
import Blog from '../Blog'

const RelatedPosts = ({ blogs }) => {
    return (
        <div className='border-t-2 border-t-gray-400 my-10 px-3'>
            <h3 className='lg:text-3xl sm:text-2xl text-xl font-semibold font-clash w-spacing-sm tracking-wide text-center py-6 text-secondary'>
                Related Posts
            </h3>
            <div>
                {
                    blogs?.length > 0 
                    ?
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                            {
                                blogs?.map(item => (
                                    <Blog key={item?._id} blog={item} />
                                ))
                            }
                        </div>
                    : 
                        <div className='flex items-center justify-center rounded-md h-[150px] text-lg font-semibold border border-gray-300'>
                            Not related posts found.
                        </div>
                }
            </div>
        </div>
    )
}

export default RelatedPosts