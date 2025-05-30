import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Wine } from 'lucide-react'; // Wine icon for brand

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/explorar-vinos', label: 'Explorar Vinos' },
  { href: '/historia', label: 'Nuestra Historia' },
  { href: '/proceso', label: 'Elaboración' },
  { href: '/visitanos', label: 'Visítanos' },
];

export default function Navbar() {
  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{ '--navbar-height': '4rem' } as React.CSSProperties} 
    >
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors">
          <Wine className="h-7 w-7" />
          <span className="font-bold text-xl font-playfair-display">Viñedos Virtual</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
              <div className="flex flex-col space-y-6">
                <Link href="/" className="flex items-center space-x-2 text-primary mb-4">
                  <Wine className="h-7 w-7" />
                  <span className="font-bold text-xl font-playfair-display">Viñedos Virtual</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={`mobile-${link.label}`}
                    href={link.href}
                    className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button variant="default" className="w-full mt-4" asChild>
                   <Link href="/visitanos#reservar">Reservar Visita</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex items-center">
           <Button variant="default" asChild>
            <Link href="/visitanos#reservar">Reservar Visita</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
