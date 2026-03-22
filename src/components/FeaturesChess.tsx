export default function FeaturesChess() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Linhas de Produto
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Soluções completas. Qualidade absoluta.
        </h2>
      </div>

      <div className="flex flex-col gap-24">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-4">
              Válvulas para Saneamento Básico.
            </h3>
            <p className="text-white/60 font-body font-light text-sm mb-6 max-w-md">
              Presentes em mais de 3.600 municípios brasileiros. Homologadas pela SABESP e principais autarquias de saneamento. Resistência e durabilidade comprovadas em campo.
            </p>
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white font-body">
              Ver catálogo
            </button>
          </div>
          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden">
              <div className="w-full aspect-video bg-gradient-to-br from-amber-500/10 to-amber-900/5 flex items-center justify-center">
                <span className="text-white/20 font-body text-sm">Válvulas de Saneamento</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 text-left">
            <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-4">
              Válvulas para Gás e Indústria.
            </h3>
            <p className="text-white/60 font-body font-light text-sm mb-6 max-w-md">
              Válvulas esfera, registros de gaveta e redutores de pressão forjados em latão. Segurança certificada para instalações de gás e aplicações industriais críticas.
            </p>
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white font-body">
              Ver especificações
            </button>
          </div>
          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden">
              <div className="w-full aspect-video bg-gradient-to-br from-amber-500/10 to-amber-900/5 flex items-center justify-center">
                <span className="text-white/20 font-body text-sm">Válvulas Industriais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
