import { Check, ChevronDown, MoreVertical, ShieldCheck, AlertCircle } from "lucide-react";

// Helper for the Card container to ensure consistent "Glass" feel
function BentoCard({ children, className, glowPosition = "top" }: { children: React.ReactNode, className?: string, glowPosition?: "top" | "bottom" }) {
    return (
        <div className={`relative overflow-hidden rounded-[32px] border border-white/5 bg-[#0C110F] p-8 md:p-12 ${className}`}>
            {/* Subtle Gradient Glow */}
            <div
                className={`absolute left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#12FF80]/10 blur-[80px] pointer-events-none 
        ${glowPosition === "top" ? "-top-10" : "-bottom-10"}`}
            />

            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </div>
    );
}

// 1. Top Card: Multisig Visualization
function MultisigFlow() {
    return (
        <div className="mt-12 flex items-center justify-between relative px-4 md:px-20 py-8">

            {/* The Connecting Lines Layer */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                    {/* Top Path */}
                    <path d="M150 40 C 300 40, 300 100, 400 100" fill="none" stroke="white" strokeWidth="2" />
                    {/* Middle Path */}
                    <path d="M150 100 L 400 100" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5 5" />
                    {/* Bottom Path */}
                    <path d="M150 160 C 300 160, 300 100, 400 100" fill="none" stroke="white" strokeWidth="2" />
                    {/* Output Path */}
                    <path d="M460 100 L 650 100" fill="none" stroke="white" strokeWidth="2" />
                </svg>
            </div>

            {/* Left: Signers */}
            <div className="flex flex-col gap-8 z-10">
                {/* Active Signer */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white backdrop-blur-md">
                    <div className="size-1.5 rounded-full bg-[#12FF80] animate-pulse" />
                    Approving
                </div>
                {/* Passive Signers */}
                <div className="px-4 py-2 rounded-full bg-[#151A17] border border-white/5 text-xs font-medium text-gray-500">
                    0xc0ff...4979
                </div>
                <div className="px-4 py-2 rounded-full bg-[#151A17] border border-white/5 text-xs font-medium text-gray-500">
                    0x94f6...e2a7
                </div>
            </div>

            {/* Center: The Safe Core */}
            <div className="relative z-10 size-16 rounded-full border border-white/10 bg-[#0C110F] flex items-center justify-center shadow-[0_0_30px_rgba(18,255,128,0.15)]">
                <div className="absolute inset-0 rounded-full border-t border-[#12FF80] opacity-50 rotate-45" />
                <div className="size-8 text-[#12FF80]">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 10H20V14C20 17.3137 17.3137 20 14 20H8V16H14C15.6569 16 17 14.6569 17 13C17 11.3431 15.6569 10 14 10Z" /></svg>
                </div>
            </div>

            {/* Right: Receiver */}
            <div className="z-10 px-6 py-3 rounded-lg bg-[#12FF80] text-black text-sm font-bold shadow-[0_0_20px_rgba(18,255,128,0.4)]">
                Receiver
            </div>
        </div>
    );
}

// 2. Bottom Left: Transaction Simulation
function SimulationUI() {
    return (
        <div className="mt-auto pt-10">
            {/* The Mini Card UI */}
            <div className="rounded-xl bg-[#111614] border border-white/5 overflow-hidden">
                {/* Header */}
                <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Select signer</span>
                </div>
                {/* Body */}
                <div className="p-2 space-y-1">
                    {/* Signer Row */}
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
                        <div className="size-6 rounded bg-gradient-to-br from-purple-500 to-indigo-500" />
                        <div className="flex-1">
                            <div className="text-xs font-medium text-white">My signer</div>
                            <div className="text-[10px] text-gray-500">0x13d9f...4589</div>
                        </div>
                        <Check className="size-4 text-[#12FF80]" />
                    </div>

                    {/* Simulation Status Row */}
                    <div className="flex items-center justify-between p-3 mt-2">
                        <span className="text-sm text-gray-300">Transaction simulation</span>
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#12FF80]/10 border border-[#12FF80]/20 text-[#12FF80] text-[10px] font-bold uppercase">
                            <ShieldCheck className="size-3" />
                            No issues
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 3. Bottom Right: Spending Limits
function SpendingLimitsUI() {
    return (
        <div className="mt-auto pt-10">
            <div className="rounded-xl bg-[#111614] border border-white/5 overflow-hidden">
                {/* Dropdown-like Header */}
                <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2 text-sm text-white font-medium">
                        <div className="size-4 rounded-full border border-white/30 flex items-center justify-center">
                            <span className="text-[8px]">⚡</span>
                        </div>
                        Spending limit
                    </div>
                    <ChevronDown className="size-4 text-gray-500" />
                </div>

                {/* List Items */}
                <div className="p-2 space-y-2">
                    {[
                        { color: "from-blue-400 to-blue-600", addr: "0x94f6...e2a7", val: "$12,000" },
                        { color: "from-orange-400 to-red-500", addr: "0x12d3...a8b1", val: "$5,000" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors group">
                            <div className="flex items-center gap-3">
                                <div className={`size-8 rounded-full bg-gradient-to-br ${item.color}`} />
                                <div>
                                    <div className="text-xs font-medium text-white">{item.addr}</div>
                                    <div className="text-[10px] text-gray-500">{item.val}</div>
                                </div>
                            </div>
                            <MoreVertical className="size-4 text-gray-600 group-hover:text-white" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function ControlCenter() {
    return (
        <section className="bg-black text-white py-32">
            <div className="container mx-auto max-w-6xl px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Your treasury, full control
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Build and simulate transaction flows. Manage payments, interact with DeFi and
                        govern protocols all in one place
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* 1. Full Width Card: Multisig Wallet */}
                    <BentoCard className="md:col-span-2 min-h-[360px] flex flex-col items-center justify-center">
                        <div className="text-center z-10">
                            <h3 className="text-2xl font-semibold text-[#12FF80] mb-2">Multisig Wallet</h3>
                            <p className="text-gray-400 text-sm">Eliminate single point of failure. Distribute access control across multiple owners</p>
                        </div>
                        <div className="w-full max-w-3xl">
                            <MultisigFlow />
                        </div>
                    </BentoCard>

                    {/* 2. Left Card: Simulation */}
                    <BentoCard glowPosition="bottom" className="min-h-[400px]">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-white mb-2">Scan and Simulate transactions</h3>
                            <p className="text-gray-400 text-sm">Scan risks and simulate transactions before they execute</p>
                        </div>
                        <SimulationUI />
                    </BentoCard>

                    {/* 3. Right Card: Spending Limits */}
                    <BentoCard glowPosition="bottom" className="min-h-[400px]">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-white mb-2">Spending Limits & Roles</h3>
                            <p className="text-gray-400 text-sm">Set daily spending limits, approval thresholds and role-based access</p>
                        </div>
                        <SpendingLimitsUI />
                    </BentoCard>

                </div>
            </div>
        </section>
    );
}
