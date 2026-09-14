import React from "react";
import { COMPANY_INFO } from "@/lib/data/site-data";

export default function StatsBanner() {
  return (
    <section className="bg-[#081526] text-white py-12 px-4 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center px-4 sm:px-6 ${idx > 0 ? "pt-6 md:pt-0" : ""}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 max-w-[220px] mx-auto font-sans leading-normal">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
