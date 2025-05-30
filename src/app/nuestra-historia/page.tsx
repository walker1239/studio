
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
                alt="Familia fundadora de Tres Mujeres"
                layout="fill"
                objectFit="cover"
                data-ai-hint="vintage family photo vineyard"
              />
            </div>
            <div className="md:w-1/2">
              <CardHeader>
                <CardTitle className="text-3xl text-primary font-playfair-display">El Legado de Tres Mujeres</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>
                  En 1923, entre los soleños viñedos del Valle de Yauca en Arequipa, nació una leyenda familiar. Melba, una mujer de carácter fuerte y corazón apasionado, trabajó codo a codo con su esposo, Don Fernando, en su hacienda vitivinícola. Juntos, enfrentaron los desafíos de la tierra árida y el clima implacable, pero fue el amor de Melba por el vino y su instinto para los sabores lo que dio alma a sus cosechas.
                </p>
                <p>
                  Con el tiempo, sus hijas, Zaynifer y Emily, heredaron esa misma pasión. Zaynifer, meticulosa y perfeccionista, se encargó de refinar los procesos de fermentación, mientras que Emily, soñadora y audaz, experimentó con nuevas mezclas que sorprendieron incluso a los más expertos. Bajo la guía de sus padres, las hermanas convirtieron la hacienda en un referente de calidad, fusionando tradición e innovación.
                </p>
                <p>
                  Don Fernando, orgulloso, solía decir: "El mejor vino no se hace solo con uvas, sino con historias". Y así, cada botella de la hacienda guarda el legado de esta familia: el esfuerzo de Melba, la visión de Don Fernando y el ingenio de Zaynifer y Emily.
                </p>
                <p>
                  Hoy, sus vinos no solo son un tributo al Valle de Yauca, sino un homenaje al amor, la perseverancia y el espíritu de Tres Mujeres que lo hicieron posible.
                </p>
                <p className="text-center font-semibold text-accent italic text-lg mt-6">
                  "En cada copa, brindamos por ellas."
                </p>
              </CardContent>
              <CardContent>
                 <Image
                    src="https://placehold.co/400x300.png"
                    alt="Detalle antiguo de la hacienda Tres Mujeres"
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
