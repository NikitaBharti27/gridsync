import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import InteractiveDemo from "./sections/InteractiveDemo";
import BentoFeatures from "./sections/BentoFeatures";
import SocialProof from "./sections/SocialProof";
import CtaSection from "./sections/CtaSection";
import Footer from "./sections/Footer";

function App() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-6 w-full">
        <HeroSection onExploreDemo={scrollToDemo} />
        <InteractiveDemo />
        <BentoFeatures />
        <SocialProof />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
