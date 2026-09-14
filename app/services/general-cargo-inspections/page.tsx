import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICES } from "@/lib/data/site-data";

const service = SERVICES.find((s) => s.slug === "general-cargo-inspections");

export const metadata: Metadata = {
  title: "General Cargo Inspections | Cargo Arrival, Load Supervision & Lashing",
  description:
    "End-to-end general cargo supervision: Cargo Arrival Supervision, Physical Quality Checks, Loading / Discharge Monitoring, Stowage, and Certified Lashing Supervision.",
};

export default function GeneralCargoInspectionsPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
