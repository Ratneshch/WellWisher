"use client";

import React from "react";
import Image from "next/image";
import cars from "@/data/tatacars.json"; // <-- correct path from app/ folder

import { FiUser, FiMapPin } from "react-icons/fi";
import { MdLocalGasStation } from "react-icons/md";
import { GiGearStick } from "react-icons/gi";

export default function NewCarsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-8xl mx-auto">

        <div className="relative h-[350px] w-full mb-5 rounded-9xl">
          <img src="/shbanner.jpg" className="w-full object-cover h-full"></img>
          <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/70" />
          <div className="absolute inset-0 items-center justify-center flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">Available Cars</h1> 
            <p className="text-xl w-1/2 text-center md:text-2xl font-medium mt-1 text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
              Browse our selection of premium vehicles available for your next adventure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-md border overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-56">
                <Image
                  src={car.imageCard ? car.imageCard : car.image}
                  alt={car.name}
                  fill
                  className="object-contain"
                />

                {/* Available Badge */}
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  Available Now
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  {car.exShowroom || "Price on Request"}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h2 className="text-lg font-semibold">{car.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{car.tagline}</p>

                <div className="border-t my-4"></div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <FiUser className="text-gray-600" />
                    <span>{car.specifications?.seatingCapacity}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MdLocalGasStation className="text-gray-600" />
                    <span>{car.specifications?.fuelType}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <GiGearStick className="text-gray-600" />
                    <span>{car.specifications?.transmission}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-gray-600" />
                    <span>Mumbai</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-5">
                 

                  <a
                    href={`/car/${car.id}`}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
