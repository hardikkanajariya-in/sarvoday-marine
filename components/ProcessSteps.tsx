import React from "react";
import { WORKING_PROCESS } from "@/lib/data/site-data";

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-[#F4F6F9] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
            [ OPERATIONAL METHODOLOGY ]
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#081526] mt-2 tracking-tight">
            Standardized 4-Phase Field Workflow
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Every marine inspection and domestic logistics transit follows a documented, ISO-aligned protocol from preliminary notification through final certification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKING_PROCESS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                  <span className="font-mono text-xs font-bold text-[#1D70B8]">
                    PHASE {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    STAGE 0{idx + 1}/04
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#081526] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-400 font-mono">
                <span>VERIFIED PROCEDURE</span>
                <span className="text-slate-600">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
