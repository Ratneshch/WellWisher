"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currIndex, setCurrIndex] = React.useState(0);

  const carData = [
    {
      id: 1,
      name: "TATA SIERRA",
      tagline: "The Legend Returns",
      description:
        "Chaos Outside. Calm Within. Welcome Home, in every drive. Your commute, Reimagined.",
      image:
        "https://s7ap1.scene7.com/is/image/tatamotors/sierra-horses-desktop?$BA-1920-925-D$&fit=fit&fmt=avif-alpha",
      color: "#F59E0B",
    },
    {
      id: 2,
      name: "TATA SAFARI",
      tagline: "Reclaim Your World",
      description:
        "The new Safari is built for those who love adventure and dominance on the road.",
      image:
        "https://s7ap1.scene7.com/is/image/tatamotors/safari-book-test-drive?$B-1228-488-D$&fit=crop&fmt=avif-alpha",
      color: "#beb29b",
    },
    {
      id: 3,
      name: "TATA HARRIER",
      tagline: "Comfort meets Power",
      description:
        "A refined SUV with elegant styling and confident road manners — built for everyday adventures.",
      image:
        "https://imgd.aeplcdn.com/1280x720/n/cw/ec/197759/harrier-exterior-left-front-three-quarter.avif?isig=0",
      color: "#e8e25e",
    },
  ];

  const currentCar = carData[currIndex];

  const prevSlide = () => {
    setCurrIndex((prev) => (prev - 1 + carData.length) % carData.length);
  };

  const nextSlide = () => {
    setCurrIndex((prev) => (prev + 1) % carData.length);
  };

  return (
    <div className="w-full h-[480px] md:h-[600px] relative overflow-hidden mb-10">
      {/* Background Image */}
      <img
        src={currentCar.image}
        alt="car"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/100 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative h-full flex items-center px-4 md:px-25">
        <div className="text-white space-y-2 md:space-y-4 text-center sm:text-left w-full sm:w-auto">
          {/* Heading */}
          <h1
            className="inline-block text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide leading-tight
            bg-black/40 px-3 py-1 md:px-6 md:py-3 rounded-lg md:rounded-xl"
          >
            {currentCar.name.split(" ")[0]}{" "}
            <span style={{ color: currentCar.color }}>
              {currentCar.name.split(" ")[1]}
            </span>
          </h1>

          {/* Tagline */}
          <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold drop-shadow-[0_3px_8px_rgba(0,0,0,1)]">
            {currentCar.tagline}
          </h2>

          {/* Description */}
          <p className="max-w-xs sm:max-w-sm md:max-w-md mx-auto sm:mx-0 text-sm sm:text-base md:text-xl drop-shadow-[0_3px_6px_rgba(0,0,0,1)]">
            {currentCar.description}
          </p>

          <button className="block mx-auto sm:mx-0 px-10 cursor-pointer py-2 mt-2 text-sm sm:text-base md:text-lg font-semibold bg-black/50 rounded-2xl border border-white/40 hover:bg-black/70">
            Explore
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/70"
      >
        <ChevronLeft size={20} className="text-white md:size-28" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/70"
      >
        <ChevronRight size={20} className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 md:bottom-5 w-full flex justify-center gap-2 md:gap-3">
        {carData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrIndex(i)}
            className={`w-2 h-2 md:w-4 md:h-4 rounded-full transition-all ${
              currIndex === i ? "bg-white scale-110" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
