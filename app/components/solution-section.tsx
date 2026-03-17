import { Check } from "lucide-react"

const benefits = [
  "Cenas de iluminação personalizadas para cada momento do dia",
  "Temperatura de cor ideal para cada ambiente",
  "Valorização da arquitetura e dos móveis",
  "Conforto visual sem ofuscamento",
  "Economia de energia com eficiência luminosa",
  "Especificação técnica completa de luminárias"
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
              <img 
                src="/solution-lighting.jpg" 
                alt="Ambiente residencial com projeto de iluminação profissional" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card p-6 rounded-lg shadow-xl max-w-xs border border-border">
              <p className="font-serif text-lg font-medium text-foreground mb-2">
                {"\""}Um projeto luminotécnico bem feito valoriza em até 30% a percepção do seu imóvel.{"\""}
              </p>
              <span className="text-sm text-muted-foreground">— Danila Takaki</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm uppercase tracking-widest text-primary font-medium">A Solução</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
              Projeto de Iluminação que transforma ambientes
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Com uma consultoria de iluminação profissional, você recebe um projeto luminotécnico 
              completo que considera cada detalhe do seu espaço: a arquitetura, os móveis, as cores, 
              e principalmente, como você vive cada ambiente.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 rounded-lg bg-accent/30 border border-accent/50">
              <p className="text-foreground font-medium">
                Resultado: Um ambiente que parece {"\""}de revista{"\""}, com conforto visual e aquela sensação 
                de {"\""}uau{"\""} toda vez que você entra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
