import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import HowItWorks from './components/HowItWorks'
import FeaturesChess from './components/FeaturesChess'
import FeaturesGrid from './components/FeaturesGrid'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CtaFooter from './components/CtaFooter'

function App() {
  return (
    <div className="bg-black overflow-visible">
      <Navbar />
      <Hero />
      <Partners />
      <HowItWorks />
      <FeaturesChess />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
      <CtaFooter />
    </div>
  )
}

export default App
