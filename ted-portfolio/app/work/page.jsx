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
    "Elite Digital Learning app is designed for students, teachers, and school administrators to annotate PDF documents containing school lessons. It provides an easy way to load, annotate, and save educational documents, offering a seamless experience for organizing school materials. Users can quickly access and modify their documents. Additionally, the app supports the integration of 3D objects, audio, and video, allowing for an interactive and immersive learning experience.",
    stack: [{name: "SwiftUI"}, {name: "PencilKit"}, {name:"Firebase"}, {name:"PDFKit"}],
    image: '/assets/work/thumb1.png',
    live: "",
    github: ""
  },
  {
    num: 'WhatsRoyal',
    category: 'Web App',
    title: 'Royal WhatsApp',
    description:
    "This WhatsApp API App with AI is designed to keep parents and clients informed and engaged. The system sends timely notifications about important events, updates, and activities. It provides a user-friendly interface for parents to receive real-time information about their children's progress, schedules, and school events. Clients can access our contact information, event details, and other relevant updates, ensuring seamless and effective communication for everyone involved.",
    stack: [{name: "SwiftUI"}, {name: "AVFoundation"}, {name:"Firebase"}, {name:"Swift"}],
    image: '/assets/work/thumb3.png',
    live: "",
    github: ""
  },
  {
    num: 'KeepUp!',
    category: 'iOS App',
    title: 'KeepUp!',
    description:
    "KeepUp! It's a activity tracker, it notifies you throught out the day the task you wrote, and asks for you to take a picture of it it implements a system where if you upload a picture daily, it rewards you with points you can redeem to change the background color or sound effect in the app ",
    stack: [{name: "NodeJs"}, {name: "NextJs"}, {name:"TailWind.css"}],
    image: '/assets/work/thumb4.png',
    live: "",
    github: ""
  },
  {
    num: 'S&L',
    category: 'Web Page',
    title: 'L&S Wedding',
    description:
    "We built the website with my designers help to celebrate my sisters wedding, providing guests with all the essential information they need. It features a beautifully crafted interface to explore event details, RSVP, view the wedding registry, share heartfelt messages, and see a countdown timer. Guests can also enjoy photo collages and create personal accounts for a personalized experience, ensuring a memorable and informative page for everyone.",
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
    animate={{opacity: 1, transition: { duration: 0.5, ease: "easeIn"}}}
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