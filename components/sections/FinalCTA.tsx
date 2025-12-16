
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-5xl font-bold mb-6 text-balance">
          Join thousands of teams managing
          <br />
          onchain assets
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Start securing your digital assets today with the most trusted
          multisig solution
        </p>
        <Button className="bg-[#00e673] hover:bg-[#00cc66] text-black font-medium h-12 px-8 text-lg">
          Create Your Safe
        </Button>
      </div>
    </section>
  );
}
