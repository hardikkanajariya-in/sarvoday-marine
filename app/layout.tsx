import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { COMPANY_INFO } from "@/lib/data/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} | Precision Marine Surveying & Cabotage Logistics`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description:
    "Founded in Nov 2014, Sarvoday Marine Services provides PAN-India marine inspections, draft surveys, liquid cargo surveys, container inspections, and Cabotage logistics solutions with 100+ certified professionals.",
  keywords: [
    "marine inspections India",
    "draft survey",
    "liquid cargo ullage survey",
    "container inspection ICD CFS",
    "ODC project cargo lashing",
    "cabotage logistics solutions India",
    "Sarvoday Marine Services",
    "Rajula Amreli Mundra Hazira",
  ],
  authors: [{ name: COMPANY_INFO.name }],
  metadataBase: new URL("https://www.sarvodaymarine.com"),
  openGraph: {
    title: `${COMPANY_INFO.name} | Marine Inspections & Cabotage Logistics`,
    description:
      "PAN-India marine inspection, cargo surveys, and domestic cabotage logistics solutions backed by 100+ trained professionals since 2014.",
    siteName: COMPANY_INFO.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
