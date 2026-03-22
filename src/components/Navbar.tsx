import { ArrowUpRight } from 'lucide-react'

const navLinks = ['Início', 'Produtos', 'Empresa', 'Processos', 'Contato']

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full bg-amber-600/20 border border-amber-500/30 flex items-center justify-center font-heading italic text-amber-400 text-xl">
          IVM
        </div>
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
        <button className="bg-amber-500 text-black rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1 hover:bg-amber-400 transition-colors">
          Solicitar Orçamento
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="w-12" />
    </nav>
  )
}
