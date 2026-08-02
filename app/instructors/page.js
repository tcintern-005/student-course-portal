const instructors = [
  {
    name: "Sarah Johnson",
    role: "Senior Full Stack Engineer",
    experience: "8+ Years",
    expertise: "React • Next.js • Node.js",
    bio: "Passionate about building scalable web applications and mentoring aspiring developers.",
  },
  {
    name: "David Wilson",
    role: "AI & Machine Learning Engineer",
    experience: "10+ Years",
    expertise: "Python • TensorFlow • LLMs",
    bio: "Specializes in AI systems, machine learning models, and practical data science projects.",
  },
  {
    name: "Emma Brown",
    role: "Lead UI/UX Designer",
    experience: "7+ Years",
    expertise: "Figma • UX Research • Design Systems",
    bio: "Creates intuitive, modern interfaces with a strong focus on user experience.",
  },
];

export default function Instructors() {
  return (
    <main className="bg-slate-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900">
            Meet Our Experts
          </h1>

          <p className="text-slate-600 text-lg mt-5 max-w-3xl mx-auto">
            Learn from professionals with years of industry experience in
            software engineering, AI, and product design.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {instructors.map((teacher) => (
            <div
              key={teacher.name}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-8"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex items-center justify-center text-3xl font-bold mx-auto">
                {teacher.name.charAt(0)}
              </div>

              <h2 className="text-2xl font-bold text-center text-slate-900 mt-6">
                {teacher.name}
              </h2>

              <p className="text-center text-emerald-600 font-semibold mt-2">
                {teacher.role}
              </p>

              <p className="text-center text-slate-500 mt-2">
                {teacher.experience}
              </p>

              <p className="mt-6 text-slate-600 text-center">
                {teacher.bio}
              </p>

              <div className="mt-6 bg-slate-100 rounded-xl p-4 text-center">
                <p className="font-semibold text-slate-800">Expertise</p>
                <p className="text-slate-600 mt-2">{teacher.expertise}</p>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition">
                  LinkedIn
                </button>

                <button className="border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-100 transition">
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}