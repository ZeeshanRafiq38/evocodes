'use client'
import React, { useState } from "react";
import portfolioData from "@/constants/portfolio.constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image";
import { useReducedMotion } from 'framer-motion';

const PortfolioCard = ({ item }) => {
    const [showAlt, setShowAlt] = useState(false);

    return (
        <article className="group">
            <button
                type="button"
                aria-pressed={showAlt}
                aria-label={`Show another screen of ${item.name}`}
                className="relative block w-full overflow-hidden rounded-xl border border-gray-200 bg-white text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
                onMouseEnter={() => setShowAlt(true)}
                onMouseLeave={() => setShowAlt(false)}
                onFocus={() => setShowAlt(true)}
                onBlur={() => setShowAlt(false)}
                onClick={() => setShowAlt(value => !value)}
            >
                <Image
                    src={item.image}
                    width={500}
                    height={500}
                    alt={item.name}
                    className={`w-full motion-safe:transition-[opacity,transform] motion-safe:duration-500 ${showAlt ? 'opacity-0' : 'opacity-100'}`}
                />
                <Image
                    src={item.hoverImg}
                    width={500}
                    height={500}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover motion-safe:transition-[opacity,transform] motion-safe:duration-500 ${showAlt ? 'opacity-100 scale-[1.03]' : 'opacity-0'}`}
                />
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(24,34,48,0.8)] to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 motion-safe:transition-opacity motion-safe:duration-300" />
                <span aria-hidden="true" className="pointer-events-none absolute left-4 bottom-4 text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 motion-safe:transition-all motion-safe:duration-300">
                    {item.tags?.[1]} · {item.tags?.[2]}
                </span>
            </button>
            <div className="mt-5 text-center">
                <h3 className="font-clash text-xl font-semibold text-secondary group-hover:text-primary-hover transition-colors">{item?.name}</h3>
                <ul className="flex flex-wrap items-center justify-center mt-3 gap-2">
                    {item?.tags?.map((tag) => (
                        <li key={tag} className="bg-white border border-gray-200 rounded-full text-xs sm:text-sm py-1.5 px-3.5 text-dark">
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

const Carousel = () => {
    const reduceMotion = useReducedMotion();
    return (
        <div className="relative">
            <Swiper
                speed={reduceMotion ? 0 : 450}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={reduceMotion ? false : {
                    delay: 4500,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                    1050: {
                        slidesPerView: 3,
                    },
                    950: {
                        slidesPerView: 2.5,
                    },
                    820: {
                        slidesPerView: 2.4,
                    },
                    710: {
                        slidesPerView: 2,
                    },
                    550: {
                        slidesPerView: 1.5,
                    },
                    280: {
                        slidesPerView: 1,
                    },
                }}
            >
                {portfolioData?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <PortfolioCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
