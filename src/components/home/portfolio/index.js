import SlideOnScroll from "@/components/global/SlideOnScroll";
import Carousel from "./Carousel";



const Portfolio = () => {
    return (
        <div className='relative overflow-hidden'>
            <SlideOnScroll direction="right">
                <div className='section container mx-auto relative z-10'>
                    <header className='flex md:items-end justify-between md:flex-row flex-col gap-6'>
                        <div>
                            <p className='home-eyebrow mb-4'>Our work</p>
                            <h2 className='section-heading'>
                                See What We&apos;ve Built
                            </h2>
                            <p className='text-dark sm:w-[520px] w-full max-w-full text-base leading-relaxed mt-4'>
                                Explore our development and design work, from business websites to digital products. Let&apos;s discuss what your business needs next.
                            </p>
                        </div>
                        <a href='#discovery-call' className='shrink-0 font-semibold text-primary'>
                            <span className='link-grow'>Have a similar project? Let&apos;s talk</span> <span aria-hidden='true' className='arrow-icon'>→</span>
                        </a>
                    </header>
                    <div className="md:mt-14 sm:mt-12 mt-10 relative">
                        <Carousel />
                    </div>
                </div>
            </SlideOnScroll>
        </div>
    ) 
}

export default Portfolio
