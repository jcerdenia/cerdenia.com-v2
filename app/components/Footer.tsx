import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-4xl px-6 pb-10 sm:px-16">
      <div className="flex items-center gap-4 pt-6">
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="/" className="no-underline">
            cerdenia.com
          </Link>
        </p>
        <a
          href="mailto:joshua@cerdenia.com"
          aria-label="Email"
          className="no-underline text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <FaEnvelope size={16} />
        </a>
      </div>
    </footer>
  );
}
