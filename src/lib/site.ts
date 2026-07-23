export const site = {
  name: "Velasum Ventures Limited",
  shortName: "Velasum Ventures",
  tagline: "Building businesses that raise the standard",
  description:
    "A Zambian investment holding company. We build and hold operating businesses in logistics, laboratory quality, and precision measurement — sectors where getting it right is not optional.",
  url: "https://www.velasumventures.com",
  email: "info@velasumventures.com",
  companyNumber: "120261050369",
  incorporated: "2026, Lusaka, Zambia",
  companyType: "Private company limited by shares",
  registeredOffice:
    "Office 123, 2nd Floor, Elunda Spaces, Corner Chikwa Road & Los Angeles Boulevard, Longacres, Lusaka, Zambia",
  location: "Lusaka, Zambia",
  financialYearEnd: "31 March",
  registeredActivities:
    "Activities of holding companies (ISIC 6420); Head office activities (ISIC 7010); Business support services (ISIC 8299)",
  founderImage: "/images/vernon-musale.jpg",
};

export const principles = [
  {
    title: "Operating, not passive",
    body: "We build and run businesses alongside management. Our model is active involvement and long-term ownership, not periodic board oversight.",
  },
  {
    title: "Standards-led",
    body: "Each holding operates under or toward recognised international standards — because the sectors we serve leave no room for ambiguity.",
  },
  {
    title: "Partnership-based",
    body: "Every company in our portfolio was built through partnership with domain specialists who have operated in their sector for years.",
  },
  {
    title: "Long-term",
    body: "We are not a fund with a fixed horizon. Our model is permanent ownership and compounding operational excellence over time.",
  },
];

export const holdings = [
  {
    sector: "Logistics & Fleet Technology",
    name: "Velasum Logistics",
    body: "A road freight and fleet technology business operating in Zambia. Velasum Logistics provides GPS tracking, telematics, fleet management, and courier services — giving businesses that depend on road transport real-time visibility and operational control over their fleets.",
    meta: "Operating since 2022 · Wholly owned",
    href: null as string | null,
    linkLabel: null as string | null,
  },
  {
    sector: "Laboratory Quality & Diagnostics",
    name: "AfriQA Labs",
    body: "AfriQuality Labs Limited operates AfriQA Labs, delivering External Quality Assessment programmes to diagnostic laboratories across Southern Africa. Working in partnership with One World Accuracy and powered by the OASYS platform, the company offers eight EQA programmes covering infectious disease testing — designed for Africa's laboratory landscape.",
    meta: "AfriQuality Labs Limited · Wholly owned",
    href: "https://www.afriqalabs.com",
    linkLabel: "afriqalabs.com →",
  },
  {
    sector: "Precision Measurement",
    name: "Veritas Calibration Lab",
    body: "Veritas Calibration Lab Limited provides traceable calibration services for medical and laboratory equipment, established as a 50/50 joint venture between Velasum Ventures Limited and MTS Lab Limited of Kenya. The company is working toward ISO/IEC 17025 accreditation through SADCAS.",
    meta: "50/50 joint venture with MTS Lab Limited (Kenya)",
    href: "https://veritascalibrationlab.com",
    linkLabel: "veritascalibrationlab.com →",
  },
];

export const registerRows = [
  { label: "Registered name", value: site.name },
  { label: "Company registration number", value: site.companyNumber },
  { label: "Incorporated", value: site.incorporated },
  { label: "Company type", value: site.companyType },
  { label: "Registered office", value: site.registeredOffice },
  { label: "Financial year end", value: site.financialYearEnd },
  { label: "Registered activities", value: site.registeredActivities },
];
