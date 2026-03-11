import fs from "fs";
import path from "path";
import BackLink from "../components/BackLink";
import Footer from "../components/Footer";
import CompositionsList from "./CompositionsList";

export default function Compositions() {
  const works = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "content/works.json"), "utf8")
  );

  return (
    <main className="flex min-h-screen flex-col bg-white font-sans">
      <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:px-16 sm:py-20">
        <BackLink />

        <h1 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
          Compositions
        </h1>

        <CompositionsList works={works} />
      </div>
      <Footer />
    </main>
  );
}
