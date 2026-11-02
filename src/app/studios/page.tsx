"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  MapPin,
  Users,
  ArrowUpRight,
  SlidersHorizontal,
  Camera,
  Mic,
  Music,
  Palette,
  Film,
  X,
} from "lucide-react";

const categories = [
  "All Studios",
  "Photo Studios",
  "Sound Stages",
  "Podcast Rooms",
  "Music Suites",
  "Art Workshops",
];

type Studio = {
  _id: string;
  title: string;
  category: string;
  location?: string;
  address?: string;
  hourlyRate?: number;
  price?: number;
  maxCapacity?: number;
  capacity?: number;
  imageUrl?: string;
  image?: string;
  rating?: number;
};

const categoryIcons = [
  { name: "Photo Studios", icon: Camera },
  { name: "Sound Stages", icon: Film },
  { name: "Podcast Rooms", icon: Mic },
  { name: "Music Suites", icon: Music },
  { name: "Art Workshops", icon: Palette },
];

function normalizeCategory(category: string) {
  const categoryMap: Record<string, string> = {
    "Photo Studios": "Photo Studio",
    "Sound Stages": "Sound Stage",
    "Podcast Rooms": "Podcast Room",
    "Music Suites": "Music Suite",
    "Art Workshops": "Art Workshop",
  };

  return categoryMap[category] ?? category;
}

export default function StudiosPage() {
  const [studios, setStudios] = useState<Studio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Studios");
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/api/studios")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch studios");
        }
        return res.json();
      })
      .then((data) => {
        setStudios(data);
      })
      .catch(() => {
        setError("Studios load করা যায়নি। আবার চেষ্টা করো।");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredStudios = useMemo(() => {
    return studios.filter((studio) => {
      const price = studio.hourlyRate ?? studio.price ?? 0;
      const location = studio.location ?? studio.address ?? "";

      const matchesSearch =
        studio.title.toLowerCase().includes(search.toLowerCase()) ||
        location.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Studios" ||
        studio.category === normalizeCategory(selectedCategory);

      const matchesPrice = maxPrice === 0 || price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [studios, search, selectedCategory, maxPrice]);

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-zinc-950 px-5 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="mb-5 inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-lime-400">
              Discover Your Creative Space
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Find the perfect studio for your next{" "}
              <span className="text-lime-400">big idea.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Explore unique creative spaces, professional studios and inspiring
              environments. Book the perfect space for your creativity.
            </p>
          </div>

          <div className="mt-10 flex max-w-3xl flex-col gap-3 rounded-2xl bg-white p-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-3 px-3">
              <Search className="h-5 w-5 text-zinc-500" />

              <input
                type="text"
                placeholder="Search studio or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-zinc-500"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <button
              onClick={() => {
                setSelectedCategory("All Studios");
                setMaxPrice(0);
              }}
              className="rounded-xl bg-lime-400 px-8 py-3 font-semibold text-zinc-950 transition hover:bg-lime-300"
            >
              Explore Studios
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Explore by category
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Find a space that matches your creative needs.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {categoryIcons.map((category) => {
            const Icon = category.icon;
            const active = selectedCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`rounded-2xl border p-5 text-left transition hover:-translate-y-1 hover:border-lime-400 ${
                  active
                    ? "border-lime-400 bg-lime-400/10"
                    : "border-border bg-card"
                }`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400/15 text-lime-600">
                  <Icon size={22} />
                </div>

                <h3 className="text-sm font-semibold">{category.name}</h3>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold text-lime-600">
              FIND YOUR SPACE
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Available Studios
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Showing {filteredStudios.length} studios
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-sm font-medium">
              <SlidersHorizontal size={17} />
              Maximum hourly price
            </div>

            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none"
            >
              <option value={0}>All Prices</option>
              <option value={1000}>Up to ৳1,000</option>
              <option value={1500}>Up to ৳1,500</option>
              <option value={2000}>Up to ৳2,000</option>
              <option value={3000}>Up to ৳3,000</option>
              <option value={5000}>Up to ৳5,000</option>
              <option value={10000}>Up to ৳10,000</option>
              <option value={20000}>Up to ৳20,000</option>
            </select>
          </div>
        </div>

        <div className="mb-7 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-lime-400 text-zinc-950"
                  : "border border-border text-muted-foreground hover:border-lime-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="py-20 text-center text-muted-foreground">
            Loading studios...
          </div>
        ) : error ? (
          <div className="py-20 text-center text-red-500">{error}</div>
        ) : filteredStudios.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStudios.map((studio) => {
              const price = studio.hourlyRate ?? studio.price ?? 0;
              const capacity = studio.maxCapacity ?? studio.capacity ?? 0;
              const location =
                studio.location ?? studio.address ?? "Location not provided";
              const image =
                studio.imageUrl ??
                studio.image ??
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900";

              return (
                <div
                  key={studio._id}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={image}
                      alt={studio.title}
                      width={900}
                      height={600}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-zinc-900">
                      {studio.category}
                    </span>

                    {studio.rating && (
                      <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-zinc-900">
                        ★ {studio.rating}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold">{studio.title}</h3>

                    <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={16} />
                      {location}
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <Users size={16} />
                      Up to {capacity} people
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Starting from
                        </p>

                        <p className="mt-1 text-lg font-bold">
                          ৳{price.toLocaleString("en-IN")}
                          <span className="text-xs font-normal text-muted-foreground">
                            /hour
                          </span>
                        </p>
                      </div>

                      <Link
                        href={`/studios/${studio._id}`}
                        className="flex items-center gap-2 rounded-xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-lime-400 hover:text-zinc-950"
                      >
                        Details
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border py-20 text-center">
            <Search className="mx-auto h-10 w-10 text-muted-foreground" />

            <h3 className="mt-4 text-xl font-bold">No studios found</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Try changing your search or category filter.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All Studios");
                setMaxPrice(0);
              }}
              className="mt-5 rounded-xl bg-lime-400 px-5 py-3 text-sm font-semibold text-zinc-950"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}