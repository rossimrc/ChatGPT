export default function FeaturesChess() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Pro features. Zero complexity.
        </h2>
      </div>

      <div className="flex flex-col gap-24">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-4">
              Designed to convert. Built to perform.
            </h3>
            <p className="text-white/60 font-body font-light text-sm mb-6 max-w-md">
              Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.
            </p>
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white font-body">
              Learn more
            </button>
          </div>
          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden">
              <div className="w-full aspect-video bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
                <span className="text-white/20 font-body text-sm">Preview</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 text-left">
            <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-4">
              It gets smarter. Automatically.
            </h3>
            <p className="text-white/60 font-body font-light text-sm mb-6 max-w-md">
              Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.
            </p>
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white font-body">
              See how it works
            </button>
          </div>
          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden">
              <div className="w-full aspect-video bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
                <span className="text-white/20 font-body text-sm">Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
