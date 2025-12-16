import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, CheckCircle2, KeyRound, Layers, Shield } from "lucide-react";

const featureBlocks = [
  {
    title: "Multisig controls",
    description: "Set tailored spending rules and policies per wallet.",
    bullets: ["Role-based approvals", "Policy-enforced spending", "Granular limits"],
    icon: Shield,
  },
  {
    title: "Operations",
    description: "Streamline approvals so teams can move without bottlenecks.",
    bullets: ["Batch transactions", "Automated workflows", "Track every change"],
    icon: Layers,
  },
  {
    title: "Security",
    description: "Battle-tested contracts protecting the largest treasuries.",
    bullets: ["$100B secured", "SOC2-ready controls", "Open-source audits"],
    icon: KeyRound,
  },
  {
    title: "Automation",
    description: "Trigger actions with confidence and remove manual toil.",
    bullets: ["Policy simulators", "Pre-flight checks", "Programmatic triggers"],
    icon: Bot,
  },
];

export function SelfCustody() {
  return (
    <section id="features" className="relative overflow-hidden bg-gradient-to-b from-[#080b09] via-[#050807] to-[#050605] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-20%] h-[320px] bg-[radial-gradient(circle_at_50%_60%,rgba(0,255,154,0.12),transparent_60%)]" />
        <div className="absolute left-10 bottom-6 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(0,196,110,0.3),transparent_60%)] blur-3xl" />
        <div className="absolute right-[-8%] top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(127,255,225,0.28),transparent_60%)] blur-3xl" />
      </div>
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8bf6c8]">
            Simplified security
            <span className="size-1.5 rounded-full bg-[#8bf6c8]" />
          </span>
          <h2 className="text-4xl font-semibold">Self-custody without friction</h2>
          <p className="mt-4 max-w-3xl text-lg text-white/70">
            Give every team the guardrails of multisig with the clarity of a modern dashboard. No extra drag, no guesswork.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featureBlocks.map((feature) => (
            <Card
              key={feature.title}
              className="h-full border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0c2519] to-[#0a1812] text-[#8bf6c8]">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{feature.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                {feature.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#8bf6c8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button className="h-11 rounded-full bg-gradient-to-r from-[#00ff9a] via-[#10f0ae] to-[#08c46e] px-7 text-black shadow-[0_12px_45px_rgba(0,255,154,0.25)] hover:translate-y-[-1px]">
            Discover more
          </Button>
          <Button
            variant="ghost"
            className="h-11 rounded-full border border-white/15 bg-white/5 px-7 text-white hover:bg-white/10"
          >
            See control stack
          </Button>
        </div>
      </div>
    </section>
  );
}
