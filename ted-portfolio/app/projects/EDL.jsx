"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Spline from '@splinetool/react-spline';
import Link from 'next/link';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

const EDL = () => {
  const project = {
    num: 'EDL',
    id: 'elite-digital-learning',
    category: 'iPadOS App',
    title: 'ELite Digital Learning',
    description: "This app is designed for students, teachers, and school administrators to annotate PDF documents...",
    stack: [{ name: "SwiftUI" }, { name: "PencilKit" }, { name: "Firebase" }, { name: "PDFKit" }],
    scene: 'https://prod.spline.design/P4pjVUYz84JoII2H/scene.splinecode',
    live: "",
    github: ""
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.2, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px] mb-[69px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between'>
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{project.category}</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className='flex items-center gap-4'>
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
            <div className="h-[600px] relative group flex justify-center items-center bg-pink-50/20">
              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-[1]"></div>
              <div className="relative w-full h-full z-[2]">
                <Spline
                  style={{ width: '100%', height: '100%' }}
                  scene={project.scene}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EDL;
