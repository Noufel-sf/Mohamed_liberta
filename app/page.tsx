import AboutSection from "./components/About";
import Hero from "./components/Hero";
import OurValues from "./components/OurValues";
import AskedQuestions from "./components/AskedQeustions";
import PacksSection from "./components/PacksSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Memories from "./components/Memories";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseUs />   
      <AboutSection />
      <OurValues />
      <PacksSection />
      <Memories />
      <AskedQuestions />
    </div>
  );
}
