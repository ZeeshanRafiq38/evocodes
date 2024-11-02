import { HtmlSvg, MicrosoftSvg, MySqlSvg } from "@/assets/svgs";
import Marquee from "react-fast-marquee";
import RectangleSvg from "./RectangleSvg";


const Technologies = () => {
    return (
        <div className='section relative z-10'>
            <header className='text-center'>
                <h3 className='section-heading'>
                    Technologies We <br /> Work With
                </h3>
                <p className='sub-text'>
                    Evocodes leverages transformative technologies to accelerate our enterprise software development for unique business needs
                </p>
            </header>
            <div className='sm:mt-12 mt-8 relative overflow-hidden'>
                <Marquee
                speed={80}
                >
                    <div className="flex items-center sm:gap-8 gap-4 mx-4 py-2">
                        {
                            [...Array(20).keys()].map(item => (
                                <div 
                                className="bg-pure border border-gray-200 shadow-lg rounded-lg sm:py-4 py-3 sm:px-8 px-6 flex items-center justify-center"
                                key={item}
                                >
                                    <MySqlSvg className={'md:w-[90px] sm:w-[75px] w-[40px]'}/>
                                </div>
                            ))
                        }
                    </div>
                </Marquee>
                <Marquee
                speed={80}
                className="sm:mt-6 mt-2"
                direction="right"
                >
                    <div className="flex items-center gap-8 mx-4 py-2">
                        {
                            [...Array(20).keys()].map(item => (
                                <div 
                                className="bg-pure border border-gray-200 shadow-lg rounded-lg sm:py-4 py-3 sm:px-8 px-6 flex items-center justify-center"
                                key={item}
                                >
                                    <HtmlSvg className={'md:w-[60px] sm:w-[50px] w-[40px] sm:h-[50px] h-[40px]'}/>
                                </div>
                            ))
                        }
                    </div>
                </Marquee>

                <div className="absolute bottom-0 -left-10 z-10 sm:block hidden">
                    <RectangleSvg />
                </div>
                <div className="absolute bottom-0 -right-10 z-10 rotate-180 sm:block hidden">
                    <RectangleSvg />
                </div>
            </div>

        </div>
    )
}

export default Technologies