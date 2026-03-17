"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with warm overlay */}
      <div className="absolute inset-0 bg-[url('/hero-lighting.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 text-background/90 text-sm mb-8">
            <MapPin className="h-4 w-4" />
            <span>Atendimento remoto para todo o Brasil</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-background leading-tight mb-6 text-balance">
            Seu ambiente merece mais do que apenas lâmpadas
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-background/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Projeto de iluminação residencial que transforma sua casa em um ambiente sofisticado, 
            com a temperatura de cor certa, cenas personalizadas e aquele resultado {"\""}de revista{"\""} 
            que você sempre quis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 text-base px-8 py-6 h-auto"
            >
              <a href="#contato" className="flex items-center gap-2">
                Quero transformar meus ambientes
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-background/30 text-background hover:bg-background/10 text-base px-8 py-6 h-auto"
            >
              <a href="#processo">Ver como funciona</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-background/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Lighting Design Residencial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Projeto Luminotécnico</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Consultoria de Iluminação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-background/50" />
        </div>
      </div>
    </section>
  )
}
