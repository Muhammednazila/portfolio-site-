export type EducationItem = {
  degree: string;
  institution: string;
  graduationYear: string;
  location: string;
  coursework: string[];
  honors?: string;
};

/**
 * Education.
 * NOTE: realistic placeholders (not lorem ipsum). Replace institution names,
 * years, locations, coursework, and honors with your real record — do not ship
 * the fictional institution names below.
 */
export const education: EducationItem[] = [
  {
    degree: "Higher National Diploma (HND), Computer Science ",
    institution: "Kaduna Polytechnic",
    graduationYear: "2024",
    location: "Kaduna, Nigeria",
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Human-Computer Interaction",
      "Database Systems",
      "Computer Networks",
      "Web Development",
    ],
    honors: "Second Class Upper (Upper Credit)",
  },
  {
    degree: "National Diploma (ND), Computer Science",
    institution: "Kaduna Polytechnic",
    graduationYear: "2021",
    location: "Kaduna, Nigeria",
    coursework: [
      "Programming Fundamentals",
      "Object-Oriented Design",
      "Operating Systems",
      "Mobile Application Development",
    ],
  },
];
