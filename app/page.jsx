"use client"
import { Typewriter } from 'react-simple-typewriter';
import {Button} from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi';

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import VoiceChat from '@/app/voiceComponent/page';

const Home =()=>{
  return(
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h2">
              Hello I'm <br /> <span className="text-accent">Sobran Rajak</span>
            </h1>
            <p className="max-w-[350px] min-h-24 mb-9 text-white/80">
              <span>
                <Typewriter
                  words={['I specialize in creating elegant and user-centric digital experiences.', 'I transform ideas into responsive, dynamic web applications that delight users.']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </span>
            </p>
            <div className=''>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="/resume.pdf" download className="uppercase flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <span>Download Resume</span>
                    <FiDownload className="text-xl"/>
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social constainerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
              <div>
                <VoiceChat/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
        <Stats/>
      </div>
    </section>
  )
}

export default Home;