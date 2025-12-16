import type React from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

const trustedLogos = ["Base", "Optimism", "Arbitrum", "Polygon", "BNB Chain", "zkSync"];

const statPills = [
  { label: "Policies enforced", value: "3,200+" },
  { label: "Assets secured", value: "$100B+" },
  { label: "Avg. approval time", value: "4.5 hrs" },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7faf9] via-white to-[#eef3f0] py-28 text-[#07140c]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#00ff9a_0%,transparent_55%)] opacity-60 blur-3xl" />
        <div className="absolute right-[-5%] top-10 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_60%_20%,#7fffe1_0%,transparent_50%)] opacity-50 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,154,0.18),transparent_55%)]" />
        <div className="absolute left-12 top-16 size-24 rounded-3xl border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(7,20,12,0.06)]" />
        <div className="absolute right-16 top-28 size-16 rounded-2xl border border-white/70 bg-white/70 shadow-[0_14px_50px_rgba(7,20,12,0.05)]" />
      </div>

      <div className="container relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe5df] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#0d1a12] shadow-[0_10px_40px_rgba(7,20,12,0.05)]">
            Safe wallet for teams
            <span className="flex size-2 rounded-full bg-gradient-to-br from-[#00ff9a] to-[#00c46c]" />
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-[#05110b] sm:text-5xl lg:text-[52px]">
            Making security for your organization assets feel effortless
          </h1>
          <p className="text-lg text-[#2c3b32]">
            Replace brittle wallets with programmable multi-sig controls, crystal-clear approvals, and automation that
            keeps teams moving.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="group h-12 rounded-full bg-gradient-to-r from-[#00ff9a] via-[#10f0ae] to-[#08c46e] px-7 text-base font-semibold text-black shadow-[0_16px_50px_rgba(0,255,154,0.3)] transition hover:translate-y-[-1px]">
              Launch Safe
              <ArrowRight className="h-4 w-4 transition duration-150 group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full border border-[#cfd7d2] bg-white/80 px-7 text-base font-semibold text-[#0d1a12] shadow-[0_10px_40px_rgba(7,20,12,0.06)] hover:border-[#9fada6] hover:bg-white"
            >
              Talk to security
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#2c3b32]">
            <div className="flex items-center gap-2 rounded-full border border-[#dbe5df] bg-white/80 px-3 py-1.5 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#00c46e]" />
              SOC2 ready
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#dbe5df] bg-white/80 px-3 py-1.5 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#00c46e]" />
              Account abstraction native
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {statPills.map((pill) => (
              <div
                key={pill.label}
                className="rounded-2xl border border-[#dbe5df] bg-white/80 px-4 py-3 text-left shadow-[0_14px_40px_rgba(7,20,12,0.04)]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6b7b71]">{pill.label}</div>
                <div className="mt-2 text-xl font-semibold text-[#05110b]">{pill.value}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-sm text-[#2c3b32] md:flex-row md:items-center">
            <span className="font-semibold text-[#0d1a12]">Trusted by teams at</span>
            <div className="flex flex-wrap items-center gap-2">
              {trustedLogos.map((logo) => (
                <div
                  key={logo}
                  className="flex items-center gap-2 rounded-full border border-[#dbe5df] bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#0d1a12] shadow-sm"
                >
                  <div className="size-2 rounded-full bg-[#00c46e]" />
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,154,0.4),transparent_65%)] blur-3xl" />
          <div className="absolute -right-10 -bottom-12 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(10,196,110,0.35),transparent_60%)] blur-3xl" />
          <div className="space-y-4">
            <GradientCard>
              <div className="flex items-center justify-between text-sm text-white/80">
                <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                  Treasury policy
                </span>
                <span className="flex items-center gap-2 text-xs font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#7dffd1]" />
                  Real-time checks
                </span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-white">
                {["Payments", "Fiat on/off ramp", "Investments"].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-black/40 p-4 text-white shadow-[0_25px_80px_rgba(0,0,0,0.3)]">
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span>Asset net worth</span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-[#7dffd1]">
                    Crypto
                  </span>
                </div>
                <div className="mt-3 text-4xl font-semibold">$1.2M</div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-xs text-white/70">
                  {[
                    { name: "new TVL", value: "$690k", change: "+13.4%" },
                    { name: "Wallets", value: "$320k", change: "+3.2%" },
                    { name: "Others", value: "$10k", change: "-11.14%" },
                  ].map((stat) => (
                    <div key={stat.name} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      <div className="uppercase tracking-[0.22em] text-white/60">{stat.name}</div>
                      <div className="mt-1 font-semibold text-white">{stat.value}</div>
                      <div className={`text-[11px] ${stat.change.startsWith("-") ? "text-[#ffb5c7]" : "text-[#7dffd1]"}`}>
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GradientCard>

            <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
              <GradientCard className="p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70">Approvals needed</div>
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-semibold text-white">3 of 5</div>
                    <div className="text-sm text-white/70">Gnosis Safe - Treasury</div>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#7dffd1]">Low risk</div>
                </div>
              </GradientCard>

              <GradientCard className="p-5">
                <div className="flex items-center justify-between text-sm text-white/80">
                  <span>Signing priority</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#7dffd1]">On track</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="size-10 rounded-xl border border-white/10 bg-white/5" />
                  <div>
                    <div className="text-white">Arbitrum</div>
                    <div className="text-xs text-white/60">Investment desk</div>
                  </div>
                </div>
              </GradientCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GradientCard({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className="relative rounded-[28px] bg-gradient-to-b from-[#0f1914] via-[#0a1210] to-[#060b08] p-[1px] shadow-[0_28px_90px_rgba(0,0,0,0.24)]">
      <div className={`rounded-[26px] border border-white/8 bg-[#050908]/80 p-6 backdrop-blur-sm ${className}`}>{children}</div>
      <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/5" />
    </div>
  );
}
