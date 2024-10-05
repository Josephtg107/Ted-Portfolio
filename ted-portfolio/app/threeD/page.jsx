"use client";

import { motion } from 'framer-motion';
import React from 'react';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

import Link from 'next/link';
import Spline from '@splinetool/react-spline';

const projects = [
  {
    num: 'Idiomly',
    category: 'iOS App',
    title: 'Idiomly!',
    description: "This app is designed for students, teachers, and school administrators to annotate PDF documents containing school lessons. It provides an easy way to load, annotate, and save educational documents, offering a seamless experience for organizing school materials. Users can quickly access and modify their documents. Additionally, the app supports the integration of 3D objects, audio, and video, allowing for an interactive and immersive learning experience.",
    stack: [{name: "SwiftUI"}, {name: "UIKit"}, {name:"Firebase"}, {name:"PDFKit"}],
    scene: 'https://prod.spline.design/LPJRO-5sIMSeNKYn/scene.splinecode',
    live: "https://apps.apple.com/mx/app/idiomly/id6692630107?l=en-GB",
    github: "https://github.com/Josephtg107/Idiomly"
  },
  {
    num: 'WhatsRoyal',
    category: 'iOS / Web App',
    title: 'Royal WhatsApp',
    description: "This WhatsApp API App with AI is designed to keep parents and clients informed and engaged. The system sends timely notifications about important events, updates, and activities. It provides a user-friendly interface for parents to receive real-time information about their children's progress, schedules, and school events. Clients can access our contact information, event details, and other relevant updates, ensuring seamless and effective communication for everyone involved.",
    stack: [{name: "NodeJs"}, {name: "NextJs"}, {name:"TailWind.css"}],
    scene: 'https://prod.spline.design/qyKG2mtxTDg2izQM/scene.splinecode',
    live: "",
    github: ""
  },
  {
    num: 'EDL',
    category: 'iPadOS App',
    title: 'ELite Digital Learning',
    description: "This app is designed for students, teachers, and school administrators to annotate PDF documents containing school lessons. It provides an easy way to load, annotate, and save educational documents, offering a seamless experience for organizing school materials. Users can quickly access and modify their documents. Additionally, the app supports the integration of 3D objects, audio, and video, allowing for an interactive and immersive learning experience.",
    stack: [{name: "SwiftUI"}, {name: "PencilKit"}, {name:"Firebase"}, {name:"PDFKit"}],
    scene: 'https://prod.spline.design/P4pjVUYz84JoII2H/scene.splinecode',
    live: "",
    github: "https://github.com/Josephtg107/EDLPdf"
  },
  {
    num: 'KeepUp!',
    category: 'iOS App',
    title: 'Daily Tracker',
    description: "KeepUp! is an innovative daily activity tracker app designed to help users stay on top of their goals. It actively engages users throughout the day by notifying them of the tasks they set and prompting them to capture a photo as proof of completion. This dynamic system rewards consistency and transforms daily routines into an interactive experience, motivating users to maintain productivity and achieve personal milestones.",
    stack: [{name: "NodeJs"}, {name: "NextJs"}, {name:"TailWind.css"}],
    scene: 'https://prod.spline.design/4QKmmZ2MQ4lbFMFX/scene.splinecode',
    live: "",
    github: "https://github.com/Josephtg107/KeepUp-"
  },
  {
    num: 'S&L',
    category: 'Web Page',
    title: 'L&S Wedding',
    description: "We built the website with my designers help to celebrate my sisters wedding, providing guests with all the essential information they need. It features a beautifully crafted interface to explore event details, RSVP, view the wedding registry, share heartfelt messages, and see a countdown timer. Guests can also enjoy photo collages and create personal accounts for a personalized experience, ensuring a memorable and informative page for everyone.",
    stack: [{name: "Html"}, {name: "Css"}, {name:"Javascript"}],
    scene: 'https://prod.spline.design/5hlM9T4VIgitrUiO/scene.splinecode',
    live: "https://sarahiyluis.com/",
    github: "https://github.com/Josephtg107/L-S-Wedding"
  },
];

const ThreeDContent = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.2, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className='flex flex-col gap-[30px]'>
          {projects.map((project, index) => (
            <div key={index} className='flex flex-col xl:flex-row xl:gap-[30px] mb-[69px]'>
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
                  {/* live project button - only show if the live link exists */}
                  {project.live && (
                    <Link href={project.live} passHref>
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
                    <Link href={project.github} passHref>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>GitHub repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
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
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ThreeDContent;
