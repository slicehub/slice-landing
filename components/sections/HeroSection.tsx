import type React from "react";

import { Button } from "@/components/ui/button";
import { PremiumGlassCard } from "@/components/ui/premium-glass-card";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Wallet } from "lucide-react";

const trustedLogos = ["Base", "Optimism", "Arbitrum", "Polygon", "BNB Chain", "zkSync"];

const statPills = [
  { label: "Policies enforced", value: "3,200+" },
  { label: "Assets secured", value: "$100B+" },
  { label: "Avg. approval time", value: "4.5 hrs" },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020403] py-28 text-white min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,#00ff9a_0deg,transparent_60deg,transparent_300deg,#00ff9a_360deg)] opacity-20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#00c46e_0deg,transparent_60deg,transparent_300deg,#00c46e_360deg)] opacity-10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#00ff9a] shadow-[0_10px_40px_rgba(0,255,154,0.1)]">
            Safe wallet for teams
            <span className="flex size-2 rounded-full bg-[#00ff9a] animate-pulse" />
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[64px] leading-[1.05]">
            Making security for your organization assets feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9a] to-[#00c46c]">effortless</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
            Replace brittle wallets with programmable multi-sig controls, crystal-clear approvals, and automation that keeps teams moving.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button className="group h-14 rounded-full bg-[#00ff9a] hover:bg-[#00ff9a] px-8 text-base font-semibold text-black shadow-[0_0_20px_rgba(0,255,154,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,154,0.6)]">
              Launch Safe
              <ArrowRight className="ml-2 h-4 w-4 transition duration-150 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="h-14 rounded-full border border-white/10 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Talk to security
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 pt-4">
            {statPills.map((pill) => (
              <div
                key={pill.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left backdrop-blur-sm"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">{pill.label}</div>
                <div className="mt-1 text-2xl font-medium text-white">{pill.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 text-sm text-gray-400 md:flex-row md:items-center pt-4">
            <span className="font-semibold text-white/50 uppercase tracking-widest text-xs">Trusted by teams at</span>
            <div className="flex flex-wrap items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {trustedLogos.map((logo) => (
                <span key={logo} className="font-medium text-white/80">{logo}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Code-driven UI */}
        <div className="relative w-full perspective-[2000px]">
          <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-[#00ff9a] opacity-20 blur-[80px]" />

          <div className="space-y-6 transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out preserve-3d">

            {/* Main Treasury Card */}
            <PremiumGlassCard>
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center">
                      <Wallet className="size-5 text-[#00ff9a]" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Main Treasury</div>
                      <div className="text-xs text-gray-400 font-mono">0x1234...5678</div>
                    </div>
                  </div>
                  <span className="flex items-center gap-2 rounded-full bg-[#00ff9a]/10 px-3 py-1 text-xs font-semibold text-[#00ff9a] border border-[#00ff9a]/20">
                    <span className="size-1.5 rounded-full bg-[#00ff9a] animate-pulse" />
                    Active
                  </span>
                </div>

                <div className="mb-8">
                  <div className="text-sm text-gray-400 mb-1">Total Balance</div>
                  <div className="text-4xl font-semibold text-white tracking-tight">$2,854,231.45</div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-[#00ff9a]">
                    <TrendingUp className="size-4" />
                    <span>+2.4% (24h)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-gray-400 mb-2">Tokens</div>
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="size-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-[10px] text-white">
                          $
                        </div>
                      ))}
                      <div className="size-8 rounded-full bg-gray-900 border-2 border-black flex items-center justify-center text-[10px] text-white">
                        +5
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-gray-400 mb-2">Signers</div>
                    <div className="flex items-center gap-2 text-white font-medium">
                      3 <span className="text-gray-500">of</span> 5
                    </div>
                    <div className="h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                      <div className="h-full w-3/5 bg-[#00ff9a]" />
                    </div>
                  </div>
                </div>
              </div>
            </PremiumGlassCard>

            {/* Floating Approval Card */}
            <div className="relative -mt-12 ml-12 z-20">
              <PremiumGlassCard className="max-w-xs">
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3 uppercase tracking-wider">
                    <span>Pending Approval</span>
                    <span className="text-white">12m ago</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <ArrowRight className="size-5 -rotate-45" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Send USDC</div>
                      <div className="text-xs text-gray-400">To: 0x89...22a</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-white font-medium">50,000</div>
                      <div className="text-xs text-gray-400">USDC</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="w-full bg-[#00ff9a] text-black hover:bg-[#00e68a] h-8 text-xs font-semibold">
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 h-8 text-xs">
                      Reject
                    </Button>
                  </div>
                </div>
              </PremiumGlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

