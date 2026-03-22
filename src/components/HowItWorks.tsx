import { ArrowUpRight } from 'lucide-react'
import HlsVideo from './HlsVideo'

export default function HowItWorks() {
  return (
    <section className="relative w-full py-32 px-6 md:px-16 lg:px-24" style={{ minHeight: 700 }}>
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu002OFLj4HFCZ5mA2kFjF3E6FKxTKJbU/high.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div
        className="absolute top-0 left-0 right-0 z-[1]"
        style={{ height: 200, background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-[1]"
        style={{ height: 200, background: 'linear-gradient(to top, black, transparent)' }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center" style={{ minHeight: 500 }}>
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Nosso Processo
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          Do forjamento à entrega.
        </h2>
        <p className="max-w-xl text-white/60 font-body font-light text-sm md:text-base mb-8">
          Controle total da cadeia produtiva — do design e construção de moldes ao forjamento, usinagem e testes finais. Rastreabilidade completa em cada peça.
        </p>
        <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body flex items-center gap-2">
          Conheça Nosso Processo
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
