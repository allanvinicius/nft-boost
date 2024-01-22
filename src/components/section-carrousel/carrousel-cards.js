"use client";

import { useRef } from "react";
import Image from "next/image";
import CardNft from "../cardNft";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import arrow from "@/assets/arrow.svg";

export default function CarrouselCards({ data }) {
  const swiperRef = useRef();

  return (
    <div className="w-full relative">
      <button
        className="btn-prev w-12 h-12 bg-blue-primary rounded-full hidden @desktop:flex items-center justify-center 
        absolute z-10 -left-6 top-1/2 -mt-6 hover:bg-hoverButtonCarrousel transition-all ease-linear 
        border border-white border-opacity-[0.06]"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <Image src={arrow} alt="arrow" />
      </button>

      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={32}
        speed={800}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.3,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        {data.map(({ name, thumb, price, price_brl }, index) => (
          <SwiperSlide key={index}>
            <CardNft
              name={name}
              thumb={thumb}
              price={price}
              price_brl={price_brl}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="btn-next w-12 h-12 bg-blue-primary rounded-full hidden @desktop:flex items-center justify-center rotate-180 
        absolute z-10 -right-6 top-1/2 -mt-6 hover:bg-hoverButtonCarrousel transition-all ease-linear 
        border border-white border-opacity-[0.06]"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Image src={arrow} alt="arrow" />
      </button>
    </div>
  );
}
