"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, ToolTipContent, TooltipProvider, TooltipTrigger, } from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import { TooltipContent } from '@radix-ui/react-tooltip';

const projects = [
  {
    num: 'EDL',
    category: 'iPadOS App',
    title: 'ELite Digital Learning',
    description:
    "This app is designed for students, teachers, and school administrators to manage and annotate PDF documents containing school information. The app makes it easy to load, annotate, and save educational documents, providing a seamless experience for organizing school-related materials.",
    stack: [{name: "Swift"}, {name: "PencilKit"}, {name:"Firebase"}, {name:"PDFKit"}, {name:"Spline"}],
    image: '/assets/work/thumb1.png',
    live: "",
    github: ""
  },
  {
    num: '02',
    category: 'Web App',
    title: 'WhatsRoyal',
    description:
    "WhatsApp API UI and AI Bot",
    stack: [{name: "NodeJs"}, {name: "NextJs"}, {name:"TailWind.css"}],
    image: '/assets/work/thumb3.png',
    live: "",
    github: ""
  },
  {
    num: 'Sarahi & Luis',
    category: 'Web Page',
    title: 'L&S Wedding',
    description:
    "This website is designed to celebrate my sister's wedding, offering guests all the essential information they need. It features a beautifully crafted interface to explore event details, RSVP, view the wedding registry, share heartfelt messages, and see a countdown timer. Guests can also enjoy photo collages and create personal accounts for a personalized experience, ensuring a memorable and seamless celebration for everyone involved.",
    stack: [{name: "Html"}, {name: "Css"}, {name:"Javascript"}],
    image: '/assets/work/thumb2.png',
    live: "",
    github: ""
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

const handleSlideChange = (swiper) => {
  //get current slide index
  const currentIndex = swiper.activeIndex;
  //update project state based on current slide index;
  setProject(projects[currentIndex]);
}
  
  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 1.1, duration: 0.4, ease: "easeIn"}}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className="flex flex-col gap-[30px] h-[50%]">
            {/* outline num */}
            <div className='text-8xl leading-none font-extrabold text-tranparent text-outline'>
              {project.num}
            </div>
            {/* project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{project.category}</h2>
            {/* project description */}
            <p className="text-white/60">{project.description}</p>
            {/* stack */}
            <ul className="flex gap-4">
              {project.stack.map ((item, index)=> {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                )
              })}
            </ul>
            {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className='flex items-center gap-4'>
                {/* live project button */}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                </div>
              </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className='xl:h-[520px] mb-12'
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index)=> {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  {/* image */}
                    <div className="rlative w-full h-full">
                      <Image
                      src={project.image}
                      fill
                      className='object-cover'
                      alt=""
                      />
                    </div>
                  </div>
                  </SwiperSlide>
              })}
              
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;