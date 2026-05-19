import Navbar from './components/Navbar'
import StickyLogoStrip from './components/StickyLogoStrip'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Achievements from './components/Achievements'
import Reviews from './components/Reviews'
import Certifications from './components/Certifications'
import Awards from './components/Awards'
import GlobalFootprint from './components/GlobalFootprint'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <StickyLogoStrip />
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Philosophy />
        <Services />
        <WhyChooseUs />
        <Achievements />
        <Reviews />
        <Certifications />
        <Awards />
        <GlobalFootprint />
        <Footer />
      </main>
    </>
  )
}

export default App
