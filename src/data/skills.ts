import type { LucideIcon } from "lucide-react";
import {Network, Palette, Smartphone, Wrench } from "lucide-react";

/** A single skill. `level` (0-100) is optional — omit it to render a plain badge. */
export type Skill = { name: string; level?: number };
export type SkillCategory = { title: string; icon: LucideIcon; skills: Skill[] };

/**
 * Skills grouped by category.
 * NOTE: proficiency levels are placeholders — set them to your own honest
 * self-assessment, or remove `level` from a skill to show it as a plain badge.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Product Design",
    icon: Palette,
    skills: [
      { name: "UI/UX Design", level: 90 },
      { name: "Wireframing", level: 88 },
      { name: "Prototyping", level: 85 },
      { name: "Design Systems", level: 82 },
      { name: "User Research", level: 78 },
    ],
  },
  {
    title: "IT, Networking & Security",
    icon: Smartphone,
    skills: [
      { name: "Computer Networking", level: 62 },
      //{ name: "React Native", level: 84 },
      { name: "Hardware Maintenance & Repair", level: 87 },
      //{ name: "App Deployment", level: 80 },
    ],
  },
  /**{
    title: "Tools & Platforms",
    icon: Network,
    skills: [
      { name: "Figma", level: 82 },
      { name: "Microsoft Office Suite", level: 90 },
     // { name: "Network Security", level: 72 },
      //{ name: "Troubleshooting", level: 85 },
    ],
  },*/
 /**{
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 84 },
      { name: "Dart", level: 80 },
      { name: "Python", level: 75 },
      { name: "HTML & CSS", level: 92 },
    ],
  },*/
  {
    title: "Tools & Platforms",
    icon: Wrench,
    // No levels here — these render as plain badges (the optional bars, off).
    skills: [
      { name: "Figma" },
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Firebase" },
     // { name: "Vercel" },
      //{ name: "Notion" },
    ],
  },
];
