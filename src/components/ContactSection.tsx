import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle
} from "lucide-react";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar envío de formulario con Supabase
    alert("Formulario enviado. Implementación con Supabase próximamente.");
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para transformar tu área de recursos humanos? Estamos aquí para ayudarte. 
            Contacta con nuestros especialistas y da el primer paso hacia el éxito.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                Envíanos un Mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <Input placeholder="Tu nombre completo" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input placeholder="Nombre de tu empresa" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="tu@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input placeholder="+56 9 XXXX XXXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Servicio de Interés
                  </label>
                  <select className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md text-sm">
                    <option value="">Selecciona un servicio</option>
                    <option value="reclutamiento">Reclutamiento y Selección</option>
                    <option value="capacitacion">Capacitación y Desarrollo</option>
                    <option value="evaluacion">Evaluación de Desempeño</option>
                    <option value="politicas">Consultoría en Políticas RRHH</option>
                    <option value="legal">Cumplimiento Legal Laboral</option>
                    <option value="clima">Clima Organizacional</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea 
                    placeholder="Cuéntanos sobre tu proyecto o necesidad específica..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Teléfono</h3>
                    <p className="text-muted-foreground mb-2">+56 2 XXXX XXXX</p>
                    <p className="text-muted-foreground">+56 9 XXXX XXXX (WhatsApp)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">contacto@rrhhrenchi.cl</p>
                    <p className="text-muted-foreground">info@rrhhrenchi.cl</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Dirección</h3>
                    <p className="text-muted-foreground mb-2">Av. Providencia 1234, Oficina 567</p>
                    <p className="text-muted-foreground">Providencia, Santiago, Chile</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Horarios</h3>
                    <p className="text-muted-foreground mb-2">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Sábados: 9:00 - 13:00 (previa cita)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA for immediate contact */}
            <div className="bg-primary rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-4">¿Necesitas ayuda inmediata?</h3>
              <p className="mb-6 opacity-90">
                Contáctanos por WhatsApp para una respuesta rápida
              </p>
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-accent"
              >
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};