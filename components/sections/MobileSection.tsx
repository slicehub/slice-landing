
import { Button } from "@/components/ui/button";
import { Apple, Play, Battery, Signal, Wifi, ChevronDown, Bell, ScanLine, Filter, Clock } from "lucide-react";

// 1. The Internal App UI (Reused for all phones)
function PhoneContent({ isDark = false }: { isDark?: boolean }) {
  const bgClass = isDark ? "bg-[#0C110F] text-white" : "bg-white text-black";
  const textMuted = isDark ? "text-gray-500" : "text-gray-400";
  const itemHover = isDark ? "bg-white/5" : "bg-gray-50";

  return (
    <div className={`h-full w-full flex flex-col font-sans ${bgClass} select-none`}>
      {/* Status Bar - Pushed down to clear corners */}
      <div className="flex justify-between items-center px-7 pt-5 text-[10px] font-medium tracking-wide opacity-80">
        <span>9:41</span>
        <div className="flex gap-1.5">
          <Signal className="h-3 w-3" />
          <Wifi className="h-3 w-3" />
          <Battery className="h-3 w-3" />
        </div>
      </div>

      {/* App Header - Pushed down to clear Dynamic Island */}
      <div className="px-6 pb-2 pt-8 flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className={`size-10 rounded-full flex items-center justify-center text-base shadow-sm ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black border border-gray-200"}`}>
            ⚖️
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1 text-sm font-bold cursor-pointer">
              My Disputes <ChevronDown className="size-3 opacity-50" />
            </div>
            <div className={`text-[11px] font-mono ${textMuted}`}>3 Active Cases</div>
          </div>
        </div>
        <div className="flex gap-3 pt-1">
          <Filter className="size-5 opacity-60" />
          <Bell className="size-5 opacity-60" />
        </div>
      </div>

      {/* Hero Stats */}
      <div className="px-6 py-6 text-center">
        <div className="text-4xl font-extrabold tracking-tight">
          $1,450<span className="text-gray-400 text-2xl font-bold">.00</span>
        </div>
        <div className="text-xs font-bold text-[#BC5FEF] uppercase tracking-wide mt-1">Pending Rewards</div>
      </div>

      {/* Tabs */}
      <div className="flex px-6 border-b border-gray-100/10 mb-2">
        {["Active", "Past", "Appeals"].map((tab, i) => (
          <div key={tab} className={`pb-3 px-3 text-sm font-semibold border-b-[2px] cursor-pointer transition-colors ${i === 0 ? "border-current opacity-100" : "border-transparent opacity-40 hover:opacity-70"}`}>
            {tab}
          </div>
        ))}
      </div>

      {/* Dispute List */}
      <div className="flex-1 overflow-hidden px-4 space-y-2 pt-2">
        {[
          { name: "Stellar Community Fund", type: "Grant", status: "Voting Open", time: "2h left", color: "bg-blue-500", badgeColor: "bg-green-500/10 text-green-500" },
          { name: "Ethereum Foundation", type: "Milestone", status: "Reveal Phase", time: "1d left", color: "bg-purple-500", badgeColor: "bg-[#BC5FEF]/10 text-[#BC5FEF]" },
          { name: "Freelance Dispute #392", type: "Escrow", status: "Appeal", time: "12h left", color: "bg-orange-500", badgeColor: "bg-orange-500/10 text-orange-500" },
          { name: "Prediction Market", type: "Oracle", status: "Pending", time: "3d left", color: "bg-gray-500", badgeColor: "bg-gray-500/10 text-gray-500" },
        ].map((item, i) => (
          <div key={i} className={`flex justify-between items-center p-3 rounded-2xl ${itemHover} transition-colors`}>
            <div className="flex items-center gap-3">
              <div className={`size-10 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                {item.name[0]}
              </div>
              <div className="text-left">
                <div className="text-sm font-bold truncate max-w-[120px]">{item.name}</div>
                <div className={`text-xs ${textMuted}`}>{item.type}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-[10px] font-bold px-2 py-1 rounded-full ${item.badgeColor}`}>{item.status}</div>
              <div className={`text-[10px] font-medium mt-1 ${textMuted} flex items-center justify-end gap-1`}>
                <Clock className="size-3" /> {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. The Hardware Shell (High-Fidelity iPhone Mockup)
function PhoneFrame({
  children,
  className,
  style
}: {
  children: React.ReactNode,
  className?: string,
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`relative rounded-[55px] bg-[#121212] p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10 ${className}`}
      style={style}
    >
      {/* Outer Bezel Border (Simulates polished metal edge) */}
      <div className="absolute inset-0 rounded-[55px] border-[1px] border-white/10 pointer-events-none z-50"></div>

      {/* Dynamic Island */}
      <div className="absolute top-[22px] left-1/2 -translate-x-1/2 h-[35px] w-[120px] bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
        {/* Camera lens reflection */}
        <div className="absolute right-[25%] size-3 rounded-full bg-[#1a1a1a] shadow-inner" />
      </div>

      {/* Screen Container with Inner Shadow */}
      <div className="relative h-full w-full rounded-[44px] overflow-hidden bg-white shadow-[inset_0_0_0_2px_rgba(0,0,0,0.1)]">
        {children}
      </div>

      {/* Glossy Reflection Overlay */}
      <div className="absolute inset-0 rounded-[55px] pointer-events-none bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-10 z-40" style={{ mixBlendMode: 'overlay' }} />
    </div>
  );
}

export function MobileSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#FAFAFA]">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 text-center">

        {/* Header Content */}
        <div className="mx-auto max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0D1A12] mb-4">
            Justice is a Swipe Away
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Review evidence, cast your vote, and level up your juror rank from anywhere.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="h-12 px-6 rounded-lg bg-white border border-gray-200 text-black hover:bg-gray-50 shadow-sm transition-all hover:-translate-y-0.5">
              <Apple className="mr-2 h-5 w-5" />
              Download on iOS
            </Button>
            <Button className="h-12 px-6 rounded-lg bg-white border border-gray-200 text-black hover:bg-gray-50 shadow-sm transition-all hover:-translate-y-0.5">
              <Play className="mr-2 h-5 w-5 fill-current" />
              Download on Android
            </Button>
          </div>
        </div>

        {/* 3. The 3-Phone Composition */}
        <div className="relative mx-auto mt-12 h-[500px] w-full max-w-5xl perspective-[2000px]">
          {/* Gradient Mask to fade phones at bottom */}


          <div className="relative h-full w-full flex justify-center items-start pt-10">

            {/* Left Phone (Dark Mode, Tilted) */}
            <div className="absolute left-1/2 w-[300px] h-[600px] transition-transform duration-700 ease-out hover:-translate-x-[260px]"
              style={{
                transform: 'translateX(-280px) translateY(40px) rotate(-12deg) scale(0.9)',
                zIndex: 0
              }}>
              <PhoneFrame className="h-full w-full opacity-80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <PhoneContent isDark={true} />
              </PhoneFrame>
            </div>

            {/* Right Phone (Dark Mode, Tilted) */}
            <div className="absolute left-1/2 w-[300px] h-[600px] transition-transform duration-700 ease-out hover:translate-x-[-40px]"
              style={{
                transform: 'translateX(-20px) translateY(40px) rotate(12deg) scale(0.9)',
                zIndex: 0
              }}>
              <PhoneFrame className="h-full w-full opacity-80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <PhoneContent isDark={true} />
              </PhoneFrame>
            </div>

            {/* Center Phone (Light Mode, Hero) */}
            <div className="absolute left-1/2 w-[320px] h-[650px] -translate-x-1/2 z-10 transition-transform duration-500 hover:scale-[1.02]">
              <PhoneFrame className="h-full w-full shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] ring-4 ring-black/5">
                <PhoneContent isDark={false} />
              </PhoneFrame>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

