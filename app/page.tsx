import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans dark:bg-black">
      <div className="mx-auto max-w-4xl px-8 py-20 sm:px-16">
        {/* Name + title */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white">
            Josh Cerdenia
          </h1>
        </div>

        {/* Photo */}
        <div className="mb-10">
          <Image
            src="/tfo.jpeg"
            alt="Josh Cerdenia"
            width={800}
            height={500}
            className="w-full object-cover"
            priority
          />
          <figcaption className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Photo: The Florida Orchestra (2023)
          </figcaption>
        </div>

        {/* Pull quote */}
        <blockquote className="mb-16 border-l-2 border-zinc-200 pl-6 text-lg leading-8 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
          Cerdenia&apos;s{" "}
          <a
            href="https://www.youtube.com/watch?v=xnmJFpS1x34"
            className="font-medium text-zinc-950 dark:text-zinc-50"
          >
            <em>Feuertrunken</em>
          </a>{" "}
          … is filled with urgency, intensity, energy, excitement and a flurry of
          sounds both soft and otherwise, percussive and brass pronouncements,
          and endless rhythms … a piece of enormous power that moves from one
          emotional platform to the next, interspersed with moments of
          tranquility before powering on. Waves of sound. It was stimulating and
          vibrant — a treat to hear.
          <cite className="mt-4 block text-sm not-italic text-zinc-400 dark:text-zinc-500">
            —{" "}
            <a
              href="https://www.dailypress.com/2020/03/10/virginia-symphony-orchestra-offers-exciting-evening-filled-with-sound-and-fury/"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              The Virginia Gazette
            </a>
          </cite>
        </blockquote>

        {/* Nav */}
        <nav className="flex gap-4">
          <a
            href="/bio"
            className="no-underline flex h-11 items-center border border-zinc-900 px-6 text-sm font-medium tracking-wide transition-colors hover:bg-zinc-900 hover:text-white dark:border-zinc-200 dark:text-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-black"
          >
            Biography
          </a>
          <a
            href="/compositions"
            className="no-underline flex h-11 items-center border border-zinc-900 px-6 text-sm font-medium tracking-wide transition-colors hover:bg-zinc-900 hover:text-white dark:border-zinc-200 dark:text-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-black"
          >
            Compositions
          </a>
        </nav>
      </div>

      {/* Footer */}
      <footer className="mx-auto max-w-4xl px-8 pb-10 sm:px-16">
        <div className="flex items-center justify-between pt-6">
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} <a href="https://cerdenia.com">cerdenia.com</a>
          </p>
          <a
            href="mailto:joshua@cerdenia.com"
            aria-label="Email"
            className="no-underline text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </footer>
    </main>
  );
}
