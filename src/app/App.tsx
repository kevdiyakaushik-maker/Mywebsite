import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Certifications } from "./components/Certifications";
import { EthicalSourcing } from "./components/EthicalSourcing";
import { Manufacturing } from "./components/Manufacturing";
import { JewelleryGallery } from "./components/JewelleryGallery";
import { DiamondCategories } from "./components/DiamondCategories";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { MissionVision } from "./components/MissionVision";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { SEO } from "./components/SEO";
import { GlobalMap } from "./components/GlobalMap";
import { D2CSection } from "./components/D2CSection";
import { LanguageProvider } from "./components/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen" style={{ background: "#0A0703" }}>
        <SEO />
        <Header />
        <Hero />
        <About />
        <Certifications />
        <JewelleryGallery />
        <DiamondCategories />
        <D2CSection />
        <EthicalSourcing />
        <Manufacturing />
        <Services />
        <WhyUs />
        <GlobalMap />
        <MissionVision />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
