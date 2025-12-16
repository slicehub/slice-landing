"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Controls", href: "#controls" },
    { name: "Chains", href: "#chains" },
    { name: "Integrations", href: "#integrations" },
    { name: "Developers", href: "#developers" },
  ];

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex flex-col items-center pointer-events-none px-6">
      <nav className="pointer-events-auto w-full max-w-5xl flex items-center justify-between rounded-full border border-white/20 bg-white/20 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] pl-5 pr-2 py-2.5 transition-all duration-300">

        {/* Logo and Links Container */}
        <div className="flex items-center gap-8">
          {/* Logo Badge */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-3 py-1.5 text-sm font-bold text-[#0d1a12] shadow-sm transition-transform hover:scale-105"
          >
            <Image
              src="/icons/slice-logo-transparent.svg"
              alt="Slice Logo"
              width={20}
              height={20}
              className="size-5"
            />
            Slice
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-6 text-sm font-medium text-[#0D1A12] md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[#BC5FEF] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Link href="#docs" className="hidden px-4 py-2 text-sm font-semibold text-[#0D1A12] hover:text-[#BC5FEF] transition-colors sm:inline">
            Docs
          </Link>
          <Button className="h-10 rounded-full bg-black hover:bg-[#BC5FEF] text-white px-5 text-sm font-bold shadow-lg transition-all hover:scale-105 hidden sm:flex border border-white/10">
            Launch App <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto w-full max-w-5xl mt-2 rounded-[32px] border border-white/20 bg-white/60 backdrop-blur-xl shadow-[0_15px_60px_rgba(0,0,0,0.12)] p-4 animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-lg font-medium text-[#0D1A12] rounded-xl hover:bg-black/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <Link
              href="#docs"
              className="px-4 py-3 text-lg font-medium text-[#0D1A12] rounded-xl hover:bg-black/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Button className="w-full mt-2 h-12 rounded-xl bg-black hover:bg-[#BC5FEF] text-white text-base font-bold shadow-lg">
              Launch App <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
