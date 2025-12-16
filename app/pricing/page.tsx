import PricingHero from "@/components/PricingHero";
import PricingPlans from "@/components/PricingPlans";
import PricingFAQ from "@/components/PricingFAQ";
import Header from "@/components/Header";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white">
        <PricingHero />
        <PricingPlans />
        <PricingFAQ />
      </main>
    </>
  );
}
