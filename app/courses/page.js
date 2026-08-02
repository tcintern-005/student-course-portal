import Link from "next/link";

const courses = [
  {
    title: "Full Stack Web Development",
    slug: "web-development",
    level: "Beginner",
    students: "4,250",
    duration: "12 Weeks",
    rating: "4.9",
    instructor: "Sarah Johnson",
    description:
      "Master HTML, CSS, JavaScript, React, Next.js and modern frontend development."
  },
  {
    title: "AI Engineering",
    slug: "ai-engineering",
    level: "Intermediate",
    students: "2,900",
    duration: "10 Weeks",
    rating: "4.8",
    instructor: "David Wilson",
    description:
      "Learn Python, Machine Learning and Artificial Intelligence with practical projects."
  },
  {
    title: "UI / UX Design",
    slug: "ui-ux-design",
    level: "Beginner",
    students: "1,850",
    duration: "8 Weeks",
    rating: "4.9",
    instructor: "Emma Brown",
    description:
      "Design beautiful user interfaces using Figma and modern design principles."
  },
];

export default function Courses() {
  return (
    <main className="bg-slate-50 min-h-screen py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900">
            Explore Professional Courses
          </h1>

          <p className="text-slate-600 text-lg mt-5 max-w-3xl mx-auto">
            Learn today's most in-demand technologies through project-based
            learning designed by experienced industry professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {courses.map((course) => (

            <div
              key={course.slug}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >

              <div className="h-40 bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold text-center px-4">
                  {course.title}
                </h2>
              </div>

              <div className="p-7">

                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </span>

                <p className="text-slate-600 mt-5 leading-7">
                  {course.description}
                </p>

                <div className="mt-6 space-y-2 text-slate-700">

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

          ))}

        </div>

      </div>

    </main>
  );
}