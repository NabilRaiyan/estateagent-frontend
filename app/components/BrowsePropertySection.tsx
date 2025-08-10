"use client";

import { useState } from "react";
import PropertyFilter from "./ui/PropertyFilter";
import SearchFilter from "./ui/SearchFilter";
import PropertyCard from "./ui/PropertyCard";

const locations = [
  "Dhanmondi",
  "Gulshan",
  "Banani",
  "Mirpur",
  "Uttara",
  "Bashundhara",
];
const propertyTypes = [
  "House",
  "Land",
  "Shop",
  "Apartment",
  "Garage",
  "Villa",
  "Plot",
];

// Initial dummy data
const propertiesData = [
  
  {
    "id": 1,
    "title": "Modern Flat in Banani",
    "location": "Banani",
    "type": "Flat/Apartment",
    "priceTk": 8500000,
    "imageSrc": "/hero-img-1.jpg",
    "status": "For Sale",
    "rating": 4.8,
    "bhk": 3,
    "washroom": 2,
    "sqft": 1400,
    "agentName": "Raiyan Al Sultan",
    "isWishlisted": false
  },
  {
    "id": 2,
    "title": "Luxury Villa in Gulshan",
    "location": "Gulshan",
    "type": "Villa",
    "priceTk": 25000000,
    "imageSrc": "/hero-img-2.jpg",
    "status": "For Sale",
    "rating": 4.9,
    "bhk": 5,
    "washroom": 4,
    "sqft": 3500,
    "agentName": "Mahir Rahaman",
    "isWishlisted": true
  },
  {
    "id": 3,
    "title": "Spacious Duplex in Rampura",
    "location": "Rampura",
    "type": "Duplex",
    "priceTk": 12000000,
    "imageSrc": "/hero-img-3.jpg",
    "status": "For Rent",
    "rating": 4.3,
    "bhk": 4,
    "washroom": 3,
    "sqft": 2800,
    "agentName": "Nazim Uddin",
    "isWishlisted": false
  },
  {
    "id": 4,
    "title": "Office Space in Agrabad",
    "location": "Agrabad",
    "type": "Office",
    "priceTk": 7000000,
    "imageSrc": "/hero-img-1.jpg",
    "status": "For Rent",
    "rating": 4.2,
    "bhk": 0,
    "washroom": 2,
    "sqft": 1500,
    "agentName": "Sabbir Khan",
    "isWishlisted": false
  },
  {
    "id": 5,
    "title": "Shop for Sale in Pahartali",
    "location": "Pahartali",
    "type": "Shop",
    "priceTk": 4000000,
    "imageSrc": "/hero-img-2.jpg",
    "status": "For Sale",
    "rating": 4.0,
    "bhk": 0,
    "washroom": 1,
    "sqft": 900,
    "agentName": "Fahim Ahmed",
    "isWishlisted": true
  },
  {
    "id": 6,
    "title": "Warehouse Space in Gulshan",
    "location": "Gulshan",
    "type": "Warehouse",
    "priceTk": 15000000,
    "imageSrc": "/hero-img-3.jpg",
    "status": "For Rent",
    "rating": 4.5,
    "bhk": 0,
    "washroom": 2,
    "sqft": 5000,
    "agentName": "Raihan Chowdhury",
    "isWishlisted": false
  },
  {
    "id": 7,
    "title": "Agricultural Land in Zindabazar",
    "location": "Zindabazar",
    "type": "Agricultural",
    "priceTk": 3000000,
    "imageSrc": "/hero-img-1.jpg",
    "status": "For Sale",
    "rating": 4.1,
    "bhk": 0,
    "washroom": 0,
    "sqft": 10000,
    "agentName": "Sadia Islam",
    "isWishlisted": false
  },
  {
    "id": 8,
    "title": "Industrial Plot in Amberkhana",
    "location": "Amberkhana",
    "type": "Industrial",
    "priceTk": 18000000,
    "imageSrc": "/hero-img-2.jpg",
    "status": "For Sale",
    "rating": 4.6,
    "bhk": 0,
    "washroom": 0,
    "sqft": 12000,
    "agentName": "Arif Hasan",
    "isWishlisted": true
  },
  {
    "id": 9,
    "title": "Residential Plot in Rampura",
    "location": "Rampura",
    "type": "Plot",
    "priceTk": 6000000,
    "imageSrc": "/hero-img-3.jpg",
    "status": "For Sale",
    "rating": 4.3,
    "bhk": 0,
    "washroom": 0,
    "sqft": 3000,
    "agentName": "Nazim Uddin",
    "isWishlisted": false
  }
];

export default function BrowsePropertySection() {
  const [properties, setProperties] = useState(propertiesData);
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  const [filters, setFilters] = useState({
    propertyTypes: [] as string[],
    priceRange: [0, Infinity] as number[],
    districtAreas: [] as string[],
    bhk: "",
    sqftRange: [0, Infinity] as number[],
    enabledFilters: {
      propertyTypes: true,
      priceRange: true,
      districtAreas: true,
      bhk: true,
      sqftRange: true,
    },
  });

  // Filter only when the "Apply" button is clicked, so no useEffect filtering here
  // We'll pass a function to apply filters manually

  // Toggle wishlist for a property id
  const toggleWishlist = (id: number) => {
    setProperties((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isWishlisted: !p.isWishlisted } : p
      )
    );
  };

  // Share handler
  const handleShare = (propertyTitle: string, propertyId: number) => {
    const url = `${window.location.origin}/property/${propertyId}`;
    if (navigator.share) {
      navigator
        .share({
          title: propertyTitle,
          url,
        })
        .catch((err) => console.error("Share failed:", err));
    } else {
      alert(`Share this property: ${propertyTitle}\n${url}`);
    }
  };

  // This function applies the filter when called
  const applyFilters = (newFilters: typeof filters) => {
    setFilters(newFilters);

    let filtered = properties;

    if (newFilters.enabledFilters.propertyTypes && newFilters.propertyTypes.length > 0) {
      filtered = filtered.filter((p) =>
        newFilters.propertyTypes.some((type) =>
          p.type.toLowerCase().includes(type.toLowerCase())
        )
      );
    }

    if (newFilters.enabledFilters.priceRange) {
      filtered = filtered.filter(
        (p) =>
          p.priceTk >= newFilters.priceRange[0] &&
          p.priceTk <= newFilters.priceRange[1]
      );
    }

    if (newFilters.enabledFilters.districtAreas && newFilters.districtAreas.length > 0) {
      filtered = filtered.filter((p) =>
        newFilters.districtAreas.includes(p.location)
      );
    }

    if (newFilters.enabledFilters.bhk && newFilters.bhk) {
      if (newFilters.bhk === "4+ BHK") {
        filtered = filtered.filter((p) => p.bhk >= 4);
      } else {
        const bhkNum = parseInt(newFilters.bhk);
        if (!isNaN(bhkNum)) {
          filtered = filtered.filter((p) => p.bhk === bhkNum);
        }
      }
    }

    if (newFilters.enabledFilters.sqftRange) {
      filtered = filtered.filter(
        (p) =>
          p.sqft >= newFilters.sqftRange[0] && p.sqft <= newFilters.sqftRange[1]
      );
    }

    setFilteredProperties(filtered);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-white to-orange-50 min-h-screen">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center text-zinc-800 mb-4">
        Browse Properties
      </h2>
      <p className="text-xl font-normal text-center text-zinc-800 mb-10">
        Find your perfect property with our advanced search and filtering options
      </p>

      {/* SearchFilter centered */}
      <div className="max-w-4xl mx-auto mb-12">
        <SearchFilter
          locations={locations}
          propertyTypes={propertyTypes}
          onSearch={() => {}} // your search handler here
        />
      </div>

      {/* Main content: PropertyFilter on left, Cards on right */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4">
        {/* Left: PropertyFilter */}
        <div className="md:w-1/3">
          <PropertyFilter onFilterChange={applyFilters} />
        </div>

        {/* Right: Property Cards */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 h-full">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              imageSrc={property.imageSrc}
              status={property.status}
              rating={property.rating}
              title={property.title}
              location={property.location}
              bhk={property.bhk}
              washroom={property.washroom}
              sqft={property.sqft}
              agentName={property.agentName}
              priceTk={property.priceTk}
              isWishlisted={property.isWishlisted}
              onWishlistClick={() => toggleWishlist(property.id)}
              onShareClick={() => handleShare(property.title, property.id)}
              detailsUrl={`/property/${property.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
