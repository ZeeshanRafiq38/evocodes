import { DiscoverCallSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import Image from 'next/image'



const DiscoveryCall = () => {
    return (
        <div className='flex justify-between gap-8 md:flex-row flex-col'>
            <div className='flex-1'>
                <SlideOnScroll direction='left'>
                    <div className='w-16 h-16 flex items-center justify-center bg-pure shadow-circle rounded-full text-primary'>
                        <DiscoverCallSvg />
                    </div>
                    <div className="sm:mt-8 mt-6">
                        <h4 className='font-clash leading-[1.1] tracking-wide w-spacing-sm md:text-2xl text-xl  text-dark font-semibold'>
                            Discovery Call
                        </h4>
                        <p className='mt-3 text-dark sm:text-base text-sm'>
                            We learn about your business, the work you need completed, and the areas where your existing team needs support. We discuss your goals, priorities, and the services we can manage for you.
                        </p>
                    </div>
                </SlideOnScroll>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <SlideOnScroll direction='right'>
                    <div className='relative w-[500px] max-w-full aspect-[3/2] overflow-hidden rounded-lg'>
                        <Image
                        src='/images/call.png'
                        className='object-cover'
                        alt='discovery call'
                        fill
                        sizes='(min-width: 768px) 500px, 100vw'
                        />
                    </div>
                </SlideOnScroll>
            </div>
        </div>
    )
}

export default DiscoveryCall
