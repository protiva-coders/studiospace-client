import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Camera,
  ChevronDown,
  Clapperboard,
  Headphones,
  MapPin,
  Mic,
  Music4,
  Palette,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { HeroSlider } from "@/components/home/hero-slider";
import { StudioCard } from "@/components/home/studio-card";
import { demoStudios } from "@/lib/demo-studios";

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-sm font-bold text-gray-950 shadow-sm transition hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-400/40";

const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-900 transition hover:border-lime-400 hover:text-lime-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-400/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-lime-400 dark:hover:text-lime-300";

const categories = [
  {
    name: "Photo Studios",
    slug: "photo-studios",
    count: 248,
    icon: Camera,
    tint: "bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300",
  },
  {
    name: "Sound Stages",
    slug: "sound-stages",
    count: 96,
    icon: Clapperboard,
    tint: "bg-sky-100 text-sky-700 dark:bg-sky-400/15 dark:text-sky-300",
  },
  {
    name: "Podcast Rooms",
    slug: "podcast-rooms",
    count: 142,
    icon: Mic,
    tint: "bg-violet-100 text-violet-700 dark:bg-violet-400/15 dark:text-violet-300",
  },
  {
    name: "Music Suites",
    slug: "music-suites",
    count: 118,
    icon: Music4,
    tint: "bg-rose-100 text-rose-700 dark:bg-rose-400/15 dark:text-rose-300",
  },
  {
    name: "Art Workshops",
    slug: "art-workshops",
    count: 87,
    icon: Palette,
    tint: "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300",
  },
];

const studioFilters = [
  { label: "All spaces", slug: "" },
  { label: "Photo studios", slug: "photo-studios" },
  { label: "Sound stages", slug: "sound-stages" },
  { label: "Podcasts", slug: "podcast-rooms" },
  { label: "Music", slug: "music-suites" },
];

const stats = [
  { value: "850+", label: "Curated studios" },
  { value: "12k+", label: "Bookings completed" },
  { value: "40+", label: "Cities worldwide" },
  { value: "4.9/5", label: "Average rating" },
];

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Search by city, creative category and date, then compare photos, amenities and hourly rates side by side.",
    icon: Search,
  },
  {
    number: "02",
    title: "Choose a time",
    description:
      "Pick the hours that fit your shoot, session or workshop. Availability updates in real time.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Book securely",
    description:
      "Check out with transparent pricing and instant confirmation. Covered by our host guarantee.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Create",
    description:
      "Show up, get the keys and make something great. Our support team is on hand if you need anything.",
    icon: Sparkles,
  },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Liability protection",
    description:
      "Every booking is covered by up to $2M in liability protection, so both creators and hosts can work with confidence.",
  },
  {
    icon: BadgeCheck,
    title: "Verified profiles",
    description:
      "Hosts and creators confirm their identity before booking. Every listing is toured and approved by our team.",
  },
  {
    icon: Wrench,
    title: "Equipment safety",
    description:
      "Gear is checked on arrival and protected during your booking. Report an issue and we help sort it within hours.",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    description:
      "Real humans on call around the clock, from last-minute access questions to rescheduling a session.",
  },
];

const testimonials = [
  {
    quote:
      "We found a sound stage, booked it and were shooting the next morning. The whole process took less time than ordering lunch.",
    name: "Maya Chen",
    role: "Filmmaker · Los Angeles",
    initials: "MC",
    color: "from-sky-400 to-indigo-500",
  },
  {
    quote:
      "The natural light in the Daylight Loft was unreal. Clear photos, honest amenities and a host who actually replies fast.",
    name: "Idris Rahman",
    role: "Photographer · Dhaka",
    initials: "IR",
    color: "from-amber-400 to-orange-500",
  },
  {
    quote:
      "I listed my podcast room on a Tuesday and had my first three bookings by the weekend. The host dashboard makes it effortless.",
    name: "Sofia Almeida",
    role: "Studio host · Lisbon",
    initials: "SA",
    color: "from-rose-400 to-fuchsia-500",
  },
];

const faqs = [
  {
    question: "How do I book a studio?",
    answer:
      "Search by location, category and date, then open the studio you like. Pick a time slot and check out securely. Spaces marked “Instant book” are confirmed immediately; others reply within a few hours.",
  },
  {
    question: "What is included in the hourly rate?",
    answer:
      "Each listing shows exactly what comes with the space, from lighting and backdrops to microphones and furniture. Anything extra, like an engineer or equipment rental, is listed as an add-on before you pay.",
  },
  {
    question: "Can I visit a space before booking?",
    answer:
      "Yes. Message the host from any studio page and arrange a walkthrough. Many hosts also offer short intro calls if you are booking from another city.",
  },
  {
    question: "What happens if my plans change?",
    answer:
      "You can cancel free of charge up to 48 hours before your booking starts. Inside 48 hours, the host’s cancellation policy applies and is always shown before checkout.",
  },
  {
    question: "How do I list my own studio?",
    answer:
      "Create a host account, add photos and details, and set your availability and hourly price. Our team reviews every listing within two business days before it goes live.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_78%)] dark:opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.28) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-lime-300/35 blur-3xl dark:bg-lime-500/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/5"
        />

        <div className={`relative ${container}`}>
          <HeroSlider />

          <form
            action="/studios"
            method="get"
            className="mt-10 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-gray-900/5 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/40"
          >
            <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto]">
              <label className="flex items-center gap-2.5 rounded-xl px-3 py-3 transition focus-within:bg-gray-50 dark:focus-within:bg-gray-800/60">
                <MapPin size={18} className="shrink-0 text-gray-400" />
                <span className="sr-only">Location</span>
                <input
                  type="text"
                  name="location"
                  placeholder="City or neighborhood"
                  className="w-full min-w-0 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500"
                />
              </label>

              <div className="relative flex items-center gap-2.5 rounded-xl px-3 py-3 transition focus-within:bg-gray-50 dark:focus-within:bg-gray-800/60">
                <Camera size={18} className="shrink-0 text-gray-400" />
                <select
                  name="category"
                  defaultValue=""
                  aria-label="Studio type"
                  className="w-full min-w-0 appearance-none bg-transparent pr-5 text-sm text-gray-900 outline-none dark:text-white dark:[color-scheme:dark]"
                >
                  <option value="">Any studio type</option>
                  {categories.map((category) => (
                    <option key={category.slug} value={category.slug}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 text-gray-400"
                />
              </div>

              <label className="flex items-center gap-2.5 rounded-xl px-3 py-3 transition focus-within:bg-gray-50 dark:focus-within:bg-gray-800/60">
                <CalendarDays size={18} className="shrink-0 text-gray-400" />
                <span className="sr-only">Date</span>
                <input
                  type="date"
                  name="date"
                  className="w-full min-w-0 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:[color-scheme:dark]"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-bold text-gray-950 transition hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-400/40"
              >
                <Search size={18} />
                Search
              </button>
            </div>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2 pb-12 sm:pb-16">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
              Popular:
            </span>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/studios?category=${category.slug}`}
                className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 transition hover:border-lime-400 hover:text-lime-700 dark:border-gray-800 dark:text-gray-300 dark:hover:border-lime-400 dark:hover:text-lime-300"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/40">
        <div className={`${container} grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:grid-cols-4 sm:divide-x sm:divide-gray-200 sm:py-12 dark:divide-gray-800`}>
          {stats.map((stat) => (
            <div key={stat.label} className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <p className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl dark:text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured studios */}
      <section
        id="featured-studios"
        className="bg-white py-16 sm:py-20 lg:py-24 dark:bg-gray-950"
      >
        <div className={container}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-600 dark:text-lime-400">
                Handpicked spaces
              </p>
              <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-gray-950 sm:text-4xl dark:text-white">
                Featured studios
              </h2>
              <p className="mt-4 text-pretty text-base leading-7 text-gray-600 dark:text-gray-300">
                Six of the most-loved spaces on StudioSpace right now, chosen
                for their light, kit and hosts who go the extra mile.
              </p>
            </div>

            <Link
              href="/studios"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-gray-900 transition-colors hover:text-lime-600 dark:text-white dark:hover:text-lime-400"
            >
              Browse all studios
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {studioFilters.map((filter, index) => (
              <Link
                key={filter.label}
                href={
                  filter.slug
                    ? `/studios?category=${filter.slug}`
                    : "/studios"
                }
                className={
                  index === 0
                    ? "rounded-full bg-gray-950 px-4 py-2 text-xs font-bold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
                    : "rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 transition hover:border-lime-400 hover:text-lime-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-lime-400 dark:hover:text-lime-300"
                }
              >
                {filter.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {demoStudios.map((studio) => (
              <StudioCard key={studio.id} studio={studio} />
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:hidden">
            <Link href="/studios" className={secondaryButton}>
              Explore all 850+ studios
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20 dark:border-gray-800 dark:bg-gray-900/40"
      >
        <div className={container}>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-600 dark:text-lime-400">
              Browse by category
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-gray-950 sm:text-4xl dark:text-white">
              Find your kind of space
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-gray-600 dark:text-gray-300">
              Wherever your next project lives — behind a lens, a microphone or
              a pottery wheel — there is a space built for it.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.slug}
                  href={`/studios?category=${category.slug}`}
                  className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-lg hover:shadow-gray-900/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400 dark:hover:shadow-black/30"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${category.tint}`}
                  >
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-950 dark:text-white">
                      {category.name}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                      {category.count} spaces
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 dark:bg-gray-950">
        <div className={container}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-600 dark:text-lime-400">
              How booking works
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-gray-950 sm:text-4xl dark:text-white">
              From inspiration to booked in four steps
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-gray-600 dark:text-gray-300">
              No emails back and forth, no surprise invoices. Just the right
              space, ready when inspiration strikes.
            </p>
          </div>

          <div className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-gray-200 lg:block dark:border-gray-800"
            />

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative text-center">
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white">
                    <Icon size={24} />
                    <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-lime-400 px-1 text-[10px] font-black text-gray-950">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-gray-950 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/how-it-works" className={secondaryButton}>
              Learn how booking works
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Host guarantee & creator support */}
      <section
        id="host-guarantee"
        className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20 lg:py-24 dark:border-gray-800 dark:bg-gray-900/40"
      >
        <div
          className={`${container} grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16`}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-600 dark:text-lime-400">
              Peace of mind
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-gray-950 sm:text-4xl dark:text-white">
              Host guarantee &amp; creator support
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-gray-600 dark:text-gray-300">
              Every booking on StudioSpace is backed by real protection and real
              people. Hosts list with confidence, creators book knowing they are
              covered from checkout to wrap.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Covered from the first hour to the last",
                "Identity checks on hosts and creators",
                "Human support around the clock",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400 text-gray-950">
                    <BadgeCheck size={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/how-it-works" className={primaryButton}>
                See how it works
                <ArrowRight size={17} />
              </Link>
              <a
                href="mailto:support@studiospace.com"
                className="flex items-center gap-2 text-xs font-semibold text-gray-600 transition hover:text-lime-700 dark:text-gray-300 dark:hover:text-lime-300"
              >
                <Headphones
                  size={16}
                  className="text-lime-600 dark:text-lime-400"
                />
                support@studiospace.com
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <Users size={16} className="text-lime-600 dark:text-lime-400" />
              Trusted by 12,000+ creators and 850+ hosts
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {guarantees.map((guarantee) => {
              const Icon = guarantee.icon;

              return (
                <div
                  key={guarantee.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-900/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-black/30"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-100 text-lime-700 dark:bg-lime-400/15 dark:text-lime-300">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-gray-950 dark:text-white">
                    {guarantee.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-6 text-gray-600 dark:text-gray-400">
                    {guarantee.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 dark:bg-gray-950">
        <div className={container}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-600 dark:text-lime-400">
              Creator stories
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-gray-950 sm:text-4xl dark:text-white">
              Loved by the people who make things
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-gray-600 dark:text-gray-300">
              Photographers, filmmakers, podcasters and hosts — here is what
              they say after booking their first space.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        className="fill-lime-500 text-lime-500"
                      />
                    ))}
                  </div>
                  <Quote
                    size={22}
                    className="text-lime-500/60"
                    aria-hidden="true"
                  />
                </div>

                <blockquote className="mt-4 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  “{testimonial.quote}”
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white ${testimonial.color}`}
                  >
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-950 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Host CTA */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-24 dark:bg-gray-950">
        <div className={container}>
          <div className="relative overflow-hidden rounded-3xl bg-gray-950 px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-lime-400/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3.5 py-1.5 text-xs font-bold text-lime-300">
                  <Zap size={14} />
                  For studio owners
                </span>

                <h2 className="mt-5 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Host Your Space
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-sm leading-7 text-gray-300 sm:text-base">
                  Turn your studio, loft or workshop into a booking machine.
                  Join 850+ hosts earning on their own schedule while we handle
                  discovery, payments and support.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/register" className={primaryButton}>
                    Host Your Space
                    <ArrowRight size={17} />
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    How hosting works
                    <ArrowUpRight size={17} />
                  </Link>
                </div>

                <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-gray-400">
                  <li className="flex items-center gap-1.5">
                    <BadgeCheck size={14} className="text-lime-400" />
                    No listing fees
                  </li>
                  <li className="flex items-center gap-1.5">
                    <BadgeCheck size={14} className="text-lime-400" />
                    Secure payouts
                  </li>
                  <li className="flex items-center gap-1.5">
                    <BadgeCheck size={14} className="text-lime-400" />
                    Host support 24/7
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Estimated monthly earnings
                </p>
                <div className="mt-2 flex flex-wrap items-end justify-between gap-2">
                  <p className="text-4xl font-black tracking-tight text-white">
                    $1,840
                  </p>
                  <p className="flex items-center gap-1 rounded-full bg-lime-400/15 px-2.5 py-1 text-xs font-bold text-lime-300">
                    <TrendingUp size={13} />
                    18% this month
                  </p>
                </div>
                <p className="mt-1 text-xs text-gray-400">
                  Based on 32 booked hours at $65/hour
                </p>

                <div className="mt-6 flex h-24 items-end gap-2">
                  {[36, 52, 44, 70, 58, 86, 100].map((height, index) => (
                    <div
                      key={index}
                      className={`flex-1 rounded-t-md ${
                        index === 6
                          ? "bg-lime-400"
                          : "bg-lime-400/25"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="mt-3 flex justify-between text-[10px] font-medium uppercase tracking-wider text-gray-500">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-lg font-bold text-white">0%</p>
                    <p className="text-[11px] text-gray-400">Listing fees</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">24h</p>
                    <p className="text-[11px] text-gray-400">Payout time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 sm:py-20 lg:py-24 dark:border-gray-800 dark:bg-gray-900/40">
        <div
          className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-600 dark:text-lime-400">
              Good to know
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-gray-950 sm:text-4xl dark:text-white">
              Questions, answered
            </h2>
            <p className="mt-4 text-pretty text-sm leading-7 text-gray-600 dark:text-gray-300">
              Everything you need to know about booking a space or hosting
              your own. Still curious? We are one message away.
            </p>
            <a
              href="mailto:support@studiospace.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gray-900 underline-offset-4 hover:text-lime-600 hover:underline dark:text-white dark:hover:text-lime-400"
            >
              support@studiospace.com
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white px-5 shadow-sm open:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-bold text-gray-950 outline-none focus-visible:ring-2 focus-visible:ring-lime-400 [&::-webkit-details-marker]:hidden dark:text-white">
                  {faq.question}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="pb-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
