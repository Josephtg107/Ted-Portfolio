"use client";

import { useState } from 'react';
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
    description: '(+52)8677544676',
  },
  {
    icon: <FaLinkedin />,
    title: 'Linked In',
    description: 'Josephtg107',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone Number is required';
    if (!formData.service) errors.service = 'Service is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeIn" } }}
      className="py-6"
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className='text-white/60'>I am an International Developer ready to work and willing to move out of my home country or work remotely to achieve new bounds and reach more goals.</p>
              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
                {formErrors.firstName && <span className="text-red-500">{formErrors.firstName}</span>}
                <Input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
                {formErrors.lastName && <span className="text-red-500">{formErrors.lastName}</span>}
                <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
                <Input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
                {formErrors.phone && <span className="text-red-500">{formErrors.phone}</span>}
              </div>
              {/* select */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="ios">iOS App Development</SelectItem>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp API Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {formErrors.service && <span className="text-red-500">{formErrors.service}</span>}
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              {formErrors.message && <span className="text-red-500">{formErrors.message}</span>}
              {/* BUTTON */}
              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
