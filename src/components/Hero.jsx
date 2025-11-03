import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/profile.jpg"
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration:0.5, delay: delay}
  }
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:pb-24">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                  variants={container(0)}
                  initial="hidden"
                  animate="visible"
                  className="pb-2 text-5xl sm:text-6xl font-light tracking-tight lg:text-7xl xl:text-8xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                  >
                  Caroline Kanini
                </motion.h1>
                <motion.span 
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-transparent mb-4"
                  >
                    Full Stack Developer
                </motion.span>
                <motion.p
                  variants={container(0.6)}
                  initial="hidden"
                  animate="visible" 
                  className="max-w-xl text-lg sm:text-xl font-light tracking-tight leading-relaxed text-neutral-200 mb-6"
                >
                  Crafting digital experiences with modern technologies
                </motion.p>
                <motion.p
                  variants={container(0.9)}
                  initial="hidden"
                  animate="visible" 
                  className="max-w-xl text-base sm:text-lg font-light tracking-tight leading-relaxed text-neutral-400 mb-8"
                >
                  {HERO_CONTENT}
                </motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x:100, opacity:0}}
              animate={{ x:0, opacity:1}}
              transition={{ duration: 1, delay:1.2}}
              src={profilePic} 
              alt="profile"
              className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-2xl shadow-lg" 
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
