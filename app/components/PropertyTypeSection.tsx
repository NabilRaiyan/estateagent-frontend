"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Home,
  Building,
  Warehouse,
  Landmark,
  Factory,
  Hotel,
} from "lucide-react";

import { useTranslation } from "react-i18next";
import Image from "next/image";

const textSizes = {
  title: "text-2xl",
  description: "text-base",
  count: "text-lg",
};

const propertyTypes = [
  { titleKey: "propertyTypes.residential.title", descriptionKey: "propertyTypes.residential.description", countKey: "propertyTypes.residential.count", icon: Home, image: "/residential.jpg" },
  { titleKey: "propertyTypes.commercial.title", descriptionKey: "propertyTypes.commercial.description", countKey: "propertyTypes.commercial.count", icon: Building, image: "/commercial.jpg" },
  { titleKey: "propertyTypes.industrial.title", descriptionKey: "propertyTypes.industrial.description", countKey: "propertyTypes.industrial.count", icon: Factory, image: "/industrial.jpg" },
  { titleKey: "propertyTypes.land.title", descriptionKey: "propertyTypes.land.description", countKey: "propertyTypes.land.count", icon: Landmark, image: "/hero-img-4.jpg" },
  { titleKey: "propertyTypes.warehouse.title", descriptionKey: "propertyTypes.warehouse.description", countKey: "propertyTypes.warehouse.count", icon: Warehouse, image: "/warehouses.webp" },
  { titleKey: "propertyTypes.hotel.title", descriptionKey: "propertyTypes.hotel.description", countKey: "propertyTypes.hotel.count", icon: Hotel, image: "/hotel.jpg" },
];

export default function PropertyTypeSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <section className="max-w-full mx-auto px-6 md:px-20 py-12 bg-white">
      <h2 className="text-5xl text-zinc-700 font-bold text-center mb-5" data-aos="fade-up">
        {t("propertyTypes.mainTitle")}
      </h2>
      <h2 className="text-lg text-zinc-500 font-medium text-center mb-10" data-aos="fade-up" data-aos-delay={100}>
        {t("propertyTypes.subTitle")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {propertyTypes.map(({ titleKey, descriptionKey, countKey, icon: Icon, image }, index) => (
          <div key={titleKey} data-aos="zoom-in" data-aos-delay={index * 100} className="relative rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            {image ? (
              <div className="relative group w-full h-64 md:h-72 rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={t(titleKey)}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h3 className={`font-semibold text-white ${textSizes.title}`}>{t(titleKey)}</h3>
                  <p className={`text-white/90 ${textSizes.description}`}>{t(descriptionKey)}</p>
                  <p className={`text-amber-300 font-semibold mt-1 ${textSizes.count}`}>{t(countKey)}</p>
                </div>
              </div>
            ) : (
              <div className="group flex flex-col items-start justify-start rounded-2xl p-8 bg-white hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-orange-50 transition-all duration-300">
                <Icon
                  size={48}
                  className="text-amber-600 bg-[#fdf2eb] shadow-xl m-3 p-2 rounded-lg h-16 w-16 mb-4 transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-20"
                />
                <h3 className={`mb-1 font-semibold ${textSizes.title}`}>{t(titleKey)}</h3>
                <p className={`mb-1 font-medium ${textSizes.description}`}>{t(descriptionKey)}</p>
                <p className={`mb-1 font-semibold ${textSizes.count}`}>{t(countKey)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
