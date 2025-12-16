import { Card } from "@/components/ui/card";
import { ArrowRight, Clock3, UploadCloud, Wallet2 } from "lucide-react";

const startSteps = [
  {
    title: "Setup in one hour",
    description: "Move onchain with controls that mirror how your org already works.",
    icon: Clock3,
  },
  {
    title: "Start transacting",
    description: "Use supported modules to manage account abstraction and automation.",
    icon: Wallet2,
  },
  {
    title: "Migrate in one click",
    description: "Bring existing smart wallets to Safe without downtime.",
    icon: UploadCloud,
  },
];

export function StartToday() {
  return (
    <section id="start" className="relative overflow-hidden bg-gradient-to-b from-[#eef3f0] via-white to-[#eef3f0] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-30%] h-[300px] bg-[radial-gradient(circle_at_50%_70%,rgba(0,255,154,0.12),transparent_60%)]" />
        <div className="absolute right-[-6%] bottom-[-8%] h-48 w-48 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,196,110,0.18),transparent_60%)] blur-3xl" />
      </div>
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5c6c61]">Start today</span>
          <h2 className="mt-3 text-4xl font-semibold text-[#0d1a12]">Get started with Safe</h2>
          <p className="mt-3 text-lg text-[#4b5c50]">
            Start with a template that fits your organization, or talk to us to plan your migration.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {startSteps.map((step) => (
            <Card key={step.title} className="h-full border-[#dce4dd] bg-white/90 p-6 shadow-[0_14px_50px_rgba(7,20,12,0.08)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e4ffef] to-white text-[#00b85a]">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#0d1a12]">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm text-[#4b5c50]">{step.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#dce4dd] bg-[#f6faf7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d1a12]">
                Start now <ArrowRight className="h-4 w-4" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
