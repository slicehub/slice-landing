import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const teamUse = [
  {
    title: "Product",
    description: "Ship fast and approve contracts on every supported chain.",
    bullets: ["Connect any on-chain product", "Operate across EVM", "Track signer actions"],
  },
  {
    title: "Treasury",
    description: "Run payroll, investments, and payments with guardrails.",
    bullets: ["Automate recurring payments", "Assign spending limits", "Simulate before sending"],
  },
  {
    title: "Operations",
    description: "Give teams freedom while keeping governance controls tight.",
    bullets: ["Policy-based automation", "Approval routing", "Full audit trails"],
  },
];

export function TeamsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7faf9] via-white to-[#eef3f0] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-35%] h-[300px] bg-[radial-gradient(circle_at_50%_70%,rgba(0,255,154,0.14),transparent_60%)]" />
        <div className="absolute left-[-10%] bottom-[-15%] h-56 w-56 rounded-full bg-[radial-gradient(circle_at_40%_50%,rgba(0,196,110,0.18),transparent_60%)] blur-3xl" />
      </div>
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5c6c61]">Teams</span>
          <h2 className="mt-3 text-4xl font-semibold text-[#0d1a12]">Built to help your teams move faster</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamUse.map((team) => (
            <Card
              key={team.title}
              className="h-full border-[#dce4dd] bg-white/90 p-6 shadow-[0_14px_50px_rgba(7,20,12,0.08)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-[#dcfff0] to-white" />
                <h3 className="text-lg font-semibold text-[#0d1a12]">{team.title}</h3>
              </div>
              <p className="mt-3 text-sm text-[#4b5c50]">{team.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-[#1c2b21]">
                {team.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c86b]" />
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
