import Link from "next/link";

const quickLinks = [
{ name: "Home", href: "/" },
{ name: "Explore Studios", href: "/studios" },
{ name: "How It Works", href: "/how-it-works" },
{ name: "About Us", href: "/about" },
];

const categories = [
{ name: "Photo Studios", value: "photo-studios" },
{ name: "Sound Stages", value: "sound-stages" },
{ name: "Podcast Rooms", value: "podcast-rooms" },
{ name: "Music Suites", value: "music-suites" },
{ name: "Art Workshops", value: "art-workshops" },
];

export default function Footer() {
return ( <footer className="bg-gray-950 text-gray-300"> <div className="mx-auto max-w-7xl px-5 py-16"> <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5"> <div className="lg:col-span-2"> <Link
           href="/"
           className="text-3xl font-bold tracking-tight text-white"
         >
Studio<span className="text-lime-400">Space.</span> </Link>

```
        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
          Your creative journey starts here. Discover and book inspiring
          creative spaces for photography, filmmaking, music, podcasting
          and more. We connect talented creators with spaces where great
          ideas come to life.
        </p>

        <div className="mt-7 flex items-center gap-5">
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-lg font-bold transition hover:border-lime-400 hover:bg-lime-400 hover:text-gray-950"
          >
            f
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-xl transition hover:border-lime-400 hover:bg-lime-400 hover:text-gray-950"
          >
            ◎
          </a>

          <a
            href="#"
            aria-label="X"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-lime-400 hover:bg-lime-400 hover:text-gray-950"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.4l4.4 6.9L18.9 2Zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20Z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-sm transition hover:border-lime-400 hover:bg-lime-400 hover:text-gray-950"
          >
            ▶
          </a>
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-lg font-semibold text-white">
          Quick Links
        </h3>

        <ul className="space-y-4 text-sm">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition hover:text-lime-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-6 text-lg font-semibold text-white">
          Popular Categories
        </h3>

        <ul className="space-y-4 text-sm">
          {categories.map((category) => (
            <li key={category.value}>
              <Link
                href={`/studios?category=${category.value}`}
                className="transition hover:text-lime-400"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-6 text-lg font-semibold text-white">
          Stay Connected
        </h3>

        <p className="text-sm leading-7 text-gray-400">
          Get creative inspiration, studio updates and special offers
          delivered to your inbox.
        </p>

        <form className="mt-5 flex flex-col gap-3">
          <label htmlFor="newsletter-email" className="sr-only">
            Your email address
          </label>

          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-lime-400"
          />

          <button
            type="submit"
            className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-gray-950 transition hover:bg-lime-300"
          >
            Subscribe to Newsletter
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-400">
          <span className="text-lime-400">Email:</span>{" "}
          support@studiospace.com
        </p>

        <p className="mt-2 text-sm text-gray-400">
          <span className="text-lime-400">Location:</span> Dhaka,
          Bangladesh
        </p>
      </div>
    </div>

    <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-gray-800 pt-8 text-center sm:flex-row">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} StudioSpace. All rights reserved.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
        <Link
          href="/privacy"
          className="transition hover:text-lime-400"
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms"
          className="transition hover:text-lime-400"
        >
          Terms of Service
        </Link>
      </div>
    </div>
  </div>
</footer>


);
}
