"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
export default function AboutUsPage() {
  // simple carousel state
  const showroomImages = [
    "/showroom-1.jpeg",
    "/showroom-2.jpg",
    "/showroom-3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % showroomImages.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="bg-white text-gray-800 mt-10">
      {/* HERO: video + intro */}
      <section className="max-w-6xl mx-auto px-4 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <div className="w-full aspect-video rounded-md overflow-hidden shadow">
            {/* Use YouTube embed URL (not watch?v=) */}
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube.com/embed/vUKmCcbQFWg"
              title="Company Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="text-sm text-gray-700 space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">About WellWisher Group</h1>
          <p>
            WellWisher Group has proudly stood tall as a leader in Mumbai, Navi
            Mumbai, and Pune’s real estate development sector for over 15 years.
            The group commenced operations in 2005 under the able leadership of
            its dynamic Managing Director Mr. Abhijeet Chandrakant Bhansali.
          </p>
          <p>
            Today the group has developed and delivered over 4 million sq. ft
            across Mumbai, Navi Mumbai, and Pune and has over 1 million sq. ft
            of spaces currently under development under the guidance of the
            Managing Director. At WellWisher Group, the customer is the central
            focus of all our residential and commercial projects.
          </p>
          <p>
            We combine the dual ethos of integrity and aesthetics in building
            futuristic landmarks and take pride in delivering customer delight.
          </p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-900 tracking-wide mb-10">
            LEADERSHIP
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Photo */}
            <div className="bg-white p-6 rounded shadow">
              <div className="w-full relative aspect-[4/5] rounded overflow-hidden">
                <Image
                  src="/Abhijeet_Bansal.png"
                  alt="Abhijeet C Bhansali"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 bg-white p-6 rounded shadow space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Abhijeet C Bhansali</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Managing Director, WellWisher Group
                </p>
              </div>

              <div className="text-gray-700 text-sm space-y-3">
                <p>
                  We at WellWisher Group believe that great team leaders are those who
                  empower others! Each project undertaken by the WellWisher Group
                  is strongly backed by outstanding leadership that provides valuable
                  insight and assistance in taking the business further and paving
                  the way forward.
                </p>
                <p>
                  Abhijeet Chandrakant Bhansali, MD, WellWisher Group, promises to
                  bring in a better tomorrow by providing people improved quality
                  of life and living standards. With customers at the core of all
                  endeavors, every project under the WellWisher brand is
                  conceptualized keeping in mind the aspirations of the buyer.
                </p>
              </div>

              {/* signature */}
              <div className="mt-4">
                <div className="w-44 h-20 relative">
                  <Image
                    src="/signature.jpg"
                    alt="signature"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWROOM */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-900 tracking-wide mb-8">
            SHOWROOM
          </h2>

          <div className="relative rounded overflow-hidden shadow">
            {/* current image */}
            <div className="w-full h-[420px] sm:h-[360px] md:h-[420px] relative">
              <Image
                src={showroomImages[index]}
                alt={`Showroom ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* simple dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {showroomImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/60"}`}
                  aria-label={`go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* prev / next */}
            <button
              onClick={() => setIndex((index - 1 + showroomImages.length) % showroomImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
              aria-label="previous"
            >
              ‹
            </button>
            <button
              onClick={() => setIndex((index + 1) % showroomImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
              aria-label="next"
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
