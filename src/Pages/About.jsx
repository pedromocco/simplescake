import React from "react";

const About = () => {
  return (
    <div className="container px-4 py-12 mx-auto mt-18">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Sobre Nosotros
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Conoce la historia detrás de nuestros dulces caseros
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Dulces Caseros nació en 2015 en la cocina de María, una apasionada
              repostera que siempre soñó con compartir sus recetas familiares
              con el mundo. Lo que comenzó como un pequeño hobby preparando
              postres para amigos y familiares, pronto se convirtió en un
              negocio próspero gracias al boca a boca y a la calidad
              incomparable de sus creaciones.
            </p>
            <p>
              Con el tiempo, María fue perfeccionando sus recetas y ampliando su
              catálogo de dulces, siempre manteniendo la esencia artesanal y el
              amor por los ingredientes de calidad que caracterizan a Dulces
              Caseros.
            </p>
            <p>
              Hoy, nuestro pequeño equipo de reposteros apasionados continúa la
              tradición iniciada por María, elaborando cada postre con el mismo
              cuidado y dedicación que ella ponía en sus primeras creaciones.
            </p>
          </div>
        </div>
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=600&width=600"
            alt="Nuestra historia"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 md:order-1 relative aspect-square rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=600&width=600"
            alt="Nuestros valores"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              En Dulces Caseros creemos firmemente en la importancia de mantener
              vivas las tradiciones culinarias, adaptándolas a los gustos
              actuales pero sin perder su esencia.
            </p>
            <p>
              Nos comprometemos a utilizar siempre ingredientes de la más alta
              calidad, priorizando los productos locales y de temporada. No
              utilizamos conservantes ni aditivos artificiales en nuestras
              elaboraciones.
            </p>
            <p>
              Cada postre que sale de nuestra cocina es elaborado con amor y
              atención al detalle, como si fuera para nuestra propia familia.
              Creemos que esa dedicación es lo que hace que nuestros dulces sean
              especiales.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Si tienes alguna duda sobre nuestros
          productos, pedidos especiales o cualquier otra consulta, no dudes en
          contactarnos.
        </p>
        <a href="/contacto">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-2 rounded-md">
            Contáctanos
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
