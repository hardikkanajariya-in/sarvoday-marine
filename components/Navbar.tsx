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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar for Inquiries & PAN-India Coverage */}
      <div className="bg-[#071937] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 text-sky-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              PAN-India Inspection & Logistics Network
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-slate-300">Est. November 2014</span>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href={`tel:${COMPANY_INFO.contacts.phones[0].raw}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{COMPANY_INFO.contacts.phones[0].display}</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={`mailto:${COMPANY_INFO.contacts.emails[0].email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">{COMPANY_INFO.contacts.emails[0].email}</span>
              <span className="sm:hidden">Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md py-2.5" : "shadow-sm py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-48 sm:h-14 sm:w-56">
              <Image
                src="/images/sarvoday-logo.svg"
                alt={COMPANY_INFO.name}
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/" ? "text-[#0e2b5c] border-b-2 border-[#0284c7] pb-1" : "text-slate-700 hover:text-[#0e2b5c]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/about-us" ? "text-[#0e2b5c] border-b-2 border-[#0284c7] pb-1" : "text-slate-700 hover:text-[#0e2b5c]"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  pathname.startsWith("/services") ? "text-[#0e2b5c] border-b-2 border-[#0284c7] pb-1" : "text-slate-700 hover:text-[#0e2b5c]"
                }`}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-3 transition-all duration-200 z-50 ${
                  servicesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="px-4 pb-2 mb-2 border-b border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Our Offerings</p>
                </div>
                {SERVICES.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.slug}`}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0284c7] transition-colors"
                  >
                    <div className="font-semibold">{srv.title}</div>
                    <div className="text-xs text-slate-500 line-clamp-1">{srv.shortDescription}</div>
                  </Link>
                ))}
                <div className="mt-2 pt-2 px-4 border-t border-slate-100 bg-slate-50/70 py-2">
                  <Link
                    href="/services"
                    className="text-xs font-bold text-[#0284c7] hover:underline flex items-center gap-1"
                  >
                    View All Services Overview →
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact-us"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/contact-us" ? "text-[#0e2b5c] border-b-2 border-[#0284c7] pb-1" : "text-slate-700 hover:text-[#0e2b5c]"
              }`}
            >
              Contact Us & Locations
            </Link>
          </div>

          {/* Quick Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-sm font-bold rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Enquiry Now</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEnquiry}
              className="px-3 py-1.5 bg-[#ea580c] text-white text-xs font-bold rounded-md"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0e2b5c] focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-md"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-over / Accordion Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className={`py-2 px-3 rounded-md text-sm font-semibold ${
                  pathname === "/" ? "bg-sky-50 text-[#0e2b5c]" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`py-2 px-3 rounded-md text-sm font-semibold ${
                  pathname === "/about-us" ? "bg-sky-50 text-[#0e2b5c]" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <Link
                  href="/services"
                  className={`block py-2 px-3 rounded-md text-sm font-semibold ${
                    pathname === "/services" ? "bg-sky-50 text-[#0e2b5c]" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Services Overview
                </Link>
                <div className="pl-5 pr-2 py-1 space-y-1.5 border-l-2 border-sky-200 ml-3 mt-1">
                  {SERVICES.map((srv) => (
                    <Link
                      key={srv.id}
                      href={`/services/${srv.slug}`}
                      className="block py-1.5 text-xs font-medium text-slate-600 hover:text-[#0284c7]"
                    >
                      {srv.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact-us"
                className={`py-2 px-3 rounded-md text-sm font-semibold ${
                  pathname === "/contact-us" ? "bg-sky-50 text-[#0e2b5c]" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Contact Us & Office Locations
              </Link>

              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenEnquiry) onOpenEnquiry();
                  }}
                  className="w-full py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm rounded-lg shadow text-center cursor-pointer"
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
