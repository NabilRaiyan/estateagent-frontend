"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  CheckCircle,
  Award,
  Users,
  MapPin,
  Headset,
  BarChart2,
} from "lucide-react";

const features = [
  {
    title: "Verified Properties",
    description: "Every property is thoroughly vetted and verified by our expert team",
    icon: CheckCircle,
  },
  {
    title: "Award Winning Service",
    description: "Recognized as Bangladesh's leading real estate platform for 3 consecutive years",
    icon: Award,
  },
  {
    title: "Expert Agents",
    description: "Our certified agents have average 8+ years of experience in Bangladesh real estate",
    icon: Users,
  },
  {
    title: "Prime Locations",
    description: "Properties in Dhaka, Chittagong, Sylhet, and 15+ major cities across Bangladesh",
    icon: MapPin,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your property needs",
    icon: Headset,
  },
  {
    title: "Market Insights",
    description: "Get real-time market data and investment advice from our research team",
    icon: BarChart2,
  },
];

export default function WhyChooseUsSection() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <section className="py-16 bg-white text-zinc-800">
      <div className="max-w-4xl mx-auto text-center px-4 mb-12">
        <h2 className="text-5xl font-bold mb-4">Why Choose EstateAgent?</h2>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          With over 10 years of experience in Bangladesh&apos;s real estate market, we&apos;re committed to providing exceptional service and helping you make informed property decisions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, icon: Icon }, index) => (
          <div
            key={title}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="group flex flex-col items-start p-8 rounded-2xl shadow-md bg-white
                       hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-orange-50
                       hover:shadow-lg transition-all duration-300 border-[0.2px] border-[#2a6071]"
          >
            <Icon
              size={48}
              className="text-amber-600 bg-[#fdf2eb] shadow-xl p-2 rounded-lg mb-4
                         transform transition-transform duration-500 ease-in-out
                         group-hover:scale-110 group-hover:rotate-12"
            />
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-md text-zinc-600 font-medium">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
