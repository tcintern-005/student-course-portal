export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-black text-slate-900">
        {title}
      </h1>

      <p className="text-slate-600 text-lg mt-5 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}