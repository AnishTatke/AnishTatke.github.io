"use client"
import React from 'react'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import GradientImage from './GradientImage';

const data = [
    {
        title: "Project 2",
        image: "/project2.jpg"
    },
    {
        title: "Project 3",
        image: "/project3.jpg",
    },
    {
        title: "Project 4",
        image: "/project4.jpg",
    },
    {
        title: "Project 1",
        image: "/project1.jpg",
    },
]

export default function Slider() {
    const swiperSlider = useSwiperSlide();
    return (
        <div className='py-2 mx-auto w-11/12'>
            <Swiper
                modules={[Navigation, EffectCoverflow]}
                effect='coverflow'
                spaceBetween={1}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                loop
                centeredSlides
                centeredSlidesBounds
                className='mySlider'
            >
                {data.map((project, idx) => (
                    <SwiperSlide virtualIndex={idx}>
                        {({isPrev, isActive, isNext}) => {
                            console.log(isPrev, isActive, isNext)
                            let grad = isActive ? "mid" : (isPrev ? "left" : "right")
                            return (
                            <ProjectSlide project={{...project, position: grad}}/>
                            )
                        }}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

function ProjectSlide(props: any){
    const project = props.project
    let containerClass = "relative z-0 w-full h-[180px] overflow-hidden"
    let maskClass = ""
    // background: linear-gradient(90deg, rgba(30, 30, 30, 0.00) 0%, #1E1E1E 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
    if(project.position == "left"){
        maskClass = "absolute z-10 h-full w-full bg-[linear-gradient(90deg,rgba(30,30,30,1)_0.3%,rgba(30,30,30,0)_99.81%)]"
    } else if(project.position == "right") {
        maskClass = "absolute z-10 h-full w-full bg-[linear-gradient(90deg,rgba(30,30,30,0)_0%,rgba(30,30,30,1)_100%)]"
    } else {
        maskClass = "absolute z-10 h-full w-full"
    }
    return (
        <div className='relative w-full'>
            <GradientImage 
            image={project.image}
            containerClass={containerClass}
            maskClass={maskClass}
            />
        </div>
    )
}
