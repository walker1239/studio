import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen } from "lucide-react"; // Import BookOpen

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-var(--navbar-height,4rem))] p-8 text-center bg-gradient-to-br from-background to-secondary/30">
      <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-playfair-display animate-fade-in-down">
        Bienvenido a Tres Mujeres
      </h1>
      <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
        Descubre la tradición y el sabor de nuestra hacienda vinícola. Explora nuestra historia, conoce nuestro proceso de elaboración y degusta nuestros exquisitos vinos.
      </p>
      <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-up delay-400">
        <Button size="lg" variant="default" asChild className="shadow-lg hover:shadow-xl transition-shadow">
          <Link href="/explorar-vinos">Explorar Vinos</Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl transition-shadow">
          <Link href="/nuestra-historia">
            <BookOpen className="mr-2 h-5 w-5" /> Conócenos
          </Link>
        </Button>
      </div>
    </div>
  );
}
