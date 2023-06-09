import Header from "@/components/header";
import HeroSection from "@/components/home-sections/hero-section";
import PromiseSection from "@/components/home-sections/promise-section";
import AboutMe from "@/components/home-sections/about-me";
import Stats from "@/components/home-sections/stats-section";
import BookSection from "@/components/home-sections/book-section";
import PricingSection from "@/components/home-sections/pricing-section";
import ClientSection from "@/components/home-sections/clients-section";
import FAQSection from "@/components/home-sections/faq";
import LocationSection from "@/components/home-sections/location";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16 px-8 py-2 md:px-20 overflow-hidden">
        <div className="flex flex-col gap-3">
          <Header />
          <HeroSection />
        </div>
        <PromiseSection />
        <AboutMe />
      </div>
      <Stats />
      <BookSection />
      <PricingSection />
      <ClientSection />
      <FAQSection />
      <LocationSection />
      <Footer />
    </>
  );
}
