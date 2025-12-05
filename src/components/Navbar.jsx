"use client";

import Link from "next/link";
import React from "react";

// Import your full cars JSON file
import carsJson from "../data/tatacars.json";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/newcars" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/contactus" },
  ];

  //  Automatically extract id + name from real JSON (nothing else changed)
  const carsData = carsJson.map(car => ({
    id: car.id,
    name: car.name,
  }));

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [mobileDropdown, setMobileDropdown] = React.useState(false);

  const hideTimeout = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  const openDropdown = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = null;
    setShowDropdown(true);
  };

  const delayedCloseDropdown = (delay = 150) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      setShowDropdown(false);
      hideTimeout.current = null;
    }, delay);
  };

  return (
    <nav
      className={`fixed right-0 inset bg-transparent top-0 mb-5 w-full flex z-50 items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 ${
        isScrolled ? "bg-white text-black" : "bg-linear-to-b from-black/70 via-black/30 text-white"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src="/logo.png" alt="logo" className="h-14 md:h-16 cursor-pointer" />
      </Link>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex gap-10 items-center font-medium">
        {navLinks.map((link) =>
          link.name === "Cars" ? (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={() => delayedCloseDropdown(120)}
            >
              <Link href={link.path} className="transition-all duration-300">
                {link.name}
              </Link>

              {showDropdown && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white shadow-lg rounded-md w-48 py-2 z-50"
                  onMouseEnter={openDropdown}
                  onMouseLeave={() => delayedCloseDropdown(120)}
                >
                  {carsData.map((car) => (
                    <Link
                      key={car.id}
                      href={`/newcars/${car.id}`}
                      className="block px-10 py-2 hover:bg-gray-100 text-sm text-gray-700 whitespace-nowrap"
                      onClick={() => {
                        setShowDropdown(false);
                        if (hideTimeout.current) {
                          clearTimeout(hideTimeout.current);
                          hideTimeout.current = null;
                        }
                      }}
                    >
                      {car.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link key={link.name} href={link.path} className="transition-all duration-300">
              {link.name}
            </Link>
          )
        )}
      </div>

      {/* MOBILE ICON */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black shadow-md py-4 flex flex-col gap-4 font-medium md:hidden">
          <Link href="/" className="px-6">Home</Link>

          {/* Mobile Cars Dropdown */}
          <div className="px-6">
            <button
              onClick={() => setMobileDropdown(!mobileDropdown)}
              className="w-full text-left flex justify-between items-center"
            >
              Cars
              <span>{mobileDropdown ? "▲" : "▼"}</span>
            </button>

            {mobileDropdown && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {carsData.map((car) => (
                  <Link key={car.id} href={`/newcars/${car.id}`} className="text-sm hover:text-gray-600">
                    {car.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/aboutus" className="px-6">About Us</Link>
          <Link href="/contactus" className="px-6">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
