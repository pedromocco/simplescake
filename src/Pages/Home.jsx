import React from "react";
import FeaturedProducts from "../components/FeatureProducs";
import ClientsComents from "../components/ClientsComents";
import Button from "../components/Button";
import { Flame, Heart, Shield, Wheel } from "../lib/icons";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { fadeIn } from "../lib/variants";

const Home = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-34 bg-[url('/hero-bg.svg')] bg-cover mt-12 md:mt-18 z-50">
        <div className="px-4 md:px-6">
          <div className="flex flex-col justify-between items-center space-y-4 text-center">
            <div className="">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-6xl lg:text-6xl/none">
                Dulces hechos con amor
              </h1>
            </div>
            <div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Postres artesanales elaborados con ingredientes naturales y
                mucho cariño
              </p>
            </div>
            <div className="space-x-4">
              <div className="flex justify-center md:mt-8">
                <Button>
                  <Link to="/products">Ver productos</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-12">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="space-y-2"
            >
              <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
                Nuestros Dulces Favoritos
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Descubre nuestros postres más populares, elaborados con recetas
                tradicionales
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount:0.7 }}
          >
            <FeaturedProducts />
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-100">
        <motion.div variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount:0.5 }} className="px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-white py-15 border border-black/20 rounded-2xl hover:scale-105 hover:shadow-xl transition">
              <div className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-pink-300 p-3">
                  <Heart className="stroke-pink-700" />
                </div>
                <h3 className="text-xl font-bold">Hechos con Amor</h3>
                <p className="text-gray-500">
                  Cada postre es elaborado con dedicación y los mejores
                  ingredientes
                </p>
              </div>
            </div>
            <div className="bg-white py-15 border border-black/20 rounded-2xl hover:scale-105 hover:shadow-xl transition">
              <div className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-pink-300 p-3">
                  <Wheel className="stroke-pink-700" />
                </div>
                <h3 className="text-xl font-bold">Ingredientes Frescos</h3>
                <p className="text-gray-500">
                  Utilizamos solo ingredientes naturales y de la mejor calidad
                </p>
              </div>
            </div>
            <div className="bg-white py-15 border border-black/20 rounded-2xl hover:scale-105 hover:shadow-xl transition">
              <div className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-pink-300 p-3">
                  <Flame className="stroke-pink-700" />
                </div>
                <h3 className="text-xl font-bold">Recetas Tradicionales</h3>
                <p className="text-gray-500">
                  Sabores auténticos basados en recetas familiares
                </p>
              </div>
            </div>
            <div className="bg-white py-15 border border-black/20 rounded-2xl hover:scale-105 hover:shadow-xl transition">
              <div className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-pink-300 p-3">
                  <Shield className="stroke-pink-700" />
                </div>
                <h3 className="text-xl font-bold">Entrega Segura</h3>
                <p className="text-gray-500">
                  Tus dulces llegan perfectos y a tiempo a tu puerta
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-12 text-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl ">
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
