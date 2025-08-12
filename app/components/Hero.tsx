"use client";

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const slides = [
  {
    image: "/hero-img-2.jpg",
    titleKey: "hero.slides.historicModernArchitecture.title",
    subtitleKey: "hero.slides.historicModernArchitecture.subtitle",
  },
  {
    image: "/hero-img-1.jpg",
    titleKey: "hero.slides.traditionalBangladeshHeritage.title",
    subtitleKey: "hero.slides.traditionalBangladeshHeritage.subtitle",
  },
  {
    image: "/hero-img-4.jpg",
    titleKey: "hero.slides.ruralBangladeshBeauty.title",
    subtitleKey: "hero.slides.ruralBangladeshBeauty.subtitle",
  },
  {
    image: "/hero-img-3.jpg",
    titleKey: "hero.slides.modernApartmentsDhaka.title",
    subtitleKey: "hero.slides.modernApartmentsDhaka.subtitle",
  },
  {
    image: "/hero-img-5.jpg",
    titleKey: "hero.slides.investmentOpportunities.title",
    subtitleKey: "hero.slides.investmentOpportunities.subtitle",
  },
];

// Custom hook for count up animation
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 40); // update every ~40ms
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export const Hero = () => {
  const { t } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);

  // Use count up hook for each stat
  const propertiesCount = useCountUp(5000);
  const clientsCount = useCountUp(2000);
  const agentsCount = useCountUp(500);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={t(slide.titleKey)}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px] z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-20">
        <div className="max-w-4xl px-4 py-8 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md"
            data-aos="fade-up"
          >
            {t("hero.mainTitle")}
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-white/90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("hero.mainSubtitle")}
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Button
              href="/properties"
              variant="gradient"
              size="lg"
              className="text-lg px-8 cursor-pointer text-zinc-800 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-amber-400"
            >
              {t("hero.buttons.exploreProperties")}
            </Button>

            <Button
              href="/help"
              size="lg"
              variant="outline"
              className="text-lg px-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-amber-400"
            >
              {t("hero.buttons.getConsultation")}
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="text-center bg-gradient-to-r from-white via-amber-50 to-slate-50 shadow-xl p-3 rounded-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-[#2a6071] mb-2">
                {propertiesCount}+
              </div>
              <div className="text-[#2a6071]/90">
                {t("hero.stats.propertiesListed")}
              </div>
            </div>
            <div className="text-center bg-gradient-to-r from-white via-amber-50 to-slate-50 shadow-xl p-3 rounded-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-[#2a6071] mb-2">
                {clientsCount}+
              </div>
              <div className="text-[#2a6071]/90">
                {t("hero.stats.happyClients")}
              </div>
            </div>
            <div className="text-center bg-gradient-to-r from-white via-amber-50 to-slate-50 shadow-xl p-3 rounded-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-[#2a6071] mb-2">
                {agentsCount}+
              </div>
              <div className="text-[#2a6071]/90">
                {t("hero.stats.expertAgents")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide description */}
      <div
        className="absolute bottom-8 left-8 text-white z-20 bg-black/20 px-4 py-2 rounded-lg shadow-md"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <h3 className="text-xl font-semibold mb-1">
          {t(slides[currentSlide].titleKey)}
        </h3>
        <p className="text-white/80">{t(slides[currentSlide].subtitleKey)}</p>
      </div>
    </section>
  );
};
