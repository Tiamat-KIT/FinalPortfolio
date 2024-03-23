"use client"
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import { DevPost } from "@/lib/newt";
import parse from 'html-react-parser'

export default function DevSlider({contents}:{contents: DevPost[]}) {
    return (
        <div className='conmtainer mx-auto px-24 my-8'>
            <Swiper
            direction='horizontal'
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            modules={[Mousewheel,Pagination]}
            className='w-full h-[25rem] border-black border-2 rounded-xl'    
            >
                {contents.map((content,index) => {
                    return (
                        <SwiperSlide key={content._id} className="p-8">
                            <h2 className="text-2xl">{content.title}</h2>
                            <div className="my-1">
                                {content.tag.map((tag,index) => {
                                    return (
                                        <span key={index} className="border-black border rounded-xl p-1">{tag}</span>
                                    )
                                })}
                            </div>
                            {parse(content.description)}
                            {content.img.length !== 0 ? 
                                content.img.map((img,idx) => {
                                    return (
                                        <img src={img.src} className='aspect-[5/3]'  alt={img.altText} key={idx}/>
                                    )
                                }) : <>
                                        <div className="flex justify-center  ">
                                            <h1 className="text-3xl font-bold">
                                                No Image
                                            </h1>
                                        </div>
                                    </>
                                }
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}