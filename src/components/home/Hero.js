import app from '@/constants/app.constants'

export default function Hero() {
    return (
        <section className="home-hero relative isolate flex flex-col justify-center overflow-hidden bg-secondary bg-[url('/images/hero.png')] bg-cover bg-bottom text-white sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh] 2xl:min-h-[86vh]">
            <div aria-hidden='true' className='absolute inset-0 pointer-events-none bg-[image:var(--hero-overlay)]' />
            <div className='container relative z-10 flex flex-col justify-center px-5 sm:px-8 py-14 sm:py-8 text-center'>
                <h1 className='font-clash text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.15] font-semibold max-w-[1040px] mx-auto text-balance'>
                    Outsource Your Business Tasks{' '}
                    <span className='block mt-1 text-orange-200'>Without Building Another Full-Time Team</span>
                </h1>
                <p className='max-w-[760px] mx-auto mt-6 sm:mt-7 text-base sm:text-lg leading-[1.7] text-gray-100'>
                    Discover How Vaforus Outsourcing Services Can Save You Time and Money
                </p>
                <div className='flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-4 mt-8 max-w-[680px] mx-auto'>
                    <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className='btn-primary px-6 py-4 font-medium'>Book a 15-Minute Discovery Call</a>
                    <a href='#services' className='home-secondary-button px-6 py-4 font-medium'>Explore Our Services</a>
                </div>
            </div>
        </section>
    )
}
