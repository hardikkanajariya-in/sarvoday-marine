# Sarvoday Marine Services — Development Rules & Guidelines

These rules are mandatory and strictly enforced across this project.

## 1. Static-Only Architecture (Strict Non-Negotiable)
- **Zero Backend / CMS**: Never introduce a CMS (WordPress or otherwise), database, server-side authentication, admin panel, or dynamic backend APIs.
- **Static Content Storage**: All content, navigation, services, branch locations, and company information must be statically typed and stored in structured TypeScript modules under `lib/data/`.
- **Form Submissions**: Forms are client-side static interactions providing real-time validation and routing inquiries directly to WhatsApp click-to-chat and pre-filled email mailto links.
- **Static Export Ready**: Next.js configuration and page components must support pure static export without dynamic server-only dependencies.

## 2. Brand Identity & Unified Architecture
- **Single Brand Umbrella**: Cabotage Logistics Solutions is an internal service line of Sarvoday Marine Services Pvt. Ltd. and must always be presented under the Sarvoday brand and logo. Never treat Cabotage as a separate company or standalone brand.
- **Color Palette**:
  - Primary Navy Blue: `#0a2540` / `#0b1e3d`
  - Accent Sky Blue: `#00a3e0` / `#0284c7`
  - Secondary CTA Orange/Red: `#ea580c` / `#f97316`
  - Clean Whites & Slates: `#ffffff`, `#f8fafc`, `#f1f5f9`, `#0f172a`
- **Link Structure Fidelity**:
  - Home: `/`
  - About Us: `/about-us/` (Company Profile, Leadership & Team, Vision & Values, Our Expertise)
  - Services Overview: `/services/`
  - Marine Inspections: `/services/marine-inspections/`
  - Liquid Cargo Inspections: `/services/liquid-cargo-inspections/`
  - General Cargo Inspections: `/services/general-cargo-inspections/`
  - Project & ODC: `/services/project-odc/`
  - Container Inspections: `/services/container-inspections/`
  - Cabotage Logistics Solutions: `/services/cabotage-logistics/`
  - Contact Us: `/contact-us/` (incorporating all Head Office & Branch locations)
  - Enquiry Now: Contextual CTA triggering the static enquiry modal

## 3. Visual Assets & Zero-Placeholder Policy
- **No Stock Placeholders**: NEVER use Unsplash, Placehold.co, or generic stock URLs anywhere in the codebase.
- **Asset Sourcing**: All visual assets must be generated using the AI `generate_image` tool with realistic, context-specific prompts or provided as authentic company files in `/public/images/`.
- **Logo Integrity**: Use the official sailboat icon and navy blue wordmark ("SARVODAY MARINE SERVICES PVT. LTD.") as specified in the Roadmap PDF.

## 4. Mobile-First & Responsive UX
- Design mobile-first using Tailwind CSS.
- Ensure all interactive elements have touch targets of at least 44x44px.
- Implement responsive drawer navigation for small viewports.
- No horizontal scrolling on any viewport (320px to 4K).

## 5. Clean Code & Tooling
- Always use native IDE tools for reading and editing files.
- Keep components focused and adhering to Single Responsibility Principle (SRP).
- Avoid bloated monolithic files.
