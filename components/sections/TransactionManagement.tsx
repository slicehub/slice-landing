
import { CheckCircle2 } from "lucide-react";

export function TransactionManagement() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-12 items-center md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Seamless transaction management
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Execute complex transactions with confidence. Queue, review, and
              approve transactions with your team before execution.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#00e673] flex-shrink-0 mt-0.5" />
                <span>
                  Batch multiple transactions into a single execution
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#00e673] flex-shrink-0 mt-0.5" />
                <span>Simulate transactions before execution</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#00e673] flex-shrink-0 mt-0.5" />
                <span>Set spending limits and automated policies</span>
              </li>
            </ul>
          </div>
          <div className="order-first md:order-last">
            <div className="rounded-2xl border border-border bg-card shadow-[0_30px_90px_rgba(0,0,0,0.22)] overflow-hidden">
              <img
                src="/transaction-management-interface-with-approval-wor.jpg"
                alt="Transaction Management"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
