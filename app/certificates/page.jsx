"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certificates=[
  {
    num: "01",
    category:"Hired Certificate",
    description: "This certificate, issued by Internshala, recognizes my selection for an internship as a React.js Frontend Developer at Firststore Ricoz Pvt Ltd.",
    image:'/assets/certificate/Hired_certificate.jpg',
  },
  {
    num: "02",
    category:"Intership Completion Certificate",
    description: "This certificate, issued by Ricoz Pvt Ltd, acknowledges the successful completion of my 6-month internship as a React.js Frontend Developer.",
    image:'/assets/certificate/inter_complete_certificate.jpg',
  },
]  
function contact() {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:1.5, duration:0.4, ease:'easeIn'}}} className="">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[25px]">
          <ul className="w-full flex flex-col gap-6">
            {certificates.map((certificate, index)=>{
              return(
                <li key={index} className="w-full">
                  <h2 className="text-xl xl:text-2xl font-semibold">{certificate.category}</h2>
                  <div className="flex flex-col xl:flex-row w-full gap-4">
                    <p className="xl:w-6/12 text-white/60">{certificate.description}</p>
                    <div className="xl:w-6/12 overflow-auto">
                      <Image 
                        src={certificate.image} 
                        layout="responsive" 
                        width={100} 
                        height={100} 
                        className="object-contain" // Use object-fit to maintain aspect ratio
                      />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

export default contact