import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — merge conditional class names and resolve Tailwind conflicts.
 *
 * clsx handles conditional/array/object class inputs; tailwind-merge then
 * dedupes conflicting Tailwind utilities so the LAST one wins. This is what
 * makes every component's `className` prop a true override:
 *
 *   <Button className="px-10" />   // px-10 beats the component's default px-6
 *
 * Without tailwind-merge both `px-6` and `px-10` would land in the class list
 * and the winner would depend on stylesheet order — fragile and surprising.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
