const stats = [
  {
    number: "5000+",
    title: "Happy Patients",
  },
  {
    number: "120+",
    title: "Qualified Doctors",
  },
  {
    number: "25+",
    title: "Medical Departments",
  },
  {
    number: "15+",
    title: "Years Experience",
  },
];

const Statistics = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {stats.map((stat, index) => (
            <div key={index}>

              <h2 className="text-5xl font-bold text-white">
                {stat.number}
              </h2>

              <p className="text-blue-100 mt-3 text-lg">
                {stat.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Statistics;