"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';

const projects = [
  {
    num: 'EDL',
    category: 'iPadOS App',
    title: 'ELite Digital Learning',
    description:
      "Elite Digital Learning app is designed for students, teachers, and school administrators to annotate PDF documents containing school lessons. It provides an easy way to load, annotate, and save educational documents, offering a seamless experience for organizing school materials. Users can quickly access and modify their documents. Additionally, the app supports the integration of 3D objects, audio, and video, allowing for an interactive and immersive learning experience.",
    stack: [{ name: "SwiftUI" }, { name: "PencilKit" }, { name: "Firebase" }, { name: "PDFKit" }],
    image: '/assets/work/thumb1.png',
    live: "",
    github: "https://github.com/Josephtg107/EDLPdf"
  },
  {
    num: 'Idiomly',
    category: 'iOS App',
    title: 'Idiomly',
    description: "Idiomly is a language learning app designed for iOS using Swift. It features interactive lessons, AR for immersive learning, and gamification elements to keep users engaged. With progress tracking, daily challenges, and support for multiple languages, Idiomly aims to provide a fun and effective way to learn new languages.",
    stack: [{ name: "Swift" }, { name: "SwiftUI" }, { name: "UIKit"}],
    image: '/assets/work/thumb5.png',
    live: "https://apps.apple.com/mx/app/idiomly/id6692630107?l=en-GB",
    github: "https://github.com/Josephtg107/Idiomly"
  },
  {
    num: 'WhatsRoyal',
    category: 'Web App',
    title: 'Royal WhatsApp',
    description:
      "This WhatsApp API App with AI is designed to keep parents and clients informed and engaged. The system sends timely notifications about important events, updates, and activities. It provides a user-friendly interface for parents to receive real-time information about their children's progress, schedules, and school events. Clients can access our contact information, event details, and other relevant updates, ensuring seamless and effective communication for everyone involved.",
    stack: [{ name: "SwiftUI" }, { name: "AlamoFire" }, { name: "Swift" }],
    image: '/assets/work/thumb3.png',
    live: "",
    github: ""
  },
  {
    num: 'KeepUp!',
    category: 'iOS App',
    title: 'KeepUp!',
    description:
      "KeepUp! is an innovative activity tracker that goes beyond simple reminders. It actively engages you throughout the day by notifying you of the tasks you've set, prompting you to capture a photo as proof of completion. This dynamic system rewards consistency: by uploading a picture daily, you earn points that can be redeemed for customization options. KeepUp! transforms your daily routine into an interactive experience, motivating you to stay on top of your goals.",
    stack: [{ name: "Swift" }, { name: "SwiftUI" }, { name: "UIKit"}],
    image: '/assets/work/thumb4.png',
    live: "",
    github: "https://github.com/Josephtg107/KeepUp-"
  },
  {
    num: 'S&L',
    category: 'Web Page',
    title: 'L&S Wedding',
    description:
      "We built the website with my designer's help to celebrate my sister's wedding, providing guests with all the essential information they need. It features a beautifully crafted interface to explore event details, RSVP, view the wedding registry, share heartfelt messages, and see a countdown timer. Guests can also enjoy photo collages and create personal accounts for a personalized experience, ensuring a memorable and informative page for everyone.",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }],
    image: '/assets/work/thumb2.png',
    live: "https://sarahiyluis.com/",
    github: "https://github.com/Josephtg107/L-S-Wedding"
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className='text-7xl leading-none font-extrabold text-tranparent text-outline'>
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{project.category}</h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
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
            {/* live project button - only show if the live link exists */}
              {project.live && (
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
              )}

              {/* GitHub project button - only show if the GitHub link exists */}
              {project.github && (
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
              )}
            </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              className='h-[300px] md:h-[400px] xl:h-[520px] mb-12'
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[300px] md:h-[400px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className='object-cover'
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50% - 22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;
