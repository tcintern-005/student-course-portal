import Link from "next/link";

export default function Button({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition"
    >
      {children}
    </Link>
  );
}