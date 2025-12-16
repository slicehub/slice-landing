
import { Button } from "@/components/ui/button";

export function MobileSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Track and sign transactions on mobile
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Stay connected to your Safe wherever you are with our mobile app
        </p>

        <div className="relative mx-auto max-w-sm">
          <div className="rounded-3xl border-8 border-foreground bg-background overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.22)]">
            <img
              src="/mobile-app-showing-crypto-wallet-transaction-list.jpg"
              alt="Mobile App"
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-12">
          <Button className="bg-[#00e673] hover:bg-[#00cc66] text-black font-medium h-12 px-8">
            Download App
          </Button>
        </div>
      </div>
    </section>
  );
}
