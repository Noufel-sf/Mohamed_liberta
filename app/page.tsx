import AboutSection from "./components/About";
import OurValues from "./components/OurValues";
import PacksSection from "./components/PacksSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen grid-bg">
      <AboutSection />
      <WhyChooseUs />
      {/* <OurValues /> */}
      <PacksSection />
    </div>
  );
}
