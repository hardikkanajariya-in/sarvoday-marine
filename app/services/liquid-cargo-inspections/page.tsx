import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICES } from "@/lib/data/site-data";

const service = SERVICES.find((s) => s.slug === "liquid-cargo-inspections");

export const metadata: Metadata = {
  title: "Liquid Cargo Inspections | Ullage Survey, Loss Investigation & Tank Inspections",
  description:
    "Expert liquid cargo inspections across Indian ports: Ullage Surveys, Loss Investigations, Bunker Audits, and Chemical Tank Wall-Wash Cleanliness Testing.",
};

export default function LiquidCargoInspectionsPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
