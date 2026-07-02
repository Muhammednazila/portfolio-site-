import type { LucideIcon } from "lucide-react";
import { Network, Palette } from "lucide-react";

export type Strength = { icon: LucideIcon; title: string; description: string };
export type Milestone = { period: string; title: string; description: string };
export type Stat = { value: number; suffix?: string; label: string };

/**
 * About section content.
 * NOTE: no about-content.md was provided, so this is placeholder copy based on
 * your hero profile. Replace the summary, milestones, and especially the stat
 * NUMBERS with your real details.
 */
export const about = {
  eyebrow: "About Me",
  title: "Where thoughtful design meets solid engineering",
  summary: [
    "I'm a Product Designer with a Computer Science background, passionate about turning complex problems into simple, intuitive digital experiences. I combine design thinking with technical understanding to create solutions that are user centered, visually engaging, and practical to build.",
    "My process starts with understanding people, their needs, and the goals behind every product. Through research, wireframes, prototyping, and interface design, I create experiences that balance usability, functionality, and business impact.",
    "I enjoy collaborating with cross functional teams, learning continuously, and designing products that make a meaningful difference in people's everyday lives.",
  ],
  strengths: [
    { icon: Palette, title: "User-Centered Design", description: "Research-driven UI/UX that puts real user needs first, from wireframes to polished, accessible interfaces." },
    //{ icon: Smartphone, title: "Mobile Development", description: "Responsive, performant mobile apps built with care for platform conventions and smooth interactions." },
    //{ icon: Code2, title: "Front-End Engineering", description: "Turning designs into clean, maintainable code — closing the gap between design intent and implementation." },
    { icon: Network, title: "Systems & Networking", description: "A technical foundation in networking and IT support that grounds design decisions in how systems really work." },
  ] satisfies Strength[],
  journey: [
    { period: "Foundation", title: "HND Computer Science", description: "Built a strong base in software engineering, algorithms, and systems thinking." },
    { period: "Early Career", title: "UI/UX", description: "Started designing and building interfaces with a focus on usability" },
    { period: "Growth", title: "Mobile Development", description: "Expanded into mobile app development, shipping cross-platform products end to end." },
    { period: "Today", title: "Product Design", description: "Combining design and engineering to solve real business problems from concept to launch." },
  ] satisfies Milestone[],
  stats: [
    { value: 3, suffix: "+", label: "Years Experience" },
    //{ value: 20, suffix: "+", label: "Projects Delivered" },
    { value: 15, suffix: "+", label: "Technologies" },
    { value: 10, suffix: "+", label: "Happy Clients" },
  ] satisfies Stat[],
  technologies: [
    "Figma", "FlutterFlow", "Git", "Firebase", "Networking",
  ],
};
