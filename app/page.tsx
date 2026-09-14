import React from "react";
import Link from "next/link";
import Image from "next/image";
import StatsBanner from "@/components/StatsBanner";
import ProcessSteps from "@/components/ProcessSteps";
import { COMPANY_INFO, SERVICES, BRANCH_OFFICES } from "@/lib/data/site-data";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#FAF9F6]">
      {/* Hero Section */}
      <section className="relative bg-[#081526] text-white overflow-hidden min-h-[560px] lg:min-h-[620px] flex items-center border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Commercial Cargo Vessel and Seaport Operations"
            fill
            priority
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081526] via-[#081526]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="font-mono text-xs text-slate-300 uppercase tracking-wider border border-slate-700 bg-slate-900/80 px-3 py-1 rounded">
                TECHNICAL MARITIME SUPERINTENDENCE
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Precision Marine Inspections & Cabotage Logistics
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Providing impartial vessel condition surveys, liquid cargo custody audits, container inspection, and domestic multimodal freight coordination across Indian commercial ports and inland terminals.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact-us#enquiry"
                className="px-8 py-3.5 bg-[#C25E00] hover:bg-[#A34E00] text-white text-xs font-bold uppercase tracking-wider rounded shadow-xs transition-colors text-center"
              >
                Request Survey Attendance
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded border border-white/20 transition-colors text-center"
              >
                Explore Services Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Counter Banner */}
      <StatsBanner />

      {/* Company Philosophy & Operational Rigor */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                INDEPENDENT TECHNICAL AUTHORITY
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#081526] tracking-tight leading-snug">
                Rigorous Inspection Built on Marine Precedent & Objective Evidence
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In high-stakes maritime commerce, accurate technical documentation is the difference between seamless voyage reconciliation and prolonged commercial disputes. Sarvoday Marine operates as an impartial technical surveyor, producing legally admissible reports recognized by shipowners, P&I clubs, and marine underwriters.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our scope encompasses calibrated displacement calculations, liquid petroleum custody transfers, heavy-lift sea-fastening calculations, and continuous hatch supervision. Additionally, our <strong>Cabotage Logistics Solutions</strong> coordinates coastal vessel movements, rail container rakes, and regional freight corridors under one unified operational standard.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded border border-slate-200 bg-[#FAF9F6]">
                  <div className="font-bold text-[#081526] text-sm mb-1">Technical Governance</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Surveys directed by master mariners and certified marine engineers adhering strictly to IMO, SOLAS, and classification guidelines.
                  </p>
                </div>
                <div className="p-5 rounded border border-slate-200 bg-[#FAF9F6]">
                  <div className="font-bold text-[#081526] text-sm mb-1">Rapid Berth Mobilization</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stationed field teams enable immediate boarding at ports, anchorages, and private jetties upon vessel arrival.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1D70B8] hover:text-[#081526] transition-colors"
                >
                  <span>Company Profile & Leadership Credentials</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[440px] w-full rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                <Image
                  src="/images/about-operations.jpg"
                  alt="Sarvoday Marine Technical Personnel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Divisions Section */}
      <section className="py-20 bg-[#F4F6F9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                CORE CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#081526] mt-2 tracking-tight">
                Our Primary Service Divisions
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Comprehensive technical survey disciplines tailored to bulk, liquid, containerized, and heavy project cargoes.
              </p>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold uppercase tracking-wider text-[#081526] hover:text-[#1D70B8] shrink-0"
            >
              Full Service Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv, idx) => (
              <div
                key={srv.id}
                className="bg-white rounded-lg overflow-hidden border border-slate-200 flex flex-col justify-between hover:border-slate-400 transition-colors"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
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

                  <div className="p-6">
                    <h3 className="text-base font-bold text-[#081526] mb-2 leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                      {srv.shortDescription}
                    </p>

                    <div className="space-y-1 mb-4 border-t border-slate-100 pt-3">
                      {srv.subServices.slice(0, 3).map((sub, sIdx) => (
                        <div key={sIdx} className="text-xs text-slate-500 flex items-center gap-1.5">
                          <span className="text-slate-400 text-[10px]">▪</span>
                          <span className="truncate">{sub.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-3 bg-[#FAF9F6] border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="font-bold text-[#081526] hover:text-[#1D70B8] transition-colors"
                  >
                    Technical Scope →
                  </Link>
                  <Link
                    href={`/contact-us?service=${encodeURIComponent(srv.title)}#enquiry`}
                    className="font-mono text-[11px] font-bold text-[#C25E00] hover:underline uppercase"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Phase Operational Workflow */}
      <ProcessSteps />

      {/* Strategic Port Distribution */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#081526] rounded-lg p-8 sm:p-12 text-white border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  GEOGRAPHIC FOOTPRINT
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Strategic Presence Across India&apos;s Prime Maritime Corridors
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our station network ensures prompt surveyor mobilization at key deep-water ports, private maritime terminals, container freight stations, and industrial railway sidings across Western, Eastern, and North-Eastern India.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {BRANCH_OFFICES.map((branch, bIdx) => (
                    <div key={bIdx} className="bg-slate-900 p-3 rounded border border-slate-800">
                      <div className="font-mono text-[11px] text-slate-400">{branch.state}</div>
                      <div className="text-base font-extrabold text-white mt-0.5">{branch.cities.length} Stations</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact-us"
                    className="inline-block px-6 py-2.5 bg-[#C25E00] hover:bg-[#A34E00] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                  >
                    View All Office Locations & Coordinates →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900/90 rounded p-6 border border-slate-800 space-y-3">
                <div className="font-mono text-[11px] text-slate-400 uppercase">
                  OPERATIONS & DISPATCH DESK
                </div>
                <div className="text-sm font-bold text-white">
                  Head Office — Rajula
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {COMPANY_INFO.contacts.headOffice.address}
                </p>
                <div className="pt-2 border-t border-slate-800 text-xs space-y-1 text-slate-400">
                  <div>Director: <span className="text-slate-200 font-semibold">Rajkumar Mall</span></div>
                  <div>GM Operations: <span className="text-slate-200 font-semibold">Harshit Gajjar</span></div>
                  <div>Direct Phone: <span className="text-white font-mono">{COMPANY_INFO.contacts.phones[0].display}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Booking Action Bar */}
      <section className="py-14 bg-[#050E1A] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
              FIELD ATTENDANCE & BOOKINGS
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mt-1">
              Need Immediate Vessel or Cargo Superintendence?
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Contact our duty officers for surveyor scheduling and transparent service estimates.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/contact-us#enquiry"
              className="px-6 py-3 bg-[#C25E00] hover:bg-[#A34E00] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors inline-block"
            >
              Submit Requirements Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
