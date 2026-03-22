const testimonials = [
  {
    quote:
      'Trabalhamos com a IVM há mais de 10 anos. A qualidade do forjamento em latão é incomparável — zero falhas em campo e suporte técnico sempre disponível.',
    name: 'Roberto Almeida',
    role: 'Gerente de Operações, Construtora Araguaia',
  },
  {
    quote:
      'As válvulas IVM são nossa escolha padrão para projetos de saneamento. A homologação SABESP e a rastreabilidade total nos dão a confiança que precisamos.',
    name: 'Fernanda Costa',
    role: 'Engenheira de Projetos, Hydra Saneamento',
  },
  {
    quote:
      'Precisávamos de válvulas esfera 3 vias para uma aplicação industrial crítica. A IVM entregou no prazo, com certificação completa e desempenho impecável.',
    name: 'Carlos Mendes',
    role: 'Diretor Técnico, Grupo Metalflex',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Depoimentos
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Quem usa, confia.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="liquid-glass rounded-2xl p-8">
            <p className="text-white/80 font-body font-light text-sm italic mb-6">
              "{t.quote}"
            </p>
            <div>
              <div className="text-white font-body font-medium text-sm">
                {t.name}
              </div>
              <div className="text-white/50 font-body font-light text-xs">
                {t.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
