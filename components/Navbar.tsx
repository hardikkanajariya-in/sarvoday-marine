"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY_INFO, SERVICES } from "@/lib/data/site-data";

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-[#050E1A] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-xs tracking-wider uppercase font-medium">
            <span className="text-slate-400 font-mono text-[11px] tracking-normal">
              [ PAN-INDIA SURVEY & LOGISTICS NETWORK • EST. 2014 ]
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs text-slate-300">
            <a
              href={`tel:${COMPANY_INFO.contacts.phones[0].raw}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="font-medium">{COMPANY_INFO.contacts.phones[0].display}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`mailto:${COMPANY_INFO.contacts.emails[0].email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="font-medium hidden sm:inline">{COMPANY_INFO.contacts.emails[0].email}</span>
              <span className="font-medium sm:hidden">Operations Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation */}
      <nav
        className={`w-full bg-white transition-all duration-200 border-b border-slate-200/80 ${
          scrolled ? "shadow-xs py-3" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-44 sm:h-12 sm:w-52">
              <Image
                src="/images/sarvoday-logo.svg"
                alt={COMPANY_INFO.name}
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-9">
            <Link
              href="/"
              className={`text-sm tracking-tight transition-colors py-1 ${
                pathname === "/"
                  ? "font-bold text-[#081526] border-b-2 border-[#081526]"
                  : "font-semibold text-slate-600 hover:text-[#081526]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`text-sm tracking-tight transition-colors py-1 ${
                pathname === "/about-us"
                  ? "font-bold text-[#081526] border-b-2 border-[#081526]"
                  : "font-semibold text-slate-600 hover:text-[#081526]"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 text-sm tracking-tight transition-colors py-1 ${
                  pathname.startsWith("/services")
                    ? "font-bold text-[#081526] border-b-2 border-[#081526]"
                    : "font-semibold text-slate-600 hover:text-[#081526]"
                }`}
              >
                <span>Services</span>
                <svg
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-150 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>

              {/* Architectural Dropdown */}
              <div
                className={`absolute top-full left-0 w-84 bg-white rounded-lg shadow-xl border border-slate-200 py-2 transition-all duration-150 z-50 ${
                  servicesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="px-4 py-1.5 border-b border-slate-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Service Catalog
                  </span>
                </div>
                {SERVICES.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.slug}`}
                    className="block px-4 py-2 hover:bg-slate-50 transition-colors group"
                  >
                    <div className="text-xs font-bold text-slate-800 group-hover:text-[#1D70B8] transition-colors">
                      {srv.title}
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {srv.shortDescription}
                    </div>
                  </Link>
                ))}
                <div className="mt-1 pt-1.5 px-4 border-t border-slate-100 bg-slate-50/60">
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-[#1D70B8] hover:underline flex items-center gap-1 py-1"
                  >
                    <span>View all services overview</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact-us"
              className={`text-sm tracking-tight transition-colors py-1 ${
                pathname === "/contact-us"
                  ? "font-bold text-[#081526] border-b-2 border-[#081526]"
                  : "font-semibold text-slate-600 hover:text-[#081526]"
              }`}
            >
              Contact Us & Locations
            </Link>
          </div>

          {/* Quick Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 bg-[#C25E00] hover:bg-[#A34E00] text-white text-xs font-bold tracking-wide uppercase rounded-md shadow-xs transition-colors cursor-pointer"
            >
              Enquiry Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEnquiry}
              className="px-3 py-1.5 bg-[#C25E00] text-white text-xs font-bold rounded"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#081526] focus:outline-none rounded"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-over Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className={`py-2 px-3 rounded text-sm font-semibold ${
                  pathname === "/" ? "bg-slate-100 text-[#081526]" : "text-slate-700"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`py-2 px-3 rounded text-sm font-semibold ${
                  pathname === "/about-us" ? "bg-slate-100 text-[#081526]" : "text-slate-700"
                }`}
              >
                About Us
              </Link>
              <div>
                <Link
                  href="/services"
                  className={`block py-2 px-3 rounded text-sm font-semibold ${
                    pathname === "/services" ? "bg-slate-100 text-[#081526]" : "text-slate-700"
                  }`}
                >
                  Services Overview
                </Link>
                <div className="pl-4 pr-2 py-1 space-y-1 border-l border-slate-200 ml-4 mt-1">
                  {SERVICES.map((srv) => (
                    <Link
                      key={srv.id}
                      href={`/services/${srv.slug}`}
                      className="block py-1 text-xs text-slate-600 hover:text-[#1D70B8]"
                    >
                      {srv.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/contact-us"
                className={`py-2 px-3 rounded text-sm font-semibold ${
                  pathname === "/contact-us" ? "bg-slate-100 text-[#081526]" : "text-slate-700"
                }`}
              >
                Contact Us & Office Locations
              </Link>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenEnquiry) onOpenEnquiry();
                  }}
                  className="w-full py-2.5 bg-[#C25E00] text-white font-bold text-xs uppercase tracking-wider rounded shadow-xs text-center cursor-pointer"
                >
                  Request Inspection / Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
