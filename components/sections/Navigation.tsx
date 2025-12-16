import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/50 bg-white/70 shadow-[0_12px_50px_rgba(7,20,12,0.08)] backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-[#dbe5df] bg-white/80 px-3 py-1.5 text-lg font-semibold text-[#0d1a12] shadow-sm"
          >
            <span className="size-2 rounded-full bg-gradient-to-br from-[#00ff9a] to-[#08c46e]" />
            Safe
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-[#4b5c50] md:flex">
            <Link href="#features" className="hover:text-[#0d1a12]">
              Features
            </Link>
            <Link href="#security" className="hover:text-[#0d1a12]">
              Controls
            </Link>
            <Link href="#ecosystem" className="hover:text-[#0d1a12]">
              Chains
            </Link>
            <Link href="#integrations" className="hover:text-[#0d1a12]">
              Integrations
            </Link>
            <Link href="#developers" className="hover:text-[#0d1a12]">
              Developers
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="#start" className="hidden text-sm font-semibold text-[#0d1a12] hover:text-[#00b85a] sm:inline">
            Docs
          </Link>
          <Button className="h-10 rounded-full bg-gradient-to-r from-[#00ff9a] via-[#10f0ae] to-[#08c46e] px-5 text-sm font-semibold text-black shadow-[0_10px_35px_rgba(0,255,154,0.25)]">
            Launch Safe <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
