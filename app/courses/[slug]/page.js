export default async function CourseDetails({ params }) {
  const { slug } = await params;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-emerald-600">
          {slug.replace("-", " ").toUpperCase()}
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Welcome to the {slug.replace("-", " ")} course.
        </p>
      </div>
    </main>
  );
}