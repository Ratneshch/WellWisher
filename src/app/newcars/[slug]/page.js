// app/newcars/[slug]/page.js
"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Adjust this import if your JSON is located elsewhere.
// From app/newcars/[slug]/page.js -> up two levels to app, then into data:
// import cars from "../../data/tatacars.json";
import cars from "../../../data/tatacars.json";

export default function CarSpecsPage() {
  const pathname = usePathname();
  const [slug, setSlug] = useState("");
  const [specs, setSpecs] = useState(null);
  const [tried, setTried] = useState(false);

  useEffect(() => {
    const path = pathname || (typeof window !== "undefined" ? window.location.pathname : "");
    const parts = path.split("/").filter(Boolean);
    const last = parts.length ? parts[parts.length - 1] : "";
    setSlug(last);

    if (last) {
      const found = (cars || []).find((c) => c && String(c.slug) === String(last));
      setSpecs(found && found.specifications ? found.specifications : null);
    } else {
      setSpecs(null);
    }

    setTried(true);
  }, [pathname]);

  if (!tried) return null;

  if (!specs) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-gray-600">Car specifications not found for <strong>{slug || "(no slug provided)"}</strong>.</p>
        </div>
      </main>
    );
  }

  // Render only the specification fields present in the JSON (no extras)
  return (
    <main className="max-w-5xl mx-auto p-6">
      <div className="space-y-2">
        <SpecRow label="Mileage" value={specs.mileage || "N/A"} />
        <SpecRow label="Engine" value={specs.engine || "N/A"} />
        <SpecRow label="Power" value={specs.power || "N/A"} />
        <SpecRow label="Torque" value={specs.torque || "N/A"} />
        <SpecRow label="Safety" value={specs.safety || "N/A"} />
        <SpecRow label="Fuel Type" value={specs.fuelType || "N/A"} />
        <SpecRow label="Transmission" value={specs.transmission || "N/A"} />
        <SpecRow label="Seating Capacity" value={specs.seatingCapacity || "N/A"} />
        <SpecRow label="Boot Capacity" value={specs.bootCapacity || "N/A"} />
        <SpecRow label="Ground Clearance" value={specs.groundClearance || "N/A"} />
        <SpecRow label="Fuel Tank" value={specs.fuelTank || "N/A"} />
        <SpecRow label="Drivetrain" value={specs.drivetrain || "N/A"} />
        <SpecRow label="Suspension Front" value={specs.suspensionFront || "N/A"} />
        <SpecRow label="Suspension Rear" value={specs.suspensionRear || "N/A"} />
        <SpecRow label="Brakes Front" value={specs.brakesFront || "N/A"} />
        <SpecRow label="Brakes Rear" value={specs.brakesRear || "N/A"} />
        <SpecRow label="Tyre Size" value={specs.tyreSize || "N/A"} />

        {/* dimensions is nested in JSON — render subfields exactly as present */}
        {specs.dimensions && (
          <div className="pt-4">
            <div className="text-sm font-semibold mb-2">Dimensions</div>
            <div className="space-y-1">
              <SpecRow label="Length" value={specs.dimensions.length || "N/A"} />
              <SpecRow label="Width" value={specs.dimensions.width || "N/A"} />
              <SpecRow label="Height" value={specs.dimensions.height || "N/A"} />
              <SpecRow label="Wheelbase" value={specs.dimensions.wheelbase || "N/A"} />
            </div>
          </div>
        )}

        <SpecRow label="Specs Source" value={specs.specsSource || "N/A"} />
      </div>
    </main>
  );
}

/* simple presentational row used only for the JSON fields */
function SpecRow({ label, value }) {
  return (
    <div className="flex justify-between items-start border-b pb-2">
      <div className="text-sm text-gray-700">{label}</div>
      <div className="text-sm font-medium text-gray-900 text-right ml-4">{value}</div>
    </div>
  );
}
