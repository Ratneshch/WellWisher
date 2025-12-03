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
    <main className="bg-white text-gray-800 ">
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
          <h1 className="text-2xl font-bold  text-yellow-600">About WellWisher Group</h1>
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
   <section className="bg-black py-16">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-500 tracking-wider mb-14">
      LEADERSHIP
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
      {/* Left Card – Photo */}
      <div className="bg-white border border-white/10 shadow-2xl p-6 rounded-2xl">
        <div className="w-full relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/Abhijeet_Bansal.png"
            alt="Abhijeet C Bhansali"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Card – Bio */}
      <div className="lg:col-span-2 bg-[#111] border border-white/10 shadow-2xl p-8 rounded-2xl text-white space-y-5">
        <div>
          <h3 className="text-3xl font-bold text-white">
            Abhijeet C Bhansali
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Managing Director, WellWisher Group
          </p>
        </div>

        <div className="text-gray-300 text-[15px] leading-relaxed space-y-4">
          <p>
            We at WellWisher Group believe that great leaders empower others.
            Every project undertaken by the group is strongly backed by
            outstanding leadership, providing invaluable insight and vision
            that drives the company forward toward greater heights.
          </p>
          <p>
            Abhijeet Chandrakant Bhansali, MD of WellWisher Group, strives to
            build a better tomorrow by enhancing lifestyle standards and
            delivering unmatched quality. With customers at the heart of every
            endeavor, each project is conceptualized keeping in mind the
            aspirations, comfort, and satisfaction of the buyer.
          </p>
        </div>

        {/* Signature */}
        <div className="pt-4">
          <div className="w-48 h-20 relative opacity-90">
            <Image
              src="/signature.jpg"
              alt="signature"
              fill
              className="object-contain"
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-center  text-yellow-600 tracking-wide mb-8">
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
