"use client";

import { LucideIcon } from 'lucide-react';

// Define the props for the CardFeature component
interface CardFeatureProps {
    icon: LucideIcon;
    title: string;
    subtitle: string;
}

export const CardFeature = ({ icon: Icon, title, subtitle }: CardFeatureProps) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="relative p-6 rounded-xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-teal-400 before:to-cyan-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 group"
        >
            {/* The content container, positioned above the pseudo-element background */}
            <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-full text-blue-500 transition-colors duration-300 group-hover:bg-white group-hover:text-cyan-600">
                    <Icon size={24} />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-200">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};