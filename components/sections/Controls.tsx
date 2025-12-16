import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet2 } from "lucide-react";

const controlStats = [
  { label: "Avg. transaction approval time", value: "4.5 hrs" },
  { label: "Execution + notifications", value: "All in one view" },
  { label: "Transactions approved per week", value: "12M+" },
];

export function Controls() {
  return (
    <section id="security" className="relative overflow-hidden bg-gradient-to-b from-[#050807] via-[#050806] to-[#040505] py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-[-30%] h-[360px] bg-[radial-gradient(circle_at_50%_80%,rgba(0,255,154,0.14),transparent_60%)]" />
        <div className="absolute right-[-6%] top-10 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(127,255,225,0.24),transparent_60%)] blur-3xl" />
        <div className="absolute left-[-10%] bottom-[-10%] h-52 w-52 rounded-full bg-[radial-gradient(circle_at_40%_50%,rgba(0,196,110,0.3),transparent_60%)] blur-3xl" />
      </div>
      <div className="container relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#8bf6c8]">
            Controls for teams
          </div>
          <h2 className="text-4xl font-semibold leading-tight">Let your team spend with confidence</h2>
          <p className="text-lg text-white/70">
            Capture the speed of self-custody with Safe&apos;s programmable approvals, simulations, and real-time alerts.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {controlStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/12 bg-white/5 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm"
              >
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/60">{stat.label}</div>
                <div className="mt-3 text-2xl font-semibold text-white">{stat.value}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="group h-11 rounded-full bg-gradient-to-r from-[#00ff9a] via-[#10f0ae] to-[#08c46e] px-7 text-black shadow-[0_14px_45px_rgba(0,255,154,0.25)] transition hover:translate-y-[-1px]">
              Explore controls
              <ArrowRight className="h-4 w-4 transition duration-150 group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="ghost"
              className="h-11 rounded-full border border-white/15 bg-white/5 px-7 text-white hover:bg-white/10"
            >
              Talk to security
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,154,0.35),transparent_60%)] blur-3xl" />
          <div className="rounded-[28px] border border-white/12 bg-gradient-to-b from-[#0f1512] via-[#0a0f0c] to-[#090f0d] shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <img
              src="/transaction-management-interface-with-approval-wor.jpg"
              alt="Team approvals"
              className="w-full rounded-[28px]"
            />
          </div>
          <div className="absolute -right-5 bottom-6 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-white backdrop-blur-sm">
            <Wallet2 className="h-5 w-5 text-[#8bf6c8]" />
            <div>
              <div className="font-semibold">Pending approval</div>
              <div className="text-white/70">2 of 5 signers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
