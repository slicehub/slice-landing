import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const integrationApps = [
  { name: "Safe Account Abstraction", tag: "By Safe" },
  { name: "Safe 4337 Module", tag: "By Safe" },
  { name: "Safe Web3Auth", tag: "By Safe x Web3Auth" },
  { name: "Etherspot Safe module", tag: "By Etherspot" },
  { name: "Pimlico", tag: "Sponsor" },
  { name: "Circle", tag: "Sponsor" },
  { name: "Fireblocks", tag: "Security" },
  { name: "Gnosis Pay", tag: "Payments" },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="relative overflow-hidden bg-gradient-to-b from-[#eef3f0] via-white to-[#f4f8f6] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-35%] h-[320px] bg-[radial-gradient(circle_at_50%_70%,rgba(0,255,154,0.12),transparent_60%)]" />
        <div className="absolute left-[-8%] bottom-[-10%] h-48 w-48 rounded-full bg-[radial-gradient(circle_at_40%_50%,rgba(0,196,110,0.18),transparent_60%)] blur-3xl" />
      </div>
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5c6c61]">Integrations</span>
          <h2 className="mt-3 text-4xl font-semibold text-[#0d1a12]">Integrations in one click</h2>
          <p className="mt-3 text-lg text-[#4b5c50]">Safe helps you discover and deploy key smart wallet features.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {integrationApps.map((app) => (
            <Card
              key={app.name}
              className="border-[#d7e1da] bg-white/90 p-5 shadow-[0_18px_50px_rgba(7,20,12,0.08)] backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(7,20,12,0.12)]"
            >
              <div className="flex items-center justify-between text-sm text-[#6a7b6f]">
                <div className="size-8 rounded-lg bg-gradient-to-br from-[#eef9f3] to-white" />
                <span className="rounded-full border border-[#dce4dd] px-3 py-1 text-xs font-semibold text-[#0d1a12]">{app.tag}</span>
              </div>
              <div className="mt-6 text-lg font-semibold text-[#0d1a12]">{app.name}</div>
              <div className="mt-4 flex items-center gap-2 text-sm text-[#4b5c50]">
                <ArrowRight className="h-4 w-4" />
                Explore app
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
