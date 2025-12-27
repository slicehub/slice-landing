import { TrendingUp, Scale, Zap, Award, Check } from "lucide-react";

const featureBlocks = [
  {
    title: "Built to scale disputes, not support teams",
    description: "",
    bullets: [
      "Operational Efficiency: Offloads dispute resolution from your internal operations.",
      "Zero Support Overhead: No manual reviews, team overload, or human bias.",
      "Total Automation: External, consistent, and automatic case management.",
    ],
    icon: TrendingUp,
  },
  {
    title: "Neutral by design",
    description: "",
    bullets: [
      "Absolute Impartiality: Slice is independent and does not favor either party.",
      "Cryptographic Randomness: Jurors are selected via cryptography to ensure independence.",
      "Transparent Rules: Outcomes are based on clear, pre-defined regulations.",
    ],
    icon: Scale,
  },
  {
    title: "Predictable outcomes, automatic enforcement",
    description: "",
    bullets: [
      "Instant Execution: Rulings are enforced immediately once reached.",
      "Frictionless Process: No delays, intermediaries, or back-and-forth negotiations.",
      "Smart Contract Security: Results are automatically enforced by code.",
    ],
    icon: Zap,
  },
  {
    title: "Incentives aligned with truth",
    description: "",
    bullets: [
      "Truth Incentives: Participants are economically rewarded for honest decisions.",
      "Anti-Manipulation: The system penalizes any attempt at fraud or manipulation.",
      "Decentralized Trust: Total security without relying on a central authority.",
    ],
    icon: Award,
  },
];

export function JusticeFeatures() {
  return (
    <section
      id="justice-stack"
      className="relative bg-[#050505] py-32 overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              The Justice Stack
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Why Slices Work for Real Products
          </h2>
          <p className="max-w-2xl text-lg text-zinc-400 leading-relaxed">
          Slice helps products resolve disputes at scale without support overhead or bias, using an external and automated resolution system.
        </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featureBlocks.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col rounded-3xl bg-[#0A0A0A] border border-white/[0.08] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_var(--primary)]"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.05] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              {/* Bullets */}
              <div className="flex-1">
                <ul className="space-y-4">
                  {feature.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed"
                    >
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
