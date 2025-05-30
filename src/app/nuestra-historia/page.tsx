
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollText, Factory, PlayCircle, CheckCircle, Users, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";

const procesoElaboracion = [
  {
    paso: 1,
    titulo: "Vendimia (Cosecha de Uvas)",
    videoPlaceholder: "Video: Racimos siendo cortados a mano/máquina en el viñedo al amanecer.",
    datoClave: "Dato clave: Selección meticulosa de uvas por calidad y madurez óptima.",
    interactividad: "Ideal para video corto (20-60s) o GIF.",
    icono: <PlayCircle className="h-5 w-5 text-accent" />
  },
  {
    paso: 2,
    titulo: "Despalillado y Estrujado",
    videoPlaceholder: "Video: Máquina despalilladora separando uvas de los tallos + estrujado suave.",
    datoClave: "Interactividad: Botón para comparar métodos tradicionales vs. modernos.",
    interactividadSugerencia: "Mostrar el 'antes y después' de la uva.",
    icono: <PlayCircle className="h-5 w-5 text-accent" />
  },
  {
    paso: 3,
    titulo: "Fermentación Alcohólica",
    videoPlaceholder: "Video: Tanques de acero o barricas burbujeantes (levaduras transformando azúcar en alcohol).",
    datoClave: "Efecto visual: Mostrar termómetros y gráficos de temperatura (control clave).",
    interactividad: "Animación de burbujas y transformación.",
    icono: <PlayCircle className="h-5 w-5 text-accent" />
  },
  {
    paso: 4,
    titulo: "Maceración (Solo para Vinos Tintos)",
    videoPlaceholder: "Video: Remontaje (bombeo de líquido sobre el sombrero de pieles para extraer color/taninos).",
    datoClave: "Tooltip: Explicar diferencias entre maceración pre/post-fermentación.",
    interactividad: "Visualizar la extracción de color.",
    icono: <PlayCircle className="h-5 w-5 text-accent" />
  },
  {
    paso: 5,
    titulo: "Prensa (Extracción del Mosto)",
    videoPlaceholder: "Video: Prensa hidráulica o neumática extrayendo jugo (blancos/rosados) o vino de calidad (tintos).",
    datoClave: "Comparación: Mostrar cómo el prensado suave vs. intenso afecta el sabor.",
    interactividad: "Mostrar diferentes tipos de prensas.",
    icono: <PlayCircle className="h-5 w-5 text-accent" />
  },
  {
    paso: 6,
    titulo: "Fermentación Maloláctica (Opcional)",
    videoPlaceholder: "Video: Bacterias lácticas en acción (convertir ácido málico en láctico, suavizando el vino).",
    datoClave: "Dato técnico: Ideal para tintos, no siempre para blancos. Explicar el cambio en acidez.",
    interactividad: "Gráfico de transformación de ácidos.",
    icono: <PlayCircle className="h-5 w-5 text-accent" />
  },
  {
    paso: 7,
    titulo: "Crianza en Barrica",
    videoPlaceholder: "Video: Barricas de roble francés/americano en bodega oscura + sonido ambiente.",
    datoClave: "Zoom interactivo: Mostrar porosidad de la madera y micro-oxigenación. Tipos de roble.",
    interactividad: "Pasa el cursor sobre la barrica para ver cómo el roble aporta vainilla y especias al vino.",
    icono: <PlayCircle className="h-5 w-5 text-accent" />
  },
  {
    paso: 8,
    titulo: "Clarificación y Filtrado",
    videoPlaceholder: "Video: Uso de bentonita o clarificantes naturales (proteínas que arrastran impurezas).",
    datoClave: "Animación: Partículas sedimentándose vs. filtro de membrana. Explicar el objetivo de la limpidez.",
    interactividad: "Comparar vino filtrado vs no filtrado (apariencia).",
    icono: <PlayCircle className="h-5 w-5 text-accent" />
  },
  {
    paso: 9,
    titulo: "Embotellado",
    videoPlaceholder: "Video: Línea automatizada llenando botellas, tapando con corcho/cápsula.",
    datoClave: "Detalle: Mostrar control de calidad (luces UV para detectar residuos). Tipos de tapones.",
    interactividad: "Simulación de línea de embotellado.",
    icono: <PlayCircle className="h-5 w-5 text-accent" />
  },
  {
    paso: 10,
    titulo: "Guarda (Envejecimiento en Botella)",
    videoPlaceholder: "Video: Botellas en posición horizontal en cavas subterráneas.",
    datoClave: "Mensaje clave: \"El tiempo es el mejor enólogo\". Explicar evolución en botella.",
    interactividad: "Timeline de envejecimiento y sus efectos.",
    icono: <PlayCircle className="h-5 w-5 text-accent" />
  }
];


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

      {/* Sección Proceso de Elaboración */}
      <section>
        <header className="text-center mb-12">
          <Factory className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-primary mb-4 font-playfair-display">Proceso de Elaboración del Vino</h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Desde la uva hasta tu copa, descubre la magia y el cuidado detrás de cada botella de Viñedos Virtual.
          </p>
          <p className="text-sm text-muted-foreground mt-2">Cada etapa es ideal para un video corto (20-60 segundos) o GIF animado que muestre el proceso en acción.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procesoElaboracion.map((item) => (
            <Card key={item.paso} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-primary font-playfair-display">{item.paso}. {item.titulo}</CardTitle>
                  {item.icono}
                </div>
                <CardDescription className="text-xs text-muted-foreground">{item.videoPlaceholder}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-2 text-sm">
                <p className="text-foreground/80"><CheckCircle className="inline h-4 w-4 mr-1 text-green-600" />{item.datoClave}</p>
                {item.interactividad && <p className="text-accent/90 italic"><Users className="inline h-4 w-4 mr-1" /> {item.interactividad}</p>}
                {item.interactividadSugerencia && <p className="text-accent/80 text-xs"><CalendarDays className="inline h-3 w-3 mr-1" /> {item.interactividadSugerencia}</p>}
              </CardContent>
              <CardFooter className="p-4 bg-secondary/30">
                <Button variant="outline" size="sm" className="w-full">
                  <PlayCircle className="mr-2 h-4 w-4" /> Ver detalle del paso
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
