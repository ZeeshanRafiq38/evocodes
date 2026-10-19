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
                        <p className="tracking-wider">Access skilled remote teams across marketing, sales, web development, and digital operations</p>
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                        <p className="tracking-wider">Focus on growing your business while our team handles the day-to-day work</p>
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                        <p className="tracking-wider">Get managed outsourcing services without the cost of building every function in-house</p>
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                        <p className="tracking-wider">Scale your business with a reliable remote team and flexible outsourced services</p>
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                        <p className="tracking-wider">Access skilled remote teams across marketing, sales, web development, and digital operations</p>
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                        <p className="tracking-wider">Focus on growing your business while our team handles the day-to-day work</p>
                        <div className="sm:w-4 w-3 sm:h-4 h-3 bg-pure rounded-full"></div>
                    </div>
                </div>
            </Marquee>
        </div>

    )
}

export default Ticker
