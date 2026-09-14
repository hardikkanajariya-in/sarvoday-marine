import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, SERVICES } from "@/lib/data/site-data";

export default function Footer() {
  return (
    <footer className="bg-[#050E1A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="relative h-11 w-48 bg-white rounded p-1.5 shadow-xs">
              <Image
                src="/images/sarvoday-logo.svg"
                alt={COMPANY_INFO.name}
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Independent marine surveying, cargo superintendence, and multimodal cabotage logistics across Indian commercial ports, container freight stations, and industrial corridors.
            </p>
            <div className="pt-1">
              <span className="text-[11px] text-slate-500 font-mono uppercase tracking-wider">
                CERTIFIED MARITIME SURVEYORS
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-4 pb-1 border-b border-slate-800">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About Us & Leadership
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Branch Directory & Locations
                </Link>
              </li>
              <li>
                <Link href="/contact-us#enquiry" className="hover:text-white transition-colors">
                  Request Quotation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-4 pb-1 border-b border-slate-800">
              SERVICE DIVISIONS
            </div>
            <ul className="space-y-2 text-xs font-medium">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Registered Office & Contacts */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-4 pb-1 border-b border-slate-800">
              REGISTERED OFFICE
            </div>
            <div className="space-y-3 text-xs">
              <p className="text-slate-300 leading-relaxed">
                {COMPANY_INFO.contacts.headOffice.address}
              </p>

              <div className="pt-2 border-t border-slate-800/80 space-y-1">
                <a
                  href={`tel:${COMPANY_INFO.contacts.phones[0].raw}`}
                  className="block text-slate-300 hover:text-white transition-colors font-mono"
                >
                  {COMPANY_INFO.contacts.phones[0].display}
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.contacts.emails[0].email}`}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contacts.emails[0].email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Developer Credit */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All statutory rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>
              Designed by{" "}
              <a
                href="https://niftysolutions.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-white font-medium underline underline-offset-4 decoration-slate-600 hover:decoration-white transition-colors"
              >
                Nifty Solutions
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
