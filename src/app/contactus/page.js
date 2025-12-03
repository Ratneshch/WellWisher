"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

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

    // Reset
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl border border-gray-100 rounded-2xl p-8 w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h1>

        {/* Name */}
        <div className="mb-5">
          <label className="block text-gray-600 mb-1 font-medium">Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-600 mb-1 font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label className="block text-gray-600 mb-1 font-medium">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="9876543210"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        {/* Message (optional) */}
        <div className="mb-5">
          <label className="block text-gray-600 mb-1 font-medium">
            Message (Optional)
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="4"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-md"
        >
          Submit
        </button>

        {/* Success Message */}
        {success && (
          <p className="mt-4 text-center text-green-600 font-medium">
            {success}
          </p>
        )}
      </form>
    </div>
  );
}
