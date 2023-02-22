import Header from "@/components/header";
import HeroSection from "@/components/home-sections/hero-section";
import PromiseSection from "@/components/home-sections/promise-section";
import AboutMe from "@/components/home-sections/about-me";

export default function Home() {
  return (
    <div className="px-8 py-2 md:px-20 overflow-hidden">
      <Header />
      <HeroSection />
      <PromiseSection />
      <AboutMe />
    </div>
  );
}
