import Header from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="px-8 py-2 md:px-20 overflow-hidden">
      <Header />
      <HeroSection />
    </div>
  );
}
