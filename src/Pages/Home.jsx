import React from "react";
import FeaturedProducts from "../components/FeatureProducs";
import ClientsComents from "../components/ClientsComents";

const Home = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-34 bg-[url('/hero-bg.svg')] bg-cover mt-14 z-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Dulces hechos con amor
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Postres artesanales elaborados con ingredientes naturales y
                mucho cariño
              </p>
            </div>
            <div className="space-x-4">
              <div className="flex justify-center mt-8">
                <div className="mt-5 rounded-2xl border border-pink-800/30 cursor-pointer text-center font-semibold py-2 px-5 text-pink-900 bg-pink-300 hover:bg-pink-400 hover:scale-105 active:scale-95 transition">
                  <span>Ver productos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-12">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Nuestros Dulces Favoritos
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Descubre nuestros postres más populares, elaborados con recetas
                tradicionales
              </p>
            </div>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-100">
        <div className="px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-white py-15 border border-black/20 rounded-2xl">
              <div className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-pink-300 p-3">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Hechos con Amor</h3>
                <p className="text-muted-foreground">
                  Cada postre es elaborado con dedicación y los mejores
                  ingredientes
                </p>
              </div>
            </div>
            <div className="bg-white py-15 border border-black/20 rounded-2xl">
              <div className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-pink-300 p-3">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M12 2v2" />
                    <path d="M12 22v-2" />
                    <path d="m17 20.66-1-1.73" />
                    <path d="M11 10.27 7 3.34" />
                    <path d="m20.66 17-1.73-1" />
                    <path d="m3.34 7 1.73 1" />
                    <path d="M14 12h8" />
                    <path d="M2 12h2" />
                    <path d="m20.66 7-1.73 1" />
                    <path d="m3.34 17 1.73-1" />
                    <path d="m17 3.34-1 1.73" />
                    <path d="m7 20.66 1-1.73" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Ingredientes Frescos</h3>
                <p className="text-muted-foreground">
                  Utilizamos solo ingredientes naturales y de la mejor calidad
                </p>
              </div>
            </div>
            <div className="bg-white py-15 border border-black/20 rounded-2xl">
              <div className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-pink-300 p-3">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Recetas Tradicionales</h3>
                <p className="text-muted-foreground">
                  Sabores auténticos basados en recetas familiares
                </p>
              </div>
            </div>
            <div className="bg-white py-15 border border-black/20 rounded-2xl">
              <div className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-pink-300 p-3">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Entrega Segura</h3>
                <p className="text-muted-foreground">
                  Tus dulces llegan perfectos y a tiempo a tu puerta
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Opiniones de quienes ya han probado nuestros dulces
              </p>
            </div>
            <div>
              <ClientsComents />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
