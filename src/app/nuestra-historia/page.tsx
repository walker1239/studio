
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollText } from "lucide-react";
import Image from "next/image";

export default function NuestraHistoriaPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Sección de Historia */}
      <section className="mb-16">
        <header className="text-center mb-12">
          <ScrollText className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-primary mb-4 font-playfair-display">Nuestra Historia</h1>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Un legado de pasión, tradición y amor por la vid que se extiende por generaciones.
          </p>
        </header>
        <Card className="shadow-xl overflow-hidden bg-card/80">
          <div className="md:flex">
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
              <Image
                src="https://placehold.co/800x600.png"
                alt="Familia fundadora de Viñedos Virtual"
                layout="fill"
                objectFit="cover"
                data-ai-hint="vintage family photo vineyard"
              />
            </div>
            <div className="md:w-1/2">
              <CardHeader>
                <CardTitle className="text-3xl text-primary font-playfair-display">El Sueño de Tres Mujeres</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>
                  Viñedos Virtual nació del sueño de tres mujeres emprendedoras, Sofía, Isabella y Valentina, en el corazón de un valle bañado por el sol y la tradición. En 1953, unieron sus pasiones y conocimientos para cultivar las primeras vides, transformando un terreno que muchos consideraban un desafío en un oasis de sabor y aroma.
                </p>
                <p>
                  Con esfuerzo, dedicación y una visión clara, sentaron las bases de lo que hoy es una hacienda reconocida por la excelencia de sus vinos. Su amor por la tierra y el respeto por los ciclos de la naturaleza se convirtieron en los pilares de nuestra filosofía.
                </p>
                <p>
                  A lo largo de las décadas, la hacienda ha crecido, transmitiendo el legado de generación en generación. Hemos fusionado técnicas ancestrales con la innovación necesaria para perfeccionar cada botella, pero siempre manteniendo el espíritu familiar y el compromiso con la calidad que nuestras fundadoras inculcaron. Cada sorbo de un vino de Viñedos Virtual es un homenaje a su visión, una invitación a compartir la alegría y la rica historia que madura en nuestras barricas y se perfecciona en cada botella.
                </p>
              </CardContent>
              <CardContent>
                 <Image
                    src="https://placehold.co/400x300.png"
                    alt="Detalle antiguo de la hacienda"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md mx-auto"
                    data-ai-hint="old hacienda architecture"
                />
              </CardContent>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
