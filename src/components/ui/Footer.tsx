import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-4 inline-block">
              Offshore Connections
            </span>
            <p className="text-slate-400 max-w-sm mt-4 leading-relaxed">
              A powerful alternative to traditional hiring, giving UK businesses access to skilled remote talent from South Africa at a fraction of the cost, without compromising on quality, reliability, or results.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase text-sm mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-slate-400 hover:text-white transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase text-sm mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {currentYear} Offshore Connections LTD. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Powered by <a href="#" className="text-blue-400 hover:text-blue-300">Orb IT Services</a>
          </p>
        </div>
      </div>
    </footer>
  );
}