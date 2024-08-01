"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";


const services = [
  {
    "num": "01",
    "title": "iOS App",
    "description": "Expert iOS development services to create high-performance, user-friendly mobile applications. Specializing in Swift and SwiftUI, I design and build apps tailored to your specific needs, ensuring a seamless and engaging user experience.",
    "href": ""
  },
  {
    "num": "02",
    "title": "AR and 3D App",
    "description": "Cutting-edge AR and 3D app development to bring your ideas to life. Utilizing the latest technologies, I create immersive experiences for education, entertainment, and business, enhancing user engagement and interaction.",
    "href": ""
  },
  {
    "num": "03",
    "title": "Web Portfolio",
    "description": "Showcase your work with a custom web portfolio. I design and develop visually stunning portfolios that highlight your skills, projects, and achievements, helping you stand out in your field and attract potential clients or employers.",
    "href": ""
  },
  {
    "num": "04",
    "title": "WhatsApp API Bot",
    "description": "Automate your customer interactions with a custom WhatsApp API Bot. Designed to handle inquiries, provide support, and manage communications efficiently, my bots help streamline your business operations.",
    "href": ""
  },
  {
    "num": "05",
    "title": "Web Site",
    "description": "Website development services to establish your online presence. From personal blogs to business websites, I create responsive, visually appealing, and SEO-optimized sites using the latest web technologies.",
    "href": ""
  },
  {
    "num": "06",
    "title": "E-commerce Site",
    "description": "End-to-end e-commerce site development to help you sell online. I build secure, user-friendly online stores with features like product listings, shopping carts, and order management to boost your sales and grow your business.",
    "href": ""
  },
]

import { motion } from "framer-motion";


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index)=> {
              return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-200">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* line */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
              )
            })}
        </motion.div>
      </div>
    </section>
  )
};

export default Services;