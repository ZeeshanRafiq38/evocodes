import { ChatSvg } from '@/assets/svgs'
import HappyClients from './HappyClients'
import SlideOnScroll from '@/components/global/SlideOnScroll'
import app from '@/constants/app.constants'

export default function Clients() {
    return (
        <section className='section bg-secondary px-5 text-white' style={{ backgroundImage: 'var(--section-gradient)' }} id='discovery-call'>
            <div className='container mx-auto'>
                <SlideOnScroll direction='bottom'>
                    <div className='grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center'>
                        <div className='min-w-0'>
                            <p className='home-eyebrow text-orange-200 mb-4'>Start with a conversation</p>
                            <h2 className='section-heading !text-white'>Tell Us Where Your Team Needs Support</h2>
                            <p className='text-base sm:text-lg leading-relaxed text-gray-200 mt-5 max-w-xl'>
                                Share your goals, the work taking up your time, and where you need extra expertise. We&apos;ll discuss which services fit and what working together could look like.
                            </p>
                            <p className='mt-5 text-sm text-gray-300'>One project, one service, or ongoing support.</p>
                        </div>
                        <div className='bg-white text-dark rounded-lg p-6 sm:p-8 text-center'>
                            <div className='w-24 sm:w-32 mx-auto'><ChatSvg className='w-full h-auto' /></div>
                            <h3 className='font-clash text-2xl font-semibold mt-5'>Your Next Step Starts Here</h3>
                            <p className='text-base leading-relaxed text-gray-600 mt-3'>A 15-minute call to understand your priorities and explore how we can help.</p>
                            <a href={app.discoveryCallUrl} target='_blank' rel='noopener noreferrer' className='btn-primary px-5 py-3.5 mt-6 font-medium'>
                                Book a 15-Minute Discovery Call
                            </a>
                        </div>
                    </div>
                </SlideOnScroll>
                <div className='mt-12 border-t border-white/15 pt-8'><HappyClients /></div>
            </div>
        </section>
    )
}
