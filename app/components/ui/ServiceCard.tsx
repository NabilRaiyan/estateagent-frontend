"use client";

import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  ctaText: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  ctaText,
  onClick,
}) => {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col">
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

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-center justify-center text-gray-900">{title}</h3>
        <p className="text-gray-600 text-center justify-center flex-grow">{description}</p>
        <button
          onClick={onClick}
          className="mt-6 bg-gradient-to-r from-[#2a6071] to-cyan-500 text-white font-semibold py-2 rounded-md hover:from-blue-600 hover:to-cyan-500 transition"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
