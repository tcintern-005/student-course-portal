import courses from "@/data/courses";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
export default async function CourseDetails({ params }) {
  const { slug } = await params;

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }
  const relatedCourses = courses.filter((item) => item.slug !== slug && item.level === course.level);
  return (
    <main className="min-h-screen bg-slate-100 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold">
          {course.level}
        </span>

        <h1 className="text-5xl font-black text-slate-900 mt-6">
          {course.title}
        </h1>

        <p className="text-slate-800 text-lg mt-6 leading-8">
          {course.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-slate-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-900">Instructor</h3>
            <p className="text-slate-700 mt-2">{course.instructor}</p>
          </div>

          <div className="bg-slate-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-900">Duration</h3>
            <p className="text-slate-700 mt-2">{course.duration}</p>
          </div>

          <div className="bg-slate-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-900">Students</h3>
            <p className="text-slate-700 mt-2">{course.students}</p>
          </div>

          <div className="bg-slate-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-slate-900">Rating</h3>
            <p className="text-slate-700 mt-2">⭐ {course.rating}</p>
          </div>

        </div>
         
         {relatedCourses.length > 0 && (
  <section className="mt-16">
    <h2 className="text-3xl font-bold text-slate-900 mb-8">
      Related Courses
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {relatedCourses.map((item) => (
        <CourseCard key={item.slug} course={item} />
      ))}
    </div>
  </section>
)}

        <div className="mt-10">
          <Button href="/courses">
            ← Back To Courses
          </Button>
        </div>

      </div>
    </main>
  );
}