import Marquee from "react-fast-marquee";


const Ticker = () => {
    return (
        <div className="bg-secondary text-pure font-clash font-normal py-6">
            <Marquee
            speed={50}
            pauseOnHover
            >
                <div className="flex items-center gap-8 mx-4 lg:text-lg md:text-base text-sm">

                    <div className="flex items-center gap-4">
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                        <p className="tracking-wider">Crafting Tomorrow, Today</p>
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                        <p className="tracking-wider">Crafting Tomorrow, Today</p>
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                        <p className="tracking-wider">Crafting Tomorrow, Today</p>
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                        <p className="tracking-wider">Crafting Tomorrow, Today</p>
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                        <p className="tracking-wider">Crafting Tomorrow, Today</p>
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                        <p className="tracking-wider">Crafting Tomorrow, Today</p>
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                    </div>
                </div>
            </Marquee>
        </div>

    )
}

export default Ticker