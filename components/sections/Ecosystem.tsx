
import { Globe } from "lucide-react";

export function Ecosystem() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Supported Networks
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Deploy your Safe on any EVM-compatible chain
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          <div className="h-12 w-full bg-background rounded-lg border border-border flex items-center justify-center">
            <Globe className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="h-12 w-full bg-background rounded-lg border border-border flex items-center justify-center">
            <Globe className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="h-12 w-full bg-background rounded-lg border border-border flex items-center justify-center">
            <Globe className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="h-12 w-full bg-background rounded-lg border border-border flex items-center justify-center">
            <Globe className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="h-12 w-full bg-background rounded-lg border border-border flex items-center justify-center">
            <Globe className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="h-12 w-full bg-background rounded-lg border border-border flex items-center justify-center">
            <Globe className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
