import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Sparkles } from "lucide-react";

const replaceCards = [
  {
    title: "Multi-sig wallet",
    description: "Designed for simple approvals and cold storage.",
    items: ["Limited UX for teams", "Fragmented operations", "Not designed for speed"],
  },
  {
    title: "Self-custodial wallet",
    description: "Fast but risky without layered controls.",
    items: ["Single-signer risk", "Hard to audit changes", "No built-in policies"],
  },
  {
    title: "100% on-chain + multi-sig",
    description: "Safe brings the best of both worlds for organizations.",
    items: ["Flexible approvals", "Clear audit history", "Automated protection"],
    highlight: true,
  },
];

export function ReplaceWallets() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f1f5f3] via-white to-[#eef3f0] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-35%] h-[320px] bg-[radial-gradient(circle_at_50%_60%,rgba(0,255,154,0.14),transparent_60%)]" />
        <div className="absolute right-[-4%] bottom-[-5%] h-48 w-48 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(127,255,225,0.22),transparent_60%)] blur-3xl" />
      </div>
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4b5c50]">Built for orgs</span>
          <h2 className="mt-3 text-4xl font-semibold text-[#0d1a12]">Safe can replace your self-custodial wallet</h2>
          <p className="mt-3 text-lg text-[#3b4b41]">Modern guardrails without sacrificing speed for your treasury, ops, and product teams.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {replaceCards.map((card) => (
            <Card
              key={card.title}
              className={`relative overflow-hidden rounded-2xl border p-6 text-left shadow-[0_16px_50px_rgba(7,20,12,0.08)] ${
                card.highlight
                  ? "border-[#b2ffe2] bg-gradient-to-b from-white via-[#f3fff8] to-white"
                  : "border-[#dde4de] bg-white"
              }`}
            >
              {card.highlight && <div className="pointer-events-none absolute inset-[-1px] rounded-2xl border border-[#9affd7]/70" />}
              <div className="flex items-center gap-3">
                <div className={`flex size-10 items-center justify-center rounded-full ${card.highlight ? "bg-[#d8ffe9]" : "bg-[#eef1f5]"}`}>
                  {card.highlight ? <Sparkles className="h-5 w-5 text-[#0d1a12]" /> : <Shield className="h-5 w-5 text-[#4b5c50]" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0d1a12]">{card.title}</h3>
                  <p className="text-sm text-[#4b5c50]">{card.description}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[#1c2b21]">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className={`h-4 w-4 ${card.highlight ? "text-[#00c86b]" : "text-[#8a95a0]"}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
