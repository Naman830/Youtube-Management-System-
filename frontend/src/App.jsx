import Navbar from "./components/layout/Navbar"
import Hero from "./pages/landing/sections/Hero/Hero"
import Showcase from "./pages/landing/sections/Showcase/Showcase"
import CreatorFlow from "./pages/landing/sections/CreatorFlow/CreatorFlow"
import Trust from "./pages/landing/sections/Trust/Trust"
import CTA from "./pages/landing/sections/CTA/CTA"

function App() {
  return (
 <>
 <Navbar />
 <Hero/>
 <Showcase/>
 <CreatorFlow/>
 <Trust/>
 <CTA/>
 </>
  )
}

export default App
