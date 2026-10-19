import Image from 'next/image'
import serviceTools from '@/constants/service-tools'

export default function ServiceTools({ title, floating = false }) {
    const tools = serviceTools[title] || []
    return (
        <ul aria-label={`${title} tools`} className={`grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-[300px] mx-auto ${floating ? 'h-[180px] items-center' : ''}`}>
            {tools.map((tool, index) => (
                <li key={tool.alt} className={`min-w-0 text-center ${floating ? (index === 1 ? 'translate-y-4' : '-translate-y-2') : ''}`}>
                    <div className={`h-[76px] sm:h-[84px] flex items-center justify-center bg-white rounded-lg p-4 ${floating ? 'service-shadow' : ''}`}>
                        <Image src={tool.src} alt='' width={48} height={48} className='w-12 h-12 object-contain' />
                    </div>
                    <span className='block mt-3 min-h-[32px] text-xs leading-4 font-medium text-dark break-words'>{tool.alt}</span>
                </li>
            ))}
        </ul>
    )
}
