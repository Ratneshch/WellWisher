"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const NewLaunch = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  // Keep React state and video muted property in sync (useful on mount)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  // toggle mute/unmute
  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setMuted(newMuted);
  };

  // prevent right-click menu on video
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-8">
      <div className="text-center mb-16 mt-2">
        <p className="text-6xl text-black uppercase font-extrabold tracking-wide">Newly Launch</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Video */}
        <div className="lg:col-span-6 px-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* Native controls removed so we can show ONLY mute/unmute */}
            <video
              ref={videoRef}
              src="/Sierra.mp4"
              className="w-full h-auto object-cover block"
              autoPlay
              loop
              muted
              playsInline
              controls={false} // hide native controls completely
              onContextMenu={handleContextMenu}
            />

            {/* Custom mute/unmute button */}
            <button
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="absolute bottom-4 right-4 bg-black/60 text-white p-3 rounded-full backdrop-blur-sm hover:bg-black/80 transition"
            >
              {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>

        {/* Right: content */}
        <div className="lg:col-span-6 px-6">
          <h2 className="text-2xl md:text-2xl font-bold text-slate-900">
           <span className="text-3xl"> Drive Home Your Dream Car</span> — Get the Best Price Today
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            Discover the reborn spirit of the iconic <strong>Tata Sierra</strong> — a
            modern SUV with retro character. The Sierra blends bold, boxy styling with
            contemporary tech and practical space, making it an ideal choice for drivers
            who want personality plus comfort.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block w-2 h-2 rounded-full bg-yellow-600" />
              Modern-retro exterior design that stands out in traffic.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block w-2 h-2 rounded-full bg-yellow-600" />
              Spacious cabin and versatile cargo space for family and adventure.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block w-2 h-2 rounded-full bg-yellow-600" />
              Comfortable features: connected infotainment (Android Auto / Apple CarPlay) and premium trims.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block w-2 h-2 rounded-full bg-yellow-600" />
              Safety-focused: multiple airbags and modern driver assists for confidence on every trip.
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#sell"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-yellow-600 text-white text-sm font-medium shadow hover:opacity-95 transition"
            >
              Get Started
            </a>

           
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewLaunch;
