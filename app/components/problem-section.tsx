import { AlertCircle, Frown, Lightbulb, ThermometerSun } from "lucide-react"

const problems = [
  {
    icon: Lightbulb,
    title: "Só trocar lâmpadas não resolve",
    description: "Você já tentou várias lâmpadas, mas o ambiente continua sem graça, sem acolhimento e sem valorizar seu projeto de interiores."
  },
  {
    icon: ThermometerSun,
    title: "Temperatura de cor errada",
    description: "A luz da sala é fria, do quarto é quente mas ofuscante, e você não sabe como equilibrar isso de forma harmoniosa."
  },
  {
    icon: AlertCircle,
    title: "Investiu em móveis, mas falta algo",
    description: "Seus móveis planejados são lindos, o gesso ficou perfeito, mas a iluminação não valoriza nada disso."
  },
  {
    icon: Frown,
    title: "Ambiente sem personalidade",
    description: "Sua casa não tem cenas de iluminação, não há aquele clima aconchegante para um jantar ou luz adequada para trabalhar."
  }
]

export function ProblemSection() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">O Problema</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Você investiu na reforma, mas a iluminação está te decepcionando?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Se você está em obra, trocando gesso, comprando móveis planejados ou mudando de apartamento, 
            provavelmente já percebeu que iluminação vai muito além de escolher lâmpada e luminária.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="p-6 lg:p-8 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
