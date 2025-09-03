
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, PlayCircle, CheckCircle, Wine, Thermometer, Layers, Droplets, Bot, Clock, CalendarDays, Zap } from "lucide-react";
import Image from "next/image"; // Import next/image

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const procesoElaboracion = [
  {
    paso: 1,
    titulo: "Vendimia Selecta",
    descripcion: "Cosecha manual de uvas en su punto óptimo de madurez para asegurar la máxima calidad y expresión aromática desde el inicio.",
    icono: <Wine className="h-5 w-5 text-accent" />,
    imageUrl: `${basePath}/images/proceso/paso-1.png`,
    aiHint: "grape harvest vineyard"
  },
  {
    paso: 2,
    titulo: "Despalillado y Estrujado Suave",
    descripcion: "Separación cuidadosa de las uvas de los raspones, seguida de un ligero estrujado para liberar el mosto sin dañar las semillas, preservando la pureza de los sabores.",
    icono: <Layers className="h-5 w-5 text-accent" />,
    imageUrl: `${basePath}/images/proceso/paso-2.png`,
    aiHint: "grape destemming machine"
  },
  {
    paso: 3,
    titulo: "Pisa: El corazon del vino tinto",
    descripcion: "Realización de pisa para extraer los jugos naturalez de la uva. Este paso es un pasto totalmente artesanal y cuidando la limpieza de cada parte.",
    icono: <Layers className="h-5 w-5 text-accent" />,
    imageUrl: `${basePath}/images/proceso/paso-3.png`,
    aiHint: "grape destemming machine"
  },
  {
    paso: 4,
    titulo: "Extracción de jugo",
    descripcion: "Realización de la extracción de jugo",
    icono: <Layers className="h-5 w-5 text-accent" />,
    imageUrl: `${basePath}/images/proceso/paso-4.png`,
    aiHint: "grape destemming machine"
  },
  {
    paso: 5,
    titulo: "Fermentación Alcohólica: La Transformación",
    descripcion: "El mosto se transforma en vino gracias a la acción de levaduras seleccionadas que convierten los azúcares en alcohol, bajo estricto control de temperatura para desarrollar perfiles aromáticos complejos.",
    icono: <Thermometer className="h-5 w-5 text-accent" />,
    imageUrl: `${basePath}/images/proceso/paso-5.png`,
    aiHint: "wine fermentation tank"
  },
  {
    paso: 6,
    titulo: "Crianza: El Arte de la Paciencia",
    descripcion: "Maduración del vino en barricas de roble o tanques de acero inoxidable, donde evoluciona, se estabiliza y adquiere nuevos matices aromáticos y gustativos antes de su embotellado.",
    icono: <Clock className="h-5 w-5 text-accent" />,
    imageUrl: `${basePath}/images/proceso/paso-6.png`,
    aiHint: "wine barrels cellar"
  },
  {
    paso: 7,
    titulo: "Embotellado: Preservando la Esencia",
    descripcion: "Transferencia del vino a las botellas con el mínimo contacto con el oxígeno, asegurando su correcta conservación y permitiendo que continúe su evolución.",
    icono: <Bot className="h-5 w-5 text-accent" />,
    imageUrl: `${basePath}/images/proceso/paso-7.png`,
    aiHint: "wine bottling line"
  },
  {
    paso: 8,
    titulo: "Guarda y Evolución en Botella: El Legado Continúa",
    descripcion: "Período de reposo en botella en condiciones controladas, donde el vino se afina, integra sus componentes y desarrolla aromas terciarios, alcanzando su plenitud.",
    icono: <CalendarDays className="h-5 w-5 text-accent" />,
    imageUrl: `${basePath}/images/proceso/paso-8.png`,
    aiHint: "wine bottles aging"
  }
];

export default function ProcesoElaboracionPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="text-center mb-12">
        <Factory className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary mb-4 font-playfair-display">Proceso de Elaboración del Vino</h1>
        <p className="text-lg text-foreground max-w-3xl mx-auto">
          Desde la uva hasta tu copa, descubre la magia y el cuidado detrás de cada botella de Tres Mujeres.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {procesoElaboracion.map((item) => (
          <Card key={item.paso} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90">
            <CardHeader className="p-0">
              <div className="relative w-full h-48"> {/* Adjusted height for the image */}
                <Image
                  src={item.imageUrl}
                  alt={`Imagen del paso: ${item.titulo}`}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={item.aiHint}
                />
              </div>
              <div className="p-6 pb-2"> {/* Added padding back for title and icon */}
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-primary font-playfair-display">{item.paso}. {item.titulo}</CardTitle>
                  {item.icono}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow px-6 pt-0 pb-6"> {/* Adjusted padding */}
              <p className="text-sm text-foreground/90">{item.descripcion}</p>
            </CardContent>
            <CardFooter className="p-6 bg-secondary/30"> {/* Ensure padding for footer */}
              <Button variant="outline" size="sm" className="w-full shadow-md hover:shadow-lg transition-shadow">
                <PlayCircle className="mr-2 h-4 w-4" /> Ver Etapa
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
