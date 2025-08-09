"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Image from "next/image";

const menuData = [
  // ... your existing menuData unchanged ...
  {
    label: "Buy",
    items: [
      [
        { label: "Homes for sale", href: "/buy/homes-for-sale" },
        { label: "Foreclosures", href: "/buy/foreclosures" },
        { label: "For sale by owner", href: "/buy/fsbo" },
        { label: "Open houses", href: "/buy/open-houses" },
      ],
      [
        { label: "New construction", href: "/buy/new-construction" },
        { label: "Coming soon", href: "/buy/coming-soon" },
        { label: "Recent home sales", href: "/buy/recent-sales" },
        { label: "All homes", href: "/buy/all-homes" },
      ],
      {
        title: "Resources",
        children: [
          { label: "Home Buying Guide", href: "/buy/resources/guide" },
          { label: "Foreclosure Center", href: "/buy/resources/foreclosure-center" },
          { label: "Real Estate App", href: "/buy/resources/app" },
          { label: "Down Payment Assistance", href: "/buy/resources/down-payment" },
        ],
      },
    ],
  },
  {
    label: "Rent",
    items: [
      [
        { label: "Apartments for rent", href: "/rent/apartments" },
        { label: "Houses for rent", href: "/rent/houses" },
        { label: "All rental listings", href: "/rent/all-listings" },
        { label: "All rental buildings", href: "/rent/buildings" },
      ],
      {
        title: "Your Search",
        children: [
          { label: "Saved searches", href: "/rent/saved" },
          { label: "Inbox", href: "/rent/inbox" },
          { label: "Contacted rentals", href: "/rent/contacted" },
          { label: "Applications", href: "/rent/applications" },
        ],
      },
      {
        title: "Resources",
        children: [
          { label: "Rent with NestifyBD", href: "/rent/resources/rent-with-zillow" },
          { label: "Build your credit", href: "/rent/resources/credit" },
          { label: "Renters insurance", href: "/rent/resources/insurance" },
          { label: "Affordability calculator", href: "/rent/resources/affordability" },
          { label: "Rent Guide", href: "/rent/resources/guide" },
        ],
      },
    ],
  },
  {
    label: "Sell",
    items: [
      [
        { label: "Sell your home", href: "/sell/sell-your-home" },
        { label: "Home value", href: "/sell/home-value" },
        { label: "Local experts", href: "/sell/local-experts" },
      ],
      {
        title: "Resources",
        children: [
          { label: "Home Selling Guide", href: "/sell/resources/guide" },
          { label: "Pricing Strategies", href: "/sell/resources/pricing" },
        ],
      },
    ],
  },
  {
    label: "Get Mortgage",
    items: [
      [
        { label: "Mortgage rates", href: "/mortgage/rates" },
        { label: "Refinance rates", href: "/mortgage/refinance" },
      ],
      {
        title: "Resources",
        children: [
          { label: "Mortgage Calculator", href: "/mortgage/resources/calculator" },
          { label: "Mortgage Guide", href: "/mortgage/resources/guide" },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Ref to hold timer ID for delayed close
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 500); // 0.5 seconds delay before hiding submenu
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  return (
    <nav className="w-full sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4 h-[74px]">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center h-full">
          <Link href="/" className="block h-full flex items-center">
            <Image
              src="/logo1.jpeg"
              alt="NestifyBD Logo"
              width={150}
              height={150}
              className="object-contain max-h-full"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 ml-10 text-black font-medium space-x-8">
          {menuData.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menu.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300">
                <span>{menu.label}</span>
                <KeyboardArrowDown fontSize="small" />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-0 bg-white border border-gray-200 rounded-xl shadow-xl mt-2 p-6 grid grid-cols-3 gap-6 min-w-[600px] z-[9999] 
                  transition-opacity duration-300 ease-in-out
                  ${openDropdown === menu.label ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
                `}
                onMouseEnter={() => handleMouseEnter(menu.label)}
                onMouseLeave={handleMouseLeave}
              >
                {menu.items.map((group, idx) => (
                  <div
                    key={idx}
                    className={`px-4 ${
                      idx !== menu.items.length - 1 ? "border-r border-gray-300" : ""
                    }`}
                  >
                    {Array.isArray(group) ? (
                      group.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block py-2 border-b border-gray-100 last:border-b-0 rounded-md px-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                        >
                          {item.label}
                        </Link>
                      ))
                    ) : (
                      <>
                        <div className="text-blue-700 font-semibold mb-5 text-lg border-b border-blue-200 pb-2 cursor-default select-none">
                          {group.title}
                        </div>
                        {group.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 border-b border-gray-100 last:border-b-0 pl-4 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="hidden lg:flex space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-semibold text-[#2a6071] border border-[#2a6071] rounded hover:bg-blue-50 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-semibold text-white bg-[#2a6071] rounded hover:bg-blue-700 transition"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-black ml-auto"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          {menuData.map((menu) => (
            <div key={menu.label} className="border-b border-gray-200">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-black"
                onClick={() =>
                  setMobileDropdown((prev) => (prev === menu.label ? null : menu.label))
                }
                aria-expanded={mobileDropdown === menu.label}
                aria-controls={`${menu.label}-submenu`}
              >
                <span>{menu.label}</span>
                <KeyboardArrowDown
                  fontSize="small"
                  className={`transform transition-transform duration-300 ${
                    mobileDropdown === menu.label ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {mobileDropdown === menu.label && (
                <div
                  id={`${menu.label}-submenu`}
                  className="bg-gray-50 px-6 pb-4 space-y-4"
                >
                  {menu.items.map((group, idx) => (
                    <div key={idx}>
                      {Array.isArray(group) ? (
                        group.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block py-2 text-gray-700 hover:text-blue-600"
                          >
                            {item.label}
                          </Link>
                        ))
                      ) : (
                        <>
                          <div className="font-semibold mb-2">{group.title}</div>
                          {group.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block py-2 pl-4 text-gray-600 hover:text-blue-600"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Login/Signup buttons */}
          <div className="flex justify-center space-x-4 p-6 border-t border-gray-200">
            <Link
              href="/login"
              className="px-6 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
