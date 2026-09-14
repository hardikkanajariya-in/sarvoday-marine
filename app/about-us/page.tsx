import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/data/site-data";

export const metadata: Metadata = {
  title: "About Us | Company Profile, Leadership & Values",
  description:
    "Founded in November 2014, Sarvoday Marine Services is an independent maritime inspection and logistics provider with 100+ trained professionals across Indian ports.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col bg-[#FAF9F6]">
      {/* Subpage Header Banner */}
      <section className="bg-[#081526] text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span>/</span>
              <span className="text-[#1D70B8]">ABOUT-US</span>
            </div>

            <div className="inline-block mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 border border-slate-700 px-2.5 py-1 rounded">
                CORPORATE PROFILE & GOVERNANCE
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              About Sarvoday Marine Services
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Founded in November 2014, our firm has grown into a benchmark provider of impartial maritime technical inspections, independent loss evaluations, and domestic cabotage logistics across Indian trade routes.
            </p>

            {/* In-page navigation anchors */}
            <div className="flex flex-wrap gap-2 pt-6 font-mono text-[11px]">
              <a href="#company-profile" className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded transition-colors">
                01. Company Profile
              </a>
              <a href="#leadership-team" className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded transition-colors">
                02. Leadership & Team
              </a>
              <a href="#vision-values" className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded transition-colors">
                03. Vision & Values
              </a>
              <a href="#our-expertise" className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded transition-colors">
                04. Our Expertise
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Company Profile Section */}
      <section id="company-profile" className="py-16 sm:py-20 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                01. ORIGIN & CORPORATE PROFILE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#081526] tracking-tight leading-snug">
                Over a Decade of Independent Maritime Superintendence
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Incorporated in late 2014, <strong>Sarvoday Marine Services Pvt. Ltd.</strong> was established to meet an urgent industry need for transparent, technically rigorous marine survey reporting. Starting with vessel and cargo inspections along the Gujarat coastline, we progressively expanded our surveyor mobilization across all major Indian commercial maritime gateways.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                As domestic shipping and inland container logistics evolved, we introduced <strong>Cabotage Logistics Solutions</strong> under the same trusted Sarvoday brand. This division coordinates coastal vessel charters, railway container rakes, and regional road freight—offering cargo owners a single accountable partner from port of arrival to inland destination.
              </p>

              <div className="border-l-2 border-[#081526] pl-4 py-2 text-slate-700 text-xs sm:text-sm bg-[#FAF9F6] font-medium leading-relaxed">
                &ldquo;Our primary obligation is to deliver factual, objective, and legally sound findings that protect our clients against unwarranted cargo loss, commercial discrepancy, and vessel detention.&rdquo;
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[360px] sm:h-[420px] w-full rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
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

      {/* 2. Leadership & Team Section */}
      <section id="leadership-team" className="py-16 sm:py-20 bg-[#F4F6F9] border-t border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
              02. LEADERSHIP & TECHNICAL TEAMS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#081526] mt-2 tracking-tight">
              Seasoned Maritime Governance & Certified Survey Specialists
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our executive board drives strategy and quality auditing, while dedicated operational units execute inspections on the ground with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Leadership Card 1 */}
            <div className="bg-white rounded-lg p-8 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold uppercase text-[#1D70B8] mb-1">
                  BOARD OF DIRECTORS
                </div>
                <h3 className="text-xl font-bold text-[#081526]">Rajkumar Mall</h3>
                <div className="font-mono text-xs text-slate-500 mt-0.5 mb-4">Director</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Steers corporate vision, legal compliance, and strategic alliances across national port trusts and shipping associations. Specializes in marine casualty investigations, shipboard audits, and multimodal freight routing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">{COMPANY_INFO.contacts.emails[1].email}</span>
                <span className="text-slate-700 font-bold">{COMPANY_INFO.contacts.phones[0].display}</span>
              </div>
            </div>

            {/* Leadership Card 2 */}
            <div className="bg-white rounded-lg p-8 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold uppercase text-[#1D70B8] mb-1">
                  EXECUTIVE OPERATIONS
                </div>
                <h3 className="text-xl font-bold text-[#081526]">Harshit Gajjar</h3>
                <div className="font-mono text-xs text-slate-500 mt-0.5 mb-4">General Manager</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Directs daily field deployments, technical report verification, client liaison, and field safety protocols across all port berths, container freight stations, and industrial terminals.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">{COMPANY_INFO.contacts.emails[0].email}</span>
                <span className="text-slate-700 font-bold">{COMPANY_INFO.contacts.phones[1].display}</span>
              </div>
            </div>
          </div>

          {/* Dedicated Teams Structure */}
          <div className="bg-white rounded-lg p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-[#081526] mb-2">
              Field Workforce: Over 100 Certified Technicians
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Surveyor competence is continuously matched to specific cargo categories. Mandatory safety orientations, calibrated tool handling, and regular ISO/SOLAS compliance updates maintain our field readiness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans">
              <div className="p-4 rounded border border-slate-200 bg-[#FAF9F6]">
                <div className="font-bold text-[#081526] text-xs uppercase mb-1">Master Mariners & Navigators</div>
                <p className="text-xs text-slate-600">Displacement surveys, vessel trim calculations, stability assessments, and ultrasonic hatch cover testing.</p>
              </div>
              <div className="p-4 rounded border border-slate-200 bg-[#FAF9F6]">
                <div className="font-bold text-[#081526] text-xs uppercase mb-1">Liquid Cargo Specialists</div>
                <p className="text-xs text-slate-600">Calibrated ullage gauging, fuel density testing, and chemical wall-wash analysis per ASTM and API codes.</p>
              </div>
              <div className="p-4 rounded border border-slate-200 bg-[#FAF9F6]">
                <div className="font-bold text-[#081526] text-xs uppercase mb-1">Container & Rail Inspectors</div>
                <p className="text-xs text-slate-600">IICL-aligned container surveys, reefer PTI testing, stuffing tallies, and railway flat rake lashing audits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Values Section */}
      <section id="vision-values" className="py-16 sm:py-20 bg-white border-t border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
              03. GUIDING VALUES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#081526] mt-2 tracking-tight">
              Foundational Principles
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Adhering to professional impartiality, personnel safety, and sustainable operational growth.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="bg-[#081526] text-white rounded-lg p-8 mb-10 border border-slate-800">
            <span className="font-mono text-[10px] uppercase text-slate-400">CORPORATE VISION STATEMENT</span>
            <div className="text-lg sm:text-xl font-medium mt-2 text-slate-100 leading-relaxed font-serif italic">
              &ldquo;{COMPANY_INFO.vision}&rdquo;
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F6] rounded-lg p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs text-[#1D70B8] font-bold mb-2">
                    0{idx + 1}. {val.title.toUpperCase()}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Expertise Section */}
      <section id="our-expertise" className="py-16 sm:py-20 bg-[#F4F6F9] border-t border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
              04. TECHNICAL DISCIPLINES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#081526] mt-2 tracking-tight">
              Specialized Industry Capabilities
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Combining technical rigor with extensive geographic reach across all maritime corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="w-10 h-10 rounded bg-[#EBF3FA] text-[#1D70B8] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#081526] mb-2">Marine & Bulk Surveying</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Draft surveys, barge calibration soundings, ultrasonic hatch weather-tightness verification, and P&I condition surveys across all Indian anchorages.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="w-10 h-10 rounded bg-[#EBF3FA] text-[#1D70B8] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.942A6.75 6.75 0 0112 18a6.75 6.75 0 01-6.23-1.758L5 14.5m14.8.8l.2 1.2a2.25 2.25 0 01-2.25 2.5H6.25a2.25 2.25 0 01-2.25-2.5l.2-1.2" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#081526] mb-2">Liquid Petroleum & Chemicals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Calibrated ullage surveys, temperature corrections, shore-vs-vessel reconciliation, and chemical tank wall-wash inspections per ASTM and API codes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="w-10 h-10 rounded bg-[#EBF3FA] text-[#1D70B8] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V5.25A2.25 2.25 0 0012 3H3.75A2.25 2.25 0 001.5 5.25v9" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#081526] mb-2">Domestic Cabotage Freight</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless domestic cargo movement uniting coastal feeder vessels, container flat rakes, and regional road transport under the single Sarvoday brand.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact-us#enquiry"
              className="inline-block px-8 py-3.5 bg-[#C25E00] hover:bg-[#A34E00] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
            >
              Contact Operations Desk →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
