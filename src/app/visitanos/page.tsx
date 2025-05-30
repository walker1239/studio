import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle, CalendarCheck, Clock } from "lucide-react";
import Image from "next/image";

const WHATSAPP_NUMBER = "51974777331";
const WHATSAPP_MESSAGE = "Hola, me gustaría obtener más información sobre cómo visitar Tres Mujeres.";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function VisitanosPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="text-center mb-12">
        <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl font-bold text-primary mb-4 font-playfair-display">Visítanos en Tres Mujeres</h1>
        <p className="text-lg text-foreground max-w-3xl mx-auto">
          Experimenta la magia de nuestra hacienda, descubre nuestros viñedos y degusta nuestros vinos premiados.
          ¡Te esperamos para compartir nuestra pasión!
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-xl overflow-hidden bg-card/80">
          <CardHeader>
            <CardTitle className="text-3xl text-primary font-playfair-display">Planifica Tu Visita</CardTitle>
            <CardDescription className="text-foreground/80">
              Estamos emocionados de recibirte. Aquí encontrarás la información para planificar tu experiencia.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2 flex items-center">
                <CalendarCheck className="h-5 w-5 mr-2 text-accent" /> Horarios de Visita
              </h3>
              <p className="text-foreground/90">Lunes a Sábado: 10:00 AM - 5:00 PM</p>
              <p className="text-foreground/90">Domingos y Feriados: 11:00 AM - 3:00 PM (Previa reserva)</p>
              <p className="text-sm text-muted-foreground mt-1">Recomendamos reservar con anticipación, especialmente los fines de semana.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-accent" /> Contacto y Reservas
              </h3>
              <p className="text-foreground/90">Para consultas y reservas, contáctanos a través de WhatsApp:</p>
              <Button asChild className="mt-3 w-full md:w-auto shadow-lg hover:shadow-xl transition-shadow">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chatear por WhatsApp
                </a>
              </Button>
              <p className="text-foreground/90 mt-3">O llámanos al: <a href="tel:+51974777331" className="text-accent hover:underline">+51 974 777 331</a></p>
            </div>
             <div>
              <h3 className="text-xl font-semibold text-primary mb-2 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-accent" /> Nuestra Ubicación
              </h3>
              <p className="text-foreground/90">Urb. Balcones de Chilina Mz. P lt. 8 Alto Selva Alegre, Arequipa, Perú</p>
              <p className="text-sm text-muted-foreground mt-1">(Aquí puedes integrar un mapa de Google Maps)</p>
               <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                {/* Placeholder for Google Maps Embed */}
                <Image
                  src="https://placehold.co/800x400.png" // Replace with an actual map screenshot or keep as placeholder
                  alt="Mapa de ubicación de Tres Mujeres"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                  data-ai-hint="map location winery"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="relative min-h-[400px] md:min-h-full rounded-lg shadow-xl overflow-hidden">
           <Image
                src="https://placehold.co/800x1000.png"
                alt="Entrada escénica a Tres Mujeres"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
                data-ai-hint="winery entrance scenic"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold text-white mb-2 font-playfair-display">Un Oasis de Sabor</h2>
                <p className="text-gray-200 text-lg">Descubre la belleza y tranquilidad de nuestra hacienda.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
