import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Team from "@/components/Team";
import Programs from "@/components/Programs";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Team />
      <Programs />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
