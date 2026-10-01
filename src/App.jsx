import Nav from "./components/navigation/Nav";
import Footer from "./components/layout/Footer";
import EntranceAnimation from "./components/ui/EntranceAnimation";
import Lightbox from "./components/ui/Lightbox";
import { LightboxProvider } from "./context/LightboxContext";
import { ThemeProvider } from "./context/ThemeContext";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Journey from "./components/sections/Journey";
import Exploring from "./components/sections/Exploring";
import Certifications from "./components/sections/Certifications";
import Philosophy from "./components/sections/Philosophy";
import Contact from "./components/sections/Contact";
import { site } from "./data/site";

export default function App() {
  return (
    <ThemeProvider>
      <LightboxProvider>
        <EntranceAnimation name={site.name} tagline={site.tagline} />
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Exploring />
          <Certifications />
          <Philosophy />
          <Contact />
        </main>
        <Footer />
        <Lightbox />
      </LightboxProvider>
    </ThemeProvider>
  );
}
