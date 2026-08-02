import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-emerald-600">
          NovaLearn
        </h1>

        <div className="flex gap-8">
          <Link href="/" className="text-gray-900 font-semibold hover:text-emerald-600 transition">
            Home
          </Link>

          <Link href="/courses" className="text-gray-900 font-semibold hover:text-emerald-600 transition">
            Courses
          </Link>

          <Link href="/instructors" className="text-gray-900 font-semibold hover:text-emerald-600 transition">
            Instructors
          </Link>

          <Link href="/contact" className="text-gray-900 font-semibold hover:text-emerald-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}