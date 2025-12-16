import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Shield,
  Lock,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Database,
  Server,
  FileCheck,
  Activity,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold">
              Safe
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Security
              </Link>
              <Link href="#ecosystem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Ecosystem
              </Link>
            </div>
          </div>
          <Button className="bg-[#00e673] hover:bg-[#00cc66] text-black font-medium">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl mb-6">
          Multisig security for
          <br />
          your onchain assets
        </h1>
        <p className="text-xl text-muted-foreground text-balance mx-auto max-w-2xl mb-12">
          The most trusted platform to manage digital assets on Ethereum and EVM chains
        </p>
        <div className="flex items-center justify-center gap-4 mb-16">
          <Button className="bg-[#00e673] hover:bg-[#00cc66] text-black font-medium h-12 px-8">Create Account</Button>
          <Button variant="outline" className="h-12 px-8 bg-transparent">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Product Screenshot */}
        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
            <img src="/modern-crypto-wallet-dashboard-interface-with-tran.jpg" alt="Safe Wallet Dashboard" className="w-full" />
          </div>
        </div>

        {/* Trusted By Logos */}
        <div className="mt-24">
          <p className="text-sm text-muted-foreground mb-8">Trusted by leading organizations</p>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-60">
            <div className="h-8 w-24 bg-muted rounded" />
            <div className="h-8 w-24 bg-muted rounded" />
            <div className="h-8 w-24 bg-muted rounded" />
            <div className="h-8 w-24 bg-muted rounded" />
            <div className="h-8 w-24 bg-muted rounded" />
          </div>
        </div>
      </section>

      {/* Dark Section - Control Center */}
      <section className="bg-black text-white py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Your treasury, full control</h2>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Complete visibility and control over your digital assets with advanced security features
          </p>

          {/* Main Dashboard Visual */}
          <div className="mb-20">
            <div className="rounded-xl border border-gray-800 bg-[#0a0a0a] overflow-hidden shadow-2xl">
              <img src="/dark-theme-control-panel-dashboard-with-graphs-and.jpg" alt="Control Panel" className="w-full" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-[#0a0a0a] border-gray-800 p-6">
              <Lock className="h-8 w-8 text-[#00e673] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Multi-signature Security</h3>
              <p className="text-gray-400">
                Require multiple confirmations for every transaction to prevent unauthorized access
              </p>
            </Card>
            <Card className="bg-[#0a0a0a] border-gray-800 p-6">
              <Users className="h-8 w-8 text-[#00e673] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Team Management</h3>
              <p className="text-gray-400">
                Add team members with customizable roles and permissions for your organization
              </p>
            </Card>
            <Card className="bg-[#0a0a0a] border-gray-800 p-6">
              <Activity className="h-8 w-8 text-[#00e673] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Real-time Monitoring</h3>
              <p className="text-gray-400">Track all transactions and activities across your accounts in real-time</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Dark Section - Security Guarantees */}
      <section className="bg-black text-white py-24 border-t border-gray-900">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Enterprise-grade security</h2>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <Shield className="h-12 w-12 text-[#00e673] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Battle-tested</h3>
              <p className="text-gray-400">Audited by top security firms and protecting over $100B in assets</p>
            </div>
            <div className="text-center">
              <FileCheck className="h-12 w-12 text-[#00e673] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Non-custodial</h3>
              <p className="text-gray-400">You maintain full control of your private keys at all times</p>
            </div>
            <div className="text-center">
              <Database className="h-12 w-12 text-[#00e673] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Open Source</h3>
              <p className="text-gray-400">Fully auditable smart contracts deployed on-chain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section - Product Detail */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold mb-6">Seamless transaction management</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Execute complex transactions with confidence. Queue, review, and approve transactions with your team
                before execution.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#00e673] flex-shrink-0 mt-0.5" />
                  <span>Batch multiple transactions into a single execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#00e673] flex-shrink-0 mt-0.5" />
                  <span>Simulate transactions before execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#00e673] flex-shrink-0 mt-0.5" />
                  <span>Set spending limits and automated policies</span>
                </li>
              </ul>
            </div>
            <div className="order-first md:order-last">
              <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden">
                <img src="/transaction-management-interface-with-approval-wor.jpg" alt="Transaction Management" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section - Metrics */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div>
              <div className="text-5xl font-bold text-[#00e673] mb-2">$100B+</div>
              <div className="text-muted-foreground">Assets Secured</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00e673] mb-2">12M+</div>
              <div className="text-muted-foreground">Transactions Executed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00e673] mb-2">50K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section - Advanced Features */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for developers</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Extend Safe with custom modules and integrate with your existing infrastructure
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card className="bg-[#0a0a0a] border-gray-800 p-8">
              <Server className="h-10 w-10 text-[#00e673] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">Safe SDK</h3>
              <p className="text-gray-400 mb-4">
                Integrate Safe into your application with our comprehensive TypeScript SDK
              </p>
              <Button variant="link" className="text-[#00e673] p-0">
                View Documentation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
            <Card className="bg-[#0a0a0a] border-gray-800 p-8">
              <Zap className="h-10 w-10 text-[#00e673] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">Custom Modules</h3>
              <p className="text-gray-400 mb-4">Build custom logic and automation with Safe's modular architecture</p>
              <Button variant="link" className="text-[#00e673] p-0">
                Explore Modules <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#0a0a0a] p-1 overflow-hidden">
            <img src="/code-editor-showing-smart-contract-integration.jpg" alt="Developer Tools" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* Light Section - Testimonials */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What users say about us</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-muted" />
                <div>
                  <div className="font-semibold">Alex Chen</div>
                  <div className="text-sm text-muted-foreground">Treasury Lead, Protocol DAO</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Safe has been instrumental in managing our treasury. The multi-sig setup gives us peace of mind."
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-muted" />
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">CTO, DeFi Startup</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The developer experience is excellent. We integrated Safe in less than a week."
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-muted" />
                <div>
                  <div className="font-semibold">Michael Torres</div>
                  <div className="text-sm text-muted-foreground">Security Engineer</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The security features are unmatched. This is the gold standard for custody solutions."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Supported Networks</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Deploy your Safe on any EVM-compatible chain
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            <div className="h-12 w-full bg-background rounded-lg border border-border flex items-center justify-center">
              <Globe className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="h-12 w-full bg-background rounded-lg border border-border flex items-center justify-center">
              <Globe className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="h-12 w-full bg-background rounded-lg border border-border flex items-center justify-center">
              <Globe className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="h-12 w-full bg-background rounded-lg border border-border flex items-center justify-center">
              <Globe className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="h-12 w-full bg-background rounded-lg border border-border flex items-center justify-center">
              <Globe className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="h-12 w-full bg-background rounded-lg border border-border flex items-center justify-center">
              <Globe className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Track and sign transactions on mobile</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Stay connected to your Safe wherever you are with our mobile app
          </p>

          <div className="relative mx-auto max-w-sm">
            <div className="rounded-3xl border-8 border-foreground bg-background overflow-hidden shadow-2xl">
              <img src="/mobile-app-showing-crypto-wallet-transaction-list.jpg" alt="Mobile App" className="w-full" />
            </div>
          </div>

          <div className="mt-12">
            <Button className="bg-[#00e673] hover:bg-[#00cc66] text-black font-medium h-12 px-8">Download App</Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">
            Join thousands of teams managing
            <br />
            onchain assets
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Start securing your digital assets today with the most trusted multisig solution
          </p>
          <Button className="bg-[#00e673] hover:bg-[#00cc66] text-black font-medium h-12 px-8 text-lg">
            Create Your Safe
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-5 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">Safe</div>
              <p className="text-gray-400 max-w-xs">The most trusted platform to manage digital assets</p>
            </div>
            <div>
              <div className="font-semibold mb-4">Product</div>
              <ul className="space-y-2 text-gray-400">
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
              <div className="font-semibold mb-4">Developers</div>
              <ul className="space-y-2 text-gray-400">
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
              <div className="font-semibold mb-4">Company</div>
              <ul className="space-y-2 text-gray-400">
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
            <div className="text-gray-400 text-sm">© 2025 Safe. All rights reserved.</div>
            <div className="flex gap-6 text-gray-400 text-sm">
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
    </div>
  )
}
