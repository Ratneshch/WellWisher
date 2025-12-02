"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const cars = [
  {
    key: "sierra",
    name: "Sierra",
    tagline: "The Legend Returns",
    description:
      "Chaos Outside. Calm Within. Welcome Home, in every drive. Your commute, Reimagined.",
    img: "/sierra2.png",
    accentBg: "bg-yellow-500",
    width: 1300,
    height: 800,
  },
  {
    key: "harrier",
    name: "Harrier",
    tagline: "Comfort meets Power",
    description:
      "A refined SUV with elegant styling and confident road manners — built for everyday adventures.",
    img: "/harrier.png",
    accentBg: "bg-gray-600",
  },
  {
    key: "curvv",
    name: "Curvv",
    tagline: "Futuristic. Electrifying. Dynamic.",
    description:
      "The Tata Curvv blends coupe-inspired aerodynamics with modern SUV strength, offering a bold new design language and a tech-forward driving experience.",
    img: "/Curvv1.png",
    accentBg: "bg-amber-900",
  },
  {
    key: "nexon",
    name: "Nexon",
    tagline: "Smart Compact SUV",
    description:
      "City-friendly with big SUV attitude—efficient, feature-rich and fun to drive.",
    img: "/Nexon.png",
    accentBg: "bg-red-700",
  },
  {
    key: "safari",
    name: "New Safari",
    tagline: "Reclaim Your Life",
    description:
      "The New Safari epitomizes premium luxury with its opulent interiors, Plush Upholstery & advanced infotainment system.",
    img: "/safari.png",
    accentBg: "bg-amber-700",
  },
];

export default function CarShowcase() {
  const [selected, setSelected] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
  }, [selected]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
      {/* Title */}
      <h1 className="text-center mb-8 sm:mb-10 font-extrabold tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-black">
        Tata Cars
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2">
        {cars.map((car, idx) => (
          <button
            key={car.key}
            onClick={() => setSelected(idx)}
            className={`transition rounded-md text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 focus:outline-none  ${
              idx === selected
                ? "bg-yellow-400 text-black font-semibold shadow"
                : "bg-transparent text-gray-500 hover:text-gray-800"
            }`}
            aria-pressed={idx === selected}
            aria-label={`Show ${car.name}`}
          >
            {car.name}
          </button>
        ))}
      </div>

      {/* Card: image + details */}
      <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
        {/* Use responsive layout: column on small, row on lg */}
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left: accent area + image */}
          <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96">
            {/* left accent half (uses background color utility from item) */}
            <div
              className={`${cars[selected].accentBg} absolute inset-y-0 left-0 w-1/2`}
              aria-hidden="true"
            />

            {/* right subtle half */}
            <div
              className="absolute inset-y-0 right-0 w-1/2 bg-white"
              aria-hidden="true"
            />

            {/* image container: center image and control size responsively */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-3/5 h-full flex items-center justify-center">
                <Image
                  key={cars[selected].img}
                  src={cars[selected].img}
                  alt={cars[selected].name}
                  width={cars[selected].width || 1200}
                  height={cars[selected].height || 700}
                  onLoadingComplete={() => setImgLoaded(true)}
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  className={`transition-opacity duration-500 ease-out ${
                    imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  priority
                />
              </div>

              {/* shadow under car for depth (reduced on small screens) */}
              <div
                className="absolute bottom-8 left-1/4 w-1/2 h-8 rounded-full filter blur-2xl opacity-60 hidden sm:block"
                style={{ background: "rgba(0,0,0,0.22)" }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right: details */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              {cars[selected].name}
            </h2>

            <p className="mt-2 text-sm sm:text-base text-gray-500 font-medium">
              {cars[selected].tagline}
            </p>

            <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-base max-w-2xl">
              {cars[selected].description}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href="#learn"
                className="w-full sm:w-auto text-center text-sm sm:text-sm border rounded-full px-4 py-2 inline-flex items-center justify-center hover:bg-gray-50"
              >
                Learn More &rarr;
              </a>

              <a
                href="#prebook"
                className="w-full sm:w-auto text-center text-sm sm:text-sm rounded-full px-4 py-2 bg-yellow-600 text-white shadow hover:opacity-95"
              >
                Pre-Book &rarr;
              </a>

              {/* small dots / pagination like screenshot - responsive */}
              <div className="mt-2 sm:mt-0 flex items-center gap-2 ml-0 sm:ml-4">
                {cars.map((_, i) => (
                  <button
                    key={`dot-${i}`}
                    onClick={() => setSelected(i)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      i === selected ? "bg-slate-800" : "bg-gray-300"
                    }`}
                    aria-label={`Select ${cars[i].name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
