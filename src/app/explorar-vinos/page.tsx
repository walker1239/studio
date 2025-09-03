
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
import { MessageCircle, ShoppingCart } from "lucide-react"; // Import MessageCircle for WhatsApp icon

// Updated product data
const products = [
  {
    id: "vino-seco-sol-yauca",
    name: "Sol de Yauca - Vino Seco",
    type: "Vino Seco",
    year: 2023,
    description: "Un vino seco elegante, con carácter intenso y final prolongado. Perfecto para maridar con carnes y quesos.",
    price: 55,
    image_url: `${basePath}/images/products/1.png`,
    aiHint: "dry wine bottle"
  },
  {
    id: "vino-semi-seco-alma",
    name: "Alma de Tres Mujeres - Vino Semi-Seco",
    type: "Vino Semi-Seco",
    year: 2023,
    description: "Equilibrado y suavemente dulce, con notas de frutas maduras que lo hacen ideal como aperitivo.",
    price: 52,
    image_url: `${basePath}/images/products/2.png`,
    aiHint: "semi dry red wine bottle"
  },
  {
    id: "mini-vino-seco",
    name: "Mini Sol de Yauca - Vino Seco",
    type: "Mini Vino Seco",
    year: 2023,
    description: "La intensidad del vino seco en versión mini. Perfecto para detalles y ocasiones especiales.",
    price: 18,
    image_url: `${basePath}/images/products/3.png`,
    aiHint: "mini dry wine bottle"
  },
  {
    id: "pisco-acholado",
    name: "Tradición Andina - Pisco Acholado",
    type: "Pisco Acholado",
    year: 2023,
    description: "Un pisco acholado de uvas seleccionadas, con aroma expresivo y sabor robusto. Un clásico peruano.",
    price: 65,
    image_url: `${basePath}/images/products/4.png`,
    aiHint: "peruvian pisco bottle"
  },
  {
    id: "pisco-acholado-mini",
    name: "Mini Tradición Andina - Pisco Acholado",
    type: "Mini Pisco Acholado",
    year: 2023,
    description: "Versión mini del pisco acholado, práctico y auténtico. Ideal para compartir en reuniones.",
    price: 22,
    image_url: `${basePath}/images/products/5.png`,
    aiHint: "mini peruvian pisco bottle"
  },
  {
    id: "macerado-canela",
    name: "Esencia Andina - Macerado en Pisco Canela",
    type: "Macerado en Pisco",
    year: 2023,
    description: "Macerado cálido y especiado con canela, perfecto para sobremesas y cócteles sofisticados.",
    price: 48,
    image_url: `${basePath}/images/products/6.png`,
    aiHint: "cinnamon flavored pisco bottle"
  },
  {
    id: "macerado-maracuya",
    name: "Pasión Tropical - Macerado en Pisco Maracuyá",
    type: "Macerado en Pisco",
    year: 2023,
    description: "Refrescante macerado con maracuyá natural, de sabor vibrante y tropical. Una delicia exótica.",
    price: 50,
    image_url: `${basePath}/images/products/7.png`,
    aiHint: "passion fruit flavored pisco bottle"
  },
  {
    id: "macerado-maracuya-mini",
    name: "Mini Pasión Tropical - Macerado en Pisco Maracuyá",
    type: "Mini Macerado en Pisco",
    year: 2023,
    description: "La frescura del maracuyá en versión mini, práctica y deliciosa para cualquier ocasión.",
    price: 20,
    image_url: `${basePath}/images/products/8.png`,
    aiHint: "mini passion fruit flavored pisco bottle"
  },
  {
    id: "macerado-damasco",
    name: "Dulce Andino - Macerado en Pisco Damasco",
    type: "Macerado en Pisco",
    year: 2023,
    description: "Un macerado dulce y afrutado con damasco, que combina tradición y frescura innovadora.",
    price: 50,
    image_url: `${basePath}/images/products/9.png`,
    aiHint: "apricot flavored pisco bottle"
  },
  {
    id: "macerado-kiwi",
    name: "Frescura Verde - Macerado en Pisco Kiwi",
    type: "Macerado en Pisco",
    year: 2023,
    description: "Innovador macerado con kiwi, de perfil refrescante y ligeramente ácido. Perfecto para tragos originales.",
    price: 50,
    image_url: `${basePath}/images/products/10.png`,
    aiHint: "kiwi flavored pisco bottle"
  },
  {
    id: "macerado-awaymanto",
    name: "Tesoro Dorado - Macerado en Pisco Aguaymanto",
    type: "Macerado en Pisco",
    year: 2023,
    description: "Exótico macerado con aguaymanto, de notas dulces y ácidas, que sorprende al paladar.",
    price: 55,
    image_url: `${basePath}/images/products/11.png`,
    aiHint: "golden berry flavored pisco bottle"
  },
  {
    id: "macerado-frambuesa",
    name: "Rubí Andino - Macerado en Pisco Frambuesa",
    type: "Macerado en Pisco",
    year: 2023,
    description: "Un macerado vibrante con frambuesa, de aroma intenso y sabor dulce-afrutado.",
    price: 55,
    image_url: `${basePath}/images/products/12.png`,
    aiHint: "raspberry flavored pisco bottle"
  },
  {
    id: "macerado-carambola",
    name: "Estrella Tropical - Macerado en Pisco Carambola",
    type: "Macerado en Pisco",
    year: 2023,
    description: "Macerado refrescante con carambola, ligero y exótico, ideal para cócteles veraniegos.",
    price: 50,
    image_url: `${basePath}/images/products/13.png`,
    aiHint: "starfruit flavored pisco bottle"
  },
  {
    id: "macerado-limon-mini",
    name: "Mini Frescor Limeño - Macerado en Pisco Limón",
    type: "Mini Macerado en Pisco",
    year: 2023,
    description: "Un mini macerado fresco con limón, perfecto para shots o mezclas ligeras.",
    price: 18,
    image_url: `${basePath}/images/products/14.png`,
    aiHint: "mini lemon flavored pisco bottle"
  },
  {
    id: "pack-mini-macerados",
    name: "Pack Degustación x3 - Mini Macerados en Pisco",
    type: "Pack Macerados",
    year: 2023,
    description: "Un pack con 3 mini macerados surtidos, ideal para descubrir nuevos sabores.",
    price: 70,
    image_url: `${basePath}/images/products/15.png`,
    aiHint: "mini macerado pisco pack"
  },
  {
    id: "cata-vinos",
    name: "Experiencia Sol de Yauca - Cata de Vinos",
    type: "Evento",
    year: 2023,
    description: "Vive una experiencia única con nuestra cata de vinos, aprendiendo a diferenciar cada matiz y disfrutando de 4 variedades.",
    price: 120,
    image_url: `${basePath}/images/products/16.png`,
    aiHint: "wine tasting event poster"
  }
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
