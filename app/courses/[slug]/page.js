import Button from "@/components/Button";
import { notFound } from "next/navigation";

export default async function CourseDetails({ params }) {
  const { slug } = await params;

  try {
    const response = await fetch(
      `http://localhost:5000/api/courses/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      notFound();
    }

    const course = await response.json();

    return (
      <main className="min-h-screen bg-slate-100 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold">
            {course.level}
          </span>

          <h1 className="text-5xl font-black text-slate-900 mt-6">
            {course.title}
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-slate-100 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">
                Instructor
              </h3>
              <p className="text-slate-700 mt-2">
                {course.instructor}
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">
                Duration
              </h3>
              <p className="text-slate-700 mt-2">
                {course.duration}
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">
                Level
              </h3>
              <p className="text-slate-700 mt-2">
                {course.level}
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">
                Course ID
              </h3>
              <p className="text-slate-700 mt-2">
                {course.id}
              </p>
            </div>

          </div>

          <div className="mt-10">
            <Button href="/courses">
              ← Back To Courses
            </Button>
          </div>

        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}