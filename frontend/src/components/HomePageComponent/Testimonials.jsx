import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    review:
      "The doctors were very professional and caring. I received excellent treatment and support.",
  },
  {
    name: "Emily Davis",
    review:
      "Modern facilities, friendly staff, and quick service. Highly recommended for healthcare.",
  },
  {
    name: "Michael Brown",
    review:
      "Booking an appointment was easy, and the doctors explained everything clearly.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">
          What Our Patients Say
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Trusted by thousands of happy patients.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition"
            >

              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-semibold">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;