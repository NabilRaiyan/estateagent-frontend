"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import PropertyCard from "./ui/PropertyCard";
import { Button } from "./ui/Button";

interface Property {
  id: string;
  imageSrc: string;
  statusKey: string;
  rating: number;
  titleKey: string;
  locationKey: string;
  bhk: number;
  washroom: number;
  sqft: number;
  agentNameKey: string;
  priceTk: number;
  isWishlisted?: boolean;
  detailsUrl?: string;
}

const sampleProperties: Property[] = [
  {
    id: "1",
    imageSrc: "/hero-img-3.jpg",
    statusKey: "featured.status.forRent",
    rating: 4.5,
    titleKey: "featured.titles.modernFamilyHome",
    locationKey: "featured.locations.dhanmondi",
    bhk: 3,
    washroom: 2,
    sqft: 1850,
    agentNameKey: "featured.agents.johnDoe",
    priceTk: 75000,
    isWishlisted: false,
  },
  {
    id: "2",
    imageSrc: "/hero-img-2.jpg",
    statusKey: "featured.status.forSale",
    rating: 4.8,
    titleKey: "featured.titles.luxuryVilla",
    locationKey: "featured.locations.gulshan",
    bhk: 5,
    washroom: 4,
    sqft: 3500,
    agentNameKey: "featured.agents.janeSmith",
    priceTk: 350000,
    isWishlisted: true,
  },
  {
    id: "3",
    imageSrc: "/hero-img-1.jpg",
    statusKey: "featured.status.forSale",
    rating: 4.5,
    titleKey: "featured.titles.modernFamilyHome",
    locationKey: "featured.locations.dhanmondi",
    bhk: 6,
    washroom: 4,
    sqft: 2250,
    agentNameKey: "featured.agents.johnDoe",
    priceTk: 90000,
    isWishlisted: false,
  },
  {
    id: "4",
    imageSrc: "/hero-img-5.jpg",
    statusKey: "featured.status.forSale",
    rating: 4.5,
    titleKey: "featured.titles.modernFamilyHome",
    locationKey: "featured.locations.dhanmondi",
    bhk: 6,
    washroom: 4,
    sqft: 2250,
    agentNameKey: "featured.agents.johnDoe",
    priceTk: 90000,
    isWishlisted: false,
  },
  {
    id: "5",
    imageSrc: "/hero-img-3.jpg",
    statusKey: "featured.status.forRent",
    rating: 4.5,
    titleKey: "featured.titles.modernFamilyHome",
    locationKey: "featured.locations.dhanmondi",
    bhk: 3,
    washroom: 2,
    sqft: 1850,
    agentNameKey: "featured.agents.johnDoe",
    priceTk: 75000,
    isWishlisted: false,
  },
  {
    id: "6",
    imageSrc: "/hero-img-3.jpg",
    statusKey: "featured.status.forRent",
    rating: 4.5,
    titleKey: "featured.titles.modernFamilyHome",
    locationKey: "featured.locations.dhanmondi",
    bhk: 3,
    washroom: 2,
    sqft: 1850,
    agentNameKey: "featured.agents.johnDoe",
    priceTk: 75000,
    isWishlisted: false,
  },
  
];

export default function FeaturedPropertySection() {
  const { t } = useTranslation();

  const [properties, setProperties] = useState(
    sampleProperties.map((p) => ({
      ...p,
      detailsUrl: `/property/${p.id}`,
    }))
  );

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleWishlist = (id: string) => {
    setProperties((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isWishlisted: !p.isWishlisted } : p
      )
    );
  };

  const shareProperty = (id: string) => {
    alert(t("featured.alert.share", { id }));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2
        className="text-4xl font-bold text-zinc-800 mb-8 text-center"
        data-aos="fade-up"
      >
        {t("featured.title")}
      </h2>
      <p
        className="text-lg font-medium text-zinc-500 mb-8 mt-2 text-center"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        {t("featured.subtitle")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {properties.map((property, index) => (
          <div
            key={property.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="h-full"
          >
            <PropertyCard
              {...property}
              status={t(property.statusKey)}
              title={t(property.titleKey)}
              location={t(property.locationKey)}
              agentName={t(property.agentNameKey)}
              onWishlistClick={() => toggleWishlist(property.id)}
              onShareClick={() => shareProperty(property.id)}
            />
          </div>
        ))}
      </div>

      {/* Button container */}
      <div
        className="mt-12 flex justify-center"
        data-aos="fade-up"
        data-aos-delay={properties.length * 100 + 100}
      >
        <Button
          href="/properties"
          size="lg"
          variant="default"
          className="text-lg px-8 bg-gradient-to-r cursor-pointer from-[#2a6071] to-cyan-500 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-cyan-400"
        >
          {t("featured.moreBtn")}
        </Button>
      </div>
    </section>
  );
}
