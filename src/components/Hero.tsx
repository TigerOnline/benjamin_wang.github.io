"use client";

import Image from "next/image";

export function Hero({
  name = "your name",
  subtitle = "your field @ your school",
  imageSrc,
}: {
  name?: string;
  subtitle?: string;
  imageSrc?: string;
}) {
  return (
    <section className="pt-24 pb-12 flex flex-col sm:flex-row sm:items-start gap-6">
      <div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2 animate-fade-in opacity-0 animate-fade-in-delay-1">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in opacity-0 animate-fade-in-delay-2 capitalize">
          {name}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 animate-fade-in opacity-0 animate-fade-in-delay-3">
          {subtitle}
        </p>
      </div>
      {imageSrc && (
        <div className="shrink-0">
          <Image
            src={imageSrc}
            alt="Benjamin Wang"
            width={160}
            height={160}
            unoptimized
            className="rounded-full object-cover aspect-square border-2 border-zinc-200 dark:border-zinc-700"
          />
        </div>
      )}
    </section>
  );
}
