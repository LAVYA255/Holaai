import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <Reveal>
          <div>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white">
              Skip the spam. <br />
              Catch every opportunity.
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              Hola AI answers your calls like a human.
              No dumb recordings, just real conversations.
              It filters spam and sends you instant summaries
              of what matters.
            </p>

            <div className="mt-10">
              <button className="px-6 py-3 rounded-lg bg-white text-black text-sm transition-all duration-200 hover:opacity-90">
                Get Hola AI Voicemail
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="aspect-square rounded-2xl bg-neutral-900 border border-neutral-800" />
        </Reveal>

      </div>
    </section>
  );
}
