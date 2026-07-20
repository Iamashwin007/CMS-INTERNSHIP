const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Your Health Is Our Top Priority
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Expert doctors, modern technology and compassionate care
            all under one roof.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Book Appointment
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=900"
            alt="doctor"
            className="rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;