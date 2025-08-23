"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LucideIcon, LandPlot, Building2, TrendingUp, Handshake, Sparkles } from 'lucide-react';
import { CardFeature } from "./CardFeature"; // Make sure this path is correct

// -----------------------------------------------------------------------------
// Component: AboutSection
// Renders the entire two-column "About Us" section.
// It imports and uses the CardFeature sub-component.
// -----------------------------------------------------------------------------

// Define the data structure for the cards to make the component dynamic
interface CardData {
    icon: LucideIcon;
    title: string;
    subtitle: string;
}

// Data for the 4 cards
const cardData: CardData[] = [
    {
        icon: LandPlot,
        title: "Diverse Listings",
        subtitle: "A wide range of properties to fit your needs."
    },
    {
        icon: Building2,
        title: "Modern Architecture",
        subtitle: "Showcasing the latest in design."
    },
    {
        icon: TrendingUp,
        title: "Smart Investments",
        subtitle: "Data-driven insights for smarter decisions."
    },
    {
        icon: Handshake,
        title: "Transparent Process",
        subtitle: "Clear, honest, and easy transactions."
    },
];

export const AboutComponent = () => {
    // Initialize AOS on component mount
    useEffect(() => {
        // Check if AOS is already initialized to prevent re-initialization
        if (typeof window !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                easing: "ease-out-cubic",
            });
        }
    }, []);

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column: Titles and Cards */}
                <div className="flex flex-col gap-8">
                    {/* Section Title & Subtitle */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center text-base font-semibold text-gray-500" data-aos="fade-right">
                            <Sparkles className="h-4 w-4 mr-2 text-cyan-500" />
                            <span className="text-[#2a6071]">About Us</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight" data-aos="fade-right">
                            Redefining Real Estate with Innovation and Simplicity.
                        </h2>
                    </div>

                    {/* Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cardData.map((card, index) => (
                            <CardFeature
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                subtitle={card.subtitle}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column: Paragraph Text */}
                <div className="flex flex-col gap-6 text-gray-600 leading-relaxed">
                    <p data-aos="fade-up">
                        At NestifyBD, we believe finding the right property should be simple, transparent, and inspiring. Our modern real estate template kit is built to empower agencies, agents, and property professionals with sleek designs, intuitive layouts, and powerful features.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="100">
                        From showcasing listings to connecting with clients, NestifyBD helps you build trust, highlight properties, and create a seamless experience for your audience. We combine style with functionality, ensuring every website built on NestifyBD feels professional, modern, and client-focused.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="200">
                        NestifyBD isn&apos;t just another template kit it&apos;s a complete design solution for the real estate world. Built with precision and creativity, NestifyBD empowers property agencies, realtors, and brokers to stand out with modern, high-performing websites.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="300">
                        We understand that real estate is more than just buying and selling properties it&apos;s about trust, lifestyle, and creating connections. That&apos;s why NestifyBD combines sleek aesthetics with smart functionality, helping you display listings beautifully, highlight agents professionally, and engage clients with ease.
                    </p>
                </div>
            </div>
        </section>
    );
};