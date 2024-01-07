"use client"
import React, { useState } from 'react'
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import data from '../../_data/data.json'

import GradientImage from './GradientImage'

import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Thumbs, FreeMode } from 'swiper/modules'

import { FaGithub } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { SiIeee } from "react-icons/si";



function ProjectSlide(props: any) {
    const project = props.project
    let containerClass = "relative z-0 w-full h-[180px] overflow-hidden"
    let maskClass = ""
    // background: linear-gradient(90deg, rgba(30, 30, 30, 0.00) 0%, #1E1E1E 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
    if (project.position == "left") {
        maskClass = "absolute z-10 h-full w-full bg-[linear-gradient(90deg,rgba(30,30,30,1)_0.3%,rgba(30,30,30,0)_99.81%)]"
    } else if (project.position == "right") {
        maskClass = "absolute z-10 h-full w-full bg-[linear-gradient(90deg,rgba(30,30,30,0)_0%,rgba(30,30,30,1)_100%)]"
    } else {
        maskClass = "absolute z-10 h-full w-full"
    }
    return (
        <div className='relative w-full'>
            <GradientImage
                image={project.card_image_url}
                containerClass={containerClass}
                maskClass={maskClass}
            />
        </div>
    )
}

function ProjectCard(props: any) {
    const project = props.project
    return (
        <div className='relative w-11/12 mx-auto'>
            <div className='px-1 absolute z-10 top-[20%] flex flex-col h-max w-2/3 text-left self-center justify-around'>
                <h4 className='text-2xl pb-3'>{project.title}</h4>
                <p className='leading-loose tracking-wide'>{project.content}</p>
                <div className='mt-3 p-2 w-1/4 flex flex-row justify-between'>
                    {project.links.github_link && <a className='text-3xl hover:text-grey' href={project.links.github_link}><FaGithub /></a>}
                    {project.links.website_link && <a className='text-3xl hover:text-grey' href={project.links.website_link}><CgWebsite /></a>}
                    {project.links.notebook_link && <a className='text-3xl hover:text-grey' href={project.links.notebook_link}><SiJupyter /></a>}
                    {project.links.paper_link && <a className='text-3xl hover:text-grey' href={project.links.paper_link}><SiIeee /></a>}
                </div>
            </div>
            <div>
                <GradientImage
                    image={project.image_url}
                    containerClass="relative z-0 w-full h-[529px] overflow-hidden"
                    maskClass="absolute z-10 h-full w-full bg-[linear-gradient(270deg,rgba(30,30,30,0)_0%,rgba(30,30,30,0.82)_41.25%,rgba(30,30,30,0.97)_64.17%,rgba(30,30,30,1)_86.56%,rgba(30,30,30,1)_100%)]"
                />
            </div>
        </div>
    )
}


export default function SelectedProject() {
    const [currSlideIdx, setCurrSlideIdx] = useState(1)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    return (
        <div className='relative mt-3 mx-auto w-11/12'>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null }}
                modules={[Thumbs]}
                className='myProjectDisplay'
                initialSlide={1}
                rewind
                autoplay={{delay: 5000}}
            >
                {data.projects.map((project, idx) => (
                    <SwiperSlide key={idx}><ProjectCard project={project} /></SwiperSlide>
                ))}
            </Swiper>

            <div className='py-1'>
                <Swiper
                    modules={[Navigation, EffectCoverflow, Thumbs, FreeMode]}
                    effect='coverflow'
                    spaceBetween={7}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: -15,
                        stretch: 0,
                        depth: 90,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    onSlideChange={(swiper) => {
                        setCurrSlideIdx(swiper.activeIndex)
                    }}
                    onSwiper={setThumbsSwiper}
                    freeMode
                    navigation
                    loop
                    centeredSlides
                    centeredSlidesBounds
                    className='myProjectSlider'
                >
                    {data.projects.map((project, idx) => (
                        <SwiperSlide key={idx}>
                            {({ isPrev, isActive, isNext }) => {
                                return (
                                    <ProjectSlide project={{ ...project, position: isActive ? "mid" : (isPrev ? "left" : "right") }} />
                                )
                            }}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
