import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, SERVICES, BRANCH_OFFICES } from "@/lib/data/site-data";

export default function Footer() {
  return (
    <footer className="bg-[#071937] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="relative h-12 w-48 bg-white/95 rounded-lg p-1.5 shadow-sm">
              <Image
                src="/images/sarvoday-logo.svg"
                alt={COMPANY_INFO.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Founded in November 2014, {COMPANY_INFO.name} is a premier PAN-India maritime inspection, cargo survey, and cabotage logistics provider backed by over 100 trained industry specialists.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs text-sky-400 bg-sky-950/60 border border-sky-800/60 rounded-lg px-3 py-2">
                <svg className="w-4 h-4 text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Certified Marine Surveyors & Master Mariners</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide border-b border-slate-700/80 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-500 text-xs">▸</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-500 text-xs">▸</span> About Us & Leadership
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-500 text-xs">▸</span> Services Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-500 text-xs">▸</span> Office Locations & Directory
                </Link>
              </li>
              <li>
                <Link href="/contact-us#enquiry" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <span className="text-sky-500 text-xs">▸</span> Request a Quotation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide border-b border-slate-700/80 pb-2">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-sky-500 text-xs">▸</span> {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide border-b border-slate-700/80 pb-2">
              Head Office & Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase text-sky-400 tracking-wider">Registered Head Office</p>
                <p className="text-slate-300 mt-1 leading-relaxed text-xs">
                  {COMPANY_INFO.contacts.headOffice.address}
                </p>
              </div>

              <div className="pt-1">
                <p className="text-xs font-semibold uppercase text-sky-400 tracking-wider">Direct Contacts</p>
                <div className="mt-1 space-y-1 text-xs">
                  {COMPANY_INFO.contacts.phones.map((ph, idx) => (
                    <a
                      key={idx}
                      href={`tel:${ph.raw}`}
                      className="block hover:text-white text-slate-300 transition-colors"
                    >
                      {ph.display} <span className="text-slate-400">({ph.person.split("(")[1]?.replace(")", "") || "Operations"})</span>
                    </a>
                  ))}
                  {COMPANY_INFO.contacts.emails.slice(0, 2).map((em, idx) => (
                    <a
                      key={idx}
                      href={`mailto:${em.email}`}
                      className="block hover:text-white text-slate-300 transition-colors"
                    >
                      {em.email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs font-semibold uppercase text-sky-400 tracking-wider">Key Branch Clusters</p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Gujarat (12 Ports/Hubs), Maharashtra (JNPT/Mumbai, Pune), West Bengal (Kharagpur, Haldia), Tripura (Agartala).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PAN-India Notice Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 mb-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
            <span className="text-slate-300 font-medium">
              National Delivery Footprint:
            </span>
            <span>Services delivered PAN-India across all major and non-major ports, ICDs, CFSs, and multimodal terminals.</span>
          </div>
          <Link
            href="/contact-us"
            className="text-sky-400 hover:text-sky-300 font-semibold underline text-xs shrink-0"
          >
            View All Locations
          </Link>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about-us" className="hover:text-slate-300 transition-colors">
              Company Profile
            </Link>
            <Link href="/services" className="hover:text-slate-300 transition-colors">
              Services
            </Link>
            <Link href="/contact-us" className="hover:text-slate-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
