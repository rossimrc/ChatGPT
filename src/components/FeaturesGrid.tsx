import { Flame, Shield, Droplets, Settings } from 'lucide-react'

const features = [
  {
    icon: Flame,
    title: 'Forjamento em Latão',
    description: 'Base do nosso processo — resistência e precisão em cada peça forjada.',
  },
  {
    icon: Shield,
    title: 'Certificação ISO',
    description: 'ISO 9001 e ISO 14000. Qualidade e responsabilidade ambiental garantidas.',
  },
  {
    icon: Droplets,
    title: 'Saneamento Nacional',
    description: 'Presentes em +3.600 municípios. Homologação das maiores autarquias.',
  },
  {
    icon: Settings,
    title: 'Rastreabilidade Total',
    description: 'Controle completo de cada componente, da matéria-prima aos testes finais.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Por Que a IVM
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          A diferença está em cada detalhe.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="liquid-glass rounded-2xl p-6">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
              <feature.icon className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-heading italic text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-white/60 font-body font-light text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
