
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollText } from "lucide-react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
                src={`${basePath}/images/historia/familia.jpg`}
                alt="Familia fundadora de 3Mujeres"
                layout="fill"
                objectFit="cover"
                data-ai-hint="vintage family photo vineyard"
              />
            </div>
            <div className="md:w-1/2">
              <CardHeader>
                <CardTitle className="text-3xl text-primary font-playfair-display">El Legado de 3Mujeres</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/90 space-y-4">
                <p>
                  En 1920, entre los soleños viñedos del Valle de Cuculiyoc -Pica del distrito de Yanaquihua, Provincia de condesuyos de la región de Arequipa, nació una leyenda familiar. Melba, una mujer de carácter fuerte y corazón apasionado, trabajó codo a codo con su esposo, Don Fernando, en su hacienda vitivinícola. Juntos, enfrentaron los desafíos de la tierra árida y el clima implacable, pero fue el amor de Melba por el vino y su instinto para los sabores lo que dio alma a sus cosechas.
                </p>
                <p>
                  Con el tiempo, sus hijos, Zaynifer, Walker y Emily, heredaron esa misma pasión. Zaynifer y Walker, refinaron los procesos de fermentación, mientras que Emily, soñadora y audaz, experimentó con nuevas mezclas que sorprendieron incluso a los más expertos. Bajo la guía de sus padres, convirtieron la hacienda en un referente de calidad, fusionando tradición e innovación.
                </p>
                <p>
                  Don Fernando, orgulloso, solía decir: "El mejor vino no se hace solo con uvas, sino con historias". Y así, cada botella de la hacienda guarda el legado de esta familia: el esfuerzo de Melba, la visión de Don Fernando y el ingenio de sus hijos Zaynifer, Walker y Emily.                </p>
                <p>
                  Tres Mujeres nace para recordarnos quiénes somos y de dónde venimos. Es un vino hecho con alma, para quienes saben sentirla. No es un vino para todos es para quienes escuchan a la tierra antes de tocarla, para quienes convierten lo simple en arte para quienes saben que lo más valioso no se inventa, se hereda. Con sabores que no solo se prueban, se recuerdan como el aroma de la tierra húmeda después de la lluvia y el crujido de hojas secas bajo los pies al final de la vendimia, las manos arrugadas que sostenían el mundo sin decir una palabra.
                </p>
                <p className="text-center font-semibold text-accent italic text-lg mt-6">
                  "Hoy, sus vinos son un homenaje al amor, la perseverancia y el espíritu de Tres Mujeres que lo hicieron posible."
                </p>
              </CardContent>
              <CardContent>
                 <Image
                    src={`${basePath}/images/historia/hacienda-detalle.png`}
                    alt="Detalle antiguo de la hacienda 3Mujeres"
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
