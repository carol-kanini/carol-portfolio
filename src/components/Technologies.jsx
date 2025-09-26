import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPython, SiFlask, SiPostgresql, SiSqlite, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};
const Technologies = () => {
  const technologies = [
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss3, name: "CSS3" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiReact, name: "React" },
    { icon: SiPython, name: "Python" },
    { icon: SiFlask, name: "Flask" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiSqlite, name: "SQLite" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
  ];

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent'
      >
        Technologies
      </motion.h1>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto px-4'
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="flex flex-col items-center group"
          >
            <motion.div 
              variants={iconVariants(2 + index * 0.5)}
              initial="initial"
              animate="animate"
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className='rounded-2xl border-2 border-neutral-800 p-6 bg-neutral-900 group-hover:border-purple-400 transition-all duration-300 cursor-pointer shadow-lg group-hover:shadow-xl'
            >
              <tech.icon className="text-5xl text-neutral-300 group-hover:text-purple-300 transition-colors duration-300" />
            </motion.div>
            
            {/* Technology Name */}
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="mt-3 text-neutral-300 font-medium text-sm group-hover:text-purple-300 transition-colors duration-300"
            >
              {tech.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;