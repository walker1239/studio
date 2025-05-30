import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-var(--navbar-height,4rem))] p-8 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
      data-ai-hint="hacienda vineyard landscape"
    >
      {/* Optional: overlay for better contrast if image is too busy/bright
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      */}
      <div className="relative z-10"> {/* Container for content to ensure it's above any overlay */}
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-playfair-display animate-fade-in-down [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]">
          Bienvenido a Tres Mujeres
        </h1>
        <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200 [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]">
          Descubre la tradición y el sabor de nuestra hacienda vinícola. Explora nuestra historia, conoce nuestro proceso de elaboración y degusta nuestros exquisitos vinos.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-up delay-400">
          <Button
            size="lg"
            variant="default"
            asChild
            className="shadow-lg hover:shadow-xl transition-shadow [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]"
          >
            <Link href="/explorar-vinos">Explorar Vinos</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="shadow-lg hover:shadow-xl transition-shadow [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]"
          >
            <Link href="/nuestra-historia">
              <BookOpen className="mr-2 h-5 w-5" /> Conócenos
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
