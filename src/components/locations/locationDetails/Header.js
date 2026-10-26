import React from 'react'

const Header = ({ location }) => {
    return (
        <header className='listing-header bg-secondary bg-[image:var(--section-gradient)] text-center text-pure'>
                <h1 className='page-title'>
               {location?.mainHeading}
            </h1>
            <p className='page-intro'>
                {location?.mainHeadingSubText}
            </p>
        </header>
    )
}

export default Header
