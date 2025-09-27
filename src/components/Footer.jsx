// src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaHeart } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "#",
      icon: FaLinkedin,
      label: "LinkedIn",
      hoverColor: "hover:bg-blue-500/20 hover:text-blue-400",
    },
    {
      href: "https://github.com/eduu-11287",
      icon: FaGithub,
      label: "GitHub",
      hoverColor: "hover:bg-gray-700/20 hover:text-gray-300",
    },
    {
      href: "https://wa.me/254717677853",
      icon: FaWhatsapp,
      label: "WhatsApp",
      hoverColor: "hover:bg-green-500/20 hover:text-green-400",
    },
    {
      href: "https://x.com/Bumble_254",
      icon: FaSquareXTwitter,
      label: "X (Twitter)",
      hoverColor: "hover:bg-sky-500/20 hover:text-sky-400",
    },
    {
      href: "https://www.instagram.com/eduuh_254",
      icon: FaInstagram,
      label: "Instagram",
      hoverColor: "hover:bg-pink-500/20 hover:text-pink-400",
    },
    {
      href: "https://www.facebook.com/Eduuh254",
      icon: FaFacebook,
      label: "Facebook",
      hoverColor: "hover:bg-blue-600/20 hover:text-blue-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <footer className="relative">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/5 to-neutral-900/10 pointer-events-none"></div>
      
      {/* Main Footer Content with Glass Morphism */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-300 via-slate-300 to-purple-400 bg-clip-text text-transparent">
                  Edwin Ngigi
                </h3>
                <p className="text-neutral-300 text-lg leading-relaxed max-w-md">
                  Full Stack Developer crafting digital experiences with modern technologies. 
                  Let's build something amazing together.
                </p>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-400 transition-all duration-300 ${link.hoverColor} hover:border-white/20 hover:shadow-lg`}
                      >
                        <IconComponent className="text-xl" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <h4 className="text-xl font-semibold text-white">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 8, color: "#ec4899" }}
                        className="text-neutral-300 hover:text-pink-400 transition-all duration-300 text-base cursor-pointer block py-2 font-medium"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <h4 className="text-xl font-semibold text-white">Get In Touch</h4>
                <div className="space-y-3 text-sm sm:text-base text-neutral-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex-shrink-0"></div>
                    <p>Nairobi, Kenya</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex-shrink-0"></div>
                    <p>+254-717-677-853</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex-shrink-0"></div>
                    <p 
                      className="cursor-pointer hover:text-pink-400 transition-all duration-300 font-medium break-words"
                    >
                      edwinngigi313@gmail.com
                    </p>
                  </div>
                </div>
                
                {/* Call to Action */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-base font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:from-pink-600 hover:to-purple-700"
                >
                  Let's Talk
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar - Centered and Professional */}
      <div className="relative border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Centered Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              
              {/* Copyright with better spacing */}
              <div className="flex flex-col items-center space-y-3">
                <p className="text-neutral-400 text-sm sm:text-base text-center max-w-full break-words">
                  © {currentYear} Edwin Ngigi. Crafted with {" "}
                  <span className='inline-flex items-center mx-1'> <FaHeart className="text-pink-500 mx-2 animate-pulse inline-middle" /> </span>
                  using React &amp; Tailwind CSS
                </p>
                
                {/* Additional Links - Centered with spacing */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-wrap justify-center gap-3 text-sm sm:text-base text-neutral-500"
                >
                  <a href="#" className="hover:text-pink-400 transition-all duration-300 px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-white/5 whitespace-normal"
                  >
                    Privacy Policy  
                  </a>
                  <span className="text-neutral-600">|</span>
                  <a href="#" className="hover:text-pink-400 transition-all duration-300 px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-white/5 whitespace-normal"
                  >
                    Terms of Service
                  </a>
                  <span className="text-neutral-600">|</span>
                  <a href="#" className="hover:text-pink-400 transition-all duration-300 px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-white/5 whitespace-normal"
                  >
                    Cookie Policy
                  </a>
                </motion.div>
              </div>

              {/* Inspirational Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xs sm:text-sm text-neutral-600 font-light"
              >
                Innovating through code, designing with passion.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;