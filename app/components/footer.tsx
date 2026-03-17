import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/">
              <Image 
                src="/logo.jpg" 
                alt="Danila Takaki - Projetos de Iluminação" 
                width={140}
                height={52}
                className="h-12 w-auto object-contain mx-auto md:mx-0"
              />
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com/danilatakaki" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm">@danilatakaki</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Danila Takaki. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <span>Consultoria de Iluminação</span>
              <span>•</span>
              <span>Projeto Luminotécnico</span>
              <span>•</span>
              <span>Atendimento remoto Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
