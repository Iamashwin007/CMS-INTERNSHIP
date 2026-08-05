const faqs = [
  {
    question: "How can I book an appointment?",
    answer: "You can book online or call our reception anytime.",
  },
  {
    question: "Do you provide emergency services?",
    answer: "Yes, our emergency department is available 24/7.",
  },
  {
    question: "Do you accept health insurance?",
    answer: "Yes, we accept most major insurance providers.",
  },
  {
    question: "What are your working hours?",
    answer: "Monday to Sunday, 24 hours.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>

              <p className="text-gray-600 mt-3">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;