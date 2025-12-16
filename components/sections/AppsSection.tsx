import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// 1. Reusable App Icon Component
// We mimic the specific logos using CSS shapes to avoid needing external images
function AppIcon({
    className,
    blur = false,
    size = "md",
    type = "placeholder"
}: {
    className?: string,
    blur?: boolean,
    size?: "sm" | "md" | "lg",
    type?: "stack" | "dots" | "world" | "blue" | "black-stack" | "placeholder"
}) {
    // Size variants
    const sizeClasses = {
        sm: "size-16",
        md: "size-20",
        lg: "size-24"
    };

    // Base container style
    const baseStyle = `absolute bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex items-center justify-center border border-gray-100/50 
        ${sizeClasses[size]} 
        ${blur ? "blur-[2px] opacity-60 scale-90" : "scale-100 opacity-100 z-10"}
        ${className}
    `;

    return (
        <div className={baseStyle}>
            {/* Logic to render different "logo" mimics */}
            {type === "blue" && (
                <div className="size-8 bg-blue-600 rounded-md" />
            )}

            {type === "stack" && (
                <div className="flex flex-col gap-1 items-center">
                    <div className="w-8 h-2 bg-gray-400 rounded-full opacity-60" />
                    <div className="w-10 h-2 bg-gray-400 rounded-full" />
                    <div className="w-6 h-2 bg-gray-400 rounded-full opacity-80" />
                </div>
            )}

            {type === "black-stack" && (
                <div className="flex flex-col gap-1 items-center">
                    <div className="w-6 h-2 bg-black rounded-full" />
                    <div className="w-10 h-2 bg-black rounded-full" />
                    <div className="w-8 h-2 bg-black rounded-full" />
                </div>
            )}

            {type === "world" && (
                <span className="font-bold text-xs tracking-tight text-gray-800">
                    ◎ world
                </span>
            )}

            {type === "dots" && (
                <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className={`size-1.5 rounded-full bg-black ${i % 2 === 0 ? "opacity-100" : "opacity-40"}`} />
                    ))}
                </div>
            )}

            {type === "placeholder" && (
                <div className="size-full bg-gray-50 rounded-2xl" />
            )}
        </div>
    );
}

export function AppsSection() {
    return (
        <section className="relative py-64 bg-[#F9FAFB] overflow-hidden">

            {/* Container for the scattered icons - Centered */}
            <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none">

                {/* Top Left Cluster */}
                <AppIcon type="dots" className="top-20 left-[25%]" size="md" />
                <AppIcon type="stack" className="top-40 left-[15%]" size="lg" blur />
                <AppIcon type="world" className="top-60 left-[20%]" size="md" />
                <AppIcon type="placeholder" className="top-32 left-[40%] opacity-40 blur-sm" size="sm" />

                {/* Top Right Cluster */}
                <AppIcon type="blue" className="top-20 right-[25%]" size="md" />
                <AppIcon type="black-stack" className="top-60 right-[20%]" size="lg" />
                <AppIcon type="placeholder" className="top-32 right-[15%]" size="sm" blur />

                {/* Bottom Scatter */}
                <AppIcon type="placeholder" className="bottom-32 left-[30%]" size="lg" blur />
                <AppIcon type="dots" className="bottom-10 left-[50%] -translate-x-1/2" size="md" />
                <AppIcon type="placeholder" className="bottom-60 right-[25%]" size="md" />

            </div>

            <div className="container relative z-20 mx-auto max-w-4xl px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-[#0D1A12] mb-6 tracking-tight">
                    From Tools to Treasuries, <br /> It's All Safe
                </h2>
                <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
                    Swap, Stake, Earn, Govern and more. Interact with 200+ apps integrated with Safe{"{Wallet}"}.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button
                        variant="outline"
                        className="h-12 px-6 rounded-lg border-gray-200 bg-white text-black font-semibold hover:bg-gray-50 hover:border-gray-300"
                    >
                        Build on Safe
                    </Button>
                    <Button
                        className="h-12 px-6 rounded-lg bg-[#12FF80] text-black font-bold hover:bg-[#00e676] shadow-[0_4px_14px_rgba(18,255,128,0.3)]"
                    >
                        Discover Apps
                    </Button>
                </div>
            </div>
        </section>
    );
}
