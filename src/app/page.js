import Dealership from "@/components/Dealership";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import NewLaunch from "@/components/NewLaunch";
import TataCars from "@/components/TataCars";
import Image from "next/image";

export default function Home() {
  return (
      <div className="bg-white ">
    <HeroSection />
        <InfoSection />
        <NewLaunch />
        <TataCars />
        <Dealership />
      </div>
  );
}
