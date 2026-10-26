import SlideOnScroll from "@/components/global/SlideOnScroll";
import Carousel from "./Carousel";



const Portfolio = () => {
    return (
        <div className='relative overflow-hidden px-3 bg-[#F3F6F7]'>
            <SlideOnScroll direction="right">
                <div className='section container mx-auto relative z-10'>
                    <header className='flex items-center justify-between md:flex-row flex-col gap-6'>
                        <div>
                            <h3 className='section-heading'>
                                See What We&apos;ve Built
                            </h3>
                            <p className='text-dark sm:w-[500px] w-full max-w-full sm:text-base text-sm mt-2'>
                                Explore our development and design work, from business websites to digital products. Let&apos;s discuss what your business needs next.
                            </p>
                        </div>
                        <div>
                            <a 
                            href='#discovery-call'
                            className="btn-primary sm:py-4 py-2 sm:px-6 px-4 font-clash w-spacing-sm tracking-wider sm:text-lg font-medium">
                                15-minute discovery call
                            </a>
                        </div>
                    </header>
                    <div className="md:mt-20 sm:mt-12 mt-10 relative">
                        <Carousel />
                    </div>
                </div>
            </SlideOnScroll>
        </div>
    ) 
}

export default Portfolio
