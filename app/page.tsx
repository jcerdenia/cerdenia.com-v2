import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-semibold">Josh Cerdenia</h1>
        <div className="relative w-full aspect-video">
          <Image
            src="/tfo.jpeg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Composer
          </h1>
          <blockquote className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Cerdenia&apos;s{" "}
            <a
              href="https://www.youtube.com/watch?v=xnmJFpS1x34"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              <em>Feuertrunken</em>
            </a>{" "}
            … inspired by a nod to Dante&apos;s take on purgatory and wall of
            fire leading to paradise … is filled with urgency, intensity,
            energy, excitement and a flurry of sounds both soft and otherwise,
            percussive and brass pronouncements, and endless rhythms. With a
            slight nod to Mahler&apos;s First in the opening few notes, it&apos;s
            a piece of enormous power that moves from one emotional platform to
            the next, interspersed with moments of tranquility before powering
            on. Waves of sound. It was stimulating and vibrant — a treat to
            hear.
          </blockquote>
          <cite className="text-sm text-zinc-500 dark:text-zinc-400">
            —{" "}
            <a
              href="https://www.dailypress.com/2020/03/10/virginia-symphony-orchestra-offers-exciting-evening-filled-with-sound-and-fury/"
              className="text-zinc-950 dark:text-zinc-50"
            >
              The Virginia Gazette
            </a>
          </cite>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Works
          </a>
        </div>
      </main>
    </div>
  );
}
