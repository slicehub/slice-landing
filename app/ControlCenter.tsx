import { Card } from "@/components/ui/card";
import { Lock, Users, Activity } from "lucide-react";

export function ControlCenter() {
  return (
    <section className="bg-black text-white py-44">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Your treasury, full control
        </h2>
        <p className="text-center text-gray-400 text-lg mb-20 max-w-2xl mx-auto">
          Complete visibility and control over your digital assets with advanced
          security features
        </p>

        {/* Main Dashboard Visual */}
        <div className="mb-28">
          <div className="rounded-2xl border border-gray-800 bg-[#0a0a0a] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.22)]">
            <img
              src="/dark-theme-control-panel-dashboard-with-graphs-and.jpg"
              alt="Control Panel"
              className="w-full"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-[#0a0a0a] border-gray-800 p-8 min-h-[220px]">
            <Lock className="h-8 w-8 text-[#00c868] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Multi-signature Security
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Require multiple confirmations for every transaction to prevent
              unauthorized access.
            </p>
          </Card>
          <Card className="bg-[#0a0a0a] border-gray-800 p-8 min-h-[220px]">
            <Users className="h-8 w-8 text-[#00c868] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Team Management
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Add team members with customizable roles and permissions for your
              organization.
            </p>
          </Card>
          <Card className="bg-[#0a0a0a] border-gray-800 p-8 min-h-[220px]">
            <Activity className="h-8 w-8 text-[#00c868] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Real-time Monitoring
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Track all transactions and activities across your accounts in
              real-time.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
