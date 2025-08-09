"use client";

import React, { useState } from "react";
import PropertyCard from "./ui/PropertyCard";

interface Property {
  id: string;
  imageSrc: string;
  status: string;
  rating: number;
  title: string;
  location: string;
  bhk: number;
  washroom: number;
  sqft: number;
  agentName: string;
  priceTk: number;
  isWishlisted?: boolean;
  detailsUrl?: string;
}

const sampleProperties: Property[] = [
  {
    id: "1",
    imageSrc: "/hero-img-3.jpg",
    status: "For Rent",
    rating: 4.5,
    title: "Modern Family Home",
    location: "Dhanmondi, Dhaka",
    bhk: 3,
    washroom: 2,
    sqft: 1850,
    agentName: "John Doe",
    priceTk: 75000,
    isWishlisted: false,
  },
  {
    id: "2",
    imageSrc: "/hero-img-2.jpg",
    status: "For Sale",
    rating: 4.8,
    title: "Luxury Villa with Pool",
    location: "Gulshan, Dhaka",
    bhk: 5,
    washroom: 4,
    sqft: 3500,
    agentName: "Jane Smith",
    priceTk: 350000,
    isWishlisted: true,
  },
  {
    id: "3",
    imageSrc: "/hero-img-1.jpg",
    status: "For Sale",
    rating: 4.5,
    title: "Modern Family Home",
    location: "Dhanmondi, Dhaka",
    bhk: 6,
    washroom: 4,
    sqft: 2250,
    agentName: "John Doe",
    priceTk: 90000,
    isWishlisted: false,
  },
  {
    id: "4",
    imageSrc: "/hero-img-5.jpg",
    status: "For Sale",
    rating: 4.5,
    title: "Modern Family Home",
    location: "Dhanmondi, Dhaka",
    bhk: 6,
    washroom: 4,
    sqft: 2250,
    agentName: "John Doe",
    priceTk: 90000,
    isWishlisted: false,
  },
];

export default function FeaturedPropertySection() {
  const [properties, setProperties] = useState(
    // Add detailsUrl dynamically based on id
    sampleProperties.map((p) => ({
      ...p,
      detailsUrl: `/property/${p.id}`,
    }))
  );

  const toggleWishlist = (id: string) => {
    setProperties((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isWishlisted: !p.isWishlisted } : p
      )
    );
  };

  const shareProperty = (id: string) => {
    alert(`Share clicked for property ID: ${id}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-zinc-800 mb-8 text-center">
        Featured Properties
      </h2>
      <p className="text-lg font-medium text-zinc-500 mb-8 mt-2 text-center">
        Discover our handpicked selection of premium properties across Bangladesh&apos;s prime locations
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            {...property}
            onWishlistClick={() => toggleWishlist(property.id)}
            onShareClick={() => shareProperty(property.id)}
          />
        ))}
      </div>
    </section>
  );
}
