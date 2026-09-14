import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICES } from "@/lib/data/site-data";

const service = SERVICES.find((s) => s.slug === "marine-inspections");

export const metadata: Metadata = {
  title: "Marine Inspections | Draft Survey, Barge Gauging, Bunker & Hatch Survey",
  description:
    "Accredited marine inspections across Indian ports: Draft Survey, Barge Gauging, Bunker Surveys, Condition Surveys, Damage & Loss Assessments, and Hatch Cover Inspections.",
};

export default function MarineInspectionsPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
