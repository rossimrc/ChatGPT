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
          <span className="bg-white text-black rounded-full px-2.5 py-0.5 text-xs font-medium font-body">
            New
          </span>
          <span className="text-sm text-white/90 font-body">
            Introducing AI&#8209;powered web design.
          </span>
        </div>

        <BlurText
          text="The Website Your Brand Deserves"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px] max-w-4xl"
          delay={100}
        />

        <motion.p
          className="mt-6 max-w-xl text-white/60 font-body font-light text-sm md:text-base"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        <motion.div
          className="mt-8 flex items-center gap-4"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body flex items-center gap-2">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 text-sm text-white/80 font-body font-medium hover:text-white transition-colors">
            <Play className="w-4 h-4" />
            Watch the Film
          </button>
        </motion.div>
      </div>
    </section>
  )
}
