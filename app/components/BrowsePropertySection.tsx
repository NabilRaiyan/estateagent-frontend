"use client";

import { useState } from "react";
import PropertyFilter from "./ui/PropertyFilter";
import SearchFilter from "./ui/SearchFilter";
import PropertyCard from "./ui/PropertyCard";
import SortDropdown from "./ui/SortComponent";


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
  "Warehouse"
];

// sorting data
const sortOptions = [
  { label: "Sort By Price: High to Low", value: "priceDesc" },
  { label: "Sort By Price: Low to High", value: "priceAsc" },
  { label: "Sort By Newest", value: "newest" },
  { label: "Hot Deals", value: "hotDeals" },
];


// Initial dummy data
const propertiesData = [
  {
    id: 1,
    title: "Modern Flat in Banani",
    location: "Banani",
    type: "Apartment",
    priceTk: 8500000,
    imageSrc: "/hero-img-1.jpg",
    status: "For Sell",
    rating: 4.8,
    bhk: 3,
    washroom: 2,
    sqft: 1400,
    agentName: "Raiyan Al Sultan",
    isWishlisted: false,
  },
  {
    id: 2,
    title: "Luxury Villa in Gulshan",
    location: "Gulshan",
    type: "Villa",
    priceTk: 25000000,
    imageSrc: "/hero-img-2.jpg",
    status: "For Sell",
    rating: 4.9,
    bhk: 5,
    washroom: 4,
    sqft: 3500,
    agentName: "Mahir Rahaman",
    isWishlisted: true,
  },
  {
    id: 3,
    title: "Spacious Duplex in Rampura",
    location: "Rampura",
    type: "Duplex",
    priceTk: 12000000,
    imageSrc: "/hero-img-3.jpg",
    status: "For Rent",
    rating: 4.3,
    bhk: 4,
    washroom: 3,
    sqft: 2800,
    agentName: "Nazim Uddin",
    isWishlisted: false,
  },
  {
    id: 4,
    title: "Office Space in Agrabad",
    location: "Agrabad",
    type: "Office",
    priceTk: 7000000,
    imageSrc: "/hero-img-1.jpg",
    status: "For Rent",
    rating: 4.2,
    bhk: 3,
    washroom: 2,
    sqft: 1500,
    agentName: "Sabbir Khan",
    isWishlisted: false,
  },
  {
    id: 5,
    title: "Shop for Sell in Pahartali",
    location: "Pahartali",
    type: "Shop",
    priceTk: 4000000,
    imageSrc: "/hero-img-2.jpg",
    status: "For Sell",
    rating: 4.0,
    bhk: 3,
    washroom: 1,
    sqft: 900,
    agentName: "Fahim Ahmed",
    isWishlisted: true,
  },
  {
    id: 6,
    title: "Warehouse Space in Gulshan",
    location: "Gulshan",
    type: "Warehouse",
    priceTk: 15000000,
    imageSrc: "/hero-img-3.jpg",
    status: "For Rent",
    rating: 4.5,
    bhk: 3,
    washroom: 2,
    sqft: 5000,
    agentName: "Raihan Chowdhury",
    isWishlisted: false,
  },
  {
    id: 7,
    title: "Agricultural Land in Zindabazar",
    location: "Zindabazar",
    type: "Agricultural",
    priceTk: 3000000,
    imageSrc: "/hero-img-1.jpg",
    status: "For Sell",
    rating: 4.1,
    bhk: 3,
    washroom: 3,
    sqft: 10000,
    agentName: "Sadia Islam",
    isWishlisted: false,
  },
  {
    id: 8,
    title: "Industrial Plot in Amberkhana",
    location: "Amberkhana",
    type: "Industrial",
    priceTk: 18000000,
    imageSrc: "/hero-img-2.jpg",
    status: "For Sell",
    rating: 4.6,
    bhk: 3,
    washroom: 3,
    sqft: 12000,
    agentName: "Arif Hasan",
    isWishlisted: true,
  },
  {
    id: 9,
    title: "Residential Plot in Rampura",
    location: "Rampura",
    type: "Plot",
    priceTk: 6000000,
    imageSrc: "/hero-img-3.jpg",
    status: "For Sell",
    rating: 4.3,
    bhk: 3,
    washroom: 3,
    sqft: 3000,
    agentName: "Nazim Uddin",
    isWishlisted: false,
  },
  {
    id: 10,
    title: "Residential Plot in Rampura",
    location: "Rampura",
    type: "Plot",
    priceTk: 6000000,
    imageSrc: "/hero-img-3.jpg",
    status: "For Sell",
    rating: 4.3,
    bhk: 3,
    washroom: 3,
    sqft: 3000,
    agentName: "Nazim Uddin",
    isWishlisted: false,
  },
  {
    id: 11,
    title: "Residential Plot in Rampura",
    location: "Rampura",
    type: "Plot",
    priceTk: 6000000,
    imageSrc: "/hero-img-3.jpg",
    status: "For Sell",
    rating: 4.3,
    bhk: 3,
    washroom: 3,
    sqft: 3000,
    agentName: "Nazim Uddin",
    isWishlisted: false,
  },
  {
    id: 12,
    title: "Residential Plot in Rampura",
    location: "Rampura",
    type: "Plot",
    priceTk: 6000000,
    imageSrc: "/hero-img-3.jpg",
    status: "For Sell",
    rating: 4.3,
    bhk: 3,
    washroom: 4,
    sqft: 3000,
    agentName: "Nazim Uddin",
    isWishlisted: false,
  },
  {
    id: 13,
    title: "Modern Flat in Banani",
    location: "Banani",
    type: "Apartment",
    priceTk: 8500000,
    imageSrc: "/hero-img-1.jpg",
    status: "For Lease",
    rating: 4.8,
    bhk: 3,
    washroom: 2,
    sqft: 1400,
    agentName: "Raiyan Al Sultan",
    isWishlisted: false,
  },
  {
    id: 14,
    title: "Modern Flat in Gulshan",
    location: "Gulshan",
    type: "Apartment",
    priceTk: 8500000,
    imageSrc: "/hero-img-1.jpg",
    status: "For Lease",
    rating: 4.8,
    bhk: 3,
    washroom: 2,
    sqft: 1400,
    agentName: "Raiyan Al Sultan",
    isWishlisted: false,
  },
  {
    id: 15,
    title: "Modern Flat in Banani",
    location: "Gulshan",
    type: "Warehouse",
    priceTk: 8500000,
    imageSrc: "/hero-img-1.jpg",
    status: "For Sell",
    rating: 4.8,
    bhk: 3,
    washroom: 2,
    sqft: 1400,
    agentName: "Raiyan Al Sultan",
    isWishlisted: false,
  },
];

export default function BrowsePropertySection() {
  const [properties, setProperties] = useState(propertiesData);
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<string>(""); // default no sorting or "newest"


  // Added to track the selected tab
  const [serviceType, setServiceType] = useState<string>("");

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

  const ITEMS_PER_PAGE = 6;

  const toggleWishlist = (id: number) => {
    setProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isWishlisted: !p.isWishlisted } : p))
    );
  };

  // handle sort dropdown
  const getSortedProperties = () => {
    let sorted = [...filteredProperties];

    switch (sortBy) {
      case "priceDesc":
        sorted.sort((a, b) => b.priceTk - a.priceTk);
        break;
      case "priceAsc":
        sorted.sort((a, b) => a.priceTk - b.priceTk);
        break;
      case "newest":
        // Assuming higher id means newer property
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "hotDeals":
        // Example: properties with rating >= 4.5 considered hot deals, sorted by rating desc
        sorted = sorted
          .filter((p) => p.rating >= 4.5)
          .sort((a, b) => b.rating - a.rating);
        break;
      default:
        break; // no sorting, keep original order
    }

    return sorted;
  };


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

  // New helper to filter by serviceType, location, propertyType
  const filterProperties = (service: string, location: string, propertyType: string) => {
    let filtered = properties;

    // Fix: Map "Sell" to "For Sell" correctly
    const statusMap: Record<string, string> = {
      Buy: "For Sell",
      Sell: "For Sell",
      Rent: "For Rent",
      Lease: "For Lease",
    };

    if (service) {
      const mappedStatus = statusMap[service];
      if (mappedStatus) {
        filtered = filtered.filter((p) => p.status === mappedStatus);
      }
    }

    if (location) {
      filtered = filtered.filter((p) =>
        p.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (propertyType) {
      filtered = filtered.filter(
        (p) => p.type.toLowerCase() === propertyType.toLowerCase()
      );
    }

    return filtered;
  };


  // New: Handle tab clicks — filter instantly by tab, clear inputs
  const handleTabClick = (tab: string) => {
    setServiceType(tab);
    // On tab click, filter by tab only (clear location and propertyType filters)
    const filtered = filterProperties(tab, "", "");
    setFilteredProperties(filtered);
    setCurrentPage(1);

    // TODO: You need to clear location and propertyType input fields inside SearchFilter UI on tab click.
    // You can do this by adding a prop callback or useEffect in SearchFilter component.
  };

  // Modified handleSearch to use current serviceType and inputs, and clear inputs after search
  const handleSearch = (searchFilters: {
    serviceType: string; // ignored, we use serviceType from tab state
    location: string;
    propertyType: string;
  }) => {
    // Use current serviceType state (tab) + location + propertyType
    const filtered = filterProperties(serviceType, searchFilters.location, searchFilters.propertyType);
    setFilteredProperties(filtered);
    setCurrentPage(1);

    // TODO: Clear inputs after search in SearchFilter component itself
  };

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
        (p) => p.priceTk >= newFilters.priceRange[0] && p.priceTk <= newFilters.priceRange[1]
      );
    }

    if (newFilters.enabledFilters.districtAreas && newFilters.districtAreas.length > 0) {
      filtered = filtered.filter((p) => newFilters.districtAreas.includes(p.location));
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
        (p) => p.sqft >= newFilters.sqftRange[0] && p.sqft <= newFilters.sqftRange[1]
      );
    }

    setFilteredProperties(filtered);
    setCurrentPage(1);
  };

  const sortedProperties = getSortedProperties();

  const totalPages = Math.ceil(sortedProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = sortedProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-white to-orange-50 min-h-screen">
      <h2 className="text-5xl font-bold text-center text-zinc-800 mb-4">Browse Properties</h2>
      <p className="text-xl font-normal text-center text-zinc-500 mb-10">
        Find your perfect property with our advanced search and filtering options
      </p>

      <div className="max-w-4xl mx-auto mb-12" data-aos="zoom-in">
        <SearchFilter
          locations={locations}
          propertyTypes={propertyTypes}
          onSearch={handleSearch}
          onTabClick={handleTabClick} // Added this prop — you need to handle tab clicks inside SearchFilter component
          selectedServiceType={serviceType} // Optional: pass selected tab to SearchFilter for UI highlight
        />
      </div>

        {/* Add SortDropdown here */}
        <div className="flex justify-end mb-4 mr-[105px]">
          <SortDropdown
            options={sortOptions}
            selectedValue={sortBy}
            onChange={(value) => setSortBy(value)}
          />
        </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4">
        <div className="md:w-1/3">
          <PropertyFilter onFilterChange={applyFilters} />
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 h-full">
          {paginatedProperties.map((property, index) => (
            <div
              key={property.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <PropertyCard
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
            </div>
          ))}
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 flex mt-5 justify-center gap-3">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gradient-to-r from-[#2a6071] to-cyan-500 font-bold rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`px-4 py-2 rounded cursor-pointer ${
              page === currentPage ? "bg-gradient-to-r from-[#2a6071] to-cyan-500 font-semibold  text-white" : "bg-gray-300 font-semibold"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gradient-to-r from-[#2a6071] to-cyan-500 font-bold rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
