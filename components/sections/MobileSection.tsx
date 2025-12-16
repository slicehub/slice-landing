import { Button } from "@/components/ui/button";
import {
  Apple,
  Play,
  Battery,
  Signal,
  Wifi,
  ChevronDown,
  Bell,
  ScanLine,
} from "lucide-react";

// 1. The Internal App UI (Reused for all phones)
function PhoneContent({ isDark = false }: { isDark?: boolean }) {
  const bgClass = isDark ? "bg-[#0C110F] text-white" : "bg-white text-black";
  const textMuted = isDark ? "text-gray-500" : "text-gray-400";
  const itemHover = isDark ? "bg-white/5" : "bg-gray-50";

  return (
    <div
      className={`h-full w-full flex flex-col font-sans ${bgClass} select-none`}
    >
      {/* Status Bar */}
      <div className="flex justify-between items-center px-7 pt-5 text-[10px] font-medium tracking-wide opacity-80">
        <span>9:41</span>
        <div className="flex gap-1.5">
          <Signal className="h-3 w-3" />
          <Wifi className="h-3 w-3" />
          <Battery className="h-3 w-3" />
        </div>
      </div>

      {/* App Header */}
      <div className="px-6 pb-2 pt-8 flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div
            className={`size-10 rounded-full flex items-center justify-center text-base shadow-sm ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black border border-gray-200"}`}
          >
            💰
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1 text-sm font-bold cursor-pointer">
              Main treasury <ChevronDown className="size-3 opacity-50" />
            </div>
            <div className={`text-[11px] font-mono ${textMuted}`}>
              0x13d9...4589
            </div>
          </div>
        </div>
        <div className="flex gap-3 pt-1">
          <ScanLine className="size-5 opacity-60" />
          <Bell className="size-5 opacity-60" />
        </div>
      </div>

      {/* Balance Hero */}
      <div className="px-6 py-6 text-center">
        <div className="text-4xl font-extrabold tracking-tight">
          $1,854,380
          <span className="text-gray-400 text-2xl font-bold">.52</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-6 border-b border-gray-100/10 mb-2">
        {["Tokens", "Positions", "NFTs"].map((tab, i) => (
          <div
            key={tab}
            className={`pb-3 px-3 text-sm font-semibold border-b-[2px] cursor-pointer transition-colors ${i === 0 ? "border-current opacity-100" : "border-transparent opacity-40 hover:opacity-70"}`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Token List */}
      <div className="flex-1 overflow-hidden px-4 space-y-2 pt-2">
        {[
          {
            name: "USDC",
            amount: "1,144,064.33",
            val: "$1,144,064.33",
            change: "+0.21%",
            color: "bg-blue-500",
          },
          {
            name: "Ethereum",
            amount: "132.527 ETH",
            val: "$619,809.02",
            change: "+2.51%",
            color: "bg-purple-500",
          },
          {
            name: "Morpho",
            amount: "150,000 MORPHO",
            val: "$78,511.38",
            change: "+2.01%",
            color: "bg-indigo-500",
          },
          {
            name: "Tether USD",
            amount: "8,634 USDT",
            val: "$8,639.64",
            change: "+0%",
            color: "bg-green-500",
          },
          {
            name: "ENS",
            amount: "30 ENS",
            val: "$645.34",
            change: "-0.31%",
            color: "bg-blue-400",
            negative: true,
          },
        ].map((token) => (
          <div
            key={token.name}
            className={`flex justify-between items-center p-3 rounded-2xl ${itemHover} transition-colors`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`size-10 rounded-full ${token.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}
              >
                {token.name[0]}
              </div>
              <div className="text-left">
                <div className="text-sm font-bold">{token.name}</div>
                <div className={`text-xs ${textMuted}`}>{token.amount}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold tabular-nums">{token.val}</div>
              <div
                className={`text-xs font-medium ${token.negative ? "text-red-500" : "text-[#00C46B]"}`}
              >
                {token.change}
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
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative rounded-[55px] bg-[#121212] p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10 ${className}`}
      style={style}
    >
      {/* Outer Bezel */}
      <div className="absolute inset-0 rounded-[55px] border-[1px] border-white/10 pointer-events-none z-50"></div>

      {/* Dynamic Island */}
      <div className="absolute top-[22px] left-1/2 -translate-x-1/2 h-[35px] w-[120px] bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
        <div className="absolute right-[25%] size-3 rounded-full bg-[#1a1a1a] shadow-inner" />
      </div>

      {/* Screen Container */}
      <div className="relative h-full w-full rounded-[44px] overflow-hidden bg-white shadow-[inset_0_0_0_2px_rgba(0,0,0,0.1)]">
        {children}
      </div>

      {/* Glossy Reflection */}
      <div
        className="absolute inset-0 rounded-[55px] pointer-events-none bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-10 z-40"
        style={{ mixBlendMode: "overlay" }}
      />
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
            Review evidence, cast your vote, and level up your juror rank from
            anywhere.
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
        <div className="relative mx-auto mt-12 h-[550px] w-full max-w-5xl perspective-[2000px]">
          <div className="relative h-full w-full flex justify-center items-start pt-10">
            {/* Left Phone
               Z-Index: Base 10, Hover 20 (Keeps it below Center which is 30)
            */}
            <div
              className="absolute left-1/2 w-[300px] h-[600px] z-10 transition-all duration-500 ease-out origin-bottom
                            -translate-x-[290px] translate-y-[40px] -rotate-12 scale-90
                            hover:-translate-x-[320px] hover:-rotate-[15deg] hover:scale-95 hover:z-20"
            >
              <PhoneFrame className="h-full w-full opacity-90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <PhoneContent isDark={true} />
              </PhoneFrame>
            </div>

            {/* Right Phone
               Z-Index: Base 10, Hover 20 (Keeps it below Center which is 30)
            */}
            <div
              className="absolute left-1/2 w-[300px] h-[600px] z-10 transition-all duration-500 ease-out origin-bottom
                            translate-x-[-10px] translate-y-[40px] rotate-12 scale-90
                            hover:translate-x-[20px] hover:rotate-[15deg] hover:scale-95 hover:z-20"
            >
              <PhoneFrame className="h-full w-full opacity-90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <PhoneContent isDark={true} />
              </PhoneFrame>
            </div>

            {/* Center Phone (Hero)
               Z-Index: 30 (Always on top)
            */}
            <div className="absolute left-1/2 w-[320px] h-[650px] -translate-x-1/2 z-30 transition-transform duration-500 hover:scale-[1.02] hover:-translate-y-2">
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
