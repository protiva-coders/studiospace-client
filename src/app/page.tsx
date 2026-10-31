export default function Home() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-5 text-center dark:bg-gray-950">
      <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-lime-600">
        Welcome to StudioSpace
      </p>

      <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-950 sm:text-6xl dark:text-white">
        Find the Perfect Space for Your Creative Vision
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
        Discover and book inspiring creative studios for photography,
        filmmaking, music, podcasting and more.
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <a
          href="/studios"
          className="rounded-full bg-lime-400 px-8 py-4 font-bold text-gray-950 transition hover:bg-lime-300"
        >
          Explore Studios
        </a>

        <a
          href="/register"
          className="rounded-full border border-gray-300 px-8 py-4 font-bold text-gray-900 transition hover:border-lime-400 dark:border-gray-700 dark:text-white"
        >
          Host Your Space
        </a>
      </div>
    </section>
  );
}

