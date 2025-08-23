"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "./Button";


// Defines the shape of a single stat item
interface Stat {
    number: string;
    label: string;
    description: string;
}

// Defines the shape of the button configuration
interface ButtonConfig {
    text: string;
    href: string;
    variant?: "default" | "outline" | "gradient";
    size?: "sm" | "md" | "lg";
}

export interface MediaAndTextComponentProps {
    image: string; // Image path is now required
    missionTitle: string;
    missionDescription: string;
    stats: Stat[];
    buttonConfig: ButtonConfig;
    className?: string;
}


export const MediaAndTextComponent = ({ 
    image,
    missionTitle,
    missionDescription,
    stats,
    buttonConfig,
    className = ""
}: MediaAndTextComponentProps) => {
    // Initialize AOS
    useEffect(() => {
        if (typeof window !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                easing: "ease-out-cubic",
            });
        }
    }, []);

    return (
        <section className={`container mx-auto px-4 py-16 ${className}`}>
            {/* The `items-start` class on the grid parent ensures top alignment. */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Left Column: Image */}
                <div 
                    className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                    data-aos="fade-right"
                >
                    <Image
                        src={image}
                        alt={missionTitle}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                    {/* Optional overlay for better image presentation */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Right Column: Mission Content */}
                <div className="flex flex-col gap-8" data-aos="fade-left">
                    
                    {/* Mission Title */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl md:text-2xl font-extrabold text-[#2a6071] leading-tight">
                            {missionTitle}
                        </h2>
                        
                        {/* Mission Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {missionDescription}
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="flex flex-col gap-6">
                        {stats.map((stat, index) => (
                            <div 
                                key={index}
                                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Number */}
                                <div className="flex-shrink-0">
                                    <span className="text-3xl md:text-4xl font-bold text-orange-400">
                                        {stat.number}
                                    </span>
                                </div>
                                
                                {/* Label and Description */}
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                        {stat.label}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Button
                            href={buttonConfig.href}
                            variant={buttonConfig.variant || "default"}
                            size={buttonConfig.size || "lg"}
                            className="px-8 border bg-[#337589] text-white py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            {buttonConfig.text}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
