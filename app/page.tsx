import Image from "next/image";
import Footer from "./components/Footer";
import NavLinks from "./components/NavLinks";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white font-sans">
      <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:px-16 sm:py-20">
        {/* Name + title */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            <Link href="/" className="no-underline">Josh Cerdenia</Link>
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
          <figcaption className="mt-2 text-sm text-zinc-500">
            Photo: The Florida Orchestra (2023)
          </figcaption>
        </div>

        {/* Pull quote */}
        <blockquote className="mb-12 border-l-2 border-zinc-200 pl-5 text-base leading-8 sm:mb-16 sm:pl-6 sm:text-lg">
          Cerdenia&apos;s{" "}
          <a href="https://www.youtube.com/watch?v=xnmJFpS1x34">
            <em>Feuertrunken</em>
          </a>{" "}
          … is filled with urgency, intensity, energy, excitement and a flurry of
          sounds both soft and otherwise, percussive and brass pronouncements,
          and endless rhythms … a piece of enormous power that moves from one
          emotional platform to the next, interspersed with moments of
          tranquility before powering on. Waves of sound. It was stimulating and
          vibrant — a treat to hear.
          <cite className="mt-4 block text-sm not-italic">
            —{" "}
            <a href="https://www.dailypress.com/2020/03/10/virginia-symphony-orchestra-offers-exciting-evening-filled-with-sound-and-fury/">
              The Virginia Gazette
            </a>
          </cite>
        </blockquote>

        <NavLinks />
      </div>

      <Footer />
    </main>
  );
}
