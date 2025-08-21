import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  UserCheck, 
  GraduationCap, 
  TrendingUp, 
  FileText, 
  Shield,
  Clock,
  Award
} from "lucide-react";
import servicesImage from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Users,
    title: "Reclutamiento y Selección",
    description: "Proceso integral de búsqueda, evaluación y selección del talento ideal para tu empresa.",
    price: "Desde $150.000",
    features: ["Análisis de perfil", "Entrevistas especializadas", "Evaluaciones psicotécnicas", "Referencias laborales"]
  },
  {
    icon: GraduationCap,
    title: "Capacitación y Desarrollo",
    description: "Programas de formación personalizados para potenciar las competencias de tu equipo.",
    price: "Desde $200.000",
    features: ["Diagnóstico de necesidades", "Diseño de programa", "Ejecución de talleres", "Evaluación de resultados"]
  },
  {
    icon: TrendingUp,
    title: "Evaluación de Desempeño",
    description: "Sistemas de evaluación objetivos que impulsan el crecimiento profesional.",
    price: "Desde $120.000",
    features: ["Diseño de indicadores", "360° feedback", "Planes de mejora", "Seguimiento trimestral"]
  },
  {
    icon: FileText,
    title: "Consultoría en Políticas RRHH",
    description: "Desarrollo e implementación de políticas y procedimientos de recursos humanos.",
    price: "Desde $250.000",
    features: ["Auditoría actual", "Diseño de políticas", "Manual de procedimientos", "Implementación"]
  },
  {
    icon: Shield,
    title: "Cumplimiento Legal Laboral",
    description: "Asesoría especializada en normativa laboral y prevención de riesgos legales.",
    price: "Desde $180.000",
    features: ["Revisión contratos", "Compliance laboral", "Gestión de finiquitos", "Asesoría legal"]
  },
  {
    icon: Award,
    title: "Clima Organizacional",
    description: "Medición y mejora del ambiente laboral para aumentar la productividad.",
    price: "Desde $300.000",
    features: ["Encuesta de clima", "Análisis de resultados", "Plan de acción", "Seguimiento continuo"]
  }
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 relative">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${servicesImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en recursos humanos adaptadas a las necesidades 
            específicas de tu empresa, con metodologías probadas y resultados medibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-accent/20">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Solicitar Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Clock className="h-8 w-8 mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold">¿Necesitas una consulta personalizada?</h3>
          </div>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agenda una consulta gratuita de 30 minutos con nuestros especialistas y descubre 
            cómo podemos impulsar tu área de recursos humanos.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-accent"
          >
            Agendar Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};