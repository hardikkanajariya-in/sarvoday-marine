import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { COMPANY_INFO } from "@/lib/data/site-data";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-[#0F172A] font-sans antialiased selection:bg-[#1D70B8] selection:text-white">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
