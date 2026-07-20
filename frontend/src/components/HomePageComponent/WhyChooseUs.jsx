import { ShieldCheck, Clock3, Users, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Medical Care",
    desc: "Experienced doctors providing reliable healthcare services."
  },
  {
    icon: Clock3,
    title: "24/7 Emergency",
    desc: "Round-the-clock emergency medical assistance."
  },
  {
    icon: Users,
    title: "Expert Specialists",
    desc: "Highly qualified specialists across multiple departments."
  },
  {
    icon: HeartHandshake,
    title: "Patient First",
    desc: "Compassionate care focused on every patient's wellbeing."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We provide quality healthcare with experienced professionals and
          modern facilities.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-8 text-center hover:-translate-y-2 duration-300"
              >
                <Icon size={50} className="mx-auto text-blue-600 mb-5" />

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;