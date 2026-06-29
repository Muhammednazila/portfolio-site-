export type CaseStudy = {
  slug: string;
  title: string;
  status: string;
  category: string;
  overview: string;
  problem: string;
  solution: string;
  role: string[];
  technologies: string[];
  process: string[];
  challenges: string;
  outcome: string;
  lessons: string;
  screenshots: string[];
};

export const mexchange: CaseStudy = {
  slug: "mexchange",

  title: "Mexchange",

  status: "In Production",

  category: "Fintech Mobile Application",

  overview:
    "Mexchange is a fintech startup focused on simplifying currency exchange and peer to peer money transfers through a secure mobile application. The platform is currently in active production.",

  problem:
    "Traditional exchange services require users to depend on physical agents or messaging platforms, resulting in slow transactions, inconsistent exchange rates, and fragmented user experiences.",

  solution:
    "Designed and developed a modern mobile experience that centralizes wallet management, currency exchange, peer to peer transfers, KYC verification, and transaction history into one intuitive application.",

  role: [
    "Product Design",
    "UI Design",
    "UX Design",
    "FlutterFlow Frontend Development",
    "Prototyping",
    "Design System",
    "Developer Collaboration",
  ],

  technologies: [
    "FlutterFlow",
    "Firebase",
    "Figma",
  ],

  process: [
    "Research",
    "User Flow Mapping",
    "Wireframing",
    "UI Design",
    "Interactive Prototype",
    "Frontend Development",
    "Testing",
  ],

  challenges:
    "Creating a secure fintech experience while keeping the user interface simple and intuitive. The project also required continuous collaboration with backend developers throughout implementation.",

  outcome:
    "Delivered a production ready frontend that includes authentication, wallet management, currency exchange, KYC verification, peer to peer transfers, notifications, and transaction history.",

  lessons:
    "This project strengthened my experience designing fintech products, building scalable interfaces in FlutterFlow, and collaborating closely with backend engineers.",

  screenshots: [
    "/screenshots/mexchange/login.png",
    "/screenshots/mexchange/dashboard.png",
    "/screenshots/mexchange/wallet.png",
    "/screenshots/mexchange/exchange.png",
  ],
};