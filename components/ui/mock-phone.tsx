import React from "react";
import { cn } from "@/lib/utils";

interface MockPhoneProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function MockPhone({ children, className, ...props }: MockPhoneProps) {
    return (
        <div
            className={cn(
                "relative rounded-[32px] border-[8px] border-[#1a1a1a] bg-black overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.5)]",
                className
            )}
            {...props}
        >
            {/* The "Notch" */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-[#1a1a1a] rounded-b-xl z-20 pointer-events-none" />

            {/* The Screen Content */}
            <div className="bg-gray-950 h-full w-full flex flex-col text-white">
                {children}
            </div>
        </div>
    );
}
