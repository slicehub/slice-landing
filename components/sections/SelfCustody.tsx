import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Scale,
  Lock,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const featureBlocks = [
  {
    title: "Fair Selection",
    description: "Jurors are chosen cryptographically using VRF.",
    bullets: ["Verifiable Randomness", "Sybil Resistance", "Unbiased Jury"],
    icon: Scale,
  },
  {
    title: "Private Voting",
    description: "Commit-reveal scheme prevents herd behavior.",
    bullets: ["Encrypted Votes", "No Copying", "Anti-Bribery"],
    icon: Lock,
  },
  {
    title: "Game Theory",
    description: "Economic incentives align jurors with the truth.",
    bullets: ["Staking Rewards", "Slashing Penalties", "Nash Equilibrium"],
    icon: ShieldCheck,
  },
  {
    title: "Auto-Execution",
    description: "Rulings are enforced on-chain instantly.",
    bullets: ["Trustless Finality", "Smart Contract Logic", "Zero Latency"],
    icon: Zap,
  },
];

export function SelfCustody() {
  return (
    <section
      id="mechanics"
      className="relative overflow-hidden bg-[#050505] py-32 text-white"
    >
      {/* Dynamic Background Gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(188,95,239,0.15),transparent_70%)]" />
        <div className="absolute left-[-10%] bottom-0 h-[600px] w-[600px] bg-[radial-gradient(circle_at_50%_50%,rgba(100,50,255,0.08),transparent_60%)] blur-[100px]" />
        <div className="absolute right-[-10%] top-20 h-[500px] w-[500px] bg-[radial-gradient(circle_at_50%_50%,rgba(188,95,239,0.1),transparent_60%)] blur-[80px]" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#BC5FEF]/30 bg-[#BC5FEF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#BC5FEF]">
            The Justice Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Complexity Hidden, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Truth Revealed.
            </span>
          </h2>
          <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
            Slice combines cryptography, game theory, and smart contracts to
            create a dispute resolution system that is faster, cheaper, and
            fairer than any traditional court.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featureBlocks.map((feature) => (
            <Card
              key={feature.title}
              className="group relative h-full border-white/5 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[#BC5FEF]/50 hover:bg-[#BC5FEF]/[0.02] hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#BC5FEF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#BC5FEF] group-hover:scale-110 group-hover:bg-[#BC5FEF] group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(188,95,239,0.15)]">
                  <feature.icon className="size-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#BC5FEF] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6 border-b border-white/5 pb-6 min-h-[80px]">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="size-4 text-[#BC5FEF] opacity-70 group-hover:opacity-100" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <Button className="h-12 rounded-full bg-[#BC5FEF] px-8 text-white font-bold hover:bg-[#a54bd6] shadow-[0_0_30px_rgba(188,95,239,0.3)] transition-all hover:scale-105">
            Read the Whitepaper
          </Button>
          <Button
            variant="ghost"
            className="h-12 rounded-full border border-white/10 bg-white/5 px-8 text-white hover:bg-white/10 font-medium"
          >
            View Contract Audits <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
