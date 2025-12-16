
import { Button } from "@/components/ui/button";
import { MockPhone } from "@/components/ui/mock-phone";
import { ArrowRight, ArrowUpRight, ArrowDownLeft, Shield, Clock } from "lucide-react";

export function MobileSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#00ff9a] mb-6">
              Mobile App
            </div>
            <h2 className="text-4xl font-dm-sans font-bold mb-6 text-white leading-tight">
              Track and sign transactions <br /> <span className="text-gray-500">wherever you are</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Stay connected to your Safe. Receive push notifications for pending approvals,
              review transaction details, and sign securely using biometrics.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {["Biometric Security", "Push Notifications", "Full Transaction History"].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-[#00ff9a]/10 flex items-center justify-center text-[#00ff9a]">
                    <Shield className="size-3" />
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="">
              <Button className="bg-[#00ff9a] hover:bg-[#00e68a] text-black font-semibold h-12 px-8 rounded-full">
                Download App
              </Button>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-[#00ff9a] opacity-[0.03] blur-[120px] rounded-full scale-150" />

            <MockPhone className="w-[320px] h-[640px] shadow-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 pt-6">
                  <div>
                    <div className="text-xs text-gray-400">Total Balance</div>
                    <div className="text-2xl font-bold text-white">$124,592.00</div>
                  </div>
                  <div className="size-10 rounded-full bg-white/10" />
                </div>

                {/* Actions */}
                <div className="grid grid-cols-4 gap-2 mb-8">
                  {["Send", "Swap", "Buy", "More"].map((action) => (
                    <div key={action} className="flex flex-col items-center gap-2">
                      <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                        <ArrowUpRight className="size-5" />
                      </div>
                      <div className="text-[10px] text-gray-400">{action}</div>
                    </div>
                  ))}
                </div>

                {/* Validations */}
                <div className="mb-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Pending Actions</div>
                  <div className="p-4 rounded-2xl bg-[#00ff9a] text-black mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-bold">Sign Transaction</div>
                      <div className="bg-black/10 px-2 py-0.5 rounded text-[10px] font-bold">URGENT</div>
                    </div>
                    <div className="text-sm opacity-80 mb-3">Transfer 50,000 USDC</div>
                    <div className="flex items-center justify-between text-xs font-medium opacity-60">
                      <span>2/5 Signed</span>
                      <span>Expires in 2h</span>
                    </div>
                  </div>
                </div>

                {/* History */}
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Recent Activity</div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                            <ArrowDownLeft className="size-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Received ETH</div>
                            <div className="text-xs text-gray-500">From Coinbase</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-[#00ff9a]">+1.5 ETH</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MockPhone>
          </div>
        </div>
      </div>
    </section>
  );
}

