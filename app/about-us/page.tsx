import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/data/site-data";
import StatsBanner from "@/components/StatsBanner";

export const metadata: Metadata = {
  title: "About Us | Company Profile, Leadership & Values",
  description:
    "Founded in November 2014, Sarvoday Marine Services is a trusted PAN-India inspection and logistics partner with 100+ trained professionals across Indian ports.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col">
      {/* Subpage Header Banner */}
      <section className="bg-[#071937] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Sarvoday Marine Seaport"
            fill
            priority
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071937] via-[#071937]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800 px-3 py-1 rounded-full">
              Heritage & Excellence Since 2014
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              About Sarvoday Marine Services
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              Committed to setting benchmark standards in maritime surveying, cargo inspections, and nationwide domestic logistics.
            </p>
            {/* Quick in-page anchor links */}
            <div className="flex flex-wrap gap-2 pt-6 text-xs font-semibold">
              <a href="#company-profile" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-slate-200 transition-colors">
                Company Profile
              </a>
              <a href="#leadership-team" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-slate-200 transition-colors">
                Leadership & Team
              </a>
              <a href="#vision-values" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-slate-200 transition-colors">
                Vision & Values
              </a>
              <a href="#our-expertise" className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-slate-200 transition-colors">
                Our Expertise
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsBanner />

      {/* 1. Company Profile Section */}
      <section id="company-profile" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full">
                1. Company Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2b5c] tracking-tight leading-snug">
                Founded in November 2014: A Decade of Marine Integrity
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Sarvoday Marine Services Pvt. Ltd.</strong> was incorporated with a decisive vision: to deliver mathematically rigorous, transparent, and legally sound marine surveys across Indian ports and industrial corridors.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Over the past decade, we have grown from our registered base in Rajula (Amreli, Gujarat) to operate a nationwide network spanning 16 strategic branch hubs across Gujarat, Maharashtra, West Bengal, and Tripura. Today, backed by a workforce of over 100 trained professionals, we conduct thousands of draft surveys, liquid cargo ullages, container inspections, and heavy project cargo lashings every year.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To serve evolving trade demands, we introduced <strong>Cabotage Logistics Solutions</strong> under the same trusted Sarvoday brand, offering our clients seamless domestic and regional multimodal freight coordination.
              </p>

              <div className="border-l-4 border-[#0284c7] pl-4 py-1 italic text-slate-700 text-sm bg-slate-50 rounded-r-lg">
                &ldquo;We mobilize skilled manpower PAN-India, ensuring efficient project execution while maintaining high standards of quality, safety, and operational excellence.&rdquo;
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
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
      <section id="leadership-team" className="py-20 bg-slate-50 border-t border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-sky-100/80 px-3 py-1 rounded-full">
              2. Leadership & Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2b5c] mt-3 tracking-tight">
              Guided by Industry Veterans, Executed by Specialists
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Our organization combines strategic executive leadership with rigorous field training to match every assignment with certified technical capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Leadership Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xs border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0e2b5c] text-white flex items-center justify-center font-black text-xl mb-6 shadow-md">
                  RM
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-600">Director</div>
                <h3 className="text-2xl font-bold text-[#0e2b5c] mt-1">Rajkumar Mall</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">{COMPANY_INFO.contacts.emails[1].email}</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Directing long-term corporate vision, strategic maritime alliances, and nationwide port operations. Bringing deep industry acumen in marine casualty assessment and complex logistics corridors.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-4 text-xs font-semibold text-slate-700">
                <a href="tel:+919723599247" className="text-[#0284c7] hover:underline flex items-center gap-1">
                  📞 +91 97235 99247
                </a>
              </div>
            </div>

            {/* Leadership Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xs border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0284c7] text-white flex items-center justify-center font-black text-xl mb-6 shadow-md">
                  HG
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-600">General Manager</div>
                <h3 className="text-2xl font-bold text-[#0e2b5c] mt-1">Harshit Gajjar</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">{COMPANY_INFO.contacts.emails[0].email}</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Leading daily operational execution, field surveyor deployment, technical quality auditing, and client relationship management across all Indian port terminals and CFS facilities.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-4 text-xs font-semibold text-slate-700">
                <a href="tel:+917043230841" className="text-[#0284c7] hover:underline flex items-center gap-1">
                  📞 +91 70432 30841
                </a>
              </div>
            </div>
          </div>

          {/* Dedicated Teams Structure */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80">
            <h3 className="text-xl font-bold text-[#0e2b5c] mb-3">
              Dedicated Teams: 100+ Trained Field Professionals
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Employee skills are systematically evaluated and matched to specific operational responsibilities. Regular technical training, safety grooming sessions, and ISO/SOLAS refresher programs keep our teams sharp, adaptable, and compliant with the latest maritime regulations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-[#0e2b5c] text-sm mb-1">Master Mariners & Navigators</div>
                <p className="text-xs text-slate-500">Expertise in vessel displacement, trim calculations, and hatch ultrasonic testing.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-[#0e2b5c] text-sm mb-1">Liquid Cargo Surveyors</div>
                <p className="text-xs text-slate-500">Certified gauging of crude, chemicals, and edible oils with API MPMS compliance.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="font-bold text-[#0e2b5c] text-sm mb-1">Container & Rail Inspectors</div>
                <p className="text-xs text-slate-500">IICL-trained container inspectors, reefer PTI specialists, and rail rake lashing officers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Values Section */}
      <section id="vision-values" className="py-20 bg-white border-t border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full">
              3. Vision & Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2b5c] mt-3 tracking-tight">
              Principles That Anchor Our Organization
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Guided by an unwavering commitment to transparent marine inspections and reliable cargo logistics.
            </p>
          </div>

          {/* Vision Statement Banner */}
          <div className="bg-gradient-to-r from-[#071937] to-[#0e2b5c] text-white rounded-2xl p-8 sm:p-10 mb-12 shadow-lg">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Our Corporate Vision</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 leading-relaxed text-slate-100">
                &ldquo;{COMPANY_INFO.vision}&rdquo;
              </h3>
            </div>
          </div>

          {/* Core Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0284c7] text-white flex items-center justify-center font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-[#0e2b5c] mb-2">{val.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Expertise Section */}
      <section id="our-expertise" className="py-20 bg-slate-50 border-t border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-sky-100/80 px-3 py-1 rounded-full">
              4. Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2b5c] mt-3 tracking-tight">
              PAN-India Technical Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Combining technical rigor with extensive geographic reach across all maritime corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
              <div className="text-3xl mb-3">⚓</div>
              <h3 className="text-lg font-bold text-[#0e2b5c] mb-2">Marine & Bulk Cargo Surveying</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Expert draft surveys, barge sounding calibrations, ultrasonic hatch weather-tightness verification, and P&I condition surveys across Indian anchorages and jetties.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-lg font-bold text-[#0e2b5c] mb-2">Liquid Petroleum & Chemical Survey</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Calibrated ullage gauging, density verification, shore-vs-ship variance reconciliation, and wall-wash cleanliness tests compliant with global petrochemical standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
              <div className="text-3xl mb-3">🚢</div>
              <h3 className="text-lg font-bold text-[#0e2b5c] mb-2">Cabotage & Domestic Freight Transit</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connecting Indian ports and inland industrial centers through seamless coastal vessel charters, rail freight rakes, and container trucking under the single Sarvoday brand.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact-us#enquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm rounded-xl shadow-lg transition-colors"
            >
              <span>Connect with Our Technical Team</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
