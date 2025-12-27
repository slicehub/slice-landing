"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/ui/marquee";

const partners = [
  {
    name: "GrantFox",
    logo: "/icons/grantfox.png",
    url: "https://maintainer.grantfox.xyz/",
  },
  {
    name: "Trustless Work",
    logo: "/icons/trustless-work.png",
    url: "https://www.trustlesswork.com/",
  },
  {
    name: "KindFi",
    logo: "/icons/kindfi.png",
    url: "https://www.kindfi.org/",
  },
];

export function PartnersSection() {
  return (
    <section className="relative bg-[#FAFAFA] py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm md:text-base text-violet-900 font-medium italic mb-4">
            Slice is being tested and integrated by early partners building real products.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative max-w-2xl mx-auto">
          <Marquee pauseOnHover className="[--duration:40s]">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 ${
                  partner.name === "GrantFox" 
                    ? "h-20 w-40" 
                    : "h-16 w-32"
                }`}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.name === "GrantFox" ? 160 : 128}
                  height={partner.name === "GrantFox" ? 80 : 64}
                  className={`object-contain w-auto ${
                    partner.name === "GrantFox" ? "max-h-16" : "max-h-12"
                  }`}
                />
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

