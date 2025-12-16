import Reveal from "./Reveal";

export default function Comparison() {
  return (
    <section id="comparison" className="py-40">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Why Hola AI is everything your voicemail isn’t
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Old voicemail records everything.
              Hola AI listens, understands, and sends you what actually matters.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-16 overflow-x-auto">
            <table className="w-full border border-neutral-800 rounded-xl overflow-hidden">
              <tbody>
                {[
                  ["How it responds", "Just records sound", "Talks like a human"],
                  ["Spam filtering", "Records spam", "Filters junk"],
                  ["What you receive", "Long audio", "Short summaries"],
                  ["Tone", "Robotic", "Custom personalities"],
                  ["Your effort", "Replay & guess", "Skim & act"],
                  ["Privacy", "Unencrypted", "End-to-end encrypted"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-neutral-800">
                    <td className="p-4 font-medium text-white">{row[0]}</td>
                    <td className="p-4 text-gray-500">{row[1]}</td>
                    <td className="p-4 text-gray-300">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-12">
            <button className="px-6 py-3 rounded-lg bg-white text-black text-sm hover:opacity-90">
              Upgrade to Smart Voicemail →
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
