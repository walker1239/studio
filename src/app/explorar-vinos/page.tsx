
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageCircle, ShoppingCart } from "lucide-react"; // Import MessageCircle for WhatsApp icon

// Updated product data
const products = [
  {
    id: "vino-seco-sol-yauca",
    name: "Sol de Yauca - Vino Seco",
    type: "Vino Seco",
    year: 2023,
    description: "Un vino seco elegante y fresco, con aromas cítricos y un final persistente. Ideal para acompañar pescados y ensaladas.",
    price: 55,
    image_url: "https://placehold.co/600x400.png",
    aiHint: "dry wine bottle"
  },
  {
    id: "vino-semiseco-alma",
    name: "Alma de Tres Mujeres - Vino Semiseco",
    type: "Vino Semiseco",
    year: 2023,
    description: "Equilibrado y suavemente dulce, este semiseco deleita con notas de frutas maduras. Perfecto como aperitivo o con postres ligeros.",
    price: 50,
    image_url: "https://placehold.co/600x400.png",
    aiHint: "semi dry wine"
  },
  {
    id: "pisco-quebranta-espiritu",
    name: "Espíritu del Valle - Pisco Quebranta",
    type: "Pisco",
    year: 2022, // Piscos might not always have a vintage like wine, but included for consistency
    description: "Pisco puro de uva Quebranta, destilado con maestría para capturar la esencia del terruño. Intenso y aromático, ideal para Pisco Sour o puro.",
    price: 75,
    image_url: "https://placehold.co/600x400.png",
    aiHint: "pisco bottle peru"
  },
  {
    id: "macerado-maracuya",
    name: "Macerado de Maracuyá Tentación",
    type: "Macerado",
    year: null, // Macerados usually don't have a specific year
    description: "Exquisito macerado de pisco con maracuyá fresca. Un equilibrio perfecto entre dulzor y acidez, ideal para cócteles exóticos o para disfrutar solo con hielo.",
    price: 65,
    image_url: "https://placehold.co/600x400.png",
    aiHint: "passion fruit macerado"
  },
  {
    id: "macerado-fresa",
    name: "Macerado de Fresa Silvestre",
    type: "Macerado",
    year: null,
    description: "La dulzura natural de las fresas silvestres infusionada en pisco de alta calidad. Delicado y aromático, una delicia para el paladar.",
    price: 60,
    image_url: "https://placehold.co/600x400.png",
    aiHint: "strawberry macerado pisco"
  },
];

const WHATSAPP_NUMBER = "51974777331"; // Your WhatsApp number without '+' or spaces

export default function ExplorarVinosPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="text-center mb-12">
        <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary mb-4 font-playfair-display">Nuestros Productos</h1>
        <p className="text-lg text-foreground max-w-2xl mx-auto">
          Descubre la selección de vinos, piscos y macerados que Tres Mujeres tiene para ofrecer. Cada botella cuenta una historia de tradición y pasión.
        </p>
      </header>

      {/* TODO: Add filtering options here */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => {
          const whatsappMessage = `Hola, quisiera consultar sobre el producto: ${product.name}${product.year ? ` (Año ${product.year})` : ''}.`;
          const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

          return (
            <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90">
              <CardHeader className="p-0">
                <div className="relative w-full h-64">
                  <Image
                    src={product.image_url}
                    alt={`Botella de ${product.name}`}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={product.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl text-primary mb-2">{product.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-1">
                  {product.type} {product.year ? `- ${product.year}` : ''}
                </CardDescription>
                <p className="text-foreground mb-4 text-sm">{product.description}</p>
              </CardContent>
              <CardFooter className="p-6 bg-secondary/30 flex justify-between items-center">
                <p className="text-xl font-semibold text-accent">S/ {product.price.toFixed(2)}</p>
                <Button asChild variant="default" className="shadow-md hover:shadow-lg transition-shadow">
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
