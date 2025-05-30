
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, PlayCircle, CheckCircle, Users, Zap, Wine, Thermometer, Layers, Droplets, Bot, Clock, CalendarDays } from "lucide-react"; // Added CalendarDays

const procesoElaboracion = [
  {
    paso: 1,
    titulo: "Vendimia Selecta",
    videoPlaceholder: "Video dinámico: Uvas maduras siendo cosechadas al amanecer, manos expertas seleccionando los mejores racimos.",
    datoClave: "Calidad desde el Origen: Solo se cosechan uvas en su punto óptimo de madurez para asegurar la máxima expresión del terruño.",
    interactividad: "Galería Interactiva: Haz clic en diferentes tipos de uva para ver detalles y características.",
    icono: <Wine className="h-5 w-5 text-accent" />
  },
  {
    paso: 2,
    titulo: "Despalillado y Estrujado Suave",
    videoPlaceholder: "Animación/Video: Uvas separándose de los raspones y luego siendo estrujadas delicadamente para liberar el mosto.",
    datoClave: "Pureza del Mosto: Se evita romper semillas y tallos para no aportar sabores amargos.",
    interactividad: "Comparativa Visual: Botones para alternar entre 'Con Despalillado' vs 'Sin Despalillado' mostrando el impacto.",
    icono: <Layers className="h-5 w-5 text-accent" />
  },
  {
    paso: 3,
    titulo: "Fermentación Mágica",
    videoPlaceholder: "Timelapse/Video: Mosto burbujeando en tanques de acero inoxidable o barricas, levaduras en acción.",
    datoClave: "Control de Temperatura: Esencial para desarrollar los aromas y sabores deseados en el vino.",
    interactividad: "Slider Interactivo: Ajusta una temperatura virtual para ver cómo afecta (simulado) al proceso de fermentación.",
    icono: <Thermometer className="h-5 w-5 text-accent" />
  },
  {
    paso: 4,
    titulo: "Maceración Profunda (Tintos)",
    videoPlaceholder: "Video/Animación: El mosto en contacto con los hollejos, extrayendo color, taninos y aromas intensos.",
    datoClave: "Extracción de Carácter: Periodo clave para definir la estructura y longevidad de los vinos tintos.",
    interactividad: "Visualizador de Color: Una animación que muestra cómo el color se intensifica con el tiempo de maceración.",
    icono: <Droplets className="h-5 w-5 text-accent" />
  },
  {
    paso: 5,
    titulo: "Prensado Delicado",
    videoPlaceholder: "Video: Prensas neumáticas o verticales extrayendo el 'vino flor' y luego el vino de prensa.",
    datoClave: "Fracciones de Calidad: Diferentes presiones de prensado producen vinos con distintas características.",
    interactividad: "Explora las Prensas: Haz clic en diferentes tipos de prensas (neumática, vertical) para ver una breve animación de su funcionamiento.",
    icono: <Factory className="h-5 w-5 text-accent" /> // Re-using Factory as it fits well
  },
  {
    paso: 6,
    titulo: "Fermentación Maloláctica (Opcional)",
    videoPlaceholder: "Micro-animación: Bacterias lácticas transformando el ácido málico (agudo) en ácido láctico (suave).",
    datoClave: "Suavidad y Complejidad: Aporta untuosidad y estabilidad, especialmente en vinos tintos y algunos blancos con cuerpo.",
    interactividad: "Antes y Después: Un toggle para 'oler' (simulado con descriptores) un vino antes y después de la FML.",
    icono: <Zap className="h-5 w-5 text-accent" /> // Zap for transformation
  },
  {
    paso: 7,
    titulo: "Crianza Paciente en Barrica",
    videoPlaceholder: "Video atmosférico: Bodega silenciosa con barricas de roble, el vino madurando lentamente.",
    datoClave: "El Toque del Roble: Aporta aromas (vainilla, especias, tostados) y complejidad, además de microoxigenación.",
    interactividad: "Mapa de Aromas: Pasa el cursor sobre una barrica para ver los aromas típicos que puede aportar el roble.",
    icono: <Clock className="h-5 w-5 text-accent" />
  },
  {
    paso: 8,
    titulo: "Clarificación y Estabilización",
    videoPlaceholder: "Animación estilizada: Partículas en suspensión sedimentando o siendo eliminadas por filtros.",
    datoClave: "Limpidez y Brillo: Asegura un vino visualmente atractivo y estable antes del embotellado.",
    interactividad: "Filtro Virtual: Arrastra un 'vino turbio' a través de un filtro para verlo clarificado.",
    icono: <CheckCircle className="h-5 w-5 text-accent" /> // CheckCircle for purity
  },
  {
    paso: 9,
    titulo: "Embotellado Preciso",
    videoPlaceholder: "Video: Línea de embotellado moderna, llenando, taponando y etiquetando las botellas con precisión.",
    datoClave: "Protección del Vino: El embotellado se realiza con mínimo contacto con oxígeno para preservar la calidad.",
    interactividad: "Diseña tu Etiqueta: Un mini-juego simple donde el usuario puede arrastrar elementos para 'crear' una etiqueta.",
    icono: <Bot className="h-5 w-5 text-accent" /> // Bot for automation/precision
  },
  {
    paso: 10,
    titulo: "Evolución en Botella",
    videoPlaceholder: "Time-lapse elegante: Botellas reposando en una cava, con etiquetas que cambian sutilmente para mostrar el paso del tiempo.",
    datoClave: "Afinamiento Final: El vino continúa evolucionando, desarrollando aromas terciarios y redondeando su carácter.",
    interactividad: "Línea de Tiempo de Cata: Desliza por una línea de tiempo para ver cómo cambian las notas de cata (simulado) de un vino con los años.",
    icono: <CalendarDays className="h-5 w-5 text-accent" />
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
        <p className="text-sm text-muted-foreground mt-2">Cada etapa es una oportunidad para explorar interactivamente. ¡Haz clic para descubrir más!</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {procesoElaboracion.map((item) => (
          <Card key={item.paso} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl text-primary font-playfair-display">{item.paso}. {item.titulo}</CardTitle>
                {item.icono}
              </div>
              <CardDescription className="text-xs text-muted-foreground h-16 overflow-y-auto">{item.videoPlaceholder}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-3 text-sm p-4">
              <div className="p-3 bg-secondary/20 rounded-md">
                <p className="text-foreground/90 font-semibold flex items-start"><CheckCircle className="inline h-4 w-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />{item.datoClave}</p>
              </div>
              {item.interactividad && (
                <div className="p-3 bg-accent/10 rounded-md">
                    <p className="text-accent/90 italic flex items-start"><Users className="inline h-4 w-4 mr-2 mt-0.5 flex-shrink-0" /> {item.interactividad}</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="p-4 bg-secondary/30">
              <Button variant="outline" size="sm" className="w-full">
                <PlayCircle className="mr-2 h-4 w-4" /> Ver detalle del paso
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
