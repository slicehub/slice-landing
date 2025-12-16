import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Bell, Shield, Award, DollarSign } from "lucide-react";

// --- 1. Background Grid Component ---
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* The Grid Lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Scattered Purple Highlights (Slice Brand) */}
      <div className="absolute top-[20%] left-[25%] w-[80px] h-[80px] bg-gradient-to-br from-[#BC5FEF] to-[#DDA0DD] opacity-80 blur-[1px]" />
      <div className="absolute top-[45%] left-[10%] w-[80px] h-[80px] bg-gradient-to-br from-[#BC5FEF] to-[#DDA0DD] opacity-60 blur-[40px]" />
      <div className="absolute top-[35%] right-[15%] w-[80px] h-[80px] bg-gradient-to-br from-[#BC5FEF] to-[#DDA0DD] opacity-40 blur-[60px]" />
    </div>
  );
}

// --- 2. The Floating Phone UI (Dispute Card) ---
function HeroPhone() {
  return (
    <div className="relative w-[280px] h-[580px] rounded-[40px] bg-white border-[6px] border-gray-900 shadow-2xl overflow-hidden z-20">
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-gray-900 rounded-b-xl z-20" />

      {/* Screen Content */}
      <div className="pt-10 px-5 flex flex-col h-full bg-gray-50 text-black font-sans">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-[#BC5FEF]">⚖️</div>
            <div>
              <div className="text-xs font-bold">Juror Portal</div>
              <div className="text-[10px] text-gray-400">0x13d...4589</div>
            </div>
          </div>
          <Bell className="size-5 text-gray-400" />
        </div>

        {/* Dispute Card */}
        <div className="flex-1 flex flex-col justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 relative">
            <div className="absolute -top-3 left-4 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full">
              Dispute #4029
            </div>
            <div className="mt-2 text-xs font-bold text-gray-400 uppercase tracking-wide">Crowdfunding</div>
            <h3 className="text-lg font-bold leading-tight mt-1 mb-4">Did "Project Alpha" meet milestone 3?</h3>

            <div className="bg-gray-50 rounded-lg p-3 mb-6 text-sm text-gray-600">
              Evidence suggests the prototype was delivered on time but lacked the requested API documentation.
            </div>

            <div className="flex gap-3">
              <button className="flex-1 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors">
                <X className="size-6" />
              </button>
              <button className="flex-1 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors">
                <Check className="size-6" />
              </button>
            </div>
          </div>

          {/* Stack effect behind */}
          <div className="mx-4 h-2 bg-gray-200 rounded-b-xl opacity-50" />
          <div className="mx-8 h-2 bg-gray-200 rounded-b-xl opacity-30" />
        </div>

        <div className="text-center text-[10px] text-gray-400 pb-4">
          Swipe to judge the next case
        </div>
      </div>
    </div>
  );
}

// --- 3. The Desktop Dashboard UI (Juror Stats) ---
function HeroDashboard() {
  return (
    <div className="w-[1000px] bg-[#F5F7F6] rounded-xl border border-gray-200 shadow-2xl overflow-hidden flex font-sans">
      {/* Sidebar */}
      <div className="w-60 bg-white border-r border-gray-100 p-4 hidden md:flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="size-6 bg-[#BC5FEF] rounded-sm" />
          <span className="font-bold text-sm">Slice App</span>
        </div>
        {["Overview", "Disputes", "Staking", "Governance", "Settings"].map((item, i) => (
          <div key={item} className={`px-3 py-2 rounded-lg text-sm font-medium ${i === 0 ? "bg-purple-50 text-[#BC5FEF]" : "text-gray-500 hover:bg-gray-50"}`}>
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Juror Status</h3>
            <div className="text-4xl font-bold text-black flex items-center gap-3">
              Level 42
              <span className="text-sm font-normal text-white bg-black px-2 py-1 rounded-full">Senior Juror</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="bg-[#BC5FEF] text-white hover:bg-[#a64ce0]">Staking Dashboard</Button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-3 gap-6">

          {/* Stats Cards */}
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Shield className="size-5" />
              </div>
              <span className="text-xs font-bold text-green-500">+12%</span>
            </div>
            <div>
              <div className="text-3xl font-bold">128</div>
              <div className="text-xs text-gray-400 font-medium uppercase mt-1">Disputes Resolved</div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                <DollarSign className="size-5" />
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold">$1,450</div>
              <div className="text-xs text-gray-400 font-medium uppercase mt-1">Total Earnings (USDC)</div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                <Award className="size-5" />
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold">98.5%</div>
              <div className="text-xs text-gray-400 font-medium uppercase mt-1">Accuracy Score</div>
            </div>
          </div>

          {/* Recent Activity (Full Width) */}
          <div className="col-span-3 bg-white rounded-xl border border-gray-100 p-5 shadow-sm mt-2">
            <div className="flex justify-between text-xs text-gray-400 font-medium mb-4">
              <span>Recent Rulings</span>
              <span>Reward</span>
            </div>
            <div className="space-y-1">
              {[
                { name: "Prediction Market Dispute #4028", result: "Upheld", time: "2h ago", val: "+$45.00" },
                { name: "Freelance Escrow #3992", result: "Refunded", time: "1d ago", val: "+$120.00" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-[#BC5FEF]" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">{row.name}</div>
                      <div className="text-xs text-gray-400">{row.result} • {row.time}</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-green-600">{row.val}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative bg-[#FAFAFA] pt-32 pb-20 overflow-hidden">
      <GridBackground />
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">

        {/* 1. Hero Copy */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h4 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">
            The Standard for Decentralized Justice
          </h4>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0D1A12] mb-6 leading-[1.1]">
            Get paid to <br />
            <span className="relative inline-block">
              {/* Highlight box behind text */}
              <span className="absolute inset-0 bg-[#BC5FEF] -rotate-1 skew-x-3 opacity-30 blur-sm rounded-lg -z-10" />
              deliver justice
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Join the jury. Review disputes from crowdfunding to escrows.
            Earn rewards in a gamified, on-chain court.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="h-14 px-8 rounded-full bg-[#121212] text-white text-lg font-bold hover:bg-[#333] shadow-xl">
              Start Judging <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button variant="outline" className="h-14 px-8 rounded-full border-gray-300 text-lg font-bold">
              Read the Docs
            </Button>
          </div>
        </div>

        {/* 2. Overlapping UI Composition */}
        <div className="relative h-[600px] w-full flex justify-center mt-12 perspective-[2000px]">

          {/* Desktop Dashboard (Back Layer) */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 scale-90 md:scale-100 transition-transform duration-700 hover:scale-[1.01] hover:-translate-y-2 origin-top">
            <HeroDashboard />
          </div>

          {/* Mobile Phone (Front Layer - Offset Left) */}
          <div className="absolute top-32 left-[5%] md:left-[15%] shadow-[0_50px_100px_rgba(0,0,0,0.2)] transition-transform duration-700 hover:-translate-y-4">
            <HeroPhone />
          </div>

        </div>

      </div>
    </section>
  );
}
