import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICES } from "@/lib/data/site-data";

const service = SERVICES.find((s) => s.slug === "cabotage-logistics");

export const metadata: Metadata = {
  title: "Cabotage Logistics Solutions | Domestic & Regional Cargo Movement",
  description:
    "Integrated domestic logistics under the Sarvoday brand: Coastal Shipping, Rail Rakes, Inter-state Freight, Regional Supply Chain Management, and End-to-End Visibility.",
};

export default function CabotageLogisticsPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
