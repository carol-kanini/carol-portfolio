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

  // Define social links array for easier management
  const socialLinks = [
    {
      href: "#",
      icon: FaLinkedin,
      label: "LinkedIn",
      hoverColor: "hover:bg-blue-500",
      priority: 1 
    },
    {
      href: "https://github.com/eduu-11287",
      icon: FaGithub,
      label: "GitHub",
      hoverColor: "hover:bg-gray-700",
      priority: 1
    },
    {
      href: "https://wa.me/254717677853",
      icon: FaWhatsapp,
      label: "WhatsApp",
      hoverColor: "hover:bg-green-500",
      priority: 1
    },
    {
      href: "https://x.com/Bumble_254",
      icon: FaSquareXTwitter,
      label: "X (Twitter)",
      hoverColor: "hover:bg-sky-500",
      priority: 2
    },
    {
      href: "https://www.instagram.com/eduuh_254",
      icon: FaInstagram,
      label: "Instagram",
      hoverColor: "hover:bg-pink-500",
      priority: 2
    },
    {
      href: "https://www.facebook.com/Eduuh254",
      icon: FaFacebook,
      label: "Facebook",
      hoverColor: "hover:bg-blue-600",
      priority: 3
    }
  ];

  return (
    <>
      {/* 🔹 Top Navbar (responsive) */}
      <nav className="flex items-center justify-between py-4 px-2 sm:py-6 sm:px-0">
        {/* Logo Section */}
        <div className="flex flex-shrink-0 items-center">
          <div className="relative group cursor-pointer" onClick={scrollToHome}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-slate-500 
             to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-all duration-300
              blur-sm group-hover:blur-none">
            </div>
            <img 
              id="home"
              className="relative z-10 w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto transition-transform duration-200 group-hover:scale-105 p-2"
              src={logo}
              alt="logo"
            />
          </div>
        </div>

        {/* Social Icons Section - Responsive */}
        <div className="flex items-center justify-center">
          {/* Mobile: Show only priority 1 icons */}
          <div className="flex gap-2 text-lg sm:hidden">
            {socialLinks
              .filter(link => link.priority === 1)
              .map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`p-2 rounded-full transition-all duration-200 ${link.hoverColor} hover:text-white hover:scale-110`}
                  >
                    <IconComponent />
                  </a>
                );
              })}
          </div>

          {/* Small tablets: Show priority 1 & 2 icons */}
          <div className="hidden sm:flex md:hidden gap-2 text-xl">
            {socialLinks
              .filter(link => link.priority <= 2)
              .map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`p-2 rounded-full transition-all duration-200 ${link.hoverColor} hover:text-white hover:scale-110`}
                  >
                    <IconComponent />
                  </a>
                );
              })}
          </div>

          {/* Medium tablets and up: Show all icons */}
          <div className="hidden md:flex gap-3 lg:gap-4 text-xl lg:text-2xl">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`p-2 rounded-full transition-all duration-200 ${link.hoverColor} hover:text-white hover:scale-110`}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 🔹 Floating Menu Button */}
      {showFab && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white text-xl sm:text-2xl shadow-lg hover:scale-110 transition-all duration-200"
          >
            <FaBars />
          </button>
        </div>
      )}

      {/* 🔹 Floating Gradient Menu */}
      {showMenu && (
        <div className="fixed bottom-16 sm:bottom-20 right-4 sm:right-6 z-50 flex flex-col gap-3 sm:gap-4 bg-neutral-900/90 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md min-w-[120px]">
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
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-base sm:text-lg font-semibold tracking-tight hover:scale-105 transition-all duration-200 text-center"
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