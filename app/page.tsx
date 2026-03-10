import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:px-16 sm:py-20">
        {/* Name + title */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-white">
            Josh Cerdenia
          </h1>
        </div>

        {/* Photo */}
        <div className="mb-8 sm:mb-10">
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
        <blockquote className="mb-12 border-l-2 border-zinc-200 pl-5 text-base leading-8 text-zinc-800 sm:mb-16 sm:pl-6 sm:text-lg dark:border-zinc-700 dark:text-zinc-200">
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
        <nav className="flex flex-wrap gap-3 sm:gap-4">
          <a
            href="/bio"
            className="no-underline flex h-10 items-center border border-zinc-900 px-5 text-sm font-medium tracking-wide transition-colors hover:bg-zinc-900 hover:text-white sm:h-11 sm:px-6 dark:border-zinc-200 dark:text-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-black"
          >
            Biography
          </a>
          <a
            href="/compositions"
            className="no-underline flex h-10 items-center border border-zinc-900 px-5 text-sm font-medium tracking-wide transition-colors hover:bg-zinc-900 hover:text-white sm:h-11 sm:px-6 dark:border-zinc-200 dark:text-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-black"
          >
            Compositions
          </a>
          <a
            href="/contact"
            className="no-underline flex h-10 items-center border border-zinc-900 px-5 text-sm font-medium tracking-wide transition-colors hover:bg-zinc-900 hover:text-white sm:h-11 sm:px-6 dark:border-zinc-200 dark:text-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-black"
          >
            Contact
          </a>
        </nav>
      </div>

      <Footer />
    </main>
  );
}
