"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";

export default function CourseSearch({ courses }) {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-10">
        <input
  type="text"
  placeholder="Search courses..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full max-w-lg mx-auto block border-2 border-emerald-500 rounded-xl px-5 py-3 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-600"
/>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))
        ) : (
          <p className="text-center text-slate-600 col-span-3">
            No courses found.
          </p>
        )}
      </div>
    </>
  );
}