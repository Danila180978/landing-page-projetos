const steps = [
  {
    number: "01",
    title: "Briefing Inicial",
    description: "Conversamos sobre seu projeto, seus hábitos, preferências e o resultado que você deseja. Tudo 100% online."
  },
  {
    number: "02",
    title: "Análise do Projeto",
    description: "Analiso sua planta, o projeto de interiores (se houver), fotos do ambiente e todas as especificações técnicas necessárias."
  },
  {
    number: "03",
    title: "Projeto Luminotécnico",
    description: "Desenvolvo o projeto de iluminação completo com plantas, especificações de luminárias, temperaturas de cor e cenas."
  },
  {
    number: "04",
    title: "Entrega + Suporte",
    description: "Você recebe o projeto detalhado com orientações para compra e instalação, além de suporte para dúvidas."
  }
]

export function ProcessSection() {
  return (
    <section id="processo" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">Como Funciona</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Seu projeto de iluminação em 4 passos simples
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Atendimento 100% remoto, do briefing à entrega. Você não precisa sair de casa 
            para ter um lighting design profissional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border -translate-y-1/2 z-0" />
              )}
              
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <span className="font-serif text-3xl font-semibold text-primary">{step.number}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 text-center lg:text-left">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
