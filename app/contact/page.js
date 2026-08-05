export default function Contact() {
  return (
    <main className="bg-slate-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900">
            Get In Touch
          </h1>

          <p className="text-slate-600 text-lg mt-4">
            We'd love to hear from you. Send us a message and our team will get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-slate-900">📧 Email</h2>
              <p className="text-slate-600 mt-2">support@novalearn.com</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-slate-900">📞 Phone</h2>
              <p className="text-slate-600 mt-2">+92 300 1234567</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-slate-900">📍 Office</h2>
              <p className="text-slate-600 mt-2">Lahore, Pakistan</p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <input
                type="email"
                placeholder="Your Email"
className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>

              <button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 max-w-4xl mx-auto">

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg">
                Do I need prior programming experience?
              </h3>
              <p className="text-slate-600 mt-2">
                No. Our beginner-friendly courses are designed for students starting from scratch.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg">
                Will I receive a certificate?
              </h3>
              <p className="text-slate-600 mt-2">
                Yes, you'll receive a certificate after successfully completing each course.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}