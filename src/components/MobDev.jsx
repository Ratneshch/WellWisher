"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const MobDev = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCallNow = () => {
    window.open('tel:+918452097707', '_blank');
  };

  return (
    <div className="relative min-h-screen">
      {/* Mobile-only bottom fixed buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-50 md:hidden shadow-lg">
        <div className="flex gap-3">
          <Link 
            href="/contactus"
            className="flex-1 bg-amber-500 text-white py-3 px-4 rounded-full font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            Book Test Drive
          </Link>
          <button
            onClick={handleCallNow}
            className="flex-1 bg-green-500 rounded-full text-white py-3 px-4 font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          >
             Call Now
          </button>
        </div>
      </div>

      {/* Conditional Modal for Test Drive */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:hidden">
          <div className="bg-white rounded-2xl p-6 m-4 max-w-sm w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Book Test Drive</h2>
            <p className="text-gray-600 mb-6">Test drive form would appear here.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  alert('Test drive booked!');
                }}
                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg font-medium"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Your main content */}
      <div className="pt-20 pb-24 md:pb-0">
        <h1>MobDev Content</h1>
        <p>Your main mobile/desktop content goes here...</p>
      </div>
    </div>
  );
};

export default MobDev;
