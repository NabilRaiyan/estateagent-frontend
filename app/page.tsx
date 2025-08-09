
import Navbar from "./components/ui/Navbar"
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServiceSection";
import PropertyTypeSection from "./components/PropertyTypeSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <PropertyTypeSection/>
    <ServicesSection/>
    </>
  );
}
