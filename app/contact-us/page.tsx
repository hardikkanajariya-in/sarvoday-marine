"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  const [activeStateTab, setActiveStateTab] = useState<string>("ALL");

  const constructFormattedMessage = () => {
    return `*New Marine Survey / Logistics Enquiry*\n` +
      `*Service Required:* ${service}\n` +
      `*Contact Name:* ${fullName}\n` +
      `*Organization:* ${company || "N/A"}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email || "N/A"}\n` +
      `*Port / Location:* ${locationOrPort || "PAN-India"}\n` +
      `*Scope Details:* ${message || "Please provide schedule and quotation."}`;
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
    const subject = encodeURIComponent(`Service Request: ${service} - ${company || fullName}`);
    const body = encodeURIComponent(constructFormattedMessage());
    const mailtoUrl = `mailto:${COMPANY_INFO.contacts.emails[0].email}?cc=${COMPANY_INFO.contacts.emails[1].email}&subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const filteredBranches =
    activeStateTab === "ALL"
      ? BRANCH_OFFICES
      : BRANCH_OFFICES.filter((b) => b.stateCode === activeStateTab);

  return (
    <div className="flex flex-col bg-[#FAF9F6]">
      {/* Header Banner */}
      <section className="bg-[#081526] text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span>/</span>
              <span className="text-[#1D70B8]">CONTACT-US</span>
            </div>

            <div className="inline-block mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 border border-slate-700 px-2.5 py-1 rounded">
                OPERATIONS & DISPATCH DESK
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Contact & Branch Network
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Connect directly with our 24/7 technical duty officers. Coordinate surveyor attendance or domestic multimodal transit across all Indian maritime corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Form and Head Office Column */}
      <section className="py-16 sm:py-20 bg-white" id="enquiry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#FAF9F6] p-8 sm:p-10 rounded-lg border border-slate-200">
              <div className="mb-6 border-b border-slate-200 pb-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#C25E00]">
                  FIELD ATTENDANCE BOOKING
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#081526] mt-1">
                  Request an Inspection / Logistics Quote
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Provide your vessel or cargo specifications. Inquiries are routed immediately to our technical duty managers.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-3 bg-white rounded p-6 border border-slate-200">
                  <div className="font-mono text-xs uppercase text-[#1D70B8] font-bold">
                    [ INQUIRY DISPATCHED ]
                  </div>
                  <h3 className="text-lg font-bold text-[#081526]">Requirement Logged Successfully</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you. A duty technical manager is reviewing surveyor availability and will follow up immediately.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-[#081526] text-white text-xs font-bold uppercase tracking-wider rounded"
                  >
                    Submit Additional Requirement
                  </button>
                </div>
              ) : (
                <form className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Service Division <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full text-xs border border-slate-300 rounded px-3 py-2.5 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
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
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Contact Person / Master <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Capt. Rajesh"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full text-xs border border-slate-300 rounded px-3 py-2.5 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Shipping Line / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Pacific Bulk Charterers"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full text-xs border border-slate-300 rounded px-3 py-2.5 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Phone / Mobile <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-xs border border-slate-300 rounded px-3 py-2.5 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="operations@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-xs border border-slate-300 rounded px-3 py-2.5 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Vessel / Berth / CFS / Siding Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mundra Berth 4, Hazira Jetty, JNPT, Haldia"
                      value={locationOrPort}
                      onChange={(e) => setLocationOrPort(e.target.value)}
                      className="w-full text-xs border border-slate-300 rounded px-3 py-2.5 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Scope Specifications & Cargo Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Commodity type, estimated tonnage, ETA, required test certificates..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full text-xs border border-slate-300 rounded px-3 py-2.5 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                    ></textarea>
                  </div>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="w-full py-3 px-4 bg-[#C25E00] hover:bg-[#A34E00] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      Submit via WhatsApp →
                    </button>
                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="w-full py-3 px-4 bg-[#081526] hover:bg-[#050E1A] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      Submit via Email →
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Registered Head Office Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#081526] text-white rounded-lg p-8 border border-slate-800 space-y-4">
                <span className="font-mono text-[10px] uppercase text-slate-400">
                  REGISTERED HEADQUARTERS
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Head Office — Rajula
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {COMPANY_INFO.contacts.headOffice.address}
                </p>

                <div className="pt-3 border-t border-slate-800 space-y-2 text-xs font-mono">
                  <div>
                    <div className="text-slate-400 text-[10px]">DIRECTOR:</div>
                    <div className="text-slate-200 font-bold">Rajkumar Mall</div>
                    <a href="tel:+919723599247" className="text-[#1D70B8] hover:underline">
                      +91 97235 99247
                    </a>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-slate-400 text-[10px]">GENERAL MANAGER:</div>
                    <div className="text-slate-200 font-bold">Harshit Gajjar</div>
                    <a href="tel:+917043230841" className="text-[#1D70B8] hover:underline">
                      +91 70432 30841
                    </a>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-slate-400 text-[10px]">GENERAL ENQUIRIES:</div>
                    <a href="mailto:info@sarvodaymarine.com" className="text-white hover:underline">
                      info@sarvodaymarine.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed for Rajula */}
              <div className="rounded-lg overflow-hidden border border-slate-200 h-64 bg-slate-100">
                <iframe
                  title="Sarvoday Marine Head Office Rajula"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.539824641973!2d71.4287893!3d20.9169829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be27a8581e289bf%3A0x8673a5a415a7dc5b!2sRajula%2C%20Gujarat%20365560!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Directory with State Tabs */}
      <section className="py-16 sm:py-20 bg-[#F4F6F9] border-t border-slate-200" id="locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
              OPERATIONAL STATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081526] mt-2 tracking-tight">
              Branch Offices Directory
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Stationed across Western, Eastern, and North-Eastern maritime trade zones. Select a state to filter branch stations:
            </p>

            {/* State Filter Tabs */}
            <div className="flex flex-wrap gap-2 pt-6 font-mono text-xs">
              <button
                onClick={() => setActiveStateTab("ALL")}
                className={`px-3 py-1.5 rounded uppercase transition-colors cursor-pointer ${
                  activeStateTab === "ALL"
                    ? "bg-[#081526] text-white font-bold"
                    : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                }`}
              >
                All Hubs (16)
              </button>
              {BRANCH_OFFICES.map((b) => (
                <button
                  key={b.stateCode}
                  onClick={() => setActiveStateTab(b.stateCode)}
                  className={`px-3 py-1.5 rounded uppercase transition-colors cursor-pointer ${
                    activeStateTab === b.stateCode
                      ? "bg-[#081526] text-white font-bold"
                      : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {b.state} ({b.cities.length})
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBranches.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                    <h3 className="font-bold text-base text-[#081526]">
                      {b.state}
                    </h3>
                    <span className="font-mono text-[10px] text-[#1D70B8] font-bold">
                      {b.stateCode}
                    </span>
                  </div>

                  <div className="font-mono text-[10px] text-slate-400 uppercase mb-3">
                    {b.cities.length} Operational Stations:
                  </div>

                  <ul className="space-y-1.5">
                    {b.cities.map((city, cIdx) => (
                      <li key={cIdx} className="text-xs text-slate-700 flex items-center gap-2">
                        <span className="text-slate-400 text-[10px]">▪</span>
                        <span>{city}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
