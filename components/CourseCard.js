import Link from "next/link";

export default function CourseCard({ course }) {
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
          href={`/courses/${course.slug}`}
          className="mt-8 inline-block w-full text-center bg-slate-900 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition"
        >
          View Course
        </Link>

      </div>

    </div>
  );
}