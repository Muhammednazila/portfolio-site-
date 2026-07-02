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
export const apex: CaseStudy = {
  slug: "apex",

  title: "Apex Logistics",

  status: "Concept Project",

  category: "Logistics Mobile Application",

  overview:
    "Apex Logistics is a mobile application designed to streamline shipment management through real time tracking, driver assignment, and delivery monitoring. The project focused on improving operational visibility while simplifying logistics workflows for dispatchers and drivers.",

  problem:
    "Dispatchers managed shipments across spreadsheets and phone calls, with no real time visibility into fleet status or delivery exceptions.",

  solution:
    "Designed a mobile application for real time shipment tracking, driver assignment, live delivery status updates, and exception reporting to reduce manual coordination and improve operational efficiency.",

  role: [
    "Product Design",
    "UI Design",
    "UX Design",
    "Wireframing",
    "Prototyping",
    "Design System"
  ],

  technologies: [
    "Figma"
  ],

  process: [
    "Research",
    "User Flow Mapping",
    "Wireframing",
    "UI Design",
    "Interactive Prototype",
    "Usability Testing"
  ],

  challenges:
    "Balancing operational complexity with a clean interface while ensuring drivers and dispatchers could access important information quickly during deliveries.",

  outcome:
    "Produced a complete mobile logistics experience covering onboarding, shipment tracking, delivery status, destination management, and ride completion flows.",

  lessons:
    "The project strengthened my ability to simplify operational workflows into intuitive user experiences and reinforced the importance of information hierarchy in logistics products.",

  screenshots: [
    "/apex/splash_screen.png",
    "/apex/onboaading_screen_1.png",
    "/apex/onboaading_screen_2.png",
    "/apex/onboaading_screen_3.png",
    "/apex/user_dashboard.png",
    "/apex/ongoing_ride.png",
    "/apex/destination _2.png",
    "/apex/destination_3.png",
    "/apex/deliverd.png",
    "/apex/canceled_ride.png"
  ]
};