import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger, SheetClose } from '@/components/ui/sheet'; // Added SheetDescription
import { Menu, Wine, BookOpen, Factory, MapPin, Grape } from 'lucide-react';
import * as React from 'react';

const navLinks = [
  { href: '/', label: 'Inicio', icon: null },
  { href: '/explorar-vinos', label: 'Explorar Vinos', icon: Grape },
  { href: '/nuestra-historia', label: 'Nuestra Historia', icon: BookOpen },
  { href: '/proceso-elaboracion', label: 'Elaboración', icon: Factory },
  { href: '/visitanos', label: 'Visítanos', icon: MapPin },
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
          <span className="font-bold text-xl font-playfair-display">Tres Mujeres</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center"
            >
              {link.icon && React.createElement(link.icon, { className: "mr-2 h-4 w-4" })}
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
              <SheetHeader>
                <SheetTitle className="sr-only">Menú Principal</SheetTitle>
                <SheetDescription className="sr-only">Navegación principal del sitio Tres Mujeres.</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-6 mt-4"> {/* Added mt-4 to space content from invisible header */}
                <SheetClose asChild>
                  <Link href="/" className="flex items-center space-x-2 text-primary mb-4">
                    <Wine className="h-7 w-7" />
                    <span className="font-bold text-xl font-playfair-display">Tres Mujeres</span>
                  </Link>
                </SheetClose>
                {navLinks.map((link) => (
                  <SheetClose asChild key={`mobile-${link.label}`}>
                    <Link
                      href={link.href}
                      className="flex items-center py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.icon && React.createElement(link.icon, { className: "mr-2 h-5 w-5" })}
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
