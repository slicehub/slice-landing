
export function Comparison() {
  return (
    <section className="py-28 bg-muted/40 border-y border-border">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Why teams choose Safe
          </p>
          <h2 className="text-4xl font-bold">
            The proven way to coordinate assets
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-border bg-card/70 p-6 flex flex-col gap-4">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Multisig control
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Role-based approvals</li>
              <li>Policy-enforced spending</li>
              <li>Full audit history</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card/70 p-6 flex flex-col gap-4">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Operations
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Batch execution</li>
              <li>Simulation before send</li>
              <li>Automated workflows</li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-[#00e673] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-4">
            <p className="text-sm uppercase tracking-wide text-[#00b85a]">
              Safe advantage
            </p>
            <ul className="space-y-3 text-sm text-foreground">
              <li>Battle-tested smart contracts</li>
              <li>Institutional access controls</li>
              <li>Live ecosystem integrations</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card/70 p-6 flex flex-col gap-4">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Alternatives
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Single-signer risk</li>
              <li>Fragmented tooling</li>
              <li>Limited transparency</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
