"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Mousewheel,Pagination} from 'swiper/modules'
import Image from 'next/image'
 
export default function ImageSlider() {
  return (
    <div className='conmtainer mx-auto px-24 my-8'>
        <Swiper
        direction='horizontal'
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel,Pagination]}
        className='aspect-[3/1] h-1/3'    
        >
            <SwiperSlide className='aspect-[3/1] max-x-fit'>
                <Image src='/utakata-header.png' className='w-full h-full' height={1920} width={1080} alt='泡沫京水のヘッダー画像ファイル' />
            </SwiperSlide>
            {/* <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
    </div>
  )
}