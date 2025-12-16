"use client";

import Reveal from "./Reveal";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "For light personal use",
    features: [
      "AI answers missed calls",
      "Basic spam filtering",
      "Call summaries in app",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹499 / month",
    description: "For busy professionals",
    features: [
      "Everything in Basic",
      "Advanced spam filtering",
      "Instant summaries via SMS & email",
      "Custom AI personality",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Business",
    price: "₹999 / month",
    description: "For power users & teams",
    features: [
      "Everything in Pro",
      "Multiple call personalities",
      "Priority processing",
      "Advanced privacy controls",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06}>
              <div
                className={`rounded-2xl p-8 border transition-all duration-300 flex flex-col ${
                  plan.highlighted
                    ? "bg-white text-black border-white scale-[1.04]"
                    : "bg-black text-white border-gray-700"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-semibold">
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-2 text-sm ${
                      plan.highlighted
                        ? "text-gray-600"
                        : "text-gray-400"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-6 text-4xl font-semibold">
                    {plan.price}
                  </div>
                </div>

                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm ${
                        plan.highlighted
                          ? "text-gray-700"
                          : "text-gray-300"
                      }`}
                    >
                      • {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3 rounded-lg text-sm transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-black text-white hover:opacity-90"
                      : "bg-white text-black hover:opacity-90"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
