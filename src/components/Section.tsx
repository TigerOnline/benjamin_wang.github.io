"use client";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-32 py-12 border-t border-zinc-200 dark:border-zinc-800"
    >
      <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-6">
        {title}
      </h2>
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400 [&_a]:text-foreground dark:[&_a]:text-zinc-100 [&_a]:underline-offset-4 hover:[&_a]:underline">
        {children}
      </div>
    </section>
  );
}
