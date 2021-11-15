import Navbar from "./components/nav"
import Hero from "./components/hero"
import Features from "./components/features"
import Download from "./components/download"
import FAQ from "./components/faq"
import Connect from "./components/connect"
import Footer from "./components/footer"

function App() {
  return (
    <div className = "font-poppins">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Connect />
      <Footer />
    </div>
  );
}

export default App