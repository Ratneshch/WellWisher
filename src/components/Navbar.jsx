"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "New Cars", path: "/newcars" },
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
      className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 md:px-16 py-3 transition-all duration-300 ${isScrolled ? "bg-white " : "bg-transparent"}`}
    >
      {/* Logo */}
      <a href="/">
        <img
          src="/logo.png"
          alt="logo"
          className={`h-16 transition-all duration-300 ${isScrolled ? "invert-0" : "invert"}`}
        />
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-12">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`font-medium transition-all duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-7 w-7 cursor-pointer transition-all duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
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

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg py-5 flex flex-col items-center gap-6 md:hidden shadow-md">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className="text-black font-semibold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
