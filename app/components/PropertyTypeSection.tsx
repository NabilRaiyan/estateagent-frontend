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

const propertyTypes = [
  {
    titleKey: "propertyTypes.residential.title",
    icon: Home,
    descriptionKey: "propertyTypes.residential.description",
    countKey: "propertyTypes.residential.count",
  },
  {
    titleKey: "propertyTypes.commercial.title",
    icon: Building,
    descriptionKey: "propertyTypes.commercial.description",
    countKey: "propertyTypes.commercial.count",
  },
  {
    titleKey: "propertyTypes.industrial.title",
    icon: Factory,
    descriptionKey: "propertyTypes.industrial.description",
    countKey: "propertyTypes.industrial.count",
  },
  {
    titleKey: "propertyTypes.land.title",
    icon: Landmark,
    descriptionKey: "propertyTypes.land.description",
    countKey: "propertyTypes.land.count",
  },
  {
    titleKey: "propertyTypes.warehouse.title",
    icon: Warehouse,
    descriptionKey: "propertyTypes.warehouse.description",
    countKey: "propertyTypes.warehouse.count",
  },
  {
    titleKey: "propertyTypes.hotel.title",
    icon: Hotel,
    descriptionKey: "propertyTypes.hotel.description",
    countKey: "propertyTypes.hotel.count",
  },
];

export default function PropertyTypeSection() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <section className="max-w-full mx-auto px-20 py-12 bg-white">
      <h2
        className="text-5xl text-zinc-700 font-bold text-center mb-5"
        data-aos="fade-up"
      >
        {t("propertyTypes.mainTitle")}
      </h2>
      <h2
        className="text-lg text-zinc-500 font-medium text-center mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {t("propertyTypes.subTitle")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {propertyTypes.map(({ titleKey, icon: Icon, descriptionKey, countKey }, index) => (
          <div
            key={titleKey}
            data-aos="zoom-in"
            data-aos-delay={index * 100} // staggered delay
            className="
              group flex flex-col items-left mb-2 justify-left
              rounded-2xl shadow-md p-8
              bg-white
              hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-orange-50
              hover:shadow-lg transition-all duration-300
            "
          >
            <Icon
              size={48}
              className="
                text-amber-600 bg-[#fdf2eb] shadow-xl m-3 p-2 rounded-lg h-16 w-16 mb-4
                transform transition-transform duration-500 ease-in-out
                group-hover:scale-110 group-hover:rotate-20 
              "
            />
            <h3 className="text-lg text-zinc-800 mb-1 ml-3 font-semibold">
              {t(titleKey)}
            </h3>
            <p className="text-md text-zinc-500 mb-1 ml-3 font-medium">
              {t(descriptionKey)}
            </p>
            <p className="text-sm text-amber-500 mb-1 ml-3 font-semibold">
              {t(countKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
