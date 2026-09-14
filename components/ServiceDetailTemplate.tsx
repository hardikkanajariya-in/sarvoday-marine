"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem, SERVICES, COMPANY_INFO } from "@/lib/data/site-data";

interface ServiceDetailTemplateProps {
  service: ServiceItem;
}

export default function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [port, setPort] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSidebarWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert("Please enter your name and contact phone number.");
      return;
    }
    const message =
      `*Service Request: ${service.title}*\n` +
      `*Name:* ${fullName}\n` +
      `*Phone:* ${phone}\n` +
      `*Port / Location:* ${port || "PAN-India"}\n` +
      `*Technical Notes:* ${notes || "Requesting survey schedule & quotation."}`;
    const waUrl = `https://wa.me/${COMPANY_INFO.contacts.whatsapp.number.replace("+", "")}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col bg-[#FAF9F6]">
      {/* Service Header */}
      <section className="bg-[#081526] text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">SERVICES</Link>
              <span>/</span>
              <span className="text-[#1D70B8]">{service.slug.toUpperCase()}</span>
            </div>

            <div className="inline-block mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 border border-slate-700 px-2.5 py-1 rounded">
                {service.id === "cabotage-logistics" ? "LOGISTICS & INTERMODAL DIVISION" : "MARITIME TECHNICAL SURVEY"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed max-w-2xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Architectural Layout */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-10">
              {/* Featured Asset View */}
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Technical Scope Statement */}
              <div className="bg-white p-8 rounded-lg border border-slate-200 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#081526] tracking-tight">
                  Scope of Technical Operations
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Accreditations & Field Standards */}
              <div className="bg-white p-8 rounded-lg border border-slate-200">
                <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4">
                  [ STATUTORY & COMPLIANCE FRAMEWORK ]
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <span className="text-[#1D70B8] font-bold mt-0.5">▪</span>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-Services Technical Matrix */}
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    [ SUB-SERVICE MATRIX ]
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#081526] mt-1">
                    Detailed Verification Capabilities
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.subServices.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white rounded-lg p-6 border border-slate-200 flex flex-col justify-between hover:border-slate-400 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                          <span className="text-[11px] font-mono text-[#1D70B8] font-bold">
                            SPEC {sIdx + 1 < 10 ? `0${sIdx + 1}` : sIdx + 1}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            STANDARD PROTOCOL
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#081526] mb-2 leading-snug">
                          {sub.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {sub.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PAN-India Notice */}
              <div className="bg-[#EBF3FA] rounded-lg p-6 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-[#1D70B8]">
                    [ IMMEDIATE BERTH DISPATCH ]
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 mt-1">
                    Certified field surveyors mobilize on short notice across Mundra, Hazira, JNPT, Haldia, and all commercial Indian ports.
                  </p>
                </div>
                <Link
                  href="/contact-us#enquiry"
                  className="px-5 py-2 bg-[#081526] hover:bg-[#050E1A] text-white text-xs font-bold uppercase tracking-wider rounded shrink-0 transition-colors"
                >
                  Book Attendance
                </Link>
              </div>
            </div>

            {/* Right Sticky Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Technical Request Sidebar */}
              <div className="bg-white rounded-lg p-6 sm:p-7 border border-slate-200 sticky top-28 shadow-xs">
                <div className="mb-5 border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C25E00]">
                    DIRECT BOOKING DESK
                  </span>
                  <h3 className="text-base font-bold text-[#081526] mt-1">
                    Request Survey Attendance
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For: <span className="font-semibold text-slate-700">{service.title}</span>
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-6 space-y-2 bg-slate-50 rounded p-4 border border-slate-200">
                    <p className="text-xs font-bold text-slate-800">
                      Requirement dispatched to operations desk.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#1D70B8] underline"
                    >
                      Submit additional requirement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSidebarWhatsApp} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Full Name / Master <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Capt. Rajesh"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full text-xs border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Contact Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-xs border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Vessel / Port / Terminal
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mundra Berth 4, Hazira"
                        value={port}
                        onChange={(e) => setPort(e.target.value)}
                        className="w-full text-xs border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Inspection Scope
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Cargo type, estimated tonnage, ETA..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full text-xs border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 px-4 bg-[#C25E00] hover:bg-[#A34E00] text-white font-bold text-xs uppercase tracking-wider rounded shadow-xs transition-colors cursor-pointer"
                      >
                        Submit Request via WhatsApp →
                      </button>
                    </div>
                  </form>
                )}

                {/* Hotlines */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="font-mono text-[10px] uppercase text-slate-400">
                    DIRECT DESK LINES:
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.phones[0].raw}`}
                    className="block font-medium text-slate-700 hover:text-[#1D70B8]"
                  >
                    Director: {COMPANY_INFO.contacts.phones[0].display}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.phones[1].raw}`}
                    className="block font-medium text-slate-700 hover:text-[#1D70B8]"
                  >
                    GM Operations: {COMPANY_INFO.contacts.phones[1].display}
                  </a>
                </div>

                {/* Other Services */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="font-mono text-[10px] uppercase text-slate-400 mb-2">
                    OTHER SERVICE DIVISIONS:
                  </div>
                  <ul className="space-y-1 text-xs">
                    {SERVICES.filter((s) => s.id !== service.id).map((other) => (
                      <li key={other.id}>
                        <Link
                          href={`/services/${other.slug}`}
                          className="text-slate-700 hover:text-[#1D70B8] flex items-center gap-1.5 py-0.5"
                        >
                          <span className="text-slate-400">▪</span> {other.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
