import HlsVideo from './HlsVideo'

export default function CtaFooter() {
  return (
    <section className="relative w-full py-32 px-6 md:px-16 lg:px-24">
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyBK7TXd00KJqwXdVhVq6Oml7mFfGczg/high.mp4"
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

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          Your next website starts here.
        </h2>
        <p className="max-w-xl text-white/60 font-body font-light text-sm md:text-base mb-8">
          Book a free strategy call. See what AI&#8209;powered design can do.
        </p>
        <div className="flex items-center gap-4">
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium font-body hover:bg-white/90 transition-colors">
            View Pricing
          </button>
        </div>

        <footer className="mt-32 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row items-center justify-between">
          <span className="text-white/40 text-xs font-body">
            &copy; 2026 Studio
          </span>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/40 text-xs font-body hover:text-white/60 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/40 text-xs font-body hover:text-white/60 transition-colors">
              Terms
            </a>
            <a href="#" className="text-white/40 text-xs font-body hover:text-white/60 transition-colors">
              Contact
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}
