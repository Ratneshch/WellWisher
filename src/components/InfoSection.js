// components/InfoSection.jsx
"use client";

import React from "react";
import { HiOutlineCurrencyDollar, HiOutlineUserGroup } from "react-icons/hi";
import { RiPriceTag3Line } from "react-icons/ri";
import { IoMdCar } from "react-icons/io";

const features = [
  {
    id: 1,
    title: "Get on Road Price",
    desc: "Get Price Quote for Tata Cars with On-Road Price, EMI & Offers.",
    icon: <HiOutlineCurrencyDollar size={20} />,
  },
  {
    id: 2,
    title: "Trusted Car Dealership",
    desc: "Trusted Tata Car Dealerships with Best Price Guarantee & Service.",
    icon: <HiOutlineUserGroup size={20} />,
  },
  {
    id: 3,
    title: "Insurance",
    desc: " Get stress-free Financial Solution and explore insurance from Tata Cars.",
    icon: <RiPriceTag3Line size={20} />,
  },
  {
    id: 4,
    title: "Test Drive",
    desc: "Schedule a Test Drive at your convenience with Tata Cars.",
    icon: <IoMdCar size={20} />,
  },
];

export default function InfoSection() {
  return (
    <section className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: heading */}
        <div className="lg:col-span-5">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 pt-20 pl-14">
            We're <span className="text-yellow-600">BIG</span> On What
            <br /> Matters To You
          </h2>
        </div>

        {/* Right column: features */}
        <div className="lg:col-span-7">
          <div className="w-full bg-transparent">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div
                  key={f.id}
                  className="flex gap-4 items-start bg-white rounded-lg p-4 md:p-5 border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex-none w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white">
                    <div className="text-yellow-600">{f.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-900">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-snug">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
