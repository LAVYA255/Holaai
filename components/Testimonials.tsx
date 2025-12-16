import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Busy Professional",
    role: "Founder / Consultant",
    quote:
      "Hola AI completely changed how I handle missed calls. I only see what actually matters now.",
  },
  {
    name: "Legal Advisor",
    role: "Lawyer",
    quote:
      "Clients feel heard even when I’m unavailable. The summaries save me hours every week.",
  },
  {
    name: "Startup Operator",
    role: "Product Lead",
    quote:
      "Spam used to drain my energy. Hola AI filters it out silently. It’s a no-brainer.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-40">
      <div className="max-w-7xl mx-auto px-6">

        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Trusted by busy professionals
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Real stories from people who stopped missing calls
              and started catching opportunities.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 transition-all duration-200 hover:-translate-y-1">
                <div className="h-12 w-12 rounded-full bg-neutral-800" />
                <p className="mt-6 text-gray-300">“{t.quote}”</p>
                <div className="mt-6">
                  <p className="font-medium text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
