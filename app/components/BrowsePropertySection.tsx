"use client"

import SearchFilter from "./ui/SearchFilter";

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

export default function BrowsePropertySection() {
  const handleSearch = (filters: {
    serviceType: string;
    location: string;
    propertyType: string;
  }) => {
    console.log("Searching with filters:", filters);
    // TODO: call your API/backend with filters here
  };

  return (
    <section className="py-16 bg-gradient-to-r from-white to-orange-50">
      <h2 className="text-5xl font-bold text-center text-zinc-800 mb-4">Browse Properties</h2>
      <p className="text-xl font-normal text-center text-zinc-800 mb-10">Find your perfect property with our advanced search and filtering options</p>

      <SearchFilter
        locations={locations}
        propertyTypes={propertyTypes}
        onSearch={handleSearch}
      />
    </section>
  );
}
