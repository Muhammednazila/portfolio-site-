import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";

/**
 * HomePage — composes the homepage sections in order.
 * Sections are added here phase by phase (Skills, Projects, …).
 */
export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
