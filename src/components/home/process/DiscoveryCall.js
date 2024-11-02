import { DiscoverCallSvg } from '@/assets/svgs'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import Image from 'next/image'



const DiscoveryCall = () => {
    return (
        <div className='flex justify-between gap-8 md:flex-row flex-col'>
            <div className='flex-1'>
                <SlideOnScroll direction='left'>
                    <div className='w-16 h-16 flex items-center justify-center bg-pure shadow-circle rounded-full text-pink-500'>
                        <DiscoverCallSvg />
                    </div>
                    <div className="sm:mt-8 mt-6">
                        <h4 className='font-clash leading-[1.1] tracking-wide w-spacing-sm md:text-2xl text-xl  text-dark font-semibold'>
                            Discovery Call – No <br /> More Guesswork
                        </h4>
                        <p className='mt-3 text-dark sm:text-base text-sm'>
                            We know that every project brings its own set of challenges. That’s why our process is built to handle the unexpected while keeping you informed every step of the way.
                        </p>
                    </div>
                </SlideOnScroll>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <SlideOnScroll direction='right'>
                    <Image
                    src='/images/call.png'
                    className='w-auto h-auto '
                    alt='discovery call'
                    width={500}
                    height={500}
                    />
                </SlideOnScroll>
            </div>
        </div>
    )
}

export default DiscoveryCall