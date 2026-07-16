import Features from "@/module/home/components/features-section/features";
import Footer from "@/module/home/components/footer/footer";
import Hero from "@/module/home/components/hero-section/hero";
import Services from "@/module/home/components/services/services";
import Testimonials from "@/module/home/components/testimonials/testimonials";

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
};
