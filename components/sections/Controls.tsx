import { Button } from "@/components/ui/button";
import { MockDashboard } from "@/components/ui/mock-dashboard";
import { ArrowRight, Wallet2, CheckCircle2, Clock, XCircle, AlertCircle } from "lucide-react";

const controlStats = [
  { label: "Avg. transaction approval time", value: "4.5 hrs" },
  { label: "Execution + notifications", value: "All in one view" },
  { label: "Transactions approved per week", value: "12M+" },
];

export function Controls() {
  return (
    <section id="security" className="relative overflow-hidden bg-[#050807] py-24 text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-[0.05]" />
        <div className="absolute inset-x-0 top-[-30%] h-[500px] bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,154,0.05),transparent_60%)]" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#00ff9a] opacity-5 blur-[100px]" />
      </div>

      <div className="container relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#00ff9a]">
            Controls for teams
          </div>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Let your team spend with <span className="text-gray-400">confidence</span></h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Capture the speed of self-custody with Safe&apos;s programmable approvals, simulations, and real-time alerts.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 pt-4">
            {controlStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-sm"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">{stat.label}</div>
                <div className="mt-3 text-xl font-medium text-white">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button className="group h-12 rounded-full bg-[#00ff9a] hover:bg-[#00e68a] px-8 text-black shadow-[0_0_20px_rgba(0,255,154,0.3)] transition-all">
              Explore controls
              <ArrowRight className="ml-2 h-4 w-4 transition duration-150 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="ghost"
              className="h-12 rounded-full border border-white/10 bg-white/5 px-8 text-white hover:bg-white/10"
            >
              Talk to security
            </Button>
          </div>
        </div>

        <div className="relative">
          {/* Main Interface Mockup */}
          <MockDashboard className="w-full aspect-[4/3] bg-[#0a0f0d]">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-semibold text-lg">Transaction Queue</h3>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-400">Pending (3)</span>
                  <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-400">History</span>
                </div>
              </div>

              <div className="space-y-3">
                {/* Item 1 */}
                <div className="flex items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="size-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mr-4">
                    <Wallet2 className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Payroll Batch #204</div>
                    <div className="text-xs text-gray-400">45 Recipients • Just now</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="size-6 rounded-full bg-green-500 border-2 border-[#0a0f0d]" />
                      <div className="size-6 rounded-full bg-green-500 border-2 border-[#0a0f0d]" />
                      <div className="size-6 rounded-full bg-gray-700 border-2 border-[#0a0f0d] flex items-center justify-center text-[8px]" />
                    </div>
                    <div className="text-sm font-medium">Wait</div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="size-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mr-4">
                    <AlertCircle className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Protocol Upgrade</div>
                    <div className="text-xs text-gray-400">Contract interaction • 2h ago</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-orange-400">Needs Sig</div>
                    <div className="text-xs text-gray-500">2/5 Signed</div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer opacity-60">
                  <div className="size-10 rounded-full bg-gray-500/20 text-gray-400 flex items-center justify-center mr-4">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Marketing Budget</div>
                    <div className="text-xs text-gray-400">USDC Transfer • 5h ago</div>
                  </div>
                  <div className="text-xs font-mono text-gray-500">
                    Executed
                  </div>
                </div>
              </div>
            </div>
          </MockDashboard>

          {/* Floating Element */}
          <div className="absolute -right-5 bottom-8 animate-bounce-slow">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#151a18]/90 px-5 py-4 text-sm text-white shadow-2xl backdrop-blur-md">
              <div className="relative">
                <div className="size-10 rounded-full bg-[#00ff9a]/20 flex items-center justify-center text-[#00ff9a]">
                  <CheckCircle2 className="size-5" />
                </div>
                <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-[#050807] flex items-center justify-center">
                  <div className="size-2.5 rounded-full bg-[#00ff9a]" />
                </div>
              </div>
              <div>
                <div className="font-semibold text-white">Transaction Verified</div>
                <div className="text-xs text-gray-400">Policy checks passed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

