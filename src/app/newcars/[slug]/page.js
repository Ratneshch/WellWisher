// app/newcars/[slug]/page.js
"use client";

import React from "react";
import { useParams } from "next/navigation";
import cars from "../../../data/tatacars.json";

export default function CarDetailsPage() {
  const params = useParams();
  const slug = params?.slug;

  const car = (cars || []).find((c) => c && String(c.slug) === String(slug));
  const specs = car?.specifications || {};

  if (!car) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
        <p className="text-slate-400 text-center text-sm md:text-base">
          Car details not found for{" "}
          <strong className="text-slate-100">
            {slug || "(no slug provided)"}
          </strong>
          .
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-black">
      {/* HERO */}
      <section className=" relative h-[360px] md:h-[450px] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-500 to-black">
        {/* Background image with overlay */}
        <img
          src={car.image}
          alt={car.name}
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />

        {/* Content */}
        <div className="relative top-20 md:top-0 max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-8">
          <div className="max-w-xl space-y-4 md:space-y-5 mx-auto text-center ">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-50">
              {car.name}
            </h1>
            {car.tagline && (
              <p className="text-xl md:text-2xl text-slate-300 max-w-md">
                {car.tagline}
              </p>
            )}
            <div className="flex flex-wrap gap-3 pt-3 justify-center">
              <button className="px-5 py-2.5 rounded-full bg-amber-500 text-sm font-semibold text-slate-900  hover:bg-amber-400 transition cursor-pointer">
                Enquiry Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 lg:px-6 pb-12 space-y-10 -mt-10 md:-mt-14 relative z-10">
        {/* PRICE / OVERVIEW CARD */}
        <section className="bg-linear-to-br from-slate-50 via-white to-slate-100 border border-slate-200/80 rounded-3xl shadow-[0_18px_60px_rgba(15,23,42,0.16)] overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col md:flex-row">
            {/* Left: Accent panel */}
            <div
              className={`relative flex items-center justify-center w-full md:w-5/10 min-h-[260px] p-7 md:p-8 ${car.accentBg} bg-gradient-to-br from-amber-50 via-orange-50 to-slate-50`}
            >
              <div className="absolute inset-0 opacity-25 mix-blend-screen bg-[radial-gradient(circle_at_top,#ffffff33,transparent_55%),radial-gradient(circle_at_bottom,#0000001a,transparent_55%)]" />
              <div className="absolute -right-8 top-0 bottom-0 w-16 hidden md:block" />
              <img
                src={car.imageCard || car.image}
                alt={car.name}
                className="relative z-10 w-full max-w-sm object-contain drop-shadow-[0_18px_45px_rgba(15,23,42,0.25)]"
              />
              <div
                className="absolute top-5 left-6 text-[16px] font-semibold tracking-[0.25em] uppercase text-black"
              >
                {car.name}
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-7/12 p-6 md:p-10 lg:p-12 flex flex-col md:text-end md:items-end gap-5 text-center items-center ">
              <div className="text-end">
                <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">
                  {car.name}
                </h2>
                {car.tagline && (
                  <p className="text-sm md:text-base text-slate-800 mt-2 max-w-lg ">
                    {car.tagline}
                  </p>
                )}
              </div>

              {car.description && (
                <p className="text-sm md:text-[15px] leading-relaxed text-slate-700 max-w-xl">
                  {car.description}
                </p>
              )}

              {/* Key highlights chips */}
              <div className="flex flex-wrap gap-2 pt-1 text-[11px] md:text-[12px] md:justify-end justify-center">
                {specs.safety && <Badge>{specs.safety}</Badge>}
                {specs.power && <Badge>{specs.power}</Badge>}
                {specs.mileage && <Badge>{specs.mileage} mileage</Badge>}
                {specs.transmission && <Badge>{specs.transmission}</Badge>}
              </div>

              {/* Price & CTAs */}
              <div className="flex flex-col sm:items-end sm:justify-between gap-4 pt-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-800">
                    Starting ex-showroom
                  </p>
                  <p className="text-2xl md:text-3xl font-black text-black mt-1">
                    ₹ {car.exShowroom}
                  </p>
                  {car.onRoad_Mumbai && (
                    <p className="text-xs text-slate-700 mt-1">
                      On-road Mumbai from{" "}
                      <span className="font-medium text-slate-800">
                        {car.onRoad_Mumbai}
                      </span>
                    </p>
                  )}
                </div>
                <div className="flex justify-center flex-wrap gap-3">
                  <button className="px-5 py-2.5 rounded-full bg-amber-500 text-xs md:text-sm font-semibold text-black hover:bg-amber-400  transition cursor-pointer ">
                    Pre-Book →
                  </button>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 mt-1">
                Prices shown are indicative. Final offer price will be shared by your
                nearest dealer.
              </p>
            </div>
          </div>
        </section>

        {/* SPECS + IMAGE SECTION */}
        <section className="bg-white border border-slate-300 rounded-3xl p-6 md:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT - Specs */}
            <div className="space-y-9">
              <div className="flex items-center justify-between gap-3 ">
                <div className=" mx-auto ">
                  <h3 className="text-xl md:text-2xl font-bold tracking-[0.18em]  uppercase text-slate-900 ml-3 md:mr-108">
                    Specifications
                  </h3>
                  <p className="text-xs text-slate-700 mt-1 md:ml-3">
                    Engine, performance, dimensions and more
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-1 md:grid-cols-2 space-y-4 gap-x-5 text-[14px] md:text-[16px] text-slate-900 font-medium text-center md:text-start">
                <SpecItem label="Mileage-" value={specs.mileage} />
                <SpecItem label="Engine-" value={specs.engine} />
                <SpecItem label="Safety-" value={specs.safety} />
                <SpecItem label="Fuel Type-" value={specs.fuelType} />
                <SpecItem label="Transmission-" value={specs.transmission} />
                <SpecItem label="Seating Capacity-" value={specs.seatingCapacity} />
                <SpecItem label="Fuel Tank-" value={specs.fuelTank} />
                <SpecItem label="Tyre Size-" value={specs.tyreSize} />
              </dl>

              {specs.specsSource && (
                <p className="text-[11px] text-slate-600 text-center md:text-start">
                  Specifications as shared by {specs.specsSource}.
                </p>
              )}
            </div>

            {/* RIGHT - Image */}
            <div className="flex items-center justify-center">
              <img
                src={car.imageCard}
                alt={car.name}
                className="w-full h-full object-contain p-4"
              />
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}

function SpecItem({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex flex-col">
      <dt className="text-[15px] uppercase  text-slate-900">
        {label}
      </dt>
      <dd className="font-medium text-slate-800 mt-0.5">
        {value}
      </dd>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
                     bg-white border border-black text-slate-900
                     text-[11px] md:text-[12px] font-medium
                     shadow-[0_8px_18px_rgba(15,23,42,0.18)]">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {children}
    </span>
  );
}

