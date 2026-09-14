import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICES } from "@/lib/data/site-data";

const service = SERVICES.find((s) => s.slug === "project-odc");

export const metadata: Metadata = {
  title: "Project & ODC Inspections | Over Dimensional Cargo, Lashing & Engineering Supervision",
  description:
    "Specialized engineering inspection for Project and Over Dimensional Cargo (ODC): Factory Inspections, Loading Supervision, 3D Measurement, and Heavy-Lift Lashing Certification.",
};

export default function ProjectOdcPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
