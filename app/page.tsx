
import Navbar from "./components/ui/Navbar"
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServiceSection";
import PropertyTypeSection from "./components/PropertyTypeSection";
import FeaturedPropertySection from "./components/FeaturedPropertySection";
import BrowsePropertySection from "./components/BrowsePropertySection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import CTASection from "./components/ui/CTAComponent";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <PropertyTypeSection/>
    <ServicesSection/>
    <FeaturedPropertySection/>
    <BrowsePropertySection/>
    <WhyChooseUsSection/>
    <CTASection/>
    <StatsSection/>
    </>
  );
}
