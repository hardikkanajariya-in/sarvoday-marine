export interface SubService {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  subServices: SubService[];
  features: string[];
}

export interface BranchOffice {
  state: string;
  stateCode: string;
  cities: string[];
}

export const COMPANY_INFO = {
  name: "Sarvoday Marine Services Pvt. Ltd.",
  shortName: "Sarvoday Marine",
  established: "November 2014",
  tagline: "Precision Marine Inspections & End-to-End Cabotage Logistics",
  vision: "To set new standards in shipping and logistics, with a continued focus on seamless operations, customer satisfaction, and sustainable growth.",
  mission: "Delivering uncompromising quality, safety, and operational excellence across India's maritime and inland freight infrastructure.",
  stats: [
    { value: "10+", label: "Years of Excellence", detail: "Serving Indian maritime sector since Nov 2014" },
    { value: "100+", label: "Trained Professionals", detail: "Certified master mariners, surveyors & engineers" },
    { value: "16+", label: "Strategic Branch Offices", detail: "Covering key ports & industrial clusters" },
    { value: "PAN-India", label: "Port & Terminal Coverage", detail: "Mobilization at all major & minor ports" },
  ],
  coreValues: [
    {
      title: "Reliability",
      description: "Consistent, dependable performance and rigorous reporting delivered with uncompromising precision.",
      icon: "ShieldCheck",
    },
    {
      title: "Safety",
      description: "Strict adherence to international SOLAS, IMO, and industry safety standards in every operation.",
      icon: "HardHat",
    },
    {
      title: "Integrity",
      description: "Impartial, objective, and transparent assessments recognized by global P&I clubs and underwriters.",
      icon: "FileText",
    },
    {
      title: "Customer Excellence",
      description: "24/7 dedicated support, agile field mobilization, and customized solutions tailored to client schedules.",
      icon: "Users",
    },
    {
      title: "Innovation",
      description: "Modern digital survey methodologies, tech-driven transit coordination, and rapid documentation turnaround.",
      icon: "Zap",
    },
  ],
  contacts: {
    headOffice: {
      address: "F-3, Hindorna Road, Siddhi Plaza Complex, 2nd Floor, Rajula, Dist. Amreli, Gujarat - 365560",
      city: "Rajula",
      state: "Gujarat",
      pincode: "365560",
    },
    phones: [
      { display: "+91 97235 99247", raw: "+919723599247", person: "Rajkumar Mall (Director)" },
      { display: "+91 70432 30841", raw: "+917043230841", person: "Harshit Gajjar (General Manager)" },
    ],
    emails: [
      { email: "gm@sarvodaymarine.co.in", label: "Harshit Gajjar — General Manager" },
      { email: "rajkumar@sarvodaymarine.co.in", label: "Rajkumar Mall — Director" },
      { email: "info@sarvodaymarine.com", label: "General Inquiries & Bookings" },
    ],
    whatsapp: {
      number: "+919723599247",
      defaultMessage: "Hello Sarvoday Marine Team, I would like to inquire about your marine inspection / cabotage logistics services.",
    },
  },
  coverageNote: "While our physical branch offices are located across Gujarat, Maharashtra, West Bengal, and Tripura, our operations and certified personnel mobilize PAN-India across every commercial port, terminal, ICD, CFS, and industrial corridor.",
};

export const BRANCH_OFFICES: BranchOffice[] = [
  {
    state: "Gujarat",
    stateCode: "GJ",
    cities: ["Mundra", "Hazira", "Ankleshwar", "Bharuch", "Dahej", "Vapi", "Panoli", "Surat", "Vadodara", "Viramgam", "Morbi", "Maliya"],
  },
  {
    state: "Maharashtra",
    stateCode: "MH",
    cities: ["Mumbai (JNPT / Nhava Sheva)", "Pune"],
  },
  {
    state: "West Bengal",
    stateCode: "WB",
    cities: ["Kharagpur", "Haldia Port"],
  },
  {
    state: "Tripura",
    stateCode: "WT",
    cities: ["Agartala"],
  },
];

export const WORKING_PROCESS = [
  {
    step: "01",
    title: "Enquiry & Scope Definition",
    description: "Submit your inspection or cargo transport requirement. Our team analyzes technical specifications, vessel berth details, and timelines.",
  },
  {
    step: "02",
    title: "Surveyor & Resource Mobilization",
    description: "Certified marine surveyors or logistics coordinators are dispatched to the specific port, terminal, factory, or railway siding immediately.",
  },
  {
    step: "03",
    title: "On-Site Precision Execution",
    description: "Detailed draft measurements, ullage testing, lashing oversight, or cargo loading supervision conducted per international maritime codes.",
  },
  {
    step: "04",
    title: "Report Delivery & Certification",
    description: "Rapid delivery of comprehensive, legally sound technical inspection reports, photographic evidence, and official certificates.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "marine-inspections",
    slug: "marine-inspections",
    title: "Marine Inspections",
    shortDescription: "Comprehensive draft surveys, barge gauging, bunker audits, condition assessments, and hatch cover tightness testing.",
    fullDescription: "Our senior marine surveyors conduct thorough, impartial vessel surveys adhering strictly to international maritime safety codes and classification society standards. From accurate displacement calculations to hull damage appraisals, we deliver trustworthy documentation for vessel owners, charterers, and P&I clubs.",
    image: "/images/marine-inspections.jpg",
    features: [
      "Certified Master Mariners & Marine Engineers",
      "Impartial, legally admissible survey reports",
      "Immediate preliminary figures delivered on-site",
      "24/7 availability across all Indian ports and anchorages",
    ],
    subServices: [
      {
        title: "Draft Survey",
        description: "Accurate vessel displacement calculation before and after cargo loading/discharging to establish exact cargo weights, accounting for water density, trim, list, and ballast.",
      },
      {
        title: "Barge Gauging",
        description: "Precise sounding, ullage measurement, volume calibration, and trim corrections for flat-top and hopper barges operating along inland and coastal waterways.",
      },
      {
        title: "Bunker Surveys",
        description: "Independent bunker fuel quantity and quality surveys during on-hire, off-hire, and bunkering operations to prevent disputes and verify tank custody.",
      },
      {
        title: "Condition Surveys",
        description: "In-depth evaluations of vessel hull, deck machinery, cargo gear, navigation equipment, and seaworthiness for P&I Clubs, underwriters, and pre-purchase audits.",
      },
      {
        title: "Damage & Loss Assessments",
        description: "Forensic inspection and root-cause analysis of maritime accidents, collision damages, groundings, cargo contamination, and structural stress failures.",
      },
      {
        title: "Hatch Inspections",
        description: "Ultrasonic and chalk testing of cargo hatch covers, seals, coamings, and locking devices to guarantee weather-tightness prior to dry bulk loading.",
      },
    ],
  },
  {
    id: "liquid-cargo-inspections",
    slug: "liquid-cargo-inspections",
    title: "Liquid Cargo Inspections",
    shortDescription: "Precision ullage surveys, cargo custody transfer audits, bunker surveys, and chemical tank wall-wash cleanliness inspections.",
    fullDescription: "Handling bulk liquid commodities—including crude petroleum, refined fuels, chemicals, and edible oils—demands extreme precision. Our liquid cargo specialists utilize calibrated instruments to determine exact volumes, evaluate temperatures, monitor ship-to-shore transfers, and eliminate discrepancy claims.",
    image: "/images/liquid-cargo.jpg",
    features: [
      "Calibrated electronic gauging and precision temperature probes",
      "Wall-wash tests and chemical cleanliness validation",
      "Shore-tank versus vessel tank reconciliation",
      "Strict compliance with API MPMS, ASTM, and IP standards",
    ],
    subServices: [
      {
        title: "Ullage Survey",
        description: "Precision measurement of liquid cargo levels, free water detection, temperature logging, and volume calculations via approved vessel calibration tables.",
      },
      {
        title: "Loss Investigation",
        description: "Detailed investigation and forensic reconciliation of discrepancies between shore tank dispatch figures and vessel arrival / discharge receipts.",
      },
      {
        title: "Bunker Survey",
        description: "Custody transfer verification of marine fuel oils (VLSFO, LSMGO) delivered by bunker barges or shore pipelines, including representative drip sampling.",
      },
      {
        title: "Tank Inspections",
        description: "Pre-loading inspections of ship cargo tanks, heating coils, manifolds, and pumps, including wall-wash testing for chemical contamination and hydrocarbon vapor checks.",
      },
    ],
  },
  {
    id: "general-cargo-inspections",
    slug: "general-cargo-inspections",
    title: "General Cargo Inspections",
    shortDescription: "End-to-end supervision of breakbulk, steel coils, bagged goods, and manufactured freight from arrival to final hold stowage.",
    fullDescription: "Breakbulk and general cargo are particularly vulnerable to handling damage, moisture, and shifting at sea. Sarvoday Marine provides continuous dockside and onboard supervision to guarantee safe handling, correct stowage, and certified lashing according to the IMO Code of Safe Practice.",
    image: "/images/general-cargo.jpg",
    features: [
      "Continuous hatch-by-hatch tally and handling supervision",
      "Pre-shipment condition and packaging integrity checks",
      "Expert dunnage placement and weight distribution advice",
      "Issuance of signed lashing & stowage certificates",
    ],
    subServices: [
      {
        title: "Cargo Arrival Supervision",
        description: "Gate-in and quay-side inspection of cargo arriving at designated port terminals, warehouses, or factory premises to identify pre-existing transit damages.",
      },
      {
        title: "Physical Verification & Quality Check",
        description: "Visual inspection, packaging assessment, sampling, dimensions, and tally counting against shipping manifests and bill of lading documents.",
      },
      {
        title: "Loading / Discharge Supervision",
        description: "Onboard and onshore continuous monitoring of crane rigging, sling handling, and cargo placement to eliminate rough handling and accidental drops.",
      },
      {
        title: "Stowage Supervision",
        description: "Expert oversight of hold stowage, dunnage distribution, cargo segregation, and deck loading to preserve vessel stability and cargo integrity at sea.",
      },
      {
        title: "Lashing & Securing Supervision",
        description: "Detailed inspection of wire ropes, turnbuckles, chain binders, and web lashings with mathematical load calculations and issuance of lashing certificates.",
      },
    ],
  },
  {
    id: "project-odc",
    slug: "project-odc",
    title: "Project & ODC (Over Dimensional Cargo)",
    shortDescription: "Specialized engineering supervision, dimensional measurement, and heavy-lift sea-fastening inspection for massive industrial cargo.",
    fullDescription: "Over-dimensional cargo (ODC) and heavy project consignments—such as power turbines, industrial reactors, and refinery vessels—demand meticulous planning. Our specialized surveyors verify lifting points, calculate center of gravity, inspect multi-axle trailer lashing, and supervise barge/vessel load-outs.",
    image: "/images/project-odc.jpg",
    features: [
      "Technical calculations for acceleration forces & sea-fastening",
      "Laser and precision caliper dimensional verification",
      "Multi-axle hydraulic trailer and crane rigging oversight",
      "Factory-to-port multimodal transfer risk assessment",
    ],
    subServices: [
      {
        title: "Factory Inspection",
        description: "Pre-dispatch inspection at manufacturer premises to inspect lifting trunnions, center of gravity markings, structural integrity, and crate preservation.",
      },
      {
        title: "Loading Supervision",
        description: "Step-by-step engineering supervision during crane lifting, tandem lifts, roll-on/roll-off (Ro-Ro) operations, and placement on transport beds.",
      },
      {
        title: "Measurement",
        description: "Accurate 3D dimensional validation (length, width, height, projection clearances) against transport corridor permits and vessel stowage plans.",
      },
      {
        title: "Lashing & Securing Supervision",
        description: "Rigorous inspection of heavy-duty weld points, stopper brackets, turnbuckles, and high-tensile chains to ensure compliance with maritime warranty guidelines.",
      },
    ],
  },
  {
    id: "container-inspections",
    slug: "container-inspections",
    title: "Container Inspections",
    shortDescription: "Full lifecycle ISO container surveys, IICL condition checks, stuffing/de-stuffing tally, reefer PTI, and rake loading supervision.",
    fullDescription: "Operating across major Container Freight Stations (CFS), Inland Container Depots (ICD), Free Trade Warehousing Zones (FTWZ), and empty yards, our inspectors safeguard cargo and equipment integrity. We ensure structural compliance, temperature consistency for perishables, and secure lashing on rail flats.",
    image: "/images/container-inspections.jpg",
    features: [
      "IICL-certified container inspectors and structural surveyors",
      "Pre-Trip Inspection (PTI) and live temperature tracking for reefers",
      "Stuffing supervision with photo-documented seal integrity",
      "Dedicated oversight at CFS, ICD, FTWZ, and rail sidings",
    ],
    subServices: [
      {
        title: "Empty Container Inspection",
        description: "Thorough inspection of container floorboards, corner castings, crossmembers, side panels, and door gaskets per IICL standards before release for stuffing.",
      },
      {
        title: "Maintenance & Repair Inspection",
        description: "Detailed estimation and audit of container structural damage, repair quality verification, and cost-estimate auditing for shipping lines and leasing pools.",
      },
      {
        title: "Stuffing / De-stuffing Supervision",
        description: "Tally counting, cargo distribution, desiccant placement, dunnage securing, and photographic recording of container stuffing followed by high-security seal verification.",
      },
      {
        title: "Reefer Container Inspection",
        description: "Pre-Trip Inspection (PTI) of refrigeration machinery, temperature controller calibration, defrost cycles, ventilation louvers, and datalogger readout audits.",
      },
      {
        title: "Container Loading / Unloading",
        description: "Supervision of container loading and unloading onto container flat rakes (rail cars) and terminal trailers to prevent mishandling and impact damage.",
      },
      {
        title: "Lashing Certificate",
        description: "Rigorous inspection of cargo chocking, blocking, and strap tension inside containers, culminating in the issuance of an official lashing certificate.",
      },
    ],
  },
  {
    id: "cabotage-logistics",
    slug: "cabotage-logistics",
    title: "Cabotage Logistics Solutions",
    shortDescription: "Customer-focused domestic and regional freight logistics under the Sarvoday brand, linking coastal shipping, rail corridors, and road freight.",
    fullDescription: "Cabotage is a newly added, customer-centric service line delivered under the trusted Sarvoday Marine Services brand umbrella. We coordinate seamless cargo movement across India's domestic and regional trade corridors, combining deep maritime logistics acumen, technology-driven monitoring, and end-to-end operational transparency.",
    image: "/images/cabotage-logistics.jpg",
    features: [
      "Integrated under the trusted Sarvoday brand identity",
      "Multimodal optimization: coastal shipping, rail freight, and express trucking",
      "Cost-efficient domestic supply chain routing",
      "Real-time visibility and dedicated single-point account management",
    ],
    subServices: [
      {
        title: "Logistics & Transportation",
        description: "Comprehensive freight management services connecting Indian manufacturing hubs with coastal gateways and inland consumption centers.",
      },
      {
        title: "Domestic Cargo Movement",
        description: "Cost-effective, reliable domestic freight transit leveraging coastal vessel feeder routes, inland waterways, and container rakes.",
      },
      {
        title: "Regional Cargo Movement",
        description: "Specialized regional transport solutions tailored to time-critical and bulk industrial supply chains across Western, Southern, and Eastern India.",
      },
      {
        title: "End-to-End Logistics Solutions",
        description: "Full-service logistics orchestration including route feasibility analysis, multimodal transshipment, warehousing coordination, and delivery tracking.",
      },
    ],
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Marine Inspections", href: "/services/marine-inspections" },
      { label: "Liquid Cargo Inspections", href: "/services/liquid-cargo-inspections" },
      { label: "General Cargo Inspections", href: "/services/general-cargo-inspections" },
      { label: "Project & ODC", href: "/services/project-odc" },
      { label: "Container Inspections", href: "/services/container-inspections" },
      { label: "Cabotage Logistics Solutions", href: "/services/cabotage-logistics" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];
