"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CampaignIcon from '@mui/icons-material/Campaign';
// import ArticleIcon from '@mui/icons-material/Article';
// import MovieIcon from '@mui/icons-material/Movie';
// import DiamondIcon from '@mui/icons-material/Diamond';
import Image from 'next/image';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState<NodeJS.Timeout | null>(null);

  const handleDropdownToggle = (menu: string) => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setOpenDropdown(prev => (prev === menu ? null : menu));
  };

  const handleDropdownMouseEnter = (menu: string) => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
    setOpenDropdown(menu);
  };

  const handleDropdownMouseLeave = () => {
    const timer = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
    setDropdownTimer(timer);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const services = [
    { label: "UI/UX Design", href: "/services/ui-ux", icon: <DesignServicesIcon fontSize="small" />, desc: "Crafting intuitive digital experiences" },
    { label: "Machine Learning & AI", href: "/services/ml-ai", icon: <PsychologyIcon fontSize="small" />, desc: "Smart solutions for complex problems" },
    { label: "Full Stack Development", href: "/services/full-stack", icon: <TerminalIcon fontSize="small" />, desc: "End-to-end web solutions" },
    { label: "SEO & Digital Marketing", href: "/services/seo-marketing", icon: <CampaignIcon fontSize="small" />, desc: "Boost your online presence" },
    { label: "Data Analytics", href: "/services/data-analytics", icon: <AnalyticsIcon fontSize="small" />, desc: "Transform data into insights" },
    { label: "Frontend Development", href: "/services/frontend", icon: <DataObjectIcon fontSize="small" />, desc: "Beautiful, responsive interfaces" },
    { label: "Backend Development", href: "/services/backend", icon: <SettingsSuggestIcon fontSize="small" />, desc: "Robust server-side architecture" },
    { label: "Database Design", href: "/services/database", icon: <StorageIcon fontSize="small" />, desc: "Optimized data storage solutions" },
  ];

  // const resources = [
  //   { label: "Tech Blog", href: "/resources/blog", icon: <ArticleIcon fontSize="small" />, desc: "Latest industry insights" },
  //   { label: "Case Studies", href: "/resources/case-studies", icon: <DiamondIcon fontSize="small" />, desc: "Our success stories" },
  //   { label: "Media Gallery", href: "/resources/media", icon: <MovieIcon fontSize="small" />, desc: "Our work in action" },
  //   { label: "White Papers", href: "/resources/white-papers", icon: <ArticleIcon fontSize="small" />, desc: "In-depth technical analysis" },
  // ];

  // const products = [
  //   { label: "SensormaticBD", href: "https://www.sensormaticbd.com/", icon: <DiamondIcon fontSize="small" />, desc: "Premium security solutions" },
  //   { label: "NeuroTech", href: "#", icon: <PsychologyIcon fontSize="small" />, desc: "AI-powered analytics" },
  //   { label: "CloudForge", href: "#", icon: <StorageIcon fontSize="small" />, desc: "Scalable cloud infrastructure" },
  //   { label: "PixelCraft", href: "#", icon: <DesignServicesIcon fontSize="small" />, desc: "Design excellence" },
  // ];

  return (
    <nav className="w-full sticky top-0 z-50 px-4 py-3 font-main text-navText border-b border-b-amber-400 border-secondary bg-primary/30 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold text-white flex items-center">
          <div className="flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="ByteMorphIT Logo"
                width={45} // Adjust width as per need
                height={45} // Adjust height as per need
                className="object-contain rounded-full"
              />
            </div>
            <span className="text-lg ml-2 text-black hidden md:block font-gothic">Nestify<span className='text-amber-500 font-bold'>BD</span></span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 font-medium ml-10">
            <Link className='hover:text-amber-600 hover:border-b-2 hover:border-b-amber-500 transition-colors' href="/">Home</Link>
            <Link className='hover:text-amber-600 hover:border-b-2 hover:border-b-amber-500 transition-colors' href="/properties">Properties</Link>
            <Link className='hover:text-amber-600 hover:border-b-2 hover:border-b-amber-500 transition-colors' href="/categories">Categories</Link>

            <Link className='hover:text-amber-600 hover:border-b-2 hover:border-b-amber-500 transition-colors' href="/about">About Us</Link>

            {/* Services Dropdown
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownMouseEnter("services")}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button className="flex items-center text-navText hover:text-button transition-colors">
                Services 
                <KeyboardArrowDownIcon
                  fontSize="small"
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: openDropdown === "services" ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {openDropdown === "services" && (
                <div className="absolute left-0 bg-primary shadow-lg mt-2 py-6 w-[800px] rounded-xl z-50 grid grid-cols-2 gap-4 px-6 animate-fadeIn border border-button/20">
                  <div className="col-span-2 mb-2 px-4 py-2 border-b border-button/20">
                    <h3 className="text-button text-lg font-bold">Our Technology Solutions</h3>
                    <p className="text-sm text-navText">Cutting-edge solutions tailored to your digital transformation</p>
                  </div>
                  {services.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center px-4 py-3 transition-all duration-200 hover:bg-slate-800 rounded-lg border border-transparent hover:border-button/30"
                    >
                      <span className="mr-3 text-button group-hover:text-white">{item.icon}</span>
                      <div>
                        <div className="font-medium text-white group-hover:text-button">{item.label}</div>
                        <div className="text-xs text-navText group-hover:text-button/80">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div> */}

            {/* Resources Dropdown */}
            {/* <div
              className="relative group"
              onMouseEnter={() => handleDropdownMouseEnter("resources")}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button className="flex items-center text-navText hover:text-button transition-colors">
                Resources
                <KeyboardArrowDownIcon
                  fontSize="small"
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: openDropdown === "resources" ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {openDropdown === "resources" && (
                <div className="absolute left-0 bg-primary shadow-lg mt-2 py-6 w-[600px] rounded-xl z-50 grid grid-cols-2 gap-4 px-6 animate-fadeIn border border-button/20">
                  <div className="col-span-2 mb-2 px-4 py-2 border-b border-button/20">
                    <h3 className="text-button text-lg font-bold">Knowledge Resources</h3>
                    <p className="text-sm text-navText">Learn from our expertise and success stories</p>
                  </div>
                  {resources.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center px-4 py-3 transition-all duration-200 hover:bg-slate-800 rounded-lg border border-transparent hover:border-button/30"
                    >
                      <span className="mr-3 text-button group-hover:text-white">{item.icon}</span>
                      <div>
                        <div className="font-medium text-white group-hover:text-button">{item.label}</div>
                        <div className="text-xs text-navText group-hover:text-button/80">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div> */}

            {/* Products Dropdown */}
            {/* <div
              className="relative group"
              onMouseEnter={() => handleDropdownMouseEnter("products")}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button className="flex items-center text-navText hover:text-button transition-colors">
                Products
                <KeyboardArrowDownIcon
                  fontSize="small"
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: openDropdown === "products" ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {openDropdown === "products" && (
                <div className="absolute left-0 bg-primary shadow-lg mt-2 py-6 w-[600px] rounded-xl z-50 grid grid-cols-2 gap-4 px-6 animate-fadeIn border border-button/20">
                  <div className="col-span-2 mb-2 px-4 py-2 border-b border-button/20">
                    <h3 className="text-button text-lg font-bold">Our Specialized Products</h3>
                    <p className="text-sm text-navText">Dedicated solutions for every technological need</p>
                  </div>
                  {products.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group hover:bg-slate-800 flex items-center px-4 py-3 transition-all duration-200  rounded-lg border border-transparent hover:border-button/30"
                    >
                      <span className="mr-3 text-button group-hover:text-white">{item.icon}</span>
                      <div>
                        <div className="font-medium text-white group-hover:text-button">{item.label}</div>
                        <div className="text-xs text-navText group-hover:text-button/80">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div> */}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="hidden lg:block font-semibold p-2 pr-4 pl-4 bg-button text-black rounded-lg hover:bg-white hover:text-primary transition-all duration-300 group">
            <span className="group-hover:tracking-wider transition-all">Sign In</span>
          </Link>
          <button className="lg:hidden text-black hover:text-button transition-colors" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-3 animate-slideDown bg-primary/95 backdrop-blur-sm p-4 rounded-lg border border-button/20">
          <Link href="/" className="block text-zinc-900 hover:border-b-2 hover:border-b-amber-500 hover:text-amber-500 py-2 px-3 hover:bg-secondary rounded-lg transition-colors">Home</Link>
          <Link href="/about" className="block text-zinc-900 hover:border-b-2 hover:border-b-amber-500 hover:text-amber-500 py-2 px-3 hover:bg-secondary rounded-lg transition-colors">About Us</Link>
          <Link href="/properties" className="block text-zinc-900 hover:border-b-2 hover:border-b-amber-500 hover:text-amber-500 py-2 px-3 hover:bg-secondary rounded-lg transition-colors">Properties</Link>
        <Link href="/categories" className="block text-zinc-900 hover:border-b-2 hover:border-b-amber-500 hover:text-amber-500 py-2 px-3 hover:bg-secondary rounded-lg transition-colors">Categories</Link>
        <Link href="/signin" className="block text-zinc-900 hover:border-2 hover:bg-white hover:border-amber-400 bg-amber-500 py-2 px-3 hover:bg-secondary rounded-lg transition-colors">Sign In</Link>


          {/* Mobile Services Dropdown
          <div className="border-t border-button/20 pt-2">
            <button 
              onClick={() => handleDropdownToggle("services")} 
              className="flex items-center w-full text-white hover:text-button py-2 px-3 hover:bg-secondary rounded-lg transition-colors"
            >
              Solutions 
              <KeyboardArrowDownIcon 
                fontSize="small" 
                style={{
                  transition: 'transform 0.3s ease',
                  transform: openDropdown === "services" ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
            {openDropdown === "services" && (
              <div className="pl-4 grid grid-cols-1 gap-2 animate-fadeIn mt-2">
                {services.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center py-2 px-3 text-white hover:bg-slate-800 rounded-lg transition-colors duration-200 border border-transparent hover:border-button/30"
                  >
                    <span className="mr-2 text-button">{item.icon}</span>
                    <div>
                      <div>{item.label}</div>
                      <div className="text-xs text-navText">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div> */}

          {/* Mobile Resources Dropdown */}
          {/* <div className="border-t border-button/20 pt-2">
            <button 
              onClick={() => handleDropdownToggle("resources")} 
              className="flex items-center w-full text-white hover:text-button py-2 px-3 hover:bg-secondary rounded-lg transition-colors"
            >
              Resources
              <KeyboardArrowDownIcon 
                fontSize="small" 
                style={{
                  transition: 'transform 0.3s ease',
                  transform: openDropdown === "resources" ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
            {openDropdown === "resources" && (
              <div className="pl-4 grid grid-cols-1 gap-2 animate-fadeIn mt-2">
                {resources.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center py-2 px-3 text-white hover:bg-slate-800 rounded-lg transition-colors duration-200 border border-transparent hover:border-button/30"
                  >
                    <span className="mr-2 text-button">{item.icon}</span>
                    <div>
                      <div>{item.label}</div>
                      <div className="text-xs text-navText">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div> */}

          {/* Mobile Products Dropdown */}
          {/* <div className="border-t border-button/20 pt-2">
            <button 
              onClick={() => handleDropdownToggle("products")} 
              className="flex items-center w-full text-white hover:text-button py-2 px-3 hover:bg-secondary rounded-lg transition-colors"
            >
              Products
              <KeyboardArrowDownIcon 
                fontSize="small" 
                style={{
                  transition: 'transform 0.3s ease',
                  transform: openDropdown === "products" ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
            {openDropdown === "products" && (
              <div className="pl-4 grid grid-cols-1 gap-2 animate-fadeIn mt-2">
                {products.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center hover:bg-slate-800 py-2 px-3 text-white rounded-lg transition-colors duration-200 border border-transparent hover:border-button/30"
                  >
                    <span className="mr-2 text-button">{item.icon}</span>
                    <div>
                      <div>{item.label}</div>
                      <div className="text-xs text-navText">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;