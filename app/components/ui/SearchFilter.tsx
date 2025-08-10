"use client";

import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";
import SellIcon from "@mui/icons-material/Sell";
import AssignmentIcon from '@mui/icons-material/Assignment';


interface SearchFilterProps {
  locations: string[];
  propertyTypes: string[];
  onSearch: (filters: {
    serviceType: string;
    location: string;
    propertyType: string;
  }) => void;
}

const SERVICE_TYPES = ["Buy", "Rent", "Sell", "Lease"];

// Changed SERVICE_ICONS to a function returning icon with conditional color
function getServiceIcon(type: string, selected: boolean) {
  const colorClass = selected ? "text-white" : "text-cyan-500";
  switch (type) {
    case "Buy":
      return <AttachMoneyIcon className={`w-5 h-5 mr-2 ${colorClass}`} />;
    case "Rent":
      return <HomeIcon className={`w-5 h-5 mr-2 ${colorClass}`} />;
    case "Sell":
      return <SellIcon className={`w-5 h-5 mr-2 ${colorClass}`} />;
    case "Lease":
      return <AssignmentIcon className={`w-5 h-5 mr-2 ${colorClass}`} />;
    default:
      return null;
  }
}

export default function SearchFilter({
  locations,
  propertyTypes,
  onSearch,
}: SearchFilterProps) {
  const [serviceType, setServiceType] = useState(SERVICE_TYPES[0]);
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState(propertyTypes[0] || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ serviceType, location, propertyType });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto bg-gradient-to-r from-white via-orange-50 to-orange-100 rounded-xl shadow-md p-8"
    >
      {/* First Row: Tabs for Service Type */}
      <div className="flex mb-6 rounded-xl overflow-hidden shadow-lg bg-gray-100 border border-gray-300">
        {SERVICE_TYPES.map((type, index) => {
          const selected = serviceType === type;
          return (
            <button
              type="button"
              key={type}
              onClick={() => setServiceType(type)}
              className={`flex-1 flex items-center justify-center py-4 font-semibold text-sm md:text-base transition
                ${
                  selected
                    ? "bg-gradient-to-r from-[#2a6071] to-cyan-500 text-white shadow-lg rounded"
                    : "bg-gray-50 text-gray-700 hover:bg-cyan-500 hover:text-white hover:shadow-xl hover:scale-105"
                }
                ${index !== SERVICE_TYPES.length - 1 ? "border-r border-cyan-500" : ""}
              `}
              style={{
                transitionProperty: "background-color, box-shadow, transform, color",
                transitionDuration: "300ms",
                transitionTimingFunction: "ease-in-out",
              }}
              aria-pressed={selected}
            >
              {getServiceIcon(type, selected)}
              {type}
            </button>
          );
        })}
      </div>

      {/* Second Row: Location input, Property Type select, Search button */}
      <div className="grid grid-cols-12 gap-6 items-center">
        {/* Location Searchbar */}
        <div className="col-span-5 bg-gray-100 rounded-2xl border border-cyan-500 flex items-center px-5 py-3 focus-within:ring-2 focus-within:ring-cyan-400 transition-shadow duration-300 shadow-sm">
          <LocationOnIcon className="text-cyan-500 mr-3 w-6 h-6" />
          <input
            type="text"
            list="location-list"
            placeholder="Type or select location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 text-base"
            autoComplete="off"
          />
          <datalist id="location-list">
            {locations.map((loc) => (
              <option key={loc} value={loc} />
            ))}
          </datalist>
        </div>

        {/* Property Type Dropdown */}
        <div className="col-span-4 bg-gray-100 rounded-2xl border border-cyan-500 flex items-center px-5 py-3 focus-within:ring-2 focus-within:ring-cyan-400 transition-shadow duration-300 shadow-sm">
          <StorefrontIcon className="text-cyan-500 mr-3 w-6 h-6" />
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 text-base"
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="col-span-3 flex items-center justify-center gap-3 px-12 py-4 rounded-lg
                     bg-gradient-to-r from-[#2a6071] to-cyan-500 cursor-pointer text-white font-semibold
                     shadow-lg hover:brightness-110 active:scale-95 transition-transform"
        >
          <SearchIcon className="w-6 h-6" />
          Search
        </button>
      </div>
    </form>
  );
}
