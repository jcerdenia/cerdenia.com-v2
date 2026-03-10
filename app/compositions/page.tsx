import BackLink from "../components/BackLink";
import Footer from "../components/Footer";

export default function Compositions() {
  return (
    <main className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:px-16 sm:py-20">
        <BackLink />

        <h1 className="mb-10 text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-white">
          Compositions
        </h1>

        <p className="text-zinc-800 dark:text-zinc-200">Works coming soon.</p>
      </div>
      <Footer />
    </main>
  );
}
