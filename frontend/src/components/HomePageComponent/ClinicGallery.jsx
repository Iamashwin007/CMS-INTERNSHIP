const images = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0?w=800",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800",
  "https://images.unsplash.com/photo-1580281657527-47d2b84f1d6b?w=800",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800",
  "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
];

const ClinicGallery = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">
          Clinic Gallery
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Take a look at our modern facilities and patient-friendly environment.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Clinic"
              className="rounded-xl h-64 w-full object-cover hover:scale-105 duration-300"
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default ClinicGallery;