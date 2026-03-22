import { motion } from 'motion/react'
import { ArrowUpRight, Play } from 'lucide-react'
import BlurText from './BlurText'

export default function Hero() {
  return (
    <section className="relative overflow-visible bg-black" style={{ height: 1000 }}>
      <video
        className="absolute w-full h-auto object-contain z-0"
        style={{ top: '20%' }}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKVYcMGnRRfCXLo/gen_w5sKSvHaSqT23yfjK5Dyn/generated_video_w5sKSvHaSqT23yfjK5Dyn.mp4"
      />

      <div className="absolute inset-0 bg-black/5 z-0" />

      <div
        className="absolute bottom-0 left-0 right-0 z-[1]"
        style={{
          height: 300,
          background: 'linear-gradient(to bottom, transparent, black)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center h-full" style={{ paddingTop: 150 }}>
        <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 mb-8">
          <span className="bg-amber-500 text-black rounded-full px-2.5 py-0.5 text-xs font-medium font-body">
            Desde 1996
          </span>
          <span className="text-sm text-white/90 font-body">
            Referência em válvulas forjadas no Brasil.
          </span>
        </div>

        <BlurText
          text="Válvulas de Precisão para Sua Indústria"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px] max-w-5xl"
          delay={100}
        />

        <motion.p
          className="mt-6 max-w-xl text-white/60 font-body font-light text-sm md:text-base"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Forjadas em latão com tecnologia de ponta. Certificação ISO 9001 e ISO 14000.
          Saneamento, gás e indústria — a solução completa em válvulas e metais.
        </motion.p>

        <motion.div
          className="mt-8 flex items-center gap-4"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body flex items-center gap-2">
            Solicitar Orçamento
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 text-sm text-white/80 font-body font-medium hover:text-white transition-colors">
            <Play className="w-4 h-4" />
            Conheça a Fábrica
          </button>
        </motion.div>
      </div>
    </section>
  )
}
