
import { Card } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          What users say about us
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <Card className="p-12 border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-full bg-muted" />
              <div>
                <div className="font-semibold text-lg">Alex Chen</div>
                <div className="text-sm text-muted-foreground">
                  Treasury Lead, Protocol DAO
                </div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Safe has been instrumental in managing our treasury. The
              multi-sig setup gives us peace of mind."
            </p>
          </Card>
          <Card className="p-12 border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-full bg-muted" />
              <div>
                <div className="font-semibold text-lg">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">
                  CTO, DeFi Startup
                </div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "The developer experience is excellent. We integrated Safe in
              less than a week."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
