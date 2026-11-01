"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

type FavoriteButtonProps = {
  studioName: string;
  className?: string;
};

export function FavoriteButton({
  studioName,
  className = "",
}: FavoriteButtonProps) {
  const [saved, setSaved] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setSaved((value) => !value)}
      aria-pressed={saved}
      aria-label={
        saved
          ? `Remove ${studioName} from your saved studios`
          : `Save ${studioName} to your saved studios`
      }
      className={`z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-sm backdrop-blur transition hover:scale-105 hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 dark:bg-gray-950/80 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white ${className}`}
    >
      <Heart
        size={17}
        className={
          saved ? "fill-lime-500 text-lime-500" : "transition-colors"
        }
      />
    </button>
  );
}
