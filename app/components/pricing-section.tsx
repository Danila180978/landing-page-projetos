import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

// CONFIGURAÇÃO DOS PLANOS
const planos = [
  {
    nome: "Consultoria Express",
    preco: "497",
    linkPagamento: "https://mpago.la/2QnUXhY",
    beneficios: ["Análise de 1 ambiente", "Reunião de 1h", "Lista de compras"]
  },
  {
    nome: "Projeto Completo",
    preco: "1.497",
    linkPagamento: "https://mpago.la/1z5aU2b",
    beneficios: ["Até 6 ambientes", "Projeto completo", "30 dias de suporte"],
    popular: true
  },
  {
    nome: "Projeto Premium",
    preco: "2.997",
    linkPagamento: "https://mpago.la/1m8HYio",
    beneficios: ["Ambientes ilimitados", "Automação opcional", "60 dias de suporte"]
  }
]

export function SecaoPrecos() {
  return (
    <section id="investimento" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif mb-12">Escolha o projeto ideal</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {planos.map((plano, i) => (
            <div key={i} className={`p-8 rounded-xl border ${plano.popular ? 'bg-black text-white scale-105' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-4">{plano.nome}</h3>
              <p className="text-4xl font-serif mb-6">R$ {plano.preco}</p>
              <ul className="mb-8 space-y-2 text-left">
                {plano.beneficios.map((b, j) => <li key={j}>✅ {b}</li>)}
              </ul>
              <Button asChild className="w-full">
                <a href={plano.linkPagamento} target="_blank">Contratar Agora</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
