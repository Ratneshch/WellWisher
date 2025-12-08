"use client";
import React, { useState } from "react";

export default function NotFoundPage() {
  const [count, setCount] = useState(0); // example hook
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-xl text-gray-700">Page not found</p>
    </div>
  );
}