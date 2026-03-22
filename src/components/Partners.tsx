const partners = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma']

export default function Partners() {
  return (
    <section className="flex flex-col items-center pb-8 pt-16">
      <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
        Trusted by the teams behind
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {partners.map((name) => (
          <span
            key={name}
            className="text-2xl md:text-3xl font-heading italic text-white"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
