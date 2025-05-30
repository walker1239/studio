import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-var(--navbar-height,4rem))] p-8 text-center">
      <h1 className="text-5xl font-bold text-primary mb-6">
        Bienvenido a Viñedos Virtual
      </h1>
      <p className="text-xl text-foreground mb-8 max-w-2xl">
        Descubre la tradición y el sabor de nuestra hacienda vinícola. Explora nuestra historia, conoce nuestro proceso de elaboración y degusta nuestros exquisitos vinos.
      </p>
      <div className="space-x-4">
        <Button size="lg" variant="default" asChild>
          <Link href="/explorar-vinos">Explorar Vinos</Link>
        </Button>
        <Button size="lg" variant="outline">Reservar Visita</Button>
      </div>
    </div>
  );
}
