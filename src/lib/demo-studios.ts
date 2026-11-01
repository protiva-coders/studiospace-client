export type DemoStudio = {
  id: number;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  city: string;
  location: string;
  pricePerHour: number;
  rating: number;
  reviews: number;
  capacity: number;
  area: string;
  image: string;
  amenities: string[];
  instantBook?: boolean;
};

export const demoStudios: DemoStudio[] = [
  {
    id: 1,
    slug: "the-daylight-loft",
    name: "The Daylight Loft",
    category: "Photography Studio",
    categorySlug: "photo-studios",
    city: "Brooklyn",
    location: "Brooklyn, New York",
    pricePerHour: 65,
    rating: 4.9,
    reviews: 128,
    capacity: 8,
    area: "1,200 sq ft",
    image: "/studios/daylight-loft.svg",
    amenities: ["Natural light", "Cyclorama", "Wi-Fi"],
    instantBook: true,
  },
  {
    id: 2,
    slug: "frequency-sound-stage",
    name: "Frequency Sound Stage",
    category: "Film & Video Stage",
    categorySlug: "sound-stages",
    city: "Los Angeles",
    location: "Los Angeles, California",
    pricePerHour: 120,
    rating: 4.8,
    reviews: 94,
    capacity: 25,
    area: "3,500 sq ft",
    image: "/studios/frequency-stage.svg",
    amenities: ["Pre-lit", "Green screen", "Loading dock"],
    instantBook: true,
  },
  {
    id: 3,
    slug: "the-quiet-room",
    name: "The Quiet Room",
    category: "Podcast Studio",
    categorySlug: "podcast-rooms",
    city: "London",
    location: "Shoreditch, London",
    pricePerHour: 40,
    rating: 5,
    reviews: 76,
    capacity: 4,
    area: "320 sq ft",
    image: "/studios/quiet-room.svg",
    amenities: ["Soundproof", "4 microphones", "Engineer"],
    instantBook: true,
  },
  {
    id: 4,
    slug: "velvet-note-music-suite",
    name: "Velvet Note Music Suite",
    category: "Music Studio",
    categorySlug: "music-suites",
    city: "Berlin",
    location: "Kreuzberg, Berlin",
    pricePerHour: 55,
    rating: 4.9,
    reviews: 63,
    capacity: 6,
    area: "780 sq ft",
    image: "/studios/velvet-note.svg",
    amenities: ["Grand piano", "Live room", "Pro Tools"],
  },
  {
    id: 5,
    slug: "clay-and-co-ceramics",
    name: "Clay & Co. Ceramics Studio",
    category: "Art Workshop",
    categorySlug: "art-workshops",
    city: "Dhaka",
    location: "Dhanmondi, Dhaka",
    pricePerHour: 30,
    rating: 4.7,
    reviews: 41,
    capacity: 10,
    area: "950 sq ft",
    image: "/studios/clay-and-co.svg",
    amenities: ["Pottery wheels", "Kiln access", "Aprons"],
  },
  {
    id: 6,
    slug: "the-white-room",
    name: "The White Room",
    category: "Photography Studio",
    categorySlug: "photo-studios",
    city: "Los Angeles",
    location: "Silver Lake, Los Angeles",
    pricePerHour: 75,
    rating: 4.9,
    reviews: 112,
    capacity: 12,
    area: "1,800 sq ft",
    image: "/studios/white-room.svg",
    amenities: ["Infinity cove", "Blackout", "Styling room"],
    instantBook: true,
  },
];
