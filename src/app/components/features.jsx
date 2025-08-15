import React from "react";

const Features = () => {
  const featuresList = [
    {
      title: "Track Your Cycle",
      description: "Keep tabs on your period, mood, symptoms, and more.",
    },
    {
      title: "Forum & Community",
      description: "Join discussions, ask questions, and support others.",
    },
    {
      title: "Partner Mode",
      description: "Help partners understand cycles and offer better support.",
    },
  ];

  return (
    <section className="py-12 bg-white px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-pink-50 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              {feature.title}
            </h3>
            <p className="text-pink-800">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
