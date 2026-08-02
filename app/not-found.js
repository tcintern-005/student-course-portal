import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-7xl font-extrabold text-emerald-600">404</h1>

      <p className="text-xl text-gray-700 mt-4">
        Oops! The page you are looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-8 bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}