import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold">
            🚀 The Future of Learning
          </span>

          <h1 className="text-6xl font-black text-slate-900 mt-8 leading-tight">
            Learn Smarter.
            <br />
            Build Faster.
            <br />
            Get Hired.
          </h1>

          <p className="text-slate-600 text-lg mt-8 leading-8">
            NovaLearn Portal helps students master Web Development,
            Artificial Intelligence, UI/UX Design and other modern
            technologies through practical learning.
          </p>

          <div className="flex gap-5 mt-10">
            <Link
              href="/courses"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-4 rounded-xl font-semibold"
            >
              Explore Courses
            </Link>

            <Link
              href="/contact"
              className="border-2 border-slate-900 px-7 py-4 rounded-xl font-semibold hover:bg-slate-900 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-5xl font-bold text-emerald-600">10K+</h2>
            <p className="text-slate-600 mt-3">Students Enrolled</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-5xl font-bold text-blue-600">50+</h2>
            <p className="text-slate-600 mt-3">Professional Courses</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-5xl font-bold text-orange-500">25+</h2>
            <p className="text-slate-600 mt-3">Expert Instructors</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-5xl font-bold text-purple-600">95%</h2>
            <p className="text-slate-600 mt-3">Career Success Rate</p>
          </div>

        </div>

      </section>

      {/* Why Choose */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center text-slate-900">
          Why Choose NovaLearn?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold">🎯 Practical Learning</h3>
            <p className="text-slate-600 mt-4">
              Build real-world projects instead of only studying theory.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold">👨‍🏫 Expert Mentors</h3>
            <p className="text-slate-600 mt-4">
              Learn directly from experienced software engineers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold">🏆 Career Focused</h3>
            <p className="text-slate-600 mt-4">
              Prepare yourself for internships and full-time tech jobs.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}