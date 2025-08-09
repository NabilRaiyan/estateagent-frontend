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

const propertyTypes = [
  {
    title: "Residential",
    icon: Home,
    description: "Apartments, Villas, Houses",
    count: "2,500+ Properties",
  },
  {
    title: "Commercial",
    icon: Building,
    description: "Offices, Coworking Spaces",
    count: "850+ Properties",
  },
  {
    title: "Industrial",
    icon: Factory,
    description: "Shops, Showrooms, Malls",
    count: "2,500+ Properties",
  },
  {
    title: "Land & Plots",
    icon: Landmark,
    description: "Plots, Agricultural Land",
    count: "900+ Properties",
  },
  {
    title: "Warehouses",
    icon: Warehouse,
    description: "Warehouses, Factories",
    count: "450+ Properties",
  },
  {
    title: "Hotels & Resorts",
    icon: Hotel,
    description: "Covered, Open Parking",
    count: "350+ Properties",
  },
];

export default function PropertyTypeSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2
        className="text-5xl text-zinc-700 font-bold text-center mb-5"
        data-aos="fade-up"
      >
        Property Types
      </h2>
      <h2
        className="text-lg text-zinc-500 font-medium text-center mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Browse properties by category to find exactly what you&apos;re looking
        for
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {propertyTypes.map(({ title, icon: Icon, description, count }, index) => (
          <div
            key={title}
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
              {title}
            </h3>
            <p className="text-md text-zinc-500 mb-1 ml-3 font-medium">
              {description}
            </p>
            <p className="text-sm text-amber-500 mb-1 ml-3 font-semibold">
              {count}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
