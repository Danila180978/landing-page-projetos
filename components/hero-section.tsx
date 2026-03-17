import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SecaoProblema } from "@/components/problem-section"
import { SecaoSolucao } from "@/components/solution-section"
import { SecaoProcesso } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SecaoFAQ } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function PaginaPrincipal() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SecaoProblema />
      <SecaoSolucao />
      <SecaoProcesso />
      <PricingSection />
      <TestimonialsSection />
      <SecaoFAQ />
      <Footer />
    </main>
  )
}
