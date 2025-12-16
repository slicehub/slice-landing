import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Copy, Menu, QrCode, Search, Bell } from "lucide-react";

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

      {/* Scattered Green Highlights (The "Safe" Brand look) */}
      <div className="absolute top-[20%] left-[25%] w-[80px] h-[80px] bg-gradient-to-br from-[#12FF80] to-[#00E676] opacity-80 blur-[1px]" />
      <div className="absolute top-[45%] left-[10%] w-[80px] h-[80px] bg-gradient-to-br from-[#12FF80] to-[#00E676] opacity-60 blur-[40px]" />
      <div className="absolute top-[35%] right-[15%] w-[80px] h-[80px] bg-gradient-to-br from-[#12FF80] to-[#00E676] opacity-40 blur-[60px]" />
    </div>
  );
}

// --- 2. The Floating Phone UI ---
function HeroPhone() {
  return (
    <div className="relative w-[280px] h-[580px] rounded-[40px] bg-white border-[6px] border-gray-900 shadow-2xl overflow-hidden z-20">
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-gray-900 rounded-b-xl z-20" />

      {/* Screen Content */}
      <div className="pt-10 px-5 flex flex-col h-full bg-white text-black font-sans">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold">💎</div>
            <div>
              <div className="text-xs font-bold">Main Treasury</div>
              <div className="text-[10px] text-gray-400">0x13d...4589</div>
            </div>
          </div>
          <Bell className="size-5 text-gray-400" />
        </div>

        <div className="mb-8">
          <div className="text-3xl font-bold tracking-tight">$1,854,380</div>
          <div className="text-sm text-[#00C46B] font-medium">+2.54%</div>
        </div>

        {/* Asset List */}
        <div className="space-y-4">
          {[
            { sym: "USDC", name: "USD Coin", val: "$1.1M", icon: "bg-blue-500" },
            { sym: "ETH", name: "Ethereum", val: "$619k", icon: "bg-indigo-500" },
            { sym: "GNO", name: "Gnosis", val: "$78k", icon: "bg-green-500" },
          ].map((asset, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`size-8 rounded-full ${asset.icon} text-white flex items-center justify-center text-[10px]`}>{asset.sym[0]}</div>
                <div>
                  <div className="text-sm font-bold">{asset.sym}</div>
                  <div className="text-[10px] text-gray-400">{asset.name}</div>
                </div>
              </div>
              <div className="text-sm font-medium">{asset.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- 3. The Desktop Dashboard UI ---
function HeroDashboard() {
  return (
    <div className="w-[1000px] bg-[#F5F7F6] rounded-xl border border-gray-200 shadow-2xl overflow-hidden flex font-sans">
      {/* Sidebar */}
      <div className="w-60 bg-white border-r border-gray-100 p-4 hidden md:flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="size-6 bg-black rounded-sm" />
          <span className="font-bold text-sm">Safe(WALLET)</span>
        </div>
        {["Home", "Assets", "Transactions", "Address Book", "Apps"].map((item, i) => (
          <div key={item} className={`px-3 py-2 rounded-lg text-sm font-medium ${i === 1 ? "bg-gray-100 text-black" : "text-gray-500 hover:bg-gray-50"}`}>
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Total asset value</h3>
            <div className="text-4xl font-bold text-black">$20,171.28</div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="bg-black text-white hover:bg-gray-800">Send</Button>
            <Button size="sm" variant="outline">Receive</Button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-3 gap-8">
          {/* Assets Table (Left 2 cols) */}
          <div className="col-span-2 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <div className="flex justify-between text-xs text-gray-400 font-medium mb-4 px-2">
              <span>Assets</span>
              <span>Value</span>
            </div>
            <div className="space-y-1">
              {[
                { name: "Ethereum", balance: "4.44 ETH", val: "$8,211.56", color: "bg-purple-600" },
                { name: "Gnosis", balance: "5 GNO", val: "$881.00", color: "bg-green-600" },
                { name: "USD Coin", balance: "2,155 USDC", val: "$2,154.99", color: "bg-blue-500" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg group">
                  <div className="flex items-center gap-3">
                    <div className={`size-8 rounded-full ${row.color} flex items-center justify-center text-white text-xs`}>
                      {row.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">{row.name}</div>
                      <div className="text-xs text-gray-400">{row.balance}</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">{row.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Actions (Right col) */}
          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-gray-500">Pending transactions</span>
              <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">3</span>
            </div>
            <div className="space-y-3">
              {[
                { action: "Send 1 ETH", sub: "Today, 3:24 PM", status: "1 out of 2" },
                { action: "Add owner", sub: "Yesterday", status: "1 out of 2" },
              ].map((tx, i) => (
                <div key={i} className="flex items-center gap-3 p-2 border border-gray-50 rounded-lg">
                  <div className="size-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-xs font-bold">!</div>
                  <div className="flex-1">
                    <div className="text-xs font-bold">{tx.action}</div>
                    <div className="text-[10px] text-gray-400">{tx.sub}</div>
                  </div>
                  <div className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">{tx.status}</div>
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
            20+ Networks Supported
          </h4>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0D1A12] mb-6 leading-[1.1]">
            Multisig security for <br />
            <span className="relative inline-block">
              {/* Highlight box behind text */}
              <span className="absolute inset-0 bg-[#12FF80] -rotate-1 skew-x-3 opacity-30 blur-sm rounded-lg -z-10" />
              your onchain assets
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            The most trusted smart wallet infrastructure. Modular, programmable and battle-tested.
          </p>
          <Button className="h-14 px-8 rounded-full bg-[#12FF80] text-[#0D1A12] text-lg font-bold hover:bg-[#00e676] shadow-[0_10px_30px_rgba(18,255,128,0.4)] transition-transform hover:-translate-y-1">
            Launch App <ArrowRight className="ml-2 size-5" />
          </Button>
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

          {/* Fade to transparent at bottom to blend with next section */}
          {/* Fade to transparent removed */}

        </div>

      </div>
    </section>
  );
}
