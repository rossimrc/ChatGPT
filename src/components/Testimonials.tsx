const testimonials = [
  {
    quote:
      'A complete rebuild in five days. Our old agency quoted us three months. The result? A site that actually converts — and looks like it costs ten times what we paid.',
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote:
      'Conversions up 4x in the first month. The AI didn\'t just make our site prettier — it made it smarter. Every layout decision was backed by data we didn\'t even know existed.',
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote:
      'They didn\'t just design our site — they understood our brand better than we did. The liquid glass aesthetic, the micro-interactions, every detail felt intentional and premium.',
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          What They Say
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Don't take our word for it.
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
