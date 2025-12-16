import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-32 text-white border-t border-white/5">

      {/* Background Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BC5FEF]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="container relative mx-auto max-w-4xl px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#BC5FEF]/30 bg-[#BC5FEF]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#BC5FEF] font-bold mb-8">
          Ready to join?
        </div>

        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
          Make justice your profession
        </h2>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Join the protocol, stake tokens, and help resolve the world's disputes. The court is open.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="h-14 px-8 rounded-full bg-[#BC5FEF] text-white text-lg font-bold hover:bg-[#a040d0] shadow-[0_0_40px_rgba(188,95,239,0.3)] transition-all hover:-translate-y-1">
            Start Judging
          </Button>
          <Button
            variant="ghost"
            className="h-14 px-8 rounded-full border border-white/10 bg-white/5 text-lg font-bold text-white hover:bg-white/10"
          >
            Read the Docs <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
