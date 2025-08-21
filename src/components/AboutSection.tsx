import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart,
  CheckCircle
} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre RRHH Renchi SPA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos una consultoría especializada en recursos humanos comprometida con el 
            desarrollo del capital humano como motor de crecimiento empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Nuestra Historia y Experiencia
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Con más de 5 años de experiencia en el mercado chileno, RRHH Renchi SPA 
              nace de la necesidad de brindar soluciones integrales y personalizadas 
              en gestión de recursos humanos para empresas de todos los tamaños.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestro equipo multidisciplinario combina experiencia práctica con 
              metodologías innovadoras, garantizando resultados medibles y sostenibles 
              en el tiempo.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">Metodología probada</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">Enfoque personalizado</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">Resultados medibles</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">Acompañamiento continuo</span>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary-hover">
              Conoce Nuestro Equipo
            </Button>
          </div>
          
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-r from-white to-accent/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Misión</h4>
                    <p className="text-muted-foreground">
                      Potenciar el desarrollo del capital humano en las organizaciones 
                      mediante soluciones estratégicas y personalizadas que generen 
                      valor sostenible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-r from-white to-accent/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Visión</h4>
                    <p className="text-muted-foreground">
                      Ser la consultoría de recursos humanos líder en Chile, 
                      reconocida por nuestra excelencia, innovación y compromiso 
                      con el éxito de nuestros clientes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-r from-white to-accent/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Valores</h4>
                    <p className="text-muted-foreground">
                      Integridad, excelencia, innovación, compromiso y respeto 
                      por las personas son los pilares que guían cada una de 
                      nuestras acciones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team stats */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Nuestro Equipo en Números
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">8+</div>
              <div className="text-lg opacity-90">Profesionales</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Certificaciones</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Sectores atendidos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Proyectos completados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};