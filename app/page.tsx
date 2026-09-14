import React from "react";
import Link from "next/link";
import Image from "next/image";
import StatsBanner from "@/components/StatsBanner";
import ProcessSteps from "@/components/ProcessSteps";
import { COMPANY_INFO, SERVICES, BRANCH_OFFICES } from "@/lib/data/site-data";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#071937] text-white overflow-hidden min-h-[600px] lg:min-h-[680px] flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Sarvoday Marine Seaport Operations"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071937] via-[#071937]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071937] via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span>Trusted Maritime Surveying & Logistics Partner Since 2014</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              Precision Marine Inspections & End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200">Cabotage Logistics</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal">
              Mobilizing 100+ certified marine surveyors, master mariners, and logistics coordinators PAN-India. Delivering rigorous vessel draft surveys, liquid cargo ullage, container audits, and seamless domestic freight transit.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact-us#enquiry"
                className="px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-center flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request Inspection / Quote</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-base font-bold rounded-xl border border-white/20 backdrop-blur-xs transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>Explore All Services</span>
              </Link>
            </div>

            {/* Quick trust tags */}
            <div className="mt-12 pt-8 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>PAN-India Mobilization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>Legally Admissible Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>24/7 Field Availability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Counter Banner */}
      <StatsBanner />

      {/* Company Introduction / Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full">
                  About Sarvoday Marine
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2b5c] tracking-tight leading-snug">
                Decade-Long Heritage in Shipping, Port Operations & Cargo Inspection
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded in November 2014, <strong>Sarvoday Marine Services Pvt. Ltd.</strong> has established an unblemished reputation across Indian maritime gateways. Backed by a team of over 100 trained professionals, we mobilize skilled manpower PAN-India to ensure efficient project execution while maintaining the highest benchmarks of quality, safety, and operational excellence.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Under the same trusted brand, our newly expanded <strong>Cabotage Logistics Solutions</strong> coordinates domestic and regional cargo transit—uniting coastal shipping, container rakes, and express trucking for end-to-end supply chain transparency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xl font-bold text-[#0e2b5c] mb-1">Experienced Leadership</div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Board of directors with deep maritime and logistics expertise driving operational strategy.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xl font-bold text-[#0e2b5c] mb-1">Dedicated Teams</div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Continuous technical grooming, safety audits, and strict compliance with international maritime codes.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0284c7] hover:text-[#0e2b5c] transition-colors"
                >
                  <span>Learn more about our heritage & values</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/about-operations.jpg"
                  alt="Sarvoday Marine Technical Surveyors"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-6 bg-[#0e2b5c] text-white p-6 rounded-2xl shadow-xl max-w-xs border border-sky-400/20">
                <div className="text-3xl font-black text-sky-400">100+</div>
                <div className="text-xs font-bold uppercase tracking-wider mt-1 text-slate-200">
                  Skilled Surveyors & Engineers
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Mobilized PAN-India at ports, ICDs, CFS yards, and industrial sidings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-sky-100/80 px-3 py-1 rounded-full">
                Comprehensive Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2b5c] mt-3 tracking-tight">
                Our Core Inspection & Logistics Services
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Delivering mathematically certified surveys, loss assessments, and seamless domestic cargo movement under one unified brand.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0e2b5c] hover:text-[#0284c7] shrink-0"
            >
              <span>View Full Catalog</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group hover:-translate-y-1"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-300 bg-sky-950/80 px-2.5 py-0.5 rounded-md backdrop-blur-xs">
                      {srv.id === "cabotage-logistics" ? "Logistics Division" : "Marine Inspection"}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-[#0e2b5c] group-hover:text-[#0284c7] transition-colors mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                    {srv.shortDescription}
                  </p>

                  <div className="space-y-1.5 mb-6 flex-grow">
                    {srv.subServices.slice(0, 3).map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="text-sky-500 font-bold">•</span>
                        <span className="truncate">{sub.title}</span>
                      </div>
                    ))}
                    {srv.subServices.length > 3 && (
                      <div className="text-xs text-sky-600 font-medium pl-3">
                        + {srv.subServices.length - 3} more specialized capabilities
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="text-xs sm:text-sm font-bold text-[#0e2b5c] group-hover:text-[#0284c7] flex items-center gap-1.5"
                    >
                      <span>Explore Details</span>
                      <span>→</span>
                    </Link>
                    <Link
                      href={`/contact-us?service=${encodeURIComponent(srv.title)}#enquiry`}
                      className="text-xs font-bold text-[#ea580c] hover:underline"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Working Process Section */}
      <ProcessSteps />

      {/* PAN-India Network & Locations Showcase */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#071937] to-[#0e2b5c] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800 px-3 py-1 rounded-full">
                  Strategic Network
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Head Office, Branch Network & PAN-India Reach
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Headquartered at Rajula (Amreli, Gujarat) with 16 branch hubs located along India’s prime maritime belts. Our reach extends far beyond our physical offices: we mobilize certified surveyors to any port, terminal, or siding across the country.
                </p>

                {/* State badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {BRANCH_OFFICES.map((branch, bIdx) => (
                    <div key={bIdx} className="bg-white/10 rounded-xl p-3 border border-white/10 backdrop-blur-xs">
                      <div className="text-xs font-semibold text-sky-300">{branch.state}</div>
                      <div className="text-lg font-black text-white">{branch.cities.length} {branch.cities.length === 1 ? "Hub" : "Hubs"}</div>
                      <div className="text-[10px] text-slate-300 truncate mt-0.5">
                        {branch.cities.slice(0, 2).join(", ")}...
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm rounded-xl shadow transition-colors cursor-pointer"
                  >
                    <span>View All Branch Locations & Coordinates</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-xs space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span>Head Office Rajula</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {COMPANY_INFO.contacts.headOffice.address}
                </p>
                <div className="space-y-2 pt-2 text-xs border-t border-white/10">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Operations Director:</span>
                    <span className="font-semibold text-white">Rajkumar Mall</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>General Manager:</span>
                    <span className="font-semibold text-white">Harshit Gajjar</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>24/7 Hotline:</span>
                    <span className="font-semibold text-sky-400">{COMPANY_INFO.contacts.phones[0].display}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-[#ea580c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Schedule an Inspection or Plan Cargo Movement?
            </h2>
            <p className="text-sm text-orange-100 mt-2">
              Our duty officers and surveyors are available 24/7 for prompt vessel attendance and transport quotes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/contact-us#enquiry"
              className="px-8 py-3.5 bg-white text-[#0e2b5c] font-bold text-sm rounded-xl shadow hover:bg-slate-100 transition-colors"
            >
              Get Instant Quotation
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp.number.replace("+", "")}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsapp.defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#071937] text-white font-bold text-sm rounded-xl hover:bg-slate-900 transition-colors flex items-center gap-2"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
