import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SERVICES, COMPANY_INFO } from "@/lib/data/site-data";
import StatsBanner from "@/components/StatsBanner";

export const metadata: Metadata = {
  title: "Services Overview | Marine Inspections & Cabotage Logistics",
  description:
    "Explore Sarvoday Marine's full suite of services: Marine Inspections, Liquid Cargo, General Cargo, Project & ODC, Container Surveys, and Cabotage Logistics Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Services Header Banner */}
      <section className="bg-[#071937] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Sarvoday Marine Services"
            fill
            priority
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071937] via-[#071937]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800 px-3 py-1 rounded-full">
              Full Service Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              Inspection, Survey & Cabotage Logistics Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              Precision technical audits, certified maritime loss assessments, and seamless nationwide cargo transit backed by over 100 trained professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <StatsBanner />

      {/* Services Catalog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full">
              Our 6 Major Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2b5c] mt-3 tracking-tight">
              Specialized Solutions for Every Maritime Need
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Click into any offering below for in-depth sub-service capabilities, methodologies, and direct quotation requests.
            </p>
          </div>

          <div className="space-y-16">
            {SERVICES.map((srv, idx) => (
              <div
                key={srv.id}
                id={srv.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl border border-slate-200/80 transition-all duration-300 hover:shadow-xl ${
                  idx % 2 === 1 ? "bg-slate-50/70" : "bg-white"
                }`}
              >
                {/* Image column */}
                <div
                  className={`lg:col-span-5 relative h-[280px] sm:h-[350px] w-full rounded-2xl overflow-hidden shadow-md bg-slate-100 ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-300 bg-[#071937]/90 px-3 py-1 rounded-md backdrop-blur-xs border border-white/10">
                      Service 0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Details column */}
                <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0e2b5c]">
                    {srv.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {srv.fullDescription}
                  </p>

                  {/* Sub-services pills */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Sub-Service Capabilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.subServices.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-slate-100 text-xs text-slate-700"
                        >
                          <span className="text-sky-500 font-bold shrink-0">✓</span>
                          <div>
                            <span className="font-semibold text-slate-800">{sub.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="px-6 py-2.5 bg-[#0e2b5c] hover:bg-[#071937] text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
                    >
                      <span>Full Service Page</span>
                      <span>→</span>
                    </Link>
                    <Link
                      href={`/contact-us?service=${encodeURIComponent(srv.title)}#enquiry`}
                      className="px-6 py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-colors"
                    >
                      Request Service Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAN-India Assurance Strip */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-[#0e2b5c]">
            Need immediate deployment or custom logistics routing?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            Our certified surveyors and logistics personnel are on standby 24/7 across all major Indian maritime hubs and inland rail terminals.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.contacts.phones[0].raw}`}
              className="text-xs sm:text-sm font-bold text-[#0284c7] hover:underline"
            >
              Call Operations: {COMPANY_INFO.contacts.phones[0].display}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
