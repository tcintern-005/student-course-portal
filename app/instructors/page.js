import instructors from "@/data/instructors";

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
  {instructors.map((instructor) => (
    <div
      key={instructor.id}
      className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"
    >
      <div className="w-24 h-24 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-3xl font-bold">
        {instructor.name.charAt(0)}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-6">
        {instructor.name}
      </h2>

      <p className="text-emerald-600 font-semibold mt-2">
        {instructor.specialization}
      </p>

      <div className="mt-6 space-y-2 text-slate-700">
        <p>💼 Experience: {instructor.experience}</p>
        <p>👨‍🎓 Students: {instructor.students}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </main>
  );
}