
import Navbar from "../components/ui/Navbar"
import { GeneralHeroSection } from "../components/ui/GeneralHeroSection";

import Footer from "../components/ui/Footer";
import { AboutComponent } from "../components/ui/AboutComponent";
import { MediaAndTextComponent, MediaAndTextComponentProps } from "../components/ui/MediaAndTextComponent";


// mission section data

const missionData: MediaAndTextComponentProps = {
    image: "/our-mission.jpg",
    missionTitle: "Our Mission",
    missionDescription: "At EstateAgent, our mission is to simplify real estate design by offering sleek, modern, and customizable website solutions that empower agencies, agents, and property professionals to thrive online...",
    stats: [
        { number: "30K+", label: "Happy Customers", description: "Lorem ipsum dolor sit amet conse ctetur." },
        { number: "28K+", label: "Top Property", description: "Lorem ipsum dolor sit amet conse ctetur." },
        { number: "15+", label: "Years Experience", description: "Lorem ipsum dolor sit amet conse ctetur." }
    ],
    buttonConfig: {
        text: "Explore more",
        href: "/explore",
        variant: "default",
        size: "lg"
    }
};


export default function About() {
  return (
    <>
    <Navbar />
    <GeneralHeroSection
        backgroundImage="/about.jpg"
        title="Your Partners in Property"
        subtitle="With years of experience and deep market knowledge, we offer expert guidance whether you're buying, selling, or investing. We're here to help you navigate every step with confidence."
      />
      <AboutComponent/>
      <MediaAndTextComponent 
            image={missionData.image}
            missionTitle={missionData.missionTitle}
            missionDescription={missionData.missionDescription}
            stats={missionData.stats}
            buttonConfig={missionData.buttonConfig}
        />    
        <Footer/>
    </>
  );
}
