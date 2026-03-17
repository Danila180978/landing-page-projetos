"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o atendimento remoto?",
    answer: "Todo o processo é feito online: briefing por videochamada, envio de plantas e fotos por e-mail ou WhatsApp, e entrega do projeto em PDF. Atendo clientes de todo o Brasil com a mesma qualidade que atenderia presencialmente."
  },
  {
    question: "Preciso já ter a planta do apartamento/casa?",
    answer: "Idealmente sim, mas se você não tiver uma planta técnica, podemos trabalhar com um croqui feito por você ou até com fotos e medidas dos ambientes. O importante é ter as dimensões básicas."
  },
  {
    question: "O projeto inclui a compra e instalação das luminárias?",
    answer: "O projeto inclui a especificação completa de todas as luminárias. A compra e instalação ficam por sua conta, mas forneço toda a orientação necessária para que o eletricista ou instalador execute corretamente."
  },
  {
    question: "Em quanto tempo recebo o projeto pronto?",
    answer: "O prazo médio é de 7 a 20 dias úteis após o briefing, dependendo da complexidade e do pacote escolhido. Para projetos urgentes, consulte sobre disponibilidade para entrega expressa."
  },
  {
    question: "E se eu não gostar do projeto?",
    answer: "Todos os pacotes incluem rodadas de revisão para ajustarmos o projeto até que fique exatamente como você deseja. Meu objetivo é que você ame o resultado final."
  },
  {
    question: "Posso contratar só para um ambiente?",
    answer: "Sim! A Consultoria Express é perfeita para quem precisa de orientação em um ambiente específico, como sala de estar, home office ou quarto."
  },
  {
    question: "Qual a diferença entre projeto de iluminação e só escolher lâmpadas?",
    answer: "Um projeto de iluminação (ou projeto luminotécnico) considera a arquitetura, os móveis, as atividades realizadas em cada espaço, as cores e texturas, para criar camadas de luz que transformam o ambiente. Só trocar lâmpadas não leva nada disso em conta."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-primary/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">Dúvidas Frequentes</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Perguntas sobre lighting design residencial
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
