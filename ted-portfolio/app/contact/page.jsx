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
        <div className='xl:h-[54%] order-2 xl:order-non'>
          <form>form</form>
        </div>
        {/* info */}
        <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-non mb8 xl:mb-0'>info</div>
      </div>
    </div>
  </motion.section>
}

export default Contact;