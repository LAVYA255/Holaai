import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-black text-white">
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Comparison />
      </main>
    </>
  );
}
