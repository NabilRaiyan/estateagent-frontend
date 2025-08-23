import {
  Heart,
  Share2,
  MapPin,
  Home,
  Droplet,
  Square,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface PropertyCardProps {
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
  onWishlistClick?: () => void;
  onShareClick?: () => void;
  isWishlisted?: boolean;
  detailsUrl?: string;
}

export default function PropertyCard({
  imageSrc,
  status,
  rating,
  title,
  location,
  bhk,
  washroom,
  sqft,
  agentName,
  priceTk,
  onWishlistClick,
  onShareClick,
  isWishlisted = false,
  detailsUrl,
}: PropertyCardProps) {
  const { t } = useTranslation();

  return (
    <div
      className="
        max-w-sm rounded-xl shadow-lg overflow-hidden bg-white
        transform transition-all duration-300
        hover:shadow-2xl
        flex flex-col h-full
      "
    >
      {/* Image container */}
      <div className="relative flex-shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover"
          width={400}
          height={200}
        />
        {/* Status tag top-left */}
        <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 text-zinc-700 text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {status}
        </span>

        {/* Icons top-right */}
        <div className="absolute top-3 right-3 flex space-x-3">
          <button
            onClick={onWishlistClick}
            aria-label="Add to wishlist"
            className={`p-1 rounded-full bg-white shadow-md hover:bg-amber-100 transition-colors ${
              isWishlisted
                ? "text-amber-600 bg-amber-100"
                : "text-gray-400 bg-white"
            }`}
          >
            <Heart size={20} />
          </button>
          <button
            onClick={onShareClick}
            aria-label="Share property"
            className="p-1 rounded-full bg-white shadow-md text-gray-400 hover:bg-amber-100 hover:text-amber-600 transition-colors"
          >
            <Share2 size={20} />
          </button>
        </div>

        {/* Rating bottom-left */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 rounded-md px-2 py-1 flex items-center shadow-md">
          <Star className="text-amber-500" size={16} />
          <span className="ml-1 text-sm font-semibold text-amber-600">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Content below image */}
      <div className="p-4 space-y-2 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-zinc-800 truncate">{title}</h3>

        <div className="flex items-center text-sm text-zinc-500 space-x-1">
          <MapPin size={16} />
          <span className="truncate">{location}</span>
        </div>

        {/* BHK, Washroom, Sqft row */}
        <div className="flex items-center text-zinc-600 space-x-6 text-sm font-medium">
          <div className="flex items-center space-x-1">
            <Home size={18} />
            <span>{bhk} BHK</span>
          </div>
          <div className="flex items-center space-x-1">
            <Droplet size={18} />
            <span>
              {washroom} Washroom{washroom > 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Square size={18} />
            <span>{sqft} sqft</span>
          </div>
        </div>

        <hr className="border-zinc-200" />

        <div className="text-zinc-700 font-semibold text-sm mt-auto">
          <p className="text-[#2a6071] font-semibold text-xl mb-1">
            Agent Name
          </p>
          <div className="flex justify-between items-center">
            <span className="text-zinc-800">{agentName}</span>
            <span className="text-amber-600">
              ৳ {priceTk.toLocaleString()}
            </span>
          </div>
          {detailsUrl && (
            <div className="mt-4">
              <Link
                href={detailsUrl}
                className="
                  inline-block w-full text-center 
                  bg-[#2a6071] 
                  text-white font-semibold py-2 rounded-lg 
                  shadow-lg
                  transform transition-all duration-200
                  hover:-translate-y-1 hover:scale-105 hover:shadow-xl
                "
              >
              {t("featured.viewDetails")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
