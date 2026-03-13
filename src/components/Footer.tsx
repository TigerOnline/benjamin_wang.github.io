"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 mt-16 border-t border-zinc-200 dark:border-zinc-800">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        © Benjamin Wang {year}
      </p>
    </footer>
  );
}
