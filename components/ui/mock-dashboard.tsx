import React from "react";
import { cn } from "@/lib/utils";

interface MockDashboardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function MockDashboard({
    children,
    className,
    ...props
}: MockDashboardProps) {
    return (
        <div
            className={cn(
                "relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.5)]",
                className
            )}
            {...props}
        >
            {/* Browser Dot Controls */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="size-2.5 rounded-full bg-red-500/20 border border-red-500/30" />
                <div className="size-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                <div className="size-2.5 rounded-full bg-green-500/20 border border-green-500/30" />
            </div>

            {/* Content */}
            <div className="relative">
                {children}
            </div>
        </div>
    );
}
