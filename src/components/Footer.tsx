import renchiLogo from "@/assets/renchi-logo.png";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={renchiLogo} alt="RRHH Renchi SPA" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">RRHH Renchi SPA</h3>
                <p className="text-sm text-white/80">Consultoría en Recursos Humanos</p>
              </div>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Potenciamos el desarrollo del capital humano en las organizaciones 
              mediante soluciones estratégicas y personalizadas que generen valor sostenible.
            </p>
            <div className="text-sm text-white/60">
              <p>RUT: XX.XXX.XXX-X</p>
              <p>Registro SII: XXXXXX</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#servicios" className="hover:text-white transition-colors">Reclutamiento y Selección</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Capacitación y Desarrollo</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Evaluación de Desempeño</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Consultoría en Políticas</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Cumplimiento Legal</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Clima Organizacional</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-white/80">
              <li>+56 2 XXXX XXXX</li>
              <li>contacto@rrhhrenchi.cl</li>
              <li className="text-sm">
                Av. Providencia 1234, Of. 567<br />
                Providencia, Santiago
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Síguenos</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 RRHH Renchi SPA. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};