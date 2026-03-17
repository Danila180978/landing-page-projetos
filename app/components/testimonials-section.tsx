import { Star } from "lucide-react"

// PARE AQUI: Troque os textos abaixo pelos seus depoimentos reais
const testimonials = [
  {
    name: "Luara M.",
    location: "São José dos Campos, SP",
    text: "Amei a iluminação da  minha casa, ficou a coisa mais linda. Todo dia agradeço você por tudo que fez.",
    rating: 5
  },
  {
    name: "Marcelo M.",
    location: "São Paulo, SP",
    text: "Olha parabéns viu, ficou muito bom a iluminação aqui, parece outra casa. Ficou excelente.",
    rating: 5
  },
  {
    name: "Rodrigo B.",
    location: "São Paulo, SP",
    text: "Queria te agradecer. Você conseguiu deixar a iluminção da minha casa exatamente do jeito que eu tinha na cabeça.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-black font-medium">Depoimentos</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mt-4 mb-6">
            Resultados que transformam
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-xl bg-[#F9F9F7] border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-800 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-black">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
