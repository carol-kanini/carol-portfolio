import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT, RESUME_LINK } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const handleDownloadResume = () => {
    //temporary anchor element
    const link = document.createElement('a');
    link.href = RESUME_LINK;
    link.download = 'Edwin Ngigi cv'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='border-b border-neutral-900 pb-16 lg:pb-20'>
        <motion.h2 
            whileInView={{ opacity:1 , y: 0}}
            initial={{ opacity:0, y: -50}}
            transition={{ duration: 0.5}}
            className='my-16 lg:mb-20 text-center text-3xl sm:text-4xl lg:text-5xl font-ligth tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent'
            >
                About Me
        </motion.h2>
        <div className='flex flex-wrap items-center lg:items-start'>
            <motion.div
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100}}
                transition={{ duration: 0.5}}
                className='w-full lg:w-1/2 mb-8 lg:mb-0'
                >
                <div className='flex justify-center lg:justify-start lg:pl-8'>
                    <img 
                        className="w-64 h-80 sm:w-72 sm:h-90 lg:w-80 lg:h-96 xl:h-[26rem] object-cover rounded-2xl shadow-lg" 
                        src={aboutImg} 
                        alt='about' />
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100}}
                transition={{ duration: 0.5}}
                className="w-full lg:w-1/2"
                >
                <div className="flex justify-center lg:justify-start lg:pr-8">
                    <div className="max-w-xl px-4 lg:px-0">
                      <p className="text-base sm:text-lg font-light leading-relaxed tracking-tight text-neutral-300 mb-6"
                      >
                          {ABOUT_TEXT}
                      </p>
                      
                      {/* Resume Download Button */}
                      <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleDownloadResume}
                          className="px-8 py-3.5 bg-gradient-to-r from-pink-500 via-purple to-indigo-500 text-white font-medium 
                          rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out backdrop-blur-sm border border-white border-opacity-20"
                         >
                          <span className="flex items-center justify-center">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              Download Resume
                          </span>
                      </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About