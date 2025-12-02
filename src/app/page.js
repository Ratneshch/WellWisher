import InfoSection from "@/components/InfoSection";
import Image from "next/image";

export default function Home() {
  return (
  <main className="min-h-screen bg-slate-50 flex items-start justify-center py-16 px-6">
      <div className="w-full max-w-6xl">
        <InfoSection />
      </div>
    </main>
  );
}
