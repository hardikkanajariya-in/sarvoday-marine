import React from "react";
import { WORKING_PROCESS } from "@/lib/data/site-data";

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-sky-100/80 px-3 py-1 rounded-full">
            Methodology & Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2b5c] mt-3 tracking-tight">
            Our 4-Step Operational Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Designed for rapid field deployment, mathematical accuracy, and transparent reporting at every Indian port and inland freight terminal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {WORKING_PROCESS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 relative flex flex-col group hover:-translate-y-1"
            >
              {/* Step indicator badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl font-black text-[#0284c7]/20 group-hover:text-[#0284c7] transition-colors duration-300">
                  {step.step}
                </span>
                <span className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284c7] group-hover:bg-[#0e2b5c] group-hover:text-white transition-colors duration-300 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#0e2b5c] mb-2.5 leading-snug">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                {step.description}
              </p>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0284c7] group-hover:text-[#ea580c] transition-colors">
                <span>Standardized Protocol</span>
                <span className="ml-auto text-sm">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
