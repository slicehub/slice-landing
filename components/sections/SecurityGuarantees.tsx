import { ShieldCheck, Briefcase, FileCode, UserCog, Plus } from "lucide-react";

// 1. The "Matrix" Lock Visual
function MatrixLock() {
  return (
    <div className="relative flex justify-center items-center py-12 mb-8">
      {/* Background Matrix Text (Decorative) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <div
          className="text-[10px] leading-3 font-mono text-[#12FF80]/20 text-center whitespace-pre-wrap opacity-30 blur-[0.5px]"
          style={{ maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)' }}
        >
          {`0x71C7656EC7ab88b098defB751B7401B5f6d8976F
            c8912301384013401348102348012834012830481230
            89127349812734981273498123749812374981234791
            a789sd7f98a7sd98f7as98d7f98as7d9f87asd98f798
            71230498712304987123409871230498712304981234
            12341234123412341234123412341234123412341234
            0x71C7656EC7ab88b098defB751B7401B5f6d8976F
            c8912301384013401348102348012834012830481230`}
        </div>
      </div>

      {/* The Dial Ring */}
      <div className="relative z-10 size-24 rounded-full border border-white/10 bg-[#0C110F] flex items-center justify-center shadow-2xl shadow-black/50">
        {/* Ticks ring */}
        <div className="absolute inset-0 rounded-full border border-white/5" />
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-1.5 bg-gray-700"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-40px)`
            }}
          />
        ))}

        {/* Center Icon */}
        <div className="size-10 text-[#12FF80]">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C13.1 2 14 2.9 14 4V8H10V4C10 2.9 10.9 2 12 2ZM7 8V4C7 1.24 9.24 -1 12 -1C14.76 -1 17 1.24 17 4V8H19C20.1 8 21 8.9 21 10V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V10C3 8.9 3.9 8 5 8H7ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" /></svg>
        </div>
      </div>
    </div>
  );
}

export function SecurityGuarantees() {
  return (
    <section className="bg-black text-white py-32 overflow-hidden">
      <div className="container mx-auto max-w-5xl px-6 relative">

        {/* Top Visual Section */}
        <MatrixLock />

        {/* Headings */}
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-4xl font-bold mb-4">Business ready security</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Defend against threats and operate treasuries with increased monitoring and
            security features
          </p>
        </div>

        {/* The Crosshair Feature Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* Desktop Crosshair Lines (Absolute Positioned) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gray-800 -translate-x-1/2" />
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-gray-800 -translate-y-1/2" />
            {/* Center Plus Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#12FF80] bg-black p-1">
              <Plus className="size-6" />
            </div>
          </div>

          {/* Feature 1: Shield */}
          <div className="p-8 md:p-12 md:pr-16 md:pb-16 border-b border-dashed border-gray-800 md:border-none">
            <ShieldCheck className="size-8 text-[#12FF80] mb-6" />
            <h3 className="text-lg font-bold mb-3">No single point of failure</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Defend against private key compromises and setup thresholds
            </p>
          </div>

          {/* Feature 2: Briefcase */}
          <div className="p-8 md:p-12 md:pl-16 md:pb-16 border-b border-dashed border-gray-800 md:border-none">
            <Briefcase className="size-8 text-[#12FF80] mb-6" />
            <h3 className="text-lg font-bold mb-3">Formally verified contracts</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Safe is among the most audited and battle-tested contracts on Ethereum.
            </p>
          </div>

          {/* Feature 3: Open Source */}
          <div className="p-8 md:p-12 md:pr-16 md:pt-16 border-b border-dashed border-gray-800 md:border-none">
            <div className="flex items-center gap-1 mb-6 text-[#12FF80]">
              <span className="text-2xl font-mono">|**</span>
            </div>
            <h3 className="text-lg font-bold mb-3">Open source</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              No black box for your treasury. Independently verify all changes
            </p>
          </div>

          {/* Feature 4: Trustless Recovery */}
          <div className="p-8 md:p-12 md:pl-16 md:pt-16">
            <UserCog className="size-8 text-[#12FF80] mb-6" />
            <h3 className="text-lg font-bold mb-3">Trustless recovery</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Never loose access to your account by nominating a guardian
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
