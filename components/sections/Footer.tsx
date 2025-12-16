
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-28 border-t border-gray-900">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-5 mb-16">
          <div className="md:col-span-2">
            <div className="text-4xl font-bold mb-6">Safe</div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              The most trusted platform to manage digital assets
            </p>
          </div>
          <div>
            <div className="font-semibold mb-5 uppercase tracking-wide text-sm">
              Product
            </div>
            <ul className="space-y-2.5 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-5 uppercase tracking-wide text-sm">
              Developers
            </div>
            <ul className="space-y-2.5 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  SDK
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-5 uppercase tracking-wide text-sm">
              Company
            </div>
            <ul className="space-y-2.5 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2025 Safe. All rights reserved.
          </div>
          <div className="flex gap-8 text-gray-500 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
