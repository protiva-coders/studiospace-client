"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  Sparkles,
  Star,
} from "lucide-react";

const slides = [
  {
    id: "photography",
    eyebrow: "2,000+ spaces booked this month",
    titleStart: "Find the perfect space for your ",
    titleHighlight: "creative vision.",
    titleEnd: "",
    description:
      "From sunlit photo lofts to fully equipped sound stages, discover and book inspiring creative spaces by the hour — without the back-and-forth.",
    image: "/studios/hero-daylight-loft.svg",
    alt: "Sunlit photography loft with large windows and a camera on a tripod",
    category: "Photography",
    caption: "The Daylight Loft · Brooklyn",
  },
  {
    id: "film",
    eyebrow: "Production-ready sound stages",
    titleStart: "Book a sound stage that’s ",
    titleHighlight: "ready for action.",
    titleEnd: "",
    description:
      "Pre-lit stages, green screens and loading docks. Find production-ready spaces with the crew, kit and space your next shoot deserves.",
    image: "/studios/hero-frequency-stage.svg",
    alt: "Dark film sound stage with overhead lights and a camera on a tripod",
    category: "Film & video",
    caption: "Frequency Sound Stage · Los Angeles",
  },
  {
    id: "music",
    eyebrow: "Music & podcast rooms",
    titleStart: "Turn up the volume on your ",
    titleHighlight: "next project.",
    titleEnd: "",
    description:
      "Acoustically treated rooms, professional microphones and engineers on call. Book a studio that sounds as good as your ideas.",
    image: "/studios/hero-velvet-note.svg",
    alt: "Moody music studio with a grand piano, warm pendant lights and a waveform",
    category: "Music studio",
    caption: "Velvet Note Music Suite · Berlin",
  },
];

const avatars = [
  { initials: "AM", color: "from-amber-400 to-orange-500" },
  { initials: "JK", color: "from-sky-400 to-indigo-500" },
  { initials: "LT", color: "from-lime-400 to-emerald-500" },
  { initials: "RS", color: "from-violet-400 to-fuchsia-500" },
];

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-sm font-bold text-gray-950 shadow-sm transition hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-400/40";

const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-900 transition hover:border-lime-400 hover:text-lime-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-400/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-lime-400 dark:hover:text-lime-300";

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = slides[active];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured studio inspiration"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="grid items-center gap-10 py-12 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-16">
        <div
          key={`copy-${slide.id}`}
          className="animate-in fade-in duration-500"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/70 bg-lime-50 px-3.5 py-1.5 text-xs font-bold text-lime-800 dark:border-lime-400/20 dark:bg-lime-400/10 dark:text-lime-300">
            <Sparkles size={14} />
            {slide.eyebrow}
          </span>

          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-5xl xl:text-6xl dark:text-white">
            {slide.titleStart}
            <span className="relative inline-block">
              <span className="relative z-10">{slide.titleHighlight}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 z-0 h-3 -rotate-1 rounded-sm bg-lime-300/70 dark:bg-lime-400/25"
              />
            </span>
            {slide.titleEnd}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 dark:text-gray-300">
            {slide.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/studios" className={primaryButton}>
              Explore Studios
              <ArrowRight size={17} />
            </Link>
            <Link href="/register" className={secondaryButton}>
              Host Your Space
              <PlusCircle size={17} />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2">
              {avatars.map((avatar) => (
                <span
                  key={avatar.initials}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br text-[10px] font-bold text-white dark:border-gray-950 ${avatar.color}`}
                >
                  {avatar.initials}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={13}
                    className="fill-lime-500 text-lime-500"
                  />
                ))}
                <span className="ml-1.5 text-xs font-bold text-gray-900 dark:text-white">
                  4.9/5
                </span>
              </div>
              <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                from 1,200+ verified creator reviews
              </p>
            </div>
          </div>
        </div>

        <div className="relative mb-6 min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-xl shadow-gray-900/10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/40">
            <Image
              key={`image-${slide.id}`}
              src={slide.image}
              alt={slide.alt}
              fill
              unoptimized
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="animate-in fade-in object-cover duration-700"
            />

            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-gray-900 shadow-sm backdrop-blur dark:bg-gray-950/85 dark:text-white">
              <BadgeCheck size={14} className="text-lime-500" />
              Verified studio
            </span>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-5 pt-16">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-lime-300">
                {slide.category}
              </p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                {slide.caption}
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 right-4 hidden items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-xl shadow-gray-900/10 sm:right-6 sm:flex dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/40">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 text-gray-950">
              <Star size={16} className="fill-gray-950" />
            </span>
            <div>
              <p className="text-sm font-bold text-gray-950 dark:text-white">
                4.9 out of 5
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">
                1,200+ verified reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-gray-200 pt-6 dark:border-gray-800">
        <div className="flex items-center gap-2">
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show slide ${index + 1}: ${item.category}`}
              aria-current={active === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 ${
                active === index
                  ? "w-8 bg-lime-500 dark:bg-lime-400"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
              }`}
            />
          ))}
          <span className="ml-2 text-xs font-semibold tabular-nums text-gray-500 dark:text-gray-400">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-lime-400 hover:text-lime-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-lime-400 dark:hover:text-lime-300"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-lime-400 hover:text-lime-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-lime-400 dark:hover:text-lime-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
