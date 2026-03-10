import BackLink from "../components/BackLink";
import Footer from "../components/Footer";

export default function Compositions() {
  return (
    <main className="flex min-h-screen flex-col bg-white font-sans">
      <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:px-16 sm:py-20">
        <BackLink />

        <h1 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
          Compositions
        </h1>

        <p>Under renovation.</p>
      </div>
      <Footer />
    </main>
  );
}
