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
      alert("Please provide your name and phone number.");
      return;
    }
    const message =
      `*Enquiry for ${service.title}*\n` +
      `*Name:* ${fullName}\n` +
      `*Phone:* ${phone}\n` +
      `*Port/Location:* ${port || "PAN-India"}\n` +
      `*Notes:* ${notes || "Requesting prompt quote and availability."}`;
    const waUrl = `https://wa.me/${COMPANY_INFO.contacts.whatsapp.number.replace("+", "")}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Service Hero Banner */}
      <section className="bg-[#071937] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071937] via-[#071937]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:underline">Services</Link>
              <span>/</span>
              <span className="text-slate-300">{service.title}</span>
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800 px-3 py-1 rounded-full">
              {service.id === "cabotage-logistics" ? "Domestic Freight Solutions" : "Marine Survey & Technical Audit"}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Featured Image */}
              <div className="relative h-[320px] sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Comprehensive Description */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0e2b5c]">
                  Overview & Technical Scope
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {service.fullDescription}
                </p>
              </div>

              {/* Key Features / Highlights */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80">
                <h3 className="text-lg font-bold text-[#0e2b5c] mb-4">
                  Operational Benchmarks & Accreditations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-sky-100 text-[#0284c7] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-Services Breakdown (From Excel Link Structure) */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 px-3 py-1 rounded-full">
                    Specialized Sub-Services
                  </span>
                  <h3 className="text-2xl font-bold text-[#0e2b5c] mt-2">
                    Detailed Service Capabilities
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Executed strictly in compliance with international maritime conventions and classification society guidelines.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.subServices.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 rounded-lg bg-[#0e2b5c] text-white flex items-center justify-center font-bold text-xs">
                          0{sIdx + 1}
                        </span>
                        <h4 className="text-base font-bold text-[#0e2b5c]">
                          {sub.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                        {sub.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PAN-India Mobilization Notice */}
              <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-[#0e2b5c] text-sm">
                    Prompt Mobilization Across All Indian Ports
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Whether in Mundra, Hazira, JNPT Mumbai, Haldia, or inland ICDs, our surveyors reach the berth promptly upon booking.
                  </p>
                </div>
                <Link
                  href="/contact-us#enquiry"
                  className="px-5 py-2.5 bg-[#0e2b5c] text-white text-xs font-bold rounded-lg shrink-0 hover:bg-[#071937] transition-colors"
                >
                  Book Surveyor
                </Link>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Quick Quote Form Card */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 sticky top-28 shadow-xs">
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ea580c] bg-orange-100/80 px-2.5 py-0.5 rounded-full">
                    Enquiry Now
                  </span>
                  <h3 className="text-lg font-bold text-[#0e2b5c] mt-2">
                    Request Quotation for {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct connection to our 24/7 technical operations desk.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-6 space-y-3 bg-white rounded-xl p-4 border border-slate-200">
                    <div className="text-3xl text-emerald-500">✓</div>
                    <p className="text-xs font-bold text-slate-800">
                      Enquiry initiated! Our duty team is on it.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#0284c7] font-semibold underline"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSidebarWhatsApp} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Capt. Rajesh"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / Mobile <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Port / Vessel / Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mundra, Hazira, JNPT"
                        value={port}
                        onChange={(e) => setPort(e.target.value)}
                        className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Cargo / Survey Details
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Commodity, tonnage, expected date..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full text-xs border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 px-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Send via WhatsApp</span>
                        <span>→</span>
                      </button>
                    </div>
                  </form>
                )}

                {/* Direct Hotlines */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 space-y-2 text-xs">
                  <div className="font-bold text-slate-800">Direct Contact Hotlines:</div>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.phones[0].raw}`}
                    className="block text-slate-600 hover:text-[#0284c7]"
                  >
                    📞 {COMPANY_INFO.contacts.phones[0].display} (Director)
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.contacts.phones[1].raw}`}
                    className="block text-slate-600 hover:text-[#0284c7]"
                  >
                    📞 {COMPANY_INFO.contacts.phones[1].display} (General Manager)
                  </a>
                </div>

                {/* Other Services Navigation List */}
                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Other Services:
                  </div>
                  <ul className="space-y-1.5 text-xs">
                    {SERVICES.filter((s) => s.id !== service.id).map((other) => (
                      <li key={other.id}>
                        <Link
                          href={`/services/${other.slug}`}
                          className="text-[#0e2b5c] hover:text-[#0284c7] font-semibold flex items-center gap-1 transition-colors"
                        >
                          <span className="text-sky-500">▸</span> {other.title}
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
