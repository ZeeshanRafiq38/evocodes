import SlideOnScroll from '@/components/global/SlideOnScroll'
import { engagementModels } from '@/constants/trust.constants'

const Check = () => (
    <svg aria-hidden='true' viewBox='0 0 16 16' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='mt-1 w-4 h-4 shrink-0 text-primary'>
        <path d='M3 8.5 6.5 12 13 4.5' />
    </svg>
)

const Engagement = () => {
    return (
        <div className='section px-5 bg-[#F3F6F7]'>
            <div className='container mx-auto'>
                <SlideOnScroll direction='bottom'>
                    <header className='text-center'>
                        <p className='home-eyebrow mb-4'>Ways to work with us</p>
                        <h2 className='section-heading mx-auto'>Start Small or Bring Us the Whole Workload</h2>
                        <p className='sub-text'>Choose how you want to begin. You can change the arrangement as your needs grow.</p>
                    </header>
                </SlideOnScroll>

                <ol className='mt-12 grid md:grid-cols-3 gap-5'>
                    {engagementModels.map((model, index) => (
                        <li key={model.name} className='min-w-0'>
                            <SlideOnScroll direction='bottom' delay={index * 0.08} className='h-full'>
                                <article className='card-accent h-full flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 hover:shadow-[0_20px_40px_rgba(24,34,48,0.08)] motion-safe:hover:-translate-y-1'>
                                    <span className='font-clash text-sm font-semibold text-primary'>0{index + 1}</span>
                                    <h3 className='mt-2 font-clash text-2xl font-semibold text-secondary'>{model.name}</h3>
                                    <p className='mt-2 text-base leading-relaxed text-gray-600'>{model.summary}</p>
                                    <ul className='mt-6 pt-6 border-t border-gray-200 space-y-3'>
                                        {model.includes.map(item => (
                                            <li key={item} className='flex gap-3 text-[15px] leading-relaxed text-dark'>
                                                <Check />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className='mt-auto pt-6 text-sm text-light'>
                                        <span className='font-semibold text-dark'>For example: </span>{model.example}
                                    </p>
                                </article>
                            </SlideOnScroll>
                        </li>
                    ))}
                </ol>

                <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center'>
                    <p className='text-dark'>Fees and timelines depend on scope and are agreed before any work starts.</p>
                    <a href='#discovery-call' className='font-semibold text-primary sm:whitespace-nowrap'>
                        <span className='link-grow'>Find the right fit on a call</span> <span aria-hidden='true' className='arrow-icon'>→</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Engagement
