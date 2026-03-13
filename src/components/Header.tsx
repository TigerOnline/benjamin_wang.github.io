"use client";

export function Header() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const links = [
    { name: "github", href: "https://github.com" },
    { name: "linkedin", href: "https://www.linkedin.com/in/benjamin--wang/" },
    { name: "resume", href: "#" },
    { name: "cv", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-background/80 border-b border-zinc-200/50 dark:border-zinc-800/50">
      <nav className="flex items-center gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors capitalize"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <button
        onClick={toggleTheme}
        className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        aria-label="Toggle dark mode"
      >
        Dark mode
      </button>
    </header>
  );
}
