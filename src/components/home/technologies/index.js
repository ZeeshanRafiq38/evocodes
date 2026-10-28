import Image from "next/image";
import Marquee from "react-fast-marquee";
import RectangleSvg from "./RectangleSvg";
import technologies from "@/constants/technologies.constants";
import SlideOnScroll from "@/components/global/SlideOnScroll";

const ToolRow = ({ label, tools, direction, speed }) => (
    <div>
        <p className='text-center text-sm font-semibold text-light mb-4'>{label}</p>
        <Marquee speed={speed} direction={direction} pauseOnHover autoFill>
            <ul className="flex items-center sm:gap-5 gap-3 sm:mx-2.5 mx-1.5 py-3">
                {tools.map(tool => (
                    <li key={tool.label} className='tool-tile bg-pure border border-gray-200 shadow-sm rounded-xl sm:py-4 py-3 sm:px-5 px-4 flex items-center gap-3'>
                        <Image src={tool.src} alt='' width={36} height={36} className='sm:w-9 sm:h-9 w-7 h-7 object-contain' />
                        <span className='text-sm sm:text-[15px] font-medium text-secondary whitespace-nowrap'>{tool.label}</span>
                    </li>
                ))}
            </ul>
        </Marquee>
    </div>
)

const Technologies = () => {
    return (
        <div className='section relative z-10'>
            <SlideOnScroll direction='bottom'>
                <header className='text-center px-3'>
                    <p className='home-eyebrow mb-4'>Our toolkit</p>
                    <h2 className='section-heading mx-auto'>
                        Tools Our Team Works In
                    </h2>
                    <p className='sub-text'>
                        From development platforms and design tools to ad, CRM and outreach software, our specialists work in the tools your business already uses.
                    </p>
                </header>
            </SlideOnScroll>
            <div className='sm:mt-12 mt-8 relative overflow-hidden space-y-6'>
                <ToolRow label='Development, Design & AI' tools={technologies.build} speed={30} />
                <ToolRow label='Marketing & Sales' tools={technologies.grow} speed={35} direction='right' />

                <div className="pointer-events-none absolute bottom-0 -left-10 z-10 sm:block hidden">
                    <RectangleSvg />
                </div>
                <div className="pointer-events-none absolute bottom-0 -right-10 z-10 rotate-180 sm:block hidden">
                    <RectangleSvg />
                </div>
            </div>
        </div>
    )
}

export default Technologies
