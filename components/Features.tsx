import Reveal from "./Reveal";

const features = [
  {
    title: "Answers like a human",
    description:
      "Hola AI talks to your callers, understands why they called, and makes them feel heard and not ignored.",
  },
  {
    title: "Filters spam automatically",
    description:
      "No more wasted time on robocalls or cold pitches. Hola AI filters out junk before it reaches you.",
  },
  {
    title: "Sends instant summaries",
    description:
      "You get a concise summary of who called, why, and how important it is.",
  },
  {
    title: "One assistant. Multiple personalities.",
    description:
      "Choose how Hola AI sounds based on caller type — sharp for work, warm for friends, witty with spam.",
  },
  {
    title: "Private and secure",
    description:
      "All recordings and transcripts are encrypted. Your conversations stay yours.",
  },
];

export default function Features() {
  return (
    <section id="features">
      {features.map((feature, index) => {
        const isDark = index % 2 === 1;

        return (
          <div
            key={feature.title}
            className={isDark ? "bg-black text-white" : "bg-white"}
          >
            <div className="py-32 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
              <Reveal>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-3xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p
                    className={`mt-4 text-lg max-w-lg ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div
                  className={`aspect-square rounded-2xl transition-all duration-300 ${
                    isDark
                      ? "bg-neutral-800 hover:bg-neutral-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                />
              </Reveal>
            </div>
          </div>
        );
      })}
    </section>
  );
}
