import React from "react";
import { cn } from "@/lib/utils";

interface PremiumGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function PremiumGlassCard({
    children,
    className,
    ...props
}: PremiumGlassCardProps) {
    return (
        <div
            className={cn("relative group isolate", className)}
            {...props}
        >
            {/* 1. The Gradient Border (fades out at bottom) */}
            <div
                className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-b from-white/20 via-white/5 to-transparent p-[1px]"
                style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                }}
            />

            {/* 2. The Inner "Sheen" (Top highlight) */}
            <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* 3. The Content Background */}
            <div className="h-full w-full rounded-[27px] bg-[#050908]/90 backdrop-blur-md border border-white/5 shadow-2xl overflow-hidden">
                {children}
            </div>
        </div>
    );
}
