import Link from "next/link";
import { FaCaretLeft } from "react-icons/fa";

export default function BackLink({
  href = "/",
  label = "Josh Cerdenia",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="no-underline mb-12 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-zinc-900"
    >
      <FaCaretLeft size={12} />
      {label}
    </Link>
  );
}
