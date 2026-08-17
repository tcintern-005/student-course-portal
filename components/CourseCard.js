"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CourseCard({ course, onEdit, onDelete }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isAdmin = user?.role === "admin";
  const isOwner =
    user && course.owner_id === user.id;

  const canModify = isAdmin || isOwner;

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

      <div className="h-40 bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold text-center px-4">
          {course.title}
        </h2>
      </div>

      <div className="p-7">

        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
          {course.level}
        </span>

        <p className="text-slate-700 mt-5 leading-7">
          {course.description}
        </p>

        <div className="mt-6 space-y-2 text-slate-800">
          <p>👨‍🏫 {course.instructor}</p>
          <p>⭐ {course.rating} Rating</p>
          <p>👨‍🎓 {course.students} Students</p>
          <p>⏳ {course.duration}</p>
        </div>

        <Link
          href={`/courses/${course.id}`}
          className="mt-8 inline-block w-full text-center bg-slate-900 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition"
        >
          View Course
        </Link>

        {canModify && (
          <>
            <button
              onClick={() => onEdit(course)}
              className="mt-3 w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold transition"
            >
              Edit Course
            </button>

            <button
              onClick={() => onDelete(course.id)}
              className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Delete Course
            </button>
          </>
        )}

      </div>
    </div>
  );
}