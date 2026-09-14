import React from "react";
import { COMPANY_INFO } from "@/lib/data/site-data";

export default function StatsBanner() {
  return (
    <section className="bg-gradient-to-r from-[#071937] via-[#0e2b5c] to-[#071937] text-white py-12 px-4 relative overflow-hidden border-y border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700/60">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center px-4 ${idx > 0 ? "pt-6 md:pt-0" : ""}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-white tracking-tight mb-1.5">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-white tracking-wide">
                {stat.label}
              </div>
              <div className="text-xs text-slate-300 mt-1 max-w-[200px] mx-auto">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
