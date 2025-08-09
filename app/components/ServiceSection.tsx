"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import ServiceCard from "./ui/ServiceCard";

const services = [
  {
    title: "Buy Properties",
    imageSrc: "/service/buy.jpg",
    description:
      "Find your perfect home from thousands of listings tailored to your needs.",
    ctaText: "Explore Buying",
    link: "/buy-properties",
  },
  {
    title: "Sell Properties",
    imageSrc: "/service/sell.jpg",
    description:
      "List your property with us and reach millions of potential buyers quickly.",
    ctaText: "Start Selling",
    link: "/sell-properties",
  },
  {
    title: "Rent Properties",
    imageSrc: "/service/rent.jpg",
    description:
      "Browse available rental homes and apartments in your desired locations.",
    ctaText: "Browse Rentals",
    link: "/rent-properties",
  },
  {
    title: "Lease Properties",
    imageSrc: "/service/lease.jpg",
    description:
      "Flexible leasing options for residential and commercial properties.",
    ctaText: "Learn More",
    link: "/lease-properties",
  },
  {
    title: "Mortgage Services",
    imageSrc: "/service/mortgage.jpg",
    description:
      "Get expert advice and competitive rates to finance your dream property.",
    ctaText: "Get Mortgage Help",
    link: "/mortgage-services",
  },
];

export const ServicesSection = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2
        className="text-3xl text-gray-950 font-bold text-center mb-4"
        data-aos="fade-up"
      >
        Find. Buy. Sell. Rent. All in One Place.
      </h2>
      <p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        We offer a wide range of property services tailored to your needs.
        Whether you want to buy, sell, rent, lease, or finance a property, we
        are here to help.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map(({ title, imageSrc, description, ctaText, link }, index) => (
          <div
            key={title}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <ServiceCard
              title={title}
              imageSrc={imageSrc}
              description={description}
              ctaText={ctaText}
              onClick={() => router.push(link)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
