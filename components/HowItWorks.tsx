import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section className="py-40">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            When voicemail starts talking, it’s Hola AI
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Old voicemail records everything and filters nothing.
            Hola AI listens, understands intent, filters the noise,
            and sends you only what’s worth your attention.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-16 aspect-video rounded-2xl bg-neutral-900 border border-neutral-800" />
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10">
            <button className="px-6 py-3 rounded-lg bg-white text-black text-sm hover:opacity-90">
              Upgrade to Hola AI Voicemail
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
