/**
 * Site-wide identity and contact details.
 * Single source of truth — used by the Header, Footer, Hero, and beyond.
 */
export const site = {
  name: "Muhammed Nazil Awwal",
  role: "Product Designer & Mobile App Developer",
  email: "muhammednazila@gmail.com",
  resumeUrl: "/resume.pdf", // TODO: add resume.pdf to /public
  socials: {
    github: "https://github.com/muhammednazila",
    linkedin: "https://linkedin.com/in/muhammednazila",
  },
} as const;
