"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, MessageCircle, Instagram } from "lucide-react"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const whatsappMessage = `Olá! Tenho interesse na consultoria de iluminação.

Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}
Cidade: ${formData.city}

Mensagem: ${formData.message}`

    const whatsappUrl = `https://wa.me/5511976352456?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" className="py-20 lg:py-32 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div>
            <span className="text-sm uppercase tracking-widest text-accent font-medium">Vamos Conversar</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-background mt-4 mb-6 text-balance">
              Pronta para transformar seus ambientes?
            </h2>
            <p className="text-lg text-background/80 leading-relaxed mb-8">
              Preencha o formulário ou me chame diretamente no WhatsApp. Respondo em até 24 horas úteis.
            </p>

            <div className="space-y-6">
              <a 
                href="https://wa.me/5511976352456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-background/10 hover:bg-background/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center group-hover:bg-background/30 transition-colors">
                  <MessageCircle className="h-6 w-6 text-background" />
                </div>
                <div>
                  <p className="font-medium text-background">WhatsApp</p>
                  <p className="text-sm text-background/70">Resposta rápida</p>
                </div>
              </a>

              <a 
                href="https://instagram.com/danilatakaki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-background/10 hover:bg-background/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center group-hover:bg-background/30 transition-colors">
                  <Instagram className="h-6 w-6 text-background" />
                </div>
                <div>
                  <p className="font-medium text-background">@danilatakaki</p>
                  <p className="text-sm text-background/70">Veja meu trabalho no Instagram</p>
                </div>
              </a>
            </div>

            <div className="mt-10 p-6 rounded-lg bg-accent/20 border border-accent/30">
              <p className="text-background/90 font-medium">
                Projeto de iluminação para sua cidade?
              </p>
              <p className="text-background/70 text-sm mt-1">
                Atendimento remoto para todo o Brasil: São Paulo, Rio de Janeiro, Curitiba, Belo Horizonte, 
                Brasília e todas as capitais e cidades.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-xl p-8 lg:p-10">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Solicite seu orçamento
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                  Cidade/Estado
                </label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Ex: São Paulo, SP"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Conte um pouco sobre seu projeto
                </label>
                <Textarea
                  id="message"
                  placeholder="Ex: Estou reformando meu apartamento de 80m² e gostaria de um projeto de iluminação para sala, quartos e cozinha..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="h-5 w-5 mr-2" />
                Enviar pelo WhatsApp
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você será redirecionado para o WhatsApp para continuar a conversa.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
