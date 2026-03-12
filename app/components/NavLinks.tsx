import Link from "next/link";

const links = [
  { href: "/bio", label: "Biography" },
  { href: "/compositions", label: "Compositions" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
  return (
    <nav className="flex flex-wrap gap-3 sm:gap-4">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="no-underline flex h-10 items-center border border-zinc-900 px-5 text-sm font-medium tracking-wide transition-colors hover:bg-zinc-900 hover:text-white sm:h-11 sm:px-6"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
