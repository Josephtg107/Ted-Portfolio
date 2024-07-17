"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, ToolTipContent, TooltipProvider, TooltipTrigger, } from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    num: '01',
    category: 'iOS App',
    title: 'ELite Digital Learning',
    description:
    "This app is designed for students, teachers, and school administrators to manage and annotate PDF documents containing school information. The app makes it easy to load, annotate, and save educational documents, providing a seamless experience for organizing school-related materials.",
    stack: [{name: "Swift"}, {name: "UiKit"}, {name:"Firebase"}],
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
    image: '/assets/work/thumb2.png',
    live: "",
    github: ""
  },
  {
    num: '03',
    category: 'Web Page',
    title: 'L&S Wedding',
    description:
    "My sister's Webpage",
    stack: [{name: "Html"}, {name: "Css"}, {name:"Javascript"}],
    image: '/assets/work/thumb3.png',
    live: "",
    github: ""
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-non'>
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
              <div>
                
              </div>
          </div>
          <div className='w-full xl:w-[50%]'>slider</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;