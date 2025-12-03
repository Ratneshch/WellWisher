"use client";

import React from "react";
import Image from "next/image";
import cars from "@/data/tatacars.json"; // <-- correct path from app/ folder

import { FiUser, FiMapPin } from "react-icons/fi";
import { MdLocalGasStation } from "react-icons/md";
import { GiGearStick } from "react-icons/gi";

export default function NewCarsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-5 text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">New Cars</h1>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="object-cover"
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
