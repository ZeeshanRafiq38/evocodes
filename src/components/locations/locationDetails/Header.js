import React from 'react'

const Header = ({ location }) => {
    return (
        <header className='bg-secondary lg:py-28 md:py-20 sm:py-12 py-10 flex flex-col items-center justify-center text-center text-pure'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-clash w-spacing-sm tracking-wide font-semibold'>
               {location?.mainHeading}
            </h1>
            <p className='md:mt-5 mt-2 sm:text-sm text-xs sm:w-full w-[250px] mx-auto text-gray-300'>
                {location?.mainHeadingSubText}
            </p>
        </header>
    )
}

export default Header