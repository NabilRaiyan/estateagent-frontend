"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

import { Menu as MuiMenu, MenuItem, Button } from "@mui/material";
import TranslateIcon from '@mui/icons-material/Translate';

import i18n from "../../../i18n"; 
import { useTranslation } from "react-i18next";

const menuData = [
  {
    label: "Home",
    href: "/"
  },
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
          { label: "Rent with EstateAgent", href: "/rent/resources/rent-with-nestifybd" },
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
    label: "Lease",
    items: [
      [
        { label: "Lease your home", href: "/lease/lease-your-home" },
        { label: "Lease your property", href: "/lease/lease-your-property" },
      ],
      {
        title: "Resources",
        children: [
          { label: "Home Selling Guide", href: "/lease/resources/guide" },
          { label: "Pricing Strategies", href: "/lease/resources/pricing" },
        ],
      },
    ],
  },
  {
    label: "About Us",
    href: "/about"
  },
];

const Navbar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "bn">(i18n.language === "bn" ? "bn" : "en");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Function to determine if a section is active based on current path
  const isActiveSection = (sectionLabel: string, sectionHref?: string) => {
    if (sectionHref) {
      return pathname === sectionHref || pathname.startsWith(sectionHref + '/');
    }
    const sectionPath = `/${sectionLabel.toLowerCase()}`;
    return pathname.startsWith(sectionPath);
  };

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
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  const handleLangMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleLangMenuClose = () => setAnchorEl(null);
  const handleLanguageSelect = (lang: "en" | "bn") => {
    i18n.changeLanguage(lang).then(() => {
      setLanguage(lang);
      setAnchorEl(null);
    });
  };

  
  return (
    <nav className="w-full sticky top-0 bg-gradient-to-b from-orange-50 to-white z-50">
      <div className="mx-auto flex items-center justify-between px-4 py-3 lg:py-4 h-[74px] bg-white">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center h-full">
          <Link href="/" className="block h-full flex items-center">
            {/* <Image
              src="/logo1.jpeg"
              alt={t("logoAlt", "EstateAgent Logo")}
              width={150}
              height={150}
              className="object-contain max-h-full"
              priority
            /> */}
            <span className="text-xl font-semibold text-black ml-2">EstateAgent</span>

          </Link>
        </div>

        {/* Centered Menu */}
        <div className="hidden lg:flex flex-1 justify-center text-black shadow-sm max-w-2xl bg-slate-50 shadow-cyan-500/50 p-2 mt-3 font-medium space-x-4 rounded-full">
          {menuData.map((menu) => {
            const isActive = isActiveSection(menu.label, menu.href);
            
            // If menu has href, render as Link (no dropdown)
            if (menu.href) {
              return (
                <Link
                  key={menu.label}
                  href={menu.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-[#357487] text-white" 
                      : "hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <span>{t(menu.label)}</span>
                </Link>
              );
            }
            
            // Otherwise render dropdown menu
            return (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? "bg-[#2a6071] text-white" 
                      : "hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <span>{t(menu.label)}</span>
                  <KeyboardArrowDown fontSize="small" />
                </button>

                {/* Dropdown with rounded wrapper */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 z-[9999] transition-opacity duration-300 ease-in-out
                    ${openDropdown === menu.label ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                  onMouseEnter={() => handleMouseEnter(menu.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white border border-gray-200 rounded-xl shadow-xl mt-2 p-6 grid grid-cols-3 gap-6 min-w-[800px]">
                    {menu.items?.map((group, idx) => (
                      <div
                        key={idx}
                        className={`px-4 ${idx !== menu.items!.length - 1 ? "border-r border-gray-300" : ""}`}
                      >
                        {Array.isArray(group) ? (
                          group.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block py-2 border-b border-gray-100 last:border-b-0 rounded-md px-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                            >
                              {t(item.label)}
                            </Link>
                          ))
                        ) : (
                          <>
                            <div className="text-blue-700 font-semibold mb-5 text-lg border-b border-blue-200 pb-2 cursor-default select-none">
                              {t(group.title)}
                            </div>
                            {group.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block py-2 border-b border-gray-100 last:border-b-0 pl-4 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                              >
                                {t(child.label)}
                              </Link>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right side buttons */}
        <div className="hidden lg:flex items-center space-x-4 mt-3">
          <Button
            aria-controls={open ? "language-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleLangMenuOpen}
            startIcon={<TranslateIcon />}
            className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition capitalize"
          >
            {language === "en" ? t("English") : t("বাংলা")}
          </Button>
          <MuiMenu
            id="language-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleLangMenuClose}
            MenuListProps={{ "aria-labelledby": "language-button" }}
            PaperProps={{ style: { minWidth: 120 } }}
          >
            <MenuItem selected={language === "en"} onClick={() => handleLanguageSelect("en")}>🇬🇧 {t("English")}</MenuItem>
            <MenuItem selected={language === "bn"} onClick={() => handleLanguageSelect("bn")}>🇧🇩 {t("বাংলা")}</MenuItem>
          </MuiMenu>

          <Link href="/login" className="px-4 py-2 text-sm font-semibold text-[#2a6071] border border-[#2a6071] rounded hover:bg-blue-50 transition">{t("Login")}</Link>
          <Link href="/signup" className="px-4 py-2 text-sm font-semibold text-white bg-[#2a6071] rounded hover:bg-blue-700 transition">{t("Signup")}</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-black ml-auto"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={t("Toggle mobile menu")}
        >
          {isMobileMenuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          {/* Mobile language toggle */}
          <div className="flex text-zinc-800 justify-center px-6 py-4 border-b border-gray-400">
            <span className="mr-2 text-[#2a6071]"><TranslateIcon /></span>
            <button
              onClick={() => handleLanguageSelect(language === "en" ? "bn" : "en")}
              aria-label={t("Toggle language")}
              className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-100 transition"
            >
              {language === "en" ? t("English") : t("বাংলা")}
            </button>
          </div>

          {/* Menu items with rounded dropdown */}
          {menuData.map((menu) => {
            const isActive = isActiveSection(menu.label, menu.href);
            
            // If menu has href, render as Link (no dropdown)
            if (menu.href) {
              return (
                <div key={menu.label} className="border-b border-gray-200 text-zinc-800">
                  <Link
                    href={menu.href}
                    className={`w-full px-6 py-4 block text-left font-semibold transition-colors duration-300 ${
                      isActive 
                        ? "bg-[#2a6071] text-white" 
                        : "text-black hover:bg-gray-50"
                    }`}
                  >
                    {t(menu.label)}
                  </Link>
                </div>
              );
            }
            
            // Otherwise render dropdown menu
            return (
              <div key={menu.label} className="border-b border-gray-200 text-zinc-800">
                <button
                  className={`w-full px-6 py-4 flex justify-between items-center text-left font-semibold transition-colors duration-300 ${
                    isActive 
                      ? "bg-[#2a6071] text-white" 
                      : "text-black"
                  }`}
                  onClick={() =>
                    setMobileDropdown((prev) => (prev === menu.label ? null : menu.label))
                  }
                  aria-expanded={mobileDropdown === menu.label}
                  aria-controls={`${menu.label}-submenu`}
                >
                  <span>{t(menu.label)}</span>
                  <KeyboardArrowDown
                    fontSize="small"
                    className={`transform transition-transform duration-300 ${mobileDropdown === menu.label ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                {mobileDropdown === menu.label && (
                  <div id={`${menu.label}-submenu`} className="bg-gray-50 rounded-xl text-zinc-800 px-6 pb-4 space-y-4 mt-2">
                    {menu.items?.map((group, idx) => (
                      <div key={idx}>
                        {Array.isArray(group) ? (
                          group.map((item) => (
                            <Link key={item.label} href={item.href} className="block py-2 text-gray-700 hover:text-blue-600">
                              {t(item.label)}
                            </Link>
                          ))
                        ) : (
                          <>
                            <div className="font-semibold mb-2">{t(group.title)}</div>
                            {group.children.map((child) => (
                              <Link key={child.label} href={child.href} className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
                                {t(child.label)}
                              </Link>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile Login/Signup buttons */}
          <div className="flex justify-center space-x-4 p-6 border-t border-gray-200">
            <Link href="/login" className="px-6 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition">{t("Login")}</Link>
            <Link href="/signup" className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition">{t("Signup")}</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;