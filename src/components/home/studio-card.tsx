import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Star, Zap } from "lucide-react";
import type { DemoStudio } from "@/lib/demo-studios";
import { FavoriteButton } from "./favorite-button";

type StudioCardProps = {
  studio: DemoStudio;
};

export function StudioCard({ studio }: StudioCardProps) {
  const studioHref = `/studios/${studio.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-900/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:shadow-black/40">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Link
          href={studioHref}
          aria-label={`View ${studio.name}`}
          className="absolute inset-0 z-0"
        >
          <Image
            src={studio.image}
            alt={`${studio.name} — ${studio.category} in ${studio.location}`}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        </Link>

        <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-gray-900 shadow-sm backdrop-blur dark:bg-gray-950/85 dark:text-white">
          {studio.category}
        </span>

        <FavoriteButton
          studioName={studio.name}
          className="absolute right-3 top-3"
        />

        {studio.instantBook && (
          <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-lime-400 px-2.5 py-1 text-[11px] font-bold text-gray-950 shadow-sm">
            <Zap size={11} className="fill-gray-950" />
            Instant book
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-1.5 text-xs">
            <Star size={14} className="fill-lime-500 text-lime-500" />
            <span className="font-bold text-gray-900 dark:text-white">
              {studio.rating.toFixed(1)}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              ({studio.reviews} reviews)
            </span>
          </p>
          <span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">
            {studio.area}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-bold tracking-tight text-gray-950 dark:text-white">
          <Link
            href={studioHref}
            className="transition-colors hover:text-lime-600 dark:hover:text-lime-400"
          >
            {studio.name}
          </Link>
        </h3>

        <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          <MapPin size={14} className="shrink-0" />
          {studio.location}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {studio.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400">
            <span className="text-xl font-black text-gray-950 dark:text-white">
              ${studio.pricePerHour}
            </span>
            <span className="text-xs"> / hour</span>
          </p>

          <Link
            href={studioHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-gray-950 px-3.5 py-2 text-xs font-bold text-white transition-colors hover:bg-lime-400 hover:text-gray-950 dark:bg-white dark:text-gray-950 dark:hover:bg-lime-400"
          >
            View Details
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
