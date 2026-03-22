import { ArrowUpRight } from 'lucide-react'

const navLinks = ['Home', 'Services', 'Work', 'Process', 'Pricing']

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24">
      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-heading italic text-white text-xl">
        S
      </div>

      <div className="liquid-glass rounded-full px-2 py-1.5 flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm font-medium text-white/90 font-body px-4 py-2 hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
        <button className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1 hover:bg-white/90 transition-colors">
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="w-12" />
    </nav>
  )
}
