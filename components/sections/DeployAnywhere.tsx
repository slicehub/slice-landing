import { CheckCircle2, Globe2, Plug, Smartphone } from "lucide-react";

const chainBadges = ["Base", "OP Mainnet", "Arbitrum", "Polygon", "BNB Chain", "Avalanche", "Gnosis", "zkSync", "Linea", "Scroll"];

export function DeployAnywhere() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-gradient-to-b from-[#040605] via-[#050807] to-[#050807] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,154,0.16),transparent_45%),radial-gradient(circle_at_20%_30%,rgba(7,10,9,0.7),transparent_60%)]" />
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#8bf6c8]">
            Every chain
          </div>
          <h2 className="mt-4 text-4xl font-semibold">Deploy Safe on any chain</h2>
          <p className="mt-3 text-lg text-white/70">Secure assets everywhere your team builds and deploys.</p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {chainBadges.map((chain) => (
            <div
              key={chain}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="size-2 rounded-full bg-[#8bf6c8]" />
              {chain}
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-6 rounded-3xl border border-white/12 bg-white/5 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm md:grid-cols-3">
          <FeatureColumn icon={Globe2} title="Programmability" items={["Build on open modules", "Automate actions", "Bring your policies"]} />
          <FeatureColumn icon={Smartphone} title="Mobile" items={["Native approvals", "Push notifications", "Biometric signing"]} />
          <FeatureColumn icon={Plug} title="Integrations" items={["Safe apps ready", "Wallet connectors", "MPC + AA friendly"]} />
        </div>
      </div>
    </section>
  );
}

function FeatureColumn({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon: typeof Globe2;
}) {
  return (
    <div className="space-y-3 rounded-2xl border border-white/12 bg-gradient-to-b from-[#0f1512] via-[#0c110f] to-[#0a0f0d] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-3 text-lg font-semibold">
        <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[#133624] to-[#0b1b14] text-[#8bf6c8]">
          <Icon className="h-5 w-5" />
        </div>
        {title}
      </div>
      <ul className="space-y-2 text-sm text-white/80">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#00e673]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
