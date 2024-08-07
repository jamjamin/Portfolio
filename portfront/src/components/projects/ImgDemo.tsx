"use client"

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "@/styles/ProjectDetails.css"

export const ImgDemo = () => {
    const width = 480;
    const height = 270;

    return (
        <Swiper
            navigation={true}
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={() => console.log('Slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ type: 'bullets', clickable: true}}
        >
            <SwiperSlide><Image 
                width={width}
                height={height}
                src="/test.png" alt={''}                
            /></SwiperSlide>
            <SwiperSlide><Image 
                width={width}
                height={height}
                src="/test.png" alt={''}                
            /></SwiperSlide>
            <SwiperSlide><Image 
                width={width}
                height={height}
                src="/test.png" alt={''}                
            /></SwiperSlide>
            <SwiperSlide><Image 
                width={width}
                height={height}
                src="/test.png" alt={''}                
            /></SwiperSlide>
            <SwiperSlide><Image 
                width={width}
                height={height}
                src="/test.png" alt={''}                
            /></SwiperSlide>
        </Swiper>
    )
}

