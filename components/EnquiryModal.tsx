"use client";

import React, { useState } from "react";
import { COMPANY_INFO, SERVICES } from "@/lib/data/site-data";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function EnquiryModal({ isOpen, onClose, preselectedService }: EnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(preselectedService || SERVICES[0].title);
  const [locationOrPort, setLocationOrPort] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const constructFormattedMessage = () => {
    return `*New Marine Survey / Logistics Requirement*\n` +
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
      alert("Please provide your name and contact phone number.");
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
      alert("Please provide your name and contact phone number.");
      return;
    }
    const subject = encodeURIComponent(`Service Request: ${service} - ${company || fullName}`);
    const body = encodeURIComponent(constructFormattedMessage());
    const mailtoUrl = `mailto:${COMPANY_INFO.contacts.emails[0].email}?cc=${COMPANY_INFO.contacts.emails[1].email}&subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#081526]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 sm:p-8 overflow-hidden border border-slate-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded transition-colors"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-[#1D70B8] font-bold">
              [ REQUIREMENT LOGGED ]
            </div>
            <h3 className="text-xl font-bold text-[#081526]">Inquiry Dispatched Successfully</h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Our technical operations duty officer will contact you shortly with surveyor mobilization details.
            </p>
            <div className="pt-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 bg-[#081526] text-white font-bold text-xs uppercase tracking-wider rounded"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5 border-b border-slate-100 pb-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                SARVODAY MARINE ATTENDANCE DESK
              </span>
              <h3 className="text-xl font-bold text-[#081526] mt-1">
                Request Survey or Logistics Quote
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                PAN-India deployment across all commercial ports, terminals, and rail corridors.
              </p>
            </div>

            <form className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Service Division <span className="text-red-500">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                >
                  {SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Contact Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Capt. Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-xs border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Global Freight Co."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full text-xs border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    className="w-full text-xs border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="contact@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Vessel / Berth / CFS / Siding Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mundra Port, Hazira, JNPT, Haldia"
                  value={locationOrPort}
                  onChange={(e) => setLocationOrPort(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Scope & Commodity Details
                </label>
                <textarea
                  rows={2}
                  placeholder="Tonnage, commodity, expected ETA, survey type..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded px-3 py-2 bg-white text-slate-900 focus:outline-none focus:border-[#081526]"
                ></textarea>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full py-2.5 px-4 bg-[#C25E00] hover:bg-[#A34E00] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Send via WhatsApp →
                </button>
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full py-2.5 px-4 bg-[#081526] hover:bg-[#050E1A] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Send via Email →
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
