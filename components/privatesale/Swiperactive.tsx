import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { profilecard } from "../common/Helper";
import { ArrowIcon, DolarIcon } from "../common/Icons";

export default function Swiperactive() {
  const [activeSlide, setActiveSlide] = useState(3);
  const onTransitionStart = (swiper: any) => {
    setActiveSlide(swiper.realIndex);
  };
  return (
    <>
      <Swiper
        onSlideChange={onTransitionStart}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, EffectCoverflow]}
        className="mySwiper w-full gap-5"
      >
        {profilecard.map((items, index) => (
          <SwiperSlide key={index}>
            <div
              className={`px-5 py-[60px] mx-auto w-[269px] h-[337px] border border-[#5200FF] rounded-[20px] flex flex-col items-center  ${
                activeSlide === index ? " scale-1" : "scale-[0.8] opacity-60"
              }`}
            >
              <div className=" bg-[linear-gradient(180deg,#5200FF_0%,rgba(82,0,255,0.10)_100%)] w-[60px] h-[60px] rounded-[30px] p-[10px] flex items-center justify-center">
                {items.icon}
              </div>
              <div className="flex flex-col mt-[15px] gap-2 text-center">
                <h2 className="text-white font-inter text-[20px] font-bold">
                  {items.name}
                </h2>
                <p className="text-[rgba(255,255,255,0.70)] text-[18px] font-inter font-normal">
                  {items.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev !left-[0%] sm:!left-[26%] md:!left-[33%] lg:!left-[33%] xl:!left-[40%] !top-20">
          <div className="bg-white rounded-full">
            <ArrowIcon />
          </div>
        </div>
        <div className="swiper-button-next !left-[89%] sm:!left-[70%] md:!left-[68%] lg:!left-[63%] xl:!left-[60%] !top-20">
          <div className="bg-white rounded-full rotate-180">
            <ArrowIcon />
          </div>
        </div>
      </Swiper>
    </>
  );
}
