'use client'
import React, { useState } from "react";
import portfolioData from "@/constants/portfolio.constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image";
import { useReducedMotion } from 'framer-motion';

const PortfolioCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    src={item.image}
                    width={500}
                    height={500}
                    alt={item.name}
                    className={`w-full rounded-lg border border-gray-200 motion-safe:transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                />
                <Image
                    src={item.hoverImg}
                    width={500}
                    height={500}
                    alt={`${item.name} hover`}
                    className={`absolute inset-0 w-full h-full object-cover rounded-lg border border-gray-200 motion-safe:transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>
            <div className="content mt-4">
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">{item?.name}</h3>
                    <div className="flex flex-wrap items-center justify-center mt-4 gap-2">
                        {item?.tags?.map((tag) => (
                            <div key={tag} className="bg-pure bg-opacity-50 rounded-full sm:text-sm text-xs py-2 px-4">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
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
                    delay: 3000,
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
