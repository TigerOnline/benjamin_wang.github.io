"use client";

const SECTIONS = [
  { id: "bio", label: "bio" },
  { id: "work", label: "work" },
  { id: "research", label: "research" },
  { id: "teaching", label: "teaching" },
  { id: "projects", label: "projects" },
  { id: "coursework", label: "coursework" },
  { id: "contact", label: "contact" },
] as const;

export function MobileNav() {
  return (
    <nav className="lg:hidden flex flex-wrap gap-x-4 gap-y-2 mt-6 mb-8">
      {SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="text-sm text-zinc-500 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
