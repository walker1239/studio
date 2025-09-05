import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-var(--navbar-height,4rem))] p-8 text-center bg-cover bg-center"
      style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hero/hero.png')` }}
      data-ai-hint="hacienda vineyard landscape"  
    >
      <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px] z-0"></div>
      <div className="relative z-10 max-w-3xl mx-auto bg-background/70 rounded-xl p-6 shadow-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-playfair-display animate-fade-in-down">
          Bienvenido a 3Mujeres
        </h1>
        <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Descubre la tradición y el sabor de nuestra hacienda vinícola. Explora nuestra historia, conoce nuestro proceso de elaboración y degusta nuestros exquisitos vinos.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-up delay-400">
          <Button
            size="lg"
            variant="default"
            asChild
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <Link href="/explorar-vinos">Explorar Vinos</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <Link href="/nuestra-historia">
              <BookOpen className="mr-2 h-5 w-5" /> Conócenos
            </Link>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <a href="https://www.instagram.com/3mujeresvino/" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" /> Instagram
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
