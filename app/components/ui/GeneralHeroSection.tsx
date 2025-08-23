"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LucideIcon } from 'lucide-react';

// Define types for the component props
interface IconFeature {
  icon: LucideIcon;
  title?: string;
  subtitle?: string;
}

interface ButtonConfig {
  text: string;
  href: string;
  variant?: "default" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
}

interface GeneralHeroSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  iconFeatures?: IconFeature[];
  buttons?: ButtonConfig[];
  height?: "sm" | "md" | "lg" | "xl" | "full";
  overlay?: "light" | "medium" | "dark";
  textAlign?: "left" | "center";
  className?: string;
  usePageBackground?: boolean; // New prop to use page-level background
}

const heightClasses = {
  sm: "h-[50vh]",
  md: "h-[60vh]",
  lg: "h-[70vh]",
  xl: "h-[80vh]",
  full: "h-screen"
};

const overlayClasses = {
  light: "bg-black/20",
  medium: "bg-black/40",
  dark: "bg-black/60"
};

export const GeneralHeroSection = ({
  backgroundImage,
  title,
  subtitle,
  iconFeatures = [],
  buttons = [],
  height = "lg",
  overlay = "medium",
  textAlign = "left",
  className = "",
  usePageBackground = false
}: GeneralHeroSectionProps) => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const contentAlignment = textAlign === "center" ? "items-center text-center" : "items-start text-left";
  const justifyContent = textAlign === "center" ? "justify-center" : "justify-start";

  return (
    <section className={`relative ${heightClasses[height]} overflow-hidden ${usePageBackground ? 'mx-4 my-6 rounded-xl' : 'mx-4 my-6 rounded-xl'} ${className}`}>
      {/* Background Image Container - Only render if not using page background */}
      {!usePageBackground && backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Overlay - Matches the exact size of the background */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]} z-10 ${usePageBackground ? 'rounded-xl' : ''}`} />

      {/* Content */}
      <div className={`absolute inset-0 flex ${justifyContent} items-center text-white z-20 px-6 sm:px-8 md:px-12 lg:px-16`}>
        <div className={`max-w-2xl ${contentAlignment}`}>

          {/* Title */}
          {title && (
            <h1
              className="text-6xl sm:text-4xl md:text-6xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg"
              data-aos="fade-up"
            >
              {title}
            </h1>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p
              className="text-xl sm:text-xl md:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {subtitle}
            </p>
          )}

          {/* Icon Features */}
          {iconFeatures.length > 0 && (
            <div
              className={`flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8 ${textAlign === "center" ? "justify-center" : "justify-start"}`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {iconFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 backdrop-blur-md bg-white/10 px-4 py-3 rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
                  >
                    <IconComponent size={24} className="text-white flex-shrink-0" />
                    <div className="flex flex-col">
                      {feature.title && (
                        <span className="text-sm font-semibold text-white">
                          {feature.title}
                        </span>
                      )}
                      {feature.subtitle && (
                        <span className="text-xs text-white/80">
                          {feature.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
            <div
              className={`flex flex-col sm:flex-row gap-4 ${textAlign === "center" ? "justify-center" : "justify-start"}`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  href={button.href}
                  variant={button.variant || "default"}
                  size={button.size || "lg"}
                  className="px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {button.text}
                </Button>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};