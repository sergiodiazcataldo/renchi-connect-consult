import { Button } from "@/components/ui/button";
import renchiLogo from "@/assets/renchi-logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={renchiLogo} alt="RRHH Renchi SPA" className="h-10 w-10" />
          <div>
            <h1 className="text-xl font-bold text-primary">RRHH Renchi SPA</h1>
            <p className="text-xs text-muted-foreground">Consultoría en Recursos Humanos</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
          <Button variant="default" size="sm">
            Solicitar Consulta
          </Button>
        </nav>

        <Button variant="outline" size="sm" className="md:hidden">
          Menú
        </Button>
      </div>
    </header>
  );
};