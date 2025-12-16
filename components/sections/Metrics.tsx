
export function Metrics() {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3 text-center">
          <div className="space-y-3">
            <div className="text-7xl sm:text-8xl font-extrabold text-[#00e673]">
              $100B+
            </div>
            <div className="text-sm text-muted-foreground/70 uppercase tracking-[0.2em]">
              Assets Secured
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-7xl sm:text-8xl font-extrabold text-[#00e673]">
              12M+
            </div>
            <div className="text-sm text-muted-foreground/70 uppercase tracking-[0.2em]">
              Transactions Executed
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-7xl sm:text-8xl font-extrabold text-[#00e673]">
              50K+
            </div>
            <div className="text-sm text-muted-foreground/70 uppercase tracking-[0.2em]">
              Active Users
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
