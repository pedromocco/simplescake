import Button from "../components/Button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container px-4 py-12 mx-auto mt-8 lg:mt-18">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl">
          Sobre Nosotros
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Conoce la historia detrás de nuestros dulces caseros
        </p>
      </div>

      <div className="grid justify-start md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Soy una repostera de corazón, con las manos siempre en la masa y
              el espíritu rebosante de azúcar. Mi aventura en este mundo comenzó
              en el 2020, cuando la magia de la repostería me cautivó por
              completo.
            </p>
            <p>
              Así nació mi pequeño emprendimiento, un sueño hecho realidad que
              creció a pasos agigantados en tan solo un año. Hoy en día, me
              siento inmensamente agradecida por la oportunidad de endulzar la
              vida de mis clientes con cada pastel, galleta y postre que sale de
              mi horno.
            </p>
            <p>
              Te invito a que te unas a mi dulce historia y descubras la magia
              que hay detrás de cada creación. ¡Ven a probar mis delicias y
              déjate conquistar por el sabor de la felicidad!
            </p>
          </div>
        </div>
        <div className="">
          <img
            src="martha-1.png"
            alt="Nuestra historia"
            fill
            className="rounded-full bg-gray-100 aspect-square object-cover object-top"
          />
        </div>
      </div>

      <div className="bg-pink-100 rounded-lg p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
        <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Si tienes alguna duda sobre nuestros
          productos, pedidos especiales o cualquier otra consulta, no dudes en
          contactarnos.
        </p>
        <div className="flex justify-center">
          <Link to="/contact">
            <Button className="">Contáctanos</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
