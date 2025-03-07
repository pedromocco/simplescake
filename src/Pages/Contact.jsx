import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Textarea from "../components/Textarea";

const Contact = () => {
  return (
    <div className="px-4 py-15 mx-auto mt-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Contacto
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Estamos aquí para ayudarte. Ponte en contacto con nosotros para
          cualquier consulta.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <Card>
          <Card.Header className={""}>
            <span className="text-2xl font-semibold">Envíanos un mensaje</span>
            <p className="my-5 text-gray-500">Completa el formulario y te responderemos lo antes posible.</p>
          </Card.Header>
          <Card.Body>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Nombre</Label>
                  <Input id="first-name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Apellido</Label>
                  <Input id="last-name" placeholder="Tu apellido" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar mensaje
              </Button>
            </form>
          </Card.Body>
        </Card>

        <div className="space-y-6">
          <Card>
            <Card.Header>
              <span className="text-2xl font-semibold">Información de contacto</span>
              <p className="mt-2 text-gray-500">Diferentes formas de ponerte en contacto con nosotros.</p>
            </Card.Header>
            <Card.Body className="space-y-3">
              <div className="flex items-start space-x-4">
                {/* <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Dirección</h3>
                      <p className="text-sm text-muted-foreground">
                        Calle Dulce 123
                        <br />
                        28001 Madrid, España
                      </p>
                    </div> */}
              </div>
              <div className="flex items-start space-x-4">
                {/* <Phone className="h-5 w-5 text-primary mt-0.5" /> */}
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-sm text-muted-foreground">
                    (+58) 414-185-7541
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                {/* <Mail className="h-5 w-5 text-primary mt-0.5" /> */}
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    example@simplescake.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                {/* <Clock className="h-5 w-5 text-primary mt-0.5" /> */}
                <div>
                  <h3 className="font-medium">Horario</h3>
                  <p className="text-sm text-muted-foreground space">
                    Lunes a Viernes: 9:00 - 20:00
                    <br />
                    Sábados: 10:00 - 14:00
                    <br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <span className="text-2xl font-semibold">Pedidos especiales</span>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-gray-500 text-muted-foreground mb-4">
                ¿Necesitas un postre personalizado para una ocasión especial?
                Podemos crear dulces a medida para cumpleaños, bodas, eventos
                corporativos y más.
              </p>
              <Button variant="outline" className="w-full bg-transparent text-gray-400 border border-black/20 hover:bg-gray-100 active:bg-gray-300">
                Solicitar presupuesto
              </Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className={"text-center "}>
              <span className="text-2xl font-semibold">Síguenos</span>
            </Card.Header>
            <Card.Body>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
