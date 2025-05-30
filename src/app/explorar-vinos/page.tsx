import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageCircle } from "lucide-react"; // Import MessageCircle for WhatsApp icon

// Sample wine data (replace with Firestore data later)
const wines = [
  {
    id: "malbec-2022",
    name: "Malbec Reserve",
    type: "Tinto",
    year: 2022,
    description: "Un Malbec robusto con notas de mora, ciruela y un toque de vainilla. Perfecto con carnes rojas y quesos curados.",
    price: 45,
    image_url: "https://placehold.co/600x400.png",
    aiHint: "wine bottle vineyard"
  },
  {
    id: "chardonnay-2023",
    name: "Chardonnay Clásico",
    type: "Blanco",
    year: 2023,
    description: "Fresco y vibrante, con aromas cítricos y de manzana verde. Ideal para acompañar pescados y mariscos.",
    price: 38,
    image_url: "https://placehold.co/600x400.png",
    aiHint: "wine bottle grapes"
  },
  {
    id: "rose-2023",
    name: "Rosé de Verano",
    type: "Rosado",
    year: 2023,
    description: "Ligero y refrescante, con notas de fresa y frambuesa. El compañero perfecto para una tarde soleada.",
    price: 32,
    image_url: "https://placehold.co/600x400.png",
    aiHint: "rose wine summer"
  },
];

const WHATSAPP_NUMBER = "51974777331"; // Your WhatsApp number without '+' or spaces

export default function ExplorarVinosPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Nuestros Vinos</h1>
        <p className="text-lg text-foreground max-w-2xl mx-auto">
          Descubre la selección de vinos que Tres Mujeres tiene para ofrecer. Cada botella cuenta una historia de tradición y pasión.
        </p>
      </header>

      {/* TODO: Add filtering options here */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wines.map((wine) => {
          const whatsappMessage = `Hola, quisiera consultar sobre el vino: ${wine.name} (Año ${wine.year}).`;
          const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

          return (
            <Card key={wine.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative w-full h-64">
                  <Image
                    src={wine.image_url}
                    alt={`Botella de ${wine.name}`}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={wine.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl text-primary mb-2">{wine.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-1">{wine.type} - {wine.year}</CardDescription>
                <p className="text-foreground mb-4 text-sm">{wine.description}</p>
              </CardContent>
              <CardFooter className="p-6 bg-secondary/30 flex justify-between items-center">
                <p className="text-xl font-semibold text-accent">${wine.price}</p>
                <Button asChild variant="default">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Consultar
                  </a>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
