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
      <section className="relative bg-[#081526] text-white overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center border-b border-slate-800">
        {/* Background Image with Muted Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Commercial Cargo Vessel and Port Facility"
            fill
            priority
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081526] via-[#081526]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="font-mono text-xs text-slate-300 uppercase tracking-wider border border-slate-700 bg-slate-900/60 px-3 py-1 rounded">
                [ PAN-INDIA MOBILIZATION • EST. NOV 2014 ]
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Precision Marine Inspections & Cabotage Logistics
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Mobilizing 100+ certified marine surveyors, master mariners, and logistics coordinators across Indian maritime corridors. Providing legally sound vessel draft calculations, bulk cargo ullages, container audits, and seamless domestic freight.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact-us#enquiry"
                className="px-8 py-3.5 bg-[#C25E00] hover:bg-[#A34E00] text-white text-xs font-bold uppercase tracking-wider rounded shadow-xs transition-colors text-center"
              >
                Request Inspection / Quote
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded border border-white/20 transition-colors text-center"
              >
                Explore Services Catalog
              </Link>
            </div>

            {/* Architectural Trust Tags */}
            <div className="mt-12 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-slate-300">
              <div>
                <span className="text-slate-400">AUDIT:</span> Legally Admissible
              </div>
              <div>
                <span className="text-slate-400">STAFF:</span> 100+ Trained Surveyors
              </div>
              <div>
                <span className="text-slate-400">SCOPE:</span> 100% PAN-India Ports
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Counter Banner */}
      <StatsBanner />

      {/* Company Introduction / Heritage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                [ CORPORATE PROFILE ]
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#081526] tracking-tight leading-snug">
                A Decade of Maritime Inspection & Domestic Freight Leadership
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Founded in November 2014, <strong>Sarvoday Marine Services Pvt. Ltd.</strong> has established an uncompromised reputation across Indian ports and rail corridors. Backed by a team of over 100 trained professionals, we mobilize certified personnel to ensure precision project execution while upholding rigorous standards of quality, safety, and operational transparency.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the same trusted Sarvoday umbrella, our <strong>Cabotage Logistics Solutions</strong> coordinates domestic and regional cargo transit—linking coastal shipping, container rakes, and freight trucking for end-to-end supply chain visibility.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded border border-slate-200 bg-[#FAF9F6]">
                  <div className="font-bold text-[#081526] text-sm mb-1">Experienced Board</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Decades of collective master mariner and port terminal management experience driving strategic decision-making.
                  </p>
                </div>
                <div className="p-5 rounded border border-slate-200 bg-[#FAF9F6]">
                  <div className="font-bold text-[#081526] text-sm mb-1">Skilled Manpower</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Continuous technical grooming, safety audits, and strict compliance with international maritime codes.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1D70B8] hover:text-[#081526] transition-colors"
                >
                  <span>Read Full Company Profile & Leadership</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[440px] w-full rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                <Image
                  src="/images/about-operations.jpg"
                  alt="Sarvoday Marine Technical Surveyors"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-[#F4F6F9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                [ SERVICE DIVISIONS ]
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#081526] mt-2 tracking-tight">
                Our Core Technical Capabilities
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Mathematically verified vessel draft surveys, liquid ullages, container terminal audits, and domestic cargo movement under one unified brand.
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
                        DIV 0{idx + 1}
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

      {/* 4-Step Working Process */}
      <ProcessSteps />

      {/* PAN-India Branch Network Grid */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#081526] rounded-lg p-8 sm:p-12 text-white border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  [ STRATEGIC PRESENCE ]
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Head Office & 16 Branch Hubs Across India
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Headquartered at Rajula (Amreli, Gujarat) with strategically deployed field stations across Western, Eastern, and North-Eastern maritime corridors. Certified personnel mobilize to any private berth or inland siding across the nation.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {BRANCH_OFFICES.map((branch, bIdx) => (
                    <div key={bIdx} className="bg-slate-900 p-3 rounded border border-slate-800">
                      <div className="font-mono text-[11px] text-slate-400">{branch.state}</div>
                      <div className="text-base font-extrabold text-white mt-0.5">{branch.cities.length} Hubs</div>
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
                  REGISTERED HEADQUARTERS
                </div>
                <div className="text-sm font-bold text-white">
                  Rajula — Gujarat
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {COMPANY_INFO.contacts.headOffice.address}
                </p>
                <div className="pt-2 border-t border-slate-800 text-xs space-y-1 text-slate-400">
                  <div>Director: <span className="text-slate-200 font-semibold">Rajkumar Mall</span></div>
                  <div>GM Operations: <span className="text-slate-200 font-semibold">Harshit Gajjar</span></div>
                  <div>24/7 Desk: <span className="text-white font-mono">{COMPANY_INFO.contacts.phones[0].display}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Call to Action */}
      <section className="py-14 bg-[#050E1A] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
              DISPATCH & BOOKING HOTLINE
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mt-1">
              Ready to Schedule an Inspection or Domestic Transit?
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Our technical coordinators are available 24/7 for prompt vessel attendance and transport quotations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/contact-us#enquiry"
              className="px-6 py-3 bg-[#C25E00] hover:bg-[#A34E00] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
            >
              Get Instant Quotation
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp.number.replace("+", "")}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded border border-slate-700 transition-colors"
            >
              WhatsApp Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
