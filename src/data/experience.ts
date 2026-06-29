export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  current?: boolean;
  achievements: string[];
};

/**
 * Professional experience.
 * NOTE: these are realistic, professionally-written entries based on your
 * profile — NOT lorem ipsum, but still placeholders. Replace the company
 * names, dates, locations, and achievements with your real history.
 */
export const experience: ExperienceItem[] = [
  {
    company: "National Youth Service Corps (NYSC) | Government Day Secondary School",
    role: "Corp Member — ICT Teacher ",
    duration: "June 2025 — July 2026",
    location: "Badarawa Kaduna, Nigeria",
    //current: true,
    achievements: [
      "Delivered Computer Science and ICT instruction to secondary school students, building digitalliteracy and foundational technical skills.",
      "Supported curriculum and academic programme development, contributing to school improvement initiatives.",
      "Demonstrated leadership, structured communication, and community engagement through national service commitments.",
    ],
  },
  {
    company: "International Organization of Tijaniyya Brothers (IOTB), Nigeria",
    role: "Product Design Intern",
    duration: "May 2023 — December 2023",
    location: "Remote",
    achievements: [
      "Produced wireframes and interactive prototypes to communicate design concepts clearly to stakeholders and development teams.",
      "Conducted usability testing and iterated on designs based on user feedback to improve overall user experience.",
      "Collaborated cross-functionally with developers to ensure accurate and faithful implementation of approved design specifications.",
    ],
  },
  {
    company: "National Identity Management Commission (NIMC), Nigeria",
    role: "Network Security Intern",
    duration: "September 2021 — March2022",
    location: "NIMC Headquarters, Abuja, Nigeria",
    achievements: [
      "Managed software installations, configurations, and system updates to maintain stable operations across all departments.",
      "Performed routine hardware and software maintenance to sustain consistent system availability organisation-wide.",
      "Installed LAN infrastructure and configured network devices and communication protocols to ensure stable and secure connectivity.",
    ],
  },
   {
    company: "National Information Technology Development Agency (NITDA), Nigeria",
    role: "Cyber Security Intern",
    duration: "December 2019 — March 2020",
    location: "NITDA Headquarters, Abuja, Nigeria",
    achievements: [
      "Assisted in hardware maintenance and repair operations to ensure optimal computer system performance across the agency.",
      "Supported software installations, configurations, and updates within a large-scale government IT environment.",
      "Reviewed IT operations and produced structured reports with actionable recommendations for process and performance improvements.",
    ],
  },
];
