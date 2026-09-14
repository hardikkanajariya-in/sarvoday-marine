import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SERVICES, COMPANY_INFO } from "@/lib/data/site-data";
import StatsBanner from "@/components/StatsBanner";

export const metadata: Metadata = {
  title: "Services Portfolio | Marine Inspections & Cabotage Logistics",
  description:
    "Explore Sarvoday Marine's full suite of services: Marine Inspections, Liquid Cargo, General Cargo, Project & ODC, Container Surveys, and Cabotage Logistics Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-[#FAF9F6]">
      {/* Services Header Banner */}
      <section className="bg-[#081526] text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span>/</span>
              <span className="text-[#1D70B8]">SERVICES</span>
            </div>

            <div className="inline-block mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 border border-slate-700 px-2.5 py-1 rounded">
                [ SERVICE PORTFOLIO ]
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Inspection, Survey & Cabotage Logistics
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Certified technical audits, independent loss evaluations, and domestic cargo transit backed by over 100 trained professionals across Indian ports.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <StatsBanner />

      {/* Services Catalog */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
              [ SIX CORE DIVISIONS ]
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#081526] mt-2 tracking-tight">
              Comprehensive Maritime & Intermodal Solutions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Select any division below to view comprehensive sub-service specifications, methodologies, and direct attendance booking.
            </p>
          </div>

          <div className="space-y-12">
            {SERVICES.map((srv, idx) => (
              <div
                key={srv.id}
                id={srv.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-lg border border-slate-200 bg-[#FAF9F6] hover:border-slate-400 transition-colors"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-5 relative h-[260px] sm:h-[320px] w-full rounded overflow-hidden border border-slate-200 bg-slate-900 ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[10px] uppercase text-white bg-[#081526]/90 px-2 py-0.5 rounded">
                      DIVISION 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold text-[#081526]">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {srv.fullDescription}
                  </p>

                  {/* Sub-services pills */}
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-2">
                      SUB-SERVICE VERIFICATION SCOPES:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.subServices.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start gap-2 bg-white p-2.5 rounded border border-slate-200 text-xs text-slate-700"
                        >
                          <span className="text-slate-400 text-[10px] mt-0.5">▪</span>
                          <span className="font-medium text-slate-800">{sub.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="px-5 py-2.5 bg-[#081526] hover:bg-[#050E1A] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                    >
                      Technical Scope →
                    </Link>
                    <Link
                      href={`/contact-us?service=${encodeURIComponent(srv.title)}#enquiry`}
                      className="px-5 py-2.5 bg-[#C25E00] hover:bg-[#A34E00] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                    >
                      Request Quotation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
