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

export function SideNav() {
  return (
    <nav className="sticky top-28 hidden lg:block w-48 shrink-0">
      <ul className="space-y-1 text-sm">
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-zinc-500 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
