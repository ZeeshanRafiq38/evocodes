'use client'
import React from "react";
import portfolioData from "@/constants/portfolio.constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay } from 'swiper/modules';
import Image from "next/image";

const Carousel = () => {
    return (
        <div className="relaitve">
            <Swiper
                speed={1000}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay ={{
                    delay : 3000 ,
                    pauseOnMouseEnter: true
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay ,Navigation]}
                breakpoints={{
                    1050: {
                        slidesPerView: 3
                    },
                    950: {
                        slidesPerView: 2.5
                    },
                    820: {
                        slidesPerView: 2.4
                    },
                    710: {
                        slidesPerView: 2
                    },
                    550: {
                        slidesPerView: 1.5
                    },
                    280: {
                        slidesPerView: 1
                    }
                }}
            >
                {
                    portfolioData?.map((item, i) => (
                        <SwiperSlide key={item.id}>
                            <div className="">
                                <Image
                                src={item.image}
                                width={500}
                                height={500}
                                alt={item.name}
                                className="rounded-[20px] border border-gray-200"
                                />
                            </div>
                            <div className="content mt-4">
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold mb-1">{item?.name}</h3>
                                    <div className="flex items-center justify-center mt-4 gap-2">
                                        {
                                            item?.tags?.map(tag => (
                                                <div key={tag} className="bg-pure bg-opacity-50 rounded-full sm:text-sm text-xs py-2 px-4">
                                                    {tag}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    );
};

export default Carousel;
