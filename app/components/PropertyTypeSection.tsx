import { Home, Building, Warehouse, Landmark, Factory, Hotel } from "lucide-react";

const propertyTypes = [
  { title: "Residential", icon: Home, description: "Apartments, Villas, Houses", count: "2,500+ Properties" },
  { title: "Commercial", icon: Building, description: "Offices, Coworking Spaces", count: "850+ Properties" },
  { title: "Industrial", icon: Factory, description: "Shops, Showrooms, Malls", count: "2,500+ Properties" },
  { title: "Land & Plots", icon: Landmark, description: "Plots, Agricultural Land", count: "900+ Properties" },
  { title: "Warehouses", icon: Warehouse, description: "Warehouses, Factories", count: "450+ Properties" },
  { title: "Hotels & Resorts", icon: Hotel, description: "Covered, Open Parking", count: "350+ Properties" },
];

export default function PropertyTypeSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-5xl text-zinc-700 font-bold text-center mb-5">
            Property Types
      </h2>
      <h2 className="text-lg text-zinc-500 font-medium text-center mb-10">
        Browse properties by category to find exactly what you&apos;re looking for
      </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {propertyTypes.map(({ title, icon: Icon, description, count }) => (
            <div
            key={title}
            className="group flex flex-col items-left mb-2 justify-left bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
            <Icon
                size={48}
                className="
                    text-amber-600 bg-[#fdf2eb] shadow-xl m-3 p-2 rounded-lg h-16 w-16 mb-4
                    transform transition-transform duration-500 ease-in-out
                    group-hover:scale-110 group-hover:rotate-20
                "
            />
            <h3 className="text-lg text-zinc-800 mb-1 ml-3 font-semibold">{title}</h3>
            <p className="text-md text-zinc-500 mb-1 ml-3 font-medium">{description}</p>
            <p className="text-sm text-amber-500 mb-1 ml-3 font-semibold">{count}</p>
        </div>
  ))}
</div>
    </section>
  );
}
