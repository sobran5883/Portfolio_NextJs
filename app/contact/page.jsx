"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info=[
  {
    icon:<FaPhoneAlt/>,
    title:'Phone',
    description:"(+91) 7619920344"
  },
  {
    icon:<FaEnvelope/>,
    title:'Email',
    description:"sobran0054@gmail.com"
  },
  {
    icon:<FaMapMarkedAlt/>,
    title:'Address',
    description:"F-13, KN Hostel, IET Lucknow"
  },
]

import { motion } from "framer-motion";
function contact() {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:1.5, duration:0.4, ease:'easeIn'}}} className="">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[25px]">
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form className="flex flex-col gap-2 p-6 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent">Let's work together</h3>
              <p className="text-white/60">Let's connect! Whether you have a project in mind, a job opportunity, or just want to chat about web development, feel free to send your message.</p>
              <div className="grid grid-col-1 md:grid-cols-2 gap-2">
                <Input type="firstname" placeholder="Firstname"/>
                <Input type="lastname" placeholder="Lastname"/>
                <Input type="email" placeholder="Email address"/>
                <Input type="phone" placeholder="Phone number"/>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="cst">Full Stack Developer</SelectItem>
                    <SelectItem value="mst">Frontend Developer</SelectItem>
                    <SelectItem value="pst">ReactJs Developer</SelectItem>
                    <SelectItem value="qst">NextJs Developer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className='h-[100px]' placeholder='Type your message here.'/>
              <Button size="sm" className="max-w-40">Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=>{
                return(
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div>
                      <p className="text-white/ text-sm">{item.title}</p>
                      <h3 className="text-lg">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default contact