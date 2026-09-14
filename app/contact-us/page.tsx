"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COMPANY_INFO, BRANCH_OFFICES, SERVICES } from "@/lib/data/site-data";

export default function ContactUsPage() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICES[0].title);
  const [locationOrPort, setLocationOrPort] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const constructFormattedMessage = () => {
    return `*New Enquiry from Website*\n` +
      `*Service Required:* ${service}\n` +
      `*Client Name:* ${fullName}\n` +
      `*Company:* ${company || "N/A"}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email || "N/A"}\n` +
      `*Port / Location:* ${locationOrPort || "PAN-India"}\n` +
      `*Details:* ${message || "Please provide quotation and availability."}`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    const text = encodeURIComponent(constructFormattedMessage());
    const waUrl = `https://wa.me/${COMPANY_INFO.contacts.whatsapp.number.replace("+", "")}?text=${text}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    const subject = encodeURIComponent(`Inquiry: ${service} - ${company || fullName}`);
    const body = encodeURIComponent(constructFormattedMessage());
    const mailtoUrl = `mailto:${COMPANY_INFO.contacts.emails[0].email}?cc=${COMPANY_INFO.contacts.emails[1].email}&subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

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
              Nationwide Network & Headquarters
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              Contact Us & Office Locations
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              Connect with our operations desk 24/7. Explore our Registered Head Office, 16 branch locations, and PAN-India surveyor mobilization.
            </p>
          </div>
        </div>
      </section>

      {/* PAN-India Coverage Alert */}
      <div className="bg-sky-50 border-b border-sky-200 py-4 px-4 text-center">
        <p className="text-xs sm:text-sm text-sky-900 max-w-4xl mx-auto font-medium">
          <strong className="text-[#0e2b5c]">PAN-India Delivery Guarantee:</strong> While our physical branch network spans Gujarat, Maharashtra, West Bengal, and Tripura, our certified surveyors mobilize to <em>any</em> commercial port, anchorages, ICD, or rail siding across India.
        </p>
      </div>

      {/* Main Grid: Form on Left, Head Office on Right */}
      <section className="py-16 sm:py-20 bg-white" id="enquiry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] bg-orange-100 px-3 py-1 rounded-full">
                  Instant Service Booking
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e2b5c] mt-3">
                  Request an Inspection / Quote
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your vessel or cargo details. Responses routed instantly to our duty operations officers.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4 bg-white rounded-2xl p-8 border border-slate-200">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Inquiry Initiated Successfully</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Sarvoday Marine Services. A technical coordinator will confirm surveyor availability and quote promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#0e2b5c] text-white text-xs font-bold rounded-lg hover:bg-[#071937]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Select Service Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full text-sm border border-slate-300 rounded-xl px-4 py-2.5 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name / Master <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Capt. Rajesh Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full text-sm border border-slate-300 rounded-xl px-4 py-2.5 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Shipping Line
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Maritime Freight Corp."
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full text-sm border border-slate-300 rounded-xl px-4 py-2.5 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-sm border border-slate-300 rounded-xl px-4 py-2.5 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="contact@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-sm border border-slate-300 rounded-xl px-4 py-2.5 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Vessel / Port / Terminal / Siding Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mundra Port Berth 4, Hazira Jetty, JNPT, Haldia"
                      value={locationOrPort}
                      onChange={(e) => setLocationOrPort(e.target.value)}
                      className="w-full text-sm border border-slate-300 rounded-xl px-4 py-2.5 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Scope & Cargo Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Commodity type, estimated tonnage, ETA, required certificates..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full text-sm border border-slate-300 rounded-xl px-4 py-2.5 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    ></textarea>
                  </div>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit via WhatsApp</span>
                      <span>→</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="w-full py-3.5 px-4 bg-[#0e2b5c] hover:bg-[#071937] text-white font-bold text-sm rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit via Email</span>
                      <span>→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Contact & Head Office Details Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Head Office Card */}
              <div className="bg-[#0e2b5c] text-white rounded-3xl p-8 shadow-xl border border-sky-400/20 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
                  Corporate Headquarters
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Head Office — Rajula
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {COMPANY_INFO.contacts.headOffice.address}
                </p>

                <div className="pt-3 border-t border-slate-700 space-y-3 text-xs">
                  <div>
                    <div className="text-slate-400">Rajkumar Mall (Director):</div>
                    <a href="tel:+919723599247" className="text-white font-bold hover:text-sky-300 text-sm">
                      +91 97235 99247
                    </a>
                    <div className="text-slate-300">{COMPANY_INFO.contacts.emails[1].email}</div>
                  </div>

                  <div>
                    <div className="text-slate-400">Harshit Gajjar (General Manager):</div>
                    <a href="tel:+917043230841" className="text-white font-bold hover:text-sky-300 text-sm">
                      +91 70432 30841
                    </a>
                    <div className="text-slate-300">{COMPANY_INFO.contacts.emails[0].email}</div>
                  </div>

                  <div>
                    <div className="text-slate-400">General Enquiries:</div>
                    <a href="mailto:info@sarvodaymarine.com" className="text-sky-400 font-bold hover:underline">
                      info@sarvodaymarine.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed for Rajula */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-72 relative bg-slate-100">
                <iframe
                  title="Sarvoday Marine Head Office Rajula"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.539824641973!2d71.4287893!3d20.9169829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be27a8581e289bf%3A0x8673a5a415a7dc5b!2sRajula%2C%20Gujarat%20365560!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Directory Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80" id="locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-sky-100/80 px-3 py-1 rounded-full">
              Physical Presence & Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e2b5c] mt-3 tracking-tight">
              Our Branch Offices Across India
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3">
              Strategically stationed across maritime trade belts and key industrial corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRANCH_OFFICES.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                  <h3 className="font-bold text-lg text-[#0e2b5c]">
                    {b.state}
                  </h3>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-sky-50 text-[#0284c7]">
                    {b.stateCode}
                  </span>
                </div>

                <div className="text-xs text-slate-500 mb-3 font-semibold">
                  {b.cities.length} Operational Hubs:
                </div>

                <ul className="space-y-2">
                  {b.cities.map((city, cIdx) => (
                    <li key={cIdx} className="text-xs text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]"></span>
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom PAN-India Mobilization Card */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 text-center max-w-4xl mx-auto shadow-xs">
            <h4 className="text-xl font-bold text-[#0e2b5c] mb-2">
              Serving Every Commercial Port & Inland Depot Across India
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Our field surveyors are fully equipped to deploy to any minor port, private terminal, Container Freight Station (CFS), or industrial facility nationwide upon short notice.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.contacts.phones[0].raw}`}
                className="px-6 py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-lg transition-colors"
              >
                Call Rajkumar Mall: {COMPANY_INFO.contacts.phones[0].display}
              </a>
              <a
                href={`tel:${COMPANY_INFO.contacts.phones[1].raw}`}
                className="px-6 py-2.5 bg-[#0e2b5c] hover:bg-[#071937] text-white text-xs font-bold rounded-lg transition-colors"
              >
                Call Harshit Gajjar: {COMPANY_INFO.contacts.phones[1].display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
