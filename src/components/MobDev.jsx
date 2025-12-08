"use client"
import Link from 'next/link';
import React from 'react';

const MobDev = () => {
  return (
    <>
      {/* Mobile-only bottom fixed buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-50 md:hidden shadow-lg">
        <div className="flex gap-3">
          <Link 
            href="/contactus"
            className="flex-1 bg-amber-500 text-white py-3 px-4 rounded-full font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          >
            Book Test Drive
          </Link>
          <Link 
            href="/contactus"
            className="flex-1 bg-green-500 text-white py-3 px-4 rounded-full font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          >
            Call Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobDev;
