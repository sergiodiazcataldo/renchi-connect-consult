import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transformamos tu <span className="text-accent-foreground bg-accent/20 px-3 py-1 rounded-lg">Capital Humano</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Consultoría especializada en Recursos Humanos que potencia el crecimiento de tu empresa 
          a través de estrategias innovadoras y soluciones personalizadas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-accent hover:shadow-lg transition-all duration-300"
          >
            Conoce Nuestros Servicios
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            Solicitar Consulta Gratuita
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold">+5 años</div>
            <div className="text-lg opacity-90">de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">+100</div>
            <div className="text-lg opacity-90">empresas asesoradas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">98%</div>
            <div className="text-lg opacity-90">satisfacción cliente</div>
          </div>
        </div>
      </div>
    </section>
  );
};