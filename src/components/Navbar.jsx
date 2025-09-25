import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram, FaFacebook, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFab, setShowFab] = useState(false);

  // Show floating menu button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowFab(true);
      } else {
        setShowFab(false);
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHome = () => {
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth'});
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth'});
      }
  }

  return (
    <>
      {/* 🔹 Top Navbar (logo + socials only) */}
      <nav className="mb-8 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
          <img
             id='home'
             className="mx-2 w-32 md:w-36 lg:w-40 h-auto cursor-pointer transition-transform duration-200 hover:scale-105" 
            src={logo} 
            alt="logo"
            onClick={scrollToHome}
            /> 
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          {/* Social Icons with Hover Effects */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full transition-all duration-200 hover:bg-blue-500 hover:text-white hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/eduu-11287"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full transition-all duration-200 hover:bg-gray-700 hover:text-white hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/254717677853"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 rounded-full transition-all duration-200 hover:bg-green-500 hover:text-white hover:scale-110"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://x.com/Bumble_254"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="p-2 rounded-full transition-all duration-200 hover:bg-sky-500 hover:text-white hover:scale-110"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://www.instagram.com/eduuh_254"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full transition-all duration-200 hover:bg-pink-500 hover:text-white hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/Eduuh254"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 rounded-full transition-all duration-200 hover:bg-blue-600 hover:text-white hover:scale-110"
          >
            <FaFacebook />
          </a>
        </div>
      </nav>

      {/* 🔹 Floating Menu Button */}
      {showFab && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-4 rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white text-2xl shadow-lg hover:scale-110 transition-all duration-200"
          >
            <FaBars />
          </button>
        </div>
      )}

      {/* 🔹 Floating Gradient Menu */}
      {showMenu && (
        <div className="fixed bottom-20 right-6 z-50 flex flex-col gap-4 bg-neutral-900/90 p-4 rounded-xl shadow-lg backdrop-blur-md">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "technologies", label: "Technologies" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setShowMenu(false)}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-lg font-semibold tracking-tight hover:scale-105 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
