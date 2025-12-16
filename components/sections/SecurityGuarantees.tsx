
import { Shield, FileCheck, Database } from "lucide-react";

export function SecurityGuarantees() {
  return (
    <section className="bg-black text-white py-32 border-t border-gray-900">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Enterprise-grade security
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="text-center">
            <Shield className="h-12 w-12 text-[#00c868] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Battle-tested</h3>
            <p className="text-gray-400">
              Audited by top security firms and protecting over $100B in assets
            </p>
          </div>
          <div className="text-center">
            <FileCheck className="h-12 w-12 text-[#00c868] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Non-custodial</h3>
            <p className="text-gray-400">
              You maintain full control of your private keys at all times
            </p>
          </div>
          <div className="text-center">
            <Database className="h-12 w-12 text-[#00c868] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Open Source</h3>
            <p className="text-gray-400">
              Fully auditable smart contracts deployed on-chain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
