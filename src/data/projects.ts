export type ProjectLinks = {
  /** Live demo URL — omit for projects with no public demo. */
  demo?: string;
  /** Source repository — omit if private. */
  github?: string;
  /** Case study page (resolves once routing + /work pages are added). */
  caseStudy: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** Cover image path (place in /public). null shows a monogram placeholder. */
  image: string | null;
  problem: string;
  solution: string;
  tech: string[];
  links: ProjectLinks;
};

/**
 * Featured projects.
 * NOTE: placeholder copy and example.com links — replace problem/solution,
 * tech, real demo/GitHub URLs, and add cover images in /public.
 */
export const projects: Project[] = [
  {
    slug: "mexchange",
    title: "Mexchange",
    category: "Fintech · Mobile App",
    image: "/mexchange-logo-white.png",
    problem:
      "Currency exchange and peer-to-peer transfers were fragmented across multiple apps, with opaque rates and slow settlement that frustrated users.",
    solution:
      "A single mobile app for real-time exchange and P2P transfers — transparent rates, instant quotes, and a streamlined KYC flow that cut onboarding time significantly.",
    tech: ["FlutterFlow", "Firebase", "Figma"],
    links: {
     // demo: "https://www.figma.com/design/gIvbF8s8IMl6WjtU7kYouK/MEX-EXCHANGE?node-id=187-861&t=Q5I3GyTdtt7Pm7zn-0",
      caseStudy: "/projects/mexchange",
    },
  },
  {
    slug: "apex-logistics",
    title: "Apex Logistics",
    category: "Logistics · Mobile App",
    image: "/apex-logistics-logo.png",
    problem:
      "Dispatchers managed shipments across spreadsheets and phone calls, with no real-time visibility into fleet status or delivery exceptions.",
    solution:
      "A mobile app for real-time shipment tracking, driver assignment, and live status updates — surfacing exceptions early and reducing manual coordination.",
    tech: ["Flutter", "Firebase", "Figma"],
    links: {
      // No public demo (internal enterprise tool) — Live Demo button is hidden.
      caseStudy: "/projects/apex-logistics",
    },
  },
  {
    slug: "giftgram",
    title: "Giftgram",
    category: "E-Commerce · Mobile App",
    image: null,
    problem:
      "Sending a thoughtful gift remotely meant juggling separate stores, delivery services, and messages — a clunky, impersonal experience.",
    solution:
      "A mobile app to discover, personalize, and send gifts in a few taps, with curated catalogs, scheduled delivery, and custom video messages.",
    tech: ["Figma"],
    links: {
      //demo: "https://example.com/giftgram",
      caseStudy: "/projects/giftgram",
    },
  },
];
