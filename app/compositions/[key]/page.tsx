import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import BackLink from "../../components/BackLink";
import Footer from "../../components/Footer";
import { getAllCompositions, getComposition } from "../../../lib/compositions";

export async function generateStaticParams() {
  return getAllCompositions()
    .filter((w) => !w.hidden && w.detail !== false)
    .map((w) => ({ key: w.key }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const work = getComposition(key);
  if (!work || work.hidden || work.detail === false) notFound();

  return (
    <main className="flex min-h-screen flex-col bg-white font-sans">
      <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:px-16 sm:py-20">
        <BackLink href="/compositions" label="Compositions" />

        <h1 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {work.title} {work.subtitle && `(${work.subtitle})`}
        </h1>

        <div className="mb-8 text-sm">
          {work.instrumentation && <p className="italic">For {work.instrumentation} ({work.year})</p>}
          {!work.instrumentation && <p>{work.year}</p>}
        </div>

        {!work.content && <p>Coming soon.</p>}

        {work.content && (
          <div className="prose max-w-2xl">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h6: ({ children }) => (
                  <h6 className="mt-6 mb-1 text-xs font-semibold uppercase tracking-widest text-gray-600">
                    {children}
                  </h6>
                ),
                p: ({ children }) => (
                  <p className="mb-4 leading-relaxed">{children}</p>
                ),
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-2 border-gray-300 pl-4 italic">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {work.content}
            </ReactMarkdown>
          </div>
        )}

        <a
          href="mailto:joshua@cerdenia.com"
          className="no-underline mt-10 inline-flex h-10 items-center border border-zinc-900 px-5 text-sm font-medium tracking-wide transition-colors hover:bg-zinc-900 hover:text-white sm:h-11 sm:px-6"
        >
          Contact to Perform
        </a>
      </div>
      <Footer />
    </main>
  );
}
