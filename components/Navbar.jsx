"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-emerald-600">
          NovaLearn
        </h1>

        <div className="flex gap-8 items-center">

          <Link
            href="/"
            className="text-gray-900 font-semibold hover:text-emerald-600 transition"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="text-gray-900 font-semibold hover:text-emerald-600 transition"
          >
            Courses
          </Link>

          <Link
            href="/instructors"
            className="text-gray-900 font-semibold hover:text-emerald-600 transition"
          >
            Instructors
          </Link>

          <Link
            href="/contact"
            className="text-gray-900 font-semibold hover:text-emerald-600 transition"
          >
            Contact
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}