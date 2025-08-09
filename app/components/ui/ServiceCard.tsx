"use client";

import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  extraInfo?: string; // new optional field
  ctaText?: string; // make optional
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  extraInfo,
  ctaText,
  onClick,
}) => {
  return (
    <div
      className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col h-full"
      // Added h-full and flex flex-col to stretch full height and enable flex layout
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) onClick();
      }}
    >
      {/* Image */}
      <div className="p-4 flex justify-center">
        <div className="relative h-46 w-46 rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 640px) 100vw, 400px"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 text-center flex-grow">{description}</p>

        {/* Optional extra text */}
        {extraInfo && (
          <p className="text-sm text-gray-500 text-center mt-3">{extraInfo}</p>
        )}

        {/* Optional button */}
        {ctaText && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onClick) onClick();
            }}
            className="mt-6 bg-gradient-to-r cursor-pointer from-[#2a6071] to-cyan-500 text-white font-semibold py-2 rounded-md hover:from-blue-600 hover:to-cyan-500 transition"
          >
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
