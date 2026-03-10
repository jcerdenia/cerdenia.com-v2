import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import BackLink from "../components/BackLink";
import Footer from "../components/Footer";

export default function Bio() {
  const content = fs.readFileSync(
    path.join(process.cwd(), "content/bio.md"),
    "utf8"
  );

  return (
    <main className="flex min-h-screen flex-col bg-white font-sans">
      <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 sm:px-16 sm:py-20">
        <BackLink />

        <h1 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
          Biography
        </h1>

        <div className="mb-10">
          <a
            href="https://drive.google.com/drive/folders/1DGzXOmAL-m-obzNBZD5iO6Oa1rpBXG7E?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Photos & Bios for Press
          </a>
        </div>

        <div className="max-w-2xl">
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="mb-5 leading-relaxed">{children}</p>
              ),
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
      <Footer />
    </main>
  );
}
