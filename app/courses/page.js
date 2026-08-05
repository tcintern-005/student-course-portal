import Link from "next/link";
import courses from "@/data/courses";
import CourseCard from "@/components/CourseCard" ;  
import SectionTitle from "@/components/SectionTitle";
import CourseSection from "@/components/CoursesSearch";
export default function Courses() {
  return (
    <main className="bg-slate-50 min-h-screen py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <SectionTitle
  title="Explore Professional Courses"
  subtitle="Learn today's most in-demand technologies through project-based learning designed by experienced industry professionals."
/>
        <CourseSection courses={courses} />
      </div>

    </main>
  );
}
           