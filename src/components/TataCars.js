// src/components/Tatacars.js
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import carsJson from "../data/tatacars.json";

// requested list (order matters)
const SHOW_ONLY = ["Sierra","New Safari", "Harrier", "Nexon", "Curvv" ];

// helper: normalize a name string for comparison
const normalizeName = (s = "") =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ""); // remove spaces & non-alphanum

const findBestMatch = (target, list) => {
  const t = normalizeName(target);
  // try exact normalized
  let found = list.find((c) => normalizeName(c.name) === t);
  if (found) return found;

  // try includes: source includes target
  found = list.find((c) => normalizeName(c.name).includes(t));
  if (found) return found;

  // try reverse: target includes source
  found = list.find((c) => t.includes(normalizeName(c.name)));
  if (found) return found;

  // last resort: match by partial words (split)
  const targetParts = target.toLowerCase().split(/\s+/).filter(Boolean);
  for (const part of targetParts) {
    found = list.find((c) => c.name.toLowerCase().includes(part));
    if (found) return found;
  }

  return null;
};

// normalize the object into the shape the component expects
const normalize = (c = {}, i) => ({
  key: c.key || c.name?.toLowerCase().replace(/\s+/g, "-") || `car-${i}`,
  name: c.name || `Car ${i + 1}`,
  tagline: c.tagline || "",
  description: c.description || "",
  img: c.imageCard || c.image || c.img || "",
  accentBg: c.accentBg || "bg-gray-300",
  width: c.width || 1200,
  height: c.height || 700,
 
});

// build final cars array in requested order, robust matching
const cars = (() => {
  if (!Array.isArray(carsJson)) return [];

  const available = carsJson.map((c) => ({ ...c }));
  const out = SHOW_ONLY.map((label, i) => {
    const matched = findBestMatch(label, available);
    if (matched) return normalize(matched, i);
    // fallback: produce minimal entry with the label
    return {
      key: `fallback-${label.toLowerCase().replace(/\s+/g, "-")}`,
      name: label,
      tagline: "",
      description: "",
      img: "",
      accentBg: "bg-gray-300",
      width: 1200,
      height: 700,
     
    };
  });
  return out;
})();

export default function CarShowcase() {
  const [selected, setSelected] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => setImgLoaded(false), [selected]);

  if (!cars.length) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-center mb-8 font-extrabold tracking-wide text-3xl uppercase text-black">
         Featured Tata Cars
        </h1>
        <p className="text-center text-gray-600">No cars found in JSON</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
      {/* Title */}
      <h1 className="text-center mb-8 sm:mb-10 font-extrabold tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-black">
       Featured Tata Cars
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

      {/* Card */}
      <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left: accent + image */}
          <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96">
            <div className={`${cars[selected].accentBg} absolute inset-y-0 left-0 w-1/2`} />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-white" />

            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-3/5 h-full flex items-center justify-center">
                {cars[selected].img ? (
                  <Image
                    key={cars[selected].img}
                    src={cars[selected].img}
                    alt={cars[selected].name}
                    width={cars[selected].width}
                    height={cars[selected].height}
                    onLoadingComplete={() => setImgLoaded(true)}
                    className={`transition-opacity duration-500 ease-out ${
                      imgLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    priority
                  />
                ) : (
                  <div className="text-gray-400">No image provided</div>
                )}
              </div>

              <div
                className="absolute bottom-8 left-1/4 w-1/2 h-8 rounded-full filter blur-2xl opacity-60 hidden sm:block"
                style={{ background: "rgba(0,0,0,0.22)" }}
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
