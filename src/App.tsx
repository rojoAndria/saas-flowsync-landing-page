import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Integrations from './components/Integrations'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Integrations />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Faq />
      <CtaBanner />
      <Footer />
    </div>
  )
}
