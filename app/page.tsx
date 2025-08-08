
import Navbar from "./components/ui/Navbar"
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServiceSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <ServicesSection/>
    </>
  );
}
