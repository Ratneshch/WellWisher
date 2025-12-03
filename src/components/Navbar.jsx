"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/newcars" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-300 
      ${isScrolled ? "bg-white shadow-lg" : "bg-white"}`}
    >
      {/* Logo */}
      <Link href="/">
        <img
          src="/logo.png"
          alt="logo"
          className="h-14 transition-all duration-300"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className="font-medium text-black hover:text-gray-600 transition-all duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-8 w-8 cursor-pointer text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white py-6 flex flex-col items-center gap-6 md:hidden shadow-md">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="text-black font-semibold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
