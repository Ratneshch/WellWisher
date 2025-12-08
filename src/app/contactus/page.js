"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      image: "/sierra2.png",
      title: "TATA SIERRA",
      description: "The Legend Returns",
      gradient: "from-slate-900 via-blue-900 to-indigo-900"
    },
    {
      image: "/safari.png",
      title: "TATA SAFARI",
      description: "Reclaim Your World.",
      gradient: "from-gray-900 via-slate-800 to-gray-900"
    },
    {
      image: "/harrier.png",
      title: "TATA HARRIER",
      description: "Comfort meets Power.",
      gradient: "from-zinc-900 via-neutral-800 to-stone-900"
    },
    {
      image: "/altrozCard.png",
      title: "TATA ALTROZ",
      description: "Born to Perform.",
      gradient: "from-gray-900 via-blue-900 to-slate-900"
    },
    {
      image: "/Nexon.png",
      title: "TATA NEXON",
      description: "Urban SUV. Boldly Safe.",
      gradient: "from-neutral-900 via-gray-800 to-zinc-900"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      setSuccess("Please fill all required fields.");
      return;
    }

    setSuccess("Thank you! Your message has been sent.");
    console.log("Form submitted:", form);

    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", message: "", car: "", });
      setSuccess("");
    }, 3000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative h-[350px] w-full rounded-9xl">
        <img
          src="https://t4.ftcdn.net/jpg/05/24/03/99/360_F_524039911_SJfffOLKTk1HZvTPyF9vv1FN6oCipyVi.jpg"
          className="w-full object-cover h-full"
          alt="Hero Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
        <div className="absolute inset-0 items-center justify-center mt-5 flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
            Contact Us
          </h1>
          <p className="text-xl w-full px-4 sm:w-1/3 text-center md:text-2xl font-medium mt-2 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] text-white">
            Make world-class mobility accessible to everyone.
          </p>
        </div>
      </div>

      {/* CAROUSEL + FORM SECTION */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-slate-100 flex items-center justify-center p-4 md:p-6 lg:p-8">
        <div className="w-full max-w-8xl bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] grid grid-cols-1 lg:grid-cols-2">

          {/* FORM SECTION */}
          <div className="relative p-6 md:p-10 lg:p-14 flex flex-col justify-center order-1 lg:order-2 bg-gradient-to-br from-white to-gray-50">
            
            {/* Animated Background Circles */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulseSlow"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulseSlower"></div>

            <div className="relative z-10">
              <div className="mb-8 md:mb-10">
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent mb-4">
                  Contact Us
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  We appreciate your interest in <span className="font-semibold text-blue-900">WELLWISHER CARS.</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2.5 transition-colors group-focus-within:text-blue-600">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name..."
                      className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all duration-300 text-gray-800 placeholder:text-gray-400"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2.5 transition-colors group-focus-within:text-blue-600">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email..."
                      className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all duration-300 text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2.5 transition-colors group-focus-within:text-blue-600">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number..."
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all duration-300 text-gray-800 placeholder:text-gray-400"
                  />
                </div>

                <div className="group">
                  <label className="block  text-xs font-bold text-gray-700 uppercase tracking-widest mb-2.5 transition-colors group-focus-within:text-blue-600">
                    Select Car for Test Drive
                  </label>
                  <select
                    name="car"
                    value={form.car}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all duration-300 text-gray-400"
                  >
                    <option value="">Choose a car...</option>
                    <option value="Tiago">Tata Tiago</option>
                    <option value="Tigor">Tata Tigor</option>
                    <option value="Altroz">Tata Altroz</option>
                    <option value="Punch">Tata Punch</option>
                    <option value="Nexon">Tata Nexon</option>
                    <option value="Harrier">Tata Harrier</option>
                    <option value="Safari">Tata Safari</option>
                    <option value="Sierra">Tata Sierra</option>
                    <option value="Curvv">Tata Curvv</option>
                  </select>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2.5 transition-colors group-focus-within:text-blue-600">
                    Message <span className="text-gray-400 normal-case">(Optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Enter your message..."
                    rows="4"
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all duration-300 resize-none text-gray-800 placeholder:text-gray-400"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group relative w-full py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-bold rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 uppercase tracking-widest text-sm"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>

                {success && (
                  <div
                    className={`mt-5 text-center font-semibold p-5 rounded-2xl animate-fadeIn ${
                      success.includes("Thank you")
                        ? "text-emerald-700 bg-emerald-50 border-2 border-emerald-300 shadow-lg"
                        : "text-red-700 bg-red-50 border-2 border-red-300 shadow-lg"
                    }`}
                  >
                    {success}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* CAROUSEL SECTION */}
          <div className="relative overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[700px] order-2 lg:order-1">
            
            {/* Dynamic Gradient Backgrounds */}
            {carouselData.map((item, i) => (
              <div
                key={`bg-${i}`}
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-opacity duration-1000 ${
                  i === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Luxury Overlay Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            {/* Spotlight Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent blur-2xl"></div>

            {/* Car Images */}
            <div className="relative w-full h-full flex items-center justify-center z-10 px-6 md:px-10">
              {carouselData.map((item, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                    i === currentSlide 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto max-h-[80%] object-contain drop-shadow-[0_35px_70px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Title Section */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 right-8 z-20">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-all duration-700">
                  {carouselData[currentSlide].title}
                </h3>
                <p className="text-sm md:text-lg text-white/90 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] max-w-md">
                  {carouselData[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {carouselData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`group relative transition-all duration-500 ${
                    i === currentSlide ? "w-12" : "w-3"
                  }`}
                >
                  <div
                    className={`h-3 rounded-full backdrop-blur-sm border transition-all duration-500 ${
                      i === currentSlide
                        ? "bg-white border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                        : "bg-white/20 border-white/30 hover:bg-white/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
          </div>
        </div>
      </div>

      {/* LOCATIONS MAP SECTION */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent mb-4">
              Visit Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the nearest <span className="font-semibold text-blue-900">WELLWISHER CARS</span> showroom or service centre
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
    <div className="w-full h-64">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50952.50559007355!2d73.002401!3d19.1757927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf2c81669df9%3A0x5cae5dca90626a08!2sTata%20Motors%20Cars%20Showroom%20-%20Well%20Wisher%20Cars%2C%20Airoli!5e1!3m2!1sen!2sin!4v1765105721552!5m2!1sen!2sin"
        className="w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="p-5 space-y-3">
      <h3 className="text-lg font-bold">Tata Motors Cars Showroom - Well Wisher Cars, Airoli</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Plot No KX14, Krishna Business Park, Railway Station, Airoli Rd,
        opposite Dighe, Ramu Limaje Nagar, Dighe,
        Navi Mumbai, Maharashtra 400708
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
    <div className="w-full h-64">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.928884894783!2d73.02235759999999!3d19.103371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c12496e1c6c3%3A0xedd672c6ddf3745d!2sTata%20Motors%20Cars%20Service%20Centre%20-%20Wellwisher%20Cars%20Private%20Limited%2C%20Mahape!5e1!3m2!1sen!2sin!4v1765105917785!5m2!1sen!2sin"
        className="w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="p-5 space-y-3">
      <h3 className="text-lg font-bold">Tata Motors Cars Service Centre - Wellwisher Cars Private Limited, Mahape</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Gen 71/2, TTC Industrial Area, MIDC Industrial Area, Mahape,
        Mumbai, Navi Mumbai, Maharashtra 400710
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
    <div className="w-full h-64">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1594.2218090430365!2d73.1298228!3d18.9723613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9a33c427ef7%3A0x1542a8fe69954418!2sTata%20Motors%20Cars%20Service%20Centre%20-%20Wellwisher%20Cars%20Private%20Limited%2C%20Panvel!5e1!3m2!1sen!2sin!4v1765105977235!5m2!1sen!2sin"
        className="w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="p-5 space-y-3">
      <h3 className="text-lg font-bold">Tata Motors Cars Service Centre - Wellwisher Cars Private Limited, Panvel</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Gat No 119/B/1 & 119/B/2 Rees, Kolkhe, Panvel Nera,
        Palaspe Phata, Panvel, Maharashtra 410221
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </>
  );
}
