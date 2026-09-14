import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICES } from "@/lib/data/site-data";

const service = SERVICES.find((s) => s.slug === "container-inspections");

export const metadata: Metadata = {
  title: "Container Inspections | IICL Survey, Reefer PTI, Stuffing & Lashing Certificate",
  description:
    "Complete container inspection solutions: Empty Container Audits, Maintenance & Repair, Stuffing/De-stuffing Tally, Reefer PTI, Rake Operations, and Lashing Certification.",
};

export default function ContainerInspectionsPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
