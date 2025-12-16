import { WalletMinimal } from "lucide-react";

const walletPartners = ["Coinbase", "Ledger", "Safe", "Rabby", "Rainbow", "WalletConnect"];

export function Wallets() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eef3f0] via-white to-[#eef3f0] py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-40%] h-[260px] bg-[radial-gradient(circle_at_50%_70%,rgba(0,255,154,0.12),transparent_60%)]" />
      </div>
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold text-[#0d1a12]">Compatible with whatever wallet you use</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {walletPartners.map((wallet) => (
              <div
                key={wallet}
                className="flex items-center gap-2 rounded-full border border-[#dce4dd] bg-white/90 px-4 py-2 text-sm font-semibold text-[#0d1a12] shadow-[0_12px_35px_rgba(7,20,12,0.08)] backdrop-blur-sm"
              >
                <WalletMinimal className="h-4 w-4 text-[#00c86b]" />
                {wallet}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
