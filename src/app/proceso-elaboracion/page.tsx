
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, PlayCircle, CheckCircle, Users, Zap, Wine, Thermometer, Layers, Droplets, Bot, Clock, CalendarDays } from "lucide-react";

const procesoElaboracion = [
  {
    paso: 1,
    titulo: "Vendimia Selecta",
    videoPlaceholder: "Video dinámico: Uvas maduras siendo cosechadas al amanecer, manos expertas seleccionando los mejores racimos. Música suave y luz dorada.",
    descripcion: "Cosecha manual de uvas en su punto óptimo de madurez para asegurar la máxima calidad y expresión aromática desde el inicio.",
    datoClave: "Calidad desde el Origen: Solo se cosechan uvas en su punto óptimo de madurez, usualmente muy temprano en la mañana para preservar su frescura y acidez.",
    interactividad: "Galería Interactiva: Haz clic en diferentes variedades de uva (Quebranta, Italia, Torontel) para ver imágenes detalladas y conocer sus características principales para nuestros vinos y piscos.",
    icono: <Wine className="h-5 w-5 text-accent" />
  },
  {
    paso: 2,
    titulo: "Despalillado y Estrujado Suave",
    videoPlaceholder: "Animación 3D/Video: Uvas entrando a la despalilladora, separándose limpiamente de los raspones. Luego, un estrujado delicado que libera el mosto sin romper las semillas.",
    descripcion: "Separación cuidadosa de las uvas de los raspones, seguida de un ligero estrujado para liberar el mosto sin dañar las semillas, preservando la pureza de los sabores.",
    datoClave: "Pureza del Mosto: Evitar romper semillas y tallos es crucial para no introducir amargor ni notas herbáceas indeseadas en el vino final.",
    interactividad: "Comparativa Visual: Toggle 'Tradicional vs. Moderno'. Al seleccionar 'Tradicional', muestra una pisada de uva (simulada). Con 'Moderno', la animación de la máquina actual.",
    icono: <Layers className="h-5 w-5 text-accent" />
  },
  {
    paso: 3,
    titulo: "Fermentación Alcohólica: La Transformación",
    videoPlaceholder: "Timelapse vibrante: Mosto burbujeando activamente en tanques de acero inoxidable. Superponer gráficos mostrando la conversión de azúcar en alcohol y la liberación de CO2.",
    descripcion: "El mosto se transforma en vino gracias a la acción de levaduras seleccionadas que convierten los azúcares en alcohol, bajo estricto control de temperatura para desarrollar perfiles aromáticos complejos.",
    datoClave: "Control de Temperatura Preciso: Mantener la temperatura ideal (distinta para blancos y tintos) es vital para que las levaduras trabajen óptimamente y se desarrollen los aromas deseados.",
    interactividad: "Termómetro Interactivo: Arrastra un slider de temperatura virtual (ej. 18°C vs 28°C) y observa (con texto descriptivo o iconos) cómo influye en los perfiles aromáticos.",
    icono: <Thermometer className="h-5 w-5 text-accent" />
  },
  {
    paso: 4,
    titulo: "Maceración: Extracción de Color y Carácter (Tintos)",
    videoPlaceholder: "Video cercano: El 'sombrero' de hollejos flotando sobre el mosto en fermentación. Mostrar el proceso de 'remontado' o 'pigeage' para extraer color y taninos.",
    descripcion: "Contacto prolongado del mosto con los hollejos de las uvas tintas para extraer color, taninos y compuestos aromáticos que definirán la estructura y potencial de envejecimiento del vino.",
    datoClave: "Definiendo la Estructura: El tiempo y la técnica de maceración son determinantes para el color, cuerpo, taninos y potencial de guarda de nuestros vinos tintos.",
    interactividad: "Visualizador de Color Dinámico: Una animación que muestra cómo el color del vino se intensifica gradualmente a lo largo de los días de maceración.",
    icono: <Droplets className="h-5 w-5 text-accent" />
  },
  {
    paso: 5,
    titulo: "Prensado: El Corazón del Vino",
    videoPlaceholder: "Video elegante: Uso de una prensa neumática moderna. Mostrar la separación del 'vino flor' (primera fracción, más delicada) y el 'vino de prensa'.",
    descripcion: "Extracción delicada del vino restante de los hollejos tras la fermentación (o del mosto antes de ella para blancos/rosados), separando las fracciones para obtener la máxima calidad.",
    datoClave: "Fracciones de Calidad: El prensado suave extrae el jugo más puro. Las fracciones posteriores, con más presión, se manejan por separado para distintos estilos de vino.",
    interactividad: "Explora las Prensas: Diagrama interactivo. Haz clic en 'Prensa Neumática' o 'Prensa Vertical (Tradicional)' para ver una animación de su funcionamiento y ventajas.",
    icono: <Factory className="h-5 w-5 text-accent" />
  },
  {
    paso: 6,
    titulo: "Fermentación Maloláctica: Suavidad y Complejidad",
    videoPlaceholder: "Micro-animación científica: Bacterias lácticas (personajes animados) 'comiendo' ácido málico y transformándolo en ácido láctico más suave. Mostrar cambio visual en textura del vino.",
    descripcion: "Proceso biológico donde el ácido málico (más agresivo) se convierte en ácido láctico (más suave), aportando redondez, estabilidad y complejidad, especialmente en vinos tintos.",
    datoClave: "El Toque Aterciopelado: Proceso secundario, común en tintos y algunos blancos con cuerpo, reduce acidez aguda y añade notas cremosas y complejidad.",
    interactividad: "Test de Sabor Simulado: Botones 'Antes de FML' (descriptores: 'manzana verde') y 'Después de FML' (descriptores: 'mantequilla', 'textura redonda').",
    icono: <Zap className="h-5 w-5 text-accent" />
  },
  {
    paso: 7,
    titulo: "Crianza: El Arte de la Paciencia",
    videoPlaceholder: "Video atmosférico: Bodega serena con barricas de roble. Movimiento lento de cámara. Alternar con tomas de tanques de acero para vinos frescos.",
    descripcion: "Maduración del vino en barricas de roble o tanques de acero inoxidable, donde evoluciona, se estabiliza y adquiere nuevos matices aromáticos y gustativos antes de su embotellado.",
    datoClave: "Evolución y Refinamiento: En roble (aromas y complejidad) o en acero (preserva fruta), la crianza armoniza y desarrolla el carácter final del vino.",
    interactividad: "Mapa de Aromas de Barrica: Pasa el cursor sobre una barrica para revelar aromas típicos (vainilla, coco, especias, tostado, según el tipo de roble).",
    icono: <Clock className="h-5 w-5 text-accent" />
  },
  {
    paso: 8,
    titulo: "Clarificación y Estabilización: Limpidez y Equilibrio",
    videoPlaceholder: "Animación elegante: Partículas finas sedimentando (trasiego). Vino volviéndose más brillante. Enfocar en métodos suaves, no industriales.",
    descripcion: "Procesos para eliminar partículas en suspensión y asegurar que el vino se mantenga límpido y estable en botella, utilizando métodos suaves que respetan su integridad.",
    datoClave: "Brillo Natural: Buscamos limpidez con métodos suaves (trasiego, clarificantes naturales si es necesario) para un vino estable y atractivo.",
    interactividad: "Filtro Virtual Interactivo: Arrastra 'vino turbio' (simbólico) a través de un 'cono de trasiego' para verlo salir 'clarificado'.",
    icono: <CheckCircle className="h-5 w-5 text-accent" />
  },
  {
    paso: 9,
    titulo: "Embotellado: Preservando la Esencia",
    videoPlaceholder: "Video preciso: Línea de embotellado moderna (no masiva). Enfoque en llenado cuidadoso, taponado de calidad y etiquetado final.",
    descripcion: "Transferencia del vino a las botellas con el mínimo contacto con el oxígeno, asegurando su correcta conservación y permitiendo que continúe su evolución.",
    datoClave: "Protección Final: Embotellado con mínimo contacto con oxígeno para preservar aromas y sabores cultivados con esmero.",
    interactividad: "Crea Tu Etiqueta (Mini-Juego): Módulo simple para seleccionar nombre de vino ficticio, diseño de etiqueta básico y ver en botella 3D.",
    icono: <Bot className="h-5 w-5 text-accent" />
  },
  {
    paso: 10,
    titulo: "Guarda y Evolución en Botella: El Legado Continúa",
    videoPlaceholder: "Time-lapse elegante: Botellas reposando en cava oscura. Mostrar cómo el vino mejora con el tiempo, desarrollando complejidad.",
    descripcion: "Período de reposo en botella en condiciones controladas, donde el vino se afina, integra sus componentes y desarrolla aromas terciarios, alcanzando su plenitud.",
    datoClave: "Afinamiento Final: Post-embotellado, el vino sigue evolucionando. Guarda adecuada permite desarrollar aromas terciarios y máxima expresión.",
    interactividad: "Línea de Tiempo de Potencial de Guarda: Slider simulando años (1, 3, 5, 10+). Muestra notas de cata de evolución (ej. 'fruta fresca' a 'compotada', 'cuero').",
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
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {procesoElaboracion.map((item) => (
          <Card key={item.paso} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl text-primary font-playfair-display">{item.paso}. {item.titulo}</CardTitle>
                {item.icono}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/90">{item.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
