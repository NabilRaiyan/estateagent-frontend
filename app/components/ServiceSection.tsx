"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import ServiceCard from "./ui/ServiceCard";

const services = [
  {
    titleKey: "services.buy.title",
    imageSrc: "/service/buy.jpg",
    descriptionKey: "services.buy.description",
    ctaKey: "services.buy.cta",
    link: "/buy-properties",
  },
  {
    titleKey: "services.sell.title",
    imageSrc: "/service/sell.jpg",
    descriptionKey: "services.sell.description",
    ctaKey: "services.sell.cta",
    link: "/sell-properties",
  },
  {
    titleKey: "services.rent.title",
    imageSrc: "/service/rent.jpg",
    descriptionKey: "services.rent.description",
    ctaKey: "services.rent.cta",
    link: "/rent-properties",
  },
  {
    titleKey: "services.lease.title",
    imageSrc: "/service/lease.jpg",
    descriptionKey: "services.lease.description",
    ctaKey: "services.lease.cta",
    link: "/lease-properties",
  },
  {
    titleKey: "services.mortgage.title",
    imageSrc: "/service/mortgage.jpg",
    descriptionKey: "services.mortgage.description",
    ctaKey: "services.mortgage.cta",
    link: "/mortgage-services",
  },
];

export const ServicesSection = () => {
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <section className="w-full max-w-full mx-auto px-6 md:px-12 lg:px-24 py-12 bg-gradient-to-r from-white to-orange-50">
      <h2
        className="text-3xl text-gray-950 font-bold text-center mb-4"
        data-aos="fade-up"
      >
        {t("services.mainTitle")}
      </h2>
      <p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {t("services.subTitle")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 items-stretch">
        {services.map(({ titleKey, imageSrc, descriptionKey, ctaKey, link }, index) => (
          <div
            key={titleKey}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <ServiceCard
              title={t(titleKey)}
              imageSrc={imageSrc}
              description={t(descriptionKey)}
              ctaText={t(ctaKey)}
              onClick={() => router.push(link)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
