"use client";

import {motion} from "framer-motion";
import { useState } from "react";

import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub} from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects=[
  {
    num: "01",
    category:"fullstack",
    title:"project 1",
    description: "MyFastX, a courier service provider website. The platform includes an admin panel for customer management. It is fully responsive and visually appealing.",
    stack:[{name:"React.js"}, {name:"Tailwind.css"}, {name:"Node.js"}, {name:"MongoDB"}, {name:"Redux"}],
    image:'/assets/work/thumb1.jpg',
    live:"https://myfastx.com/",
    github:"https://github.com/sobran5883",
  },
  {
    num: "02",
    category:"Frontend",
    title:"project 2",
    description:"PrepEat is a dynamic and user-friendly website, offering a seamless platform for various services including tiffin delivery, chef services, and laundry assistance.",
    stack:[{name:"React.js"}, {name:"vanilla CSS"}],
    image:'/assets/work/thumb2.jpg',
    live:"https://prep-eat-react-vite.vercel.app/",
    github:"https://github.com/sobran5883/prepEat_react-vite",
  },
  {
    num: "03",
    category:"Frontend",
    title:"project 3",
    description:"Developed a responsive website for Smart India Hackathon using React.js for dynamic components, Tailwind CSS for sleek and adaptive styling, and Framer Motion for smooth, engaging animations.",
    stack:[{name:"Next.js"}, {name:"Tailwind.css"},{name:"Framer Motion"}],
    image:'/assets/work/thumb7.jpg',
    live:"https://www.redlinear.com/",
    github:"https://github.com/sobran5883/RedLinear",
  },
  {
    num: "04",
    category:"Fullstack Project",
    title:"project 4",
    description:"A platform enabling users to list and sell pre-owned items, with a contact feature for buyer-seller communication.",
    stack:[{name:"React.js"}, {name:"Tailwind"},{name:"Firebase"},{name:"MongoDB"},{name:"Node.js"}],
    image:'/assets/work/thumb8.jpg',
    live:"https://recartt.vercel.app/",
    github:"https://github.com/sobran5883/ReCart-Frontend",
  },
  {
    num: "05",
    category:"Fullstack Project",
    title:"project 5",
    description:"X-Clone is a social platform where users can upload images and news. Others can engage by liking and commenting on posts, fostering a community of interaction and sharing.",
    stack:[{name:"Next.js"}, {name:"Tailwind"},{name:"Firebase"},{name:"MongoDB"},{name:"Node.js"}],
    image:'/assets/work/thumb6.jpg',
    live:"https://x-next-pi.vercel.app/",
    github:"https://github.com/sobran5883/x-next",
  },
  {
    num: "06",
    category:"frontend, Rest API",
    title:"project 6",
    description:"It involves fetching Pokémon data from an API and implementing search functionality for all content.",
    stack:[{name:"React.js"},{name:"Fetch API"}, {name:"Search Funtionality"}],
    image:'/assets/work/thumb4.jpg',
    live:"https://pokemon-search-api-five.vercel.app/",
    github:"https://github.com/sobran5883/PokemonSearch_api",
  },
  {
    num: "07",
    category:"Fullstack Project",
    title:"project 7",
    description:"I developed an MVP website for a painting service, enabling users to contact them easily. The site features a simple contact form and essential information about the services offered.",
    stack:[{name:"React.js"}, {name:"Tailwind.css"},{name:"Node.js"},{name:"MongoDB"}],
    image:'/assets/work/thumb5.jpg',
    live:"https://painter-1z66.onrender.com/",
    github:"https://github.com/sobran5883/painter",
  },
  {
    num: "08",
    category:"frontend",
    title:"project 8",
    description:"A platform where users can dynamically add their own projects.",
    stack:[{name:"React.js"}, {name:"Tailwind.css"}],
    image:'/assets/work/thumb3.jpg',
    live:"https://funny-swan-431006.netlify.app/",
    github:"https://github.com/sobran5883/Project-Dashboard",
  },
]

const Work=()=>{
  const [project, setProject]=useState(projects[0]);
  const handleSliderChange = (swiper)=>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:1.5, duration:0.4, ease:'easeIn'}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return(
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length-1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                   <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
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
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
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
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[420px] mb-12" onSlideChange={handleSliderChange}>
              {projects.map((project, index)=>{
                return(
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[200px] sm:h-[360px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className=""/>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_12px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                              btnStyles="bg-accent hover:bg-accent-hover text-primary md:text-[22px] md:w-[44px] md:h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work