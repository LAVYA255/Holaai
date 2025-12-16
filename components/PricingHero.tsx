"use client";

import Reveal from "./Reveal";

export default function PricingHero() {
  return (
    <section className="pt-32 pb-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h1 className="text-5xl font-semibold tracking-tight">
            Simple pricing.
            <br />
            No missed calls.
          </h1>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-6 text-lg text-gray-400">
            Try Hola AI free for 7 days.
            Upgrade only if it fits your workflow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
