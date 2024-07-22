"use client";

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SelectValue } from '@radix-ui/react-select';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+52)8677544676',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'Josephtg107@gmail.com',
  },
  {
    icon: <FaWhatsapp />,
    title: 'WhatsApp',
    description: '(+52)8677544676)',
  },
  {
    icon: <FaLinkedin />,
    title: 'Linked In',
    description: 'Josephtg107',
  },
]

const Contact = () => {
  return <motion.section 
  initial={{opacity: 0}}
  animate={{
  opacity: 1,
  transition: { delay: 1.1, duration: 0.4, ease: "easeIn" }
}}
  className="py-6"
  >
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-[30px]'>
        {/* form */}
        <div className='xl:w-[54%] order-2 xl:order-none'>
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let's Work Together</h3>
            <p className='text-white/60'>I am an International Developer ready to work and willing to move out of my home country or work remotely to ahieve new bounds and reach more goals.</p>
            {/* input */}
            <div className='grid grid-cols-1 md:gridcols-2 gap-6'>
              <Input type="firstname" placeholder="First Name" />
              <Input type="lastname" placeholder="Last Name" />
              <Input type="email" placeholder="Email" />
              <Input type="phone" placeholder="Phone Number" />
            </div>
            {/* select */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="est">iOS App Development</SelectItem>
                  <SelectItem value="cst">Web Development</SelectItem>
                  <SelectItem value="mst">WhatsApp Development</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea */}
            <Textarea
            className="h-[200px]"
            placeholder="Type your message here"
            />
            {/* BUTTON */}
            <Button size="md" className="max-w-40">
              Send Message
            </Button>
          </form>
        </div>
        {/* info */}
        <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-non mb8 xl:mb-0'>
          <ul className='flex flex-col gap-10'>
            {info.map((item, index) => {
              return <li key={index} className='flex items-center gap-6'>
                <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                  <div className='text-[28px]'>{item.icon}</div>
                </div>
                <div className='flex-1'>
                  <p className='text-white/60'>{item.title}</p>
                  <h3 className='text-xl'>{item.description}</h3>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
}

export default Contact;