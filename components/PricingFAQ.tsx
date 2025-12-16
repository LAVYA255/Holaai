"use client";

import Reveal from "./Reveal";

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes. You get a 7-day free trial on the Pro plan.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Cancel anytime from the app. No questions asked.",
  },
  {
    q: "Do I need a new phone number?",
    a: "No. Hola AI works with your existing number.",
  },
];

export default function PricingFAQ() {
  return (
    <section className="py-32 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold">
            Pricing FAQs
          </h2>
        </Reveal>

        <div className="mt-10 space-y-6">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <div className="border-b border-gray-800 pb-4">
                <p className="font-medium">{faq.q}</p>
                <p className="mt-2 text-gray-400 text-sm">
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
