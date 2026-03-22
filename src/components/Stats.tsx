import HlsVideo from './HlsVideo'

const stats = [
  { value: '200+', label: 'Sites launched' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3.2x', label: 'More conversions' },
  { value: '5 days', label: 'Average delivery' },
]

export default function Stats() {
  return (
    <section className="relative w-full py-32 px-6 md:px-16 lg:px-24">
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL8tnMgqjzPoXkOEfnr3K4tcKp7YMzaM/high.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'saturate(0)' }}
      />

      <div
        className="absolute top-0 left-0 right-0 z-[1]"
        style={{ height: 200, background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-[1]"
        style={{ height: 200, background: 'linear-gradient(to top, black, transparent)' }}
      />

      <div className="relative z-10">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 font-body font-light text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
