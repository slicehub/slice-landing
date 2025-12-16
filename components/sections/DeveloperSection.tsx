
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Zap } from "lucide-react";

export function DeveloperSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Built for developers</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Extend Safe with custom modules and integrate with your existing
            infrastructure
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <Card className="bg-[#0a0a0a] border-gray-800 p-7 min-h-[200px]">
            <Server className="h-8 w-8 text-[#00c868] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Safe SDK
            </h3>
            <p className="text-gray-400 mb-3 text-sm">
              Integrate Safe into your application with our comprehensive
              TypeScript SDK
            </p>
            <Button variant="link" className="text-[#00e673] p-0 h-auto">
              View Documentation
            </Button>
          </Card>
          <Card className="bg-[#0a0a0a] border-gray-800 p-7 min-h-[200px]">
            <Zap className="h-8 w-8 text-[#00c868] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Custom Modules
            </h3>
            <p className="text-gray-400 mb-3 text-sm">
              Build custom logic and automation with Safe's modular
              architecture
            </p>
            <Button variant="link" className="text-[#00e673] p-0 h-auto">
              Explore Modules
            </Button>
          </Card>
        </div>

        <div className="rounded-lg border border-gray-900 bg-[#050505] p-0 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.22)]">
          <img
            src="/code-editor-showing-smart-contract-integration.jpg"
            alt="Developer Tools"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
