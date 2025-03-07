import { useState } from "react";
import { motion } from "motion/react";

// Datos de ejemplo para los productos destacados
const featuredProducts = [
  {
    id: 1,
    name: "Tarta de Chocolate",
    description: "Deliciosa tarta con chocolate belga y frutos rojos",
    price: 28.99,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Más Vendido",
  },
  {
    id: 2,
    name: "Cupcakes de Vainilla",
    description:
      "Pack de 4 cupcakes con frosting de vainilla y decoración artesanal",
    price: 12.5,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Brownies de Nuez",
    description: "Brownies caseros con trozos de nuez y chocolate intenso",
    price: 15.99,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Nuevo",
  },
  {
    id: 4,
    name: "Galletas de Mantequilla",
    description: "Pack de 8 galletas artesanales de mantequilla",
    price: 9.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function FeaturedProducts() {
  const addToCart = (name) => {
    toast({
      description: `${name} añadido al carrito`,
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="shadow-lg flex flex-col justify-between p-4 border border-black/30 rounded-2xl mt-10"
          >
            <img src={product.image} alt="" className="h-50" />
            <span className="text-xl font-semibold">{product.name}</span>
            <span className="text-sm text-gray-500 py-3">
              {product.description}
            </span>
            <span className="font-semibold text-2xl">${product.price}</span>

            <div className="mt-5 rounded-2xl border border-pink-800/30 cursor-pointer text-center font-semibold py-2 bg-pink-300 text-pink-900 hover:bg-pink-400 hover:scale-105 active:scale-95 transition">
              <span>Añadir al carrito</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <div className="mt-5 rounded-2xl hover:border border-pink-800/30 cursor-pointer text-center font-semibold py-2 px-5 text-pink-900 hover:bg-pink-300 hover:scale-105 active:scale-95 transition">
          <span>Ver todos los productos</span>
        </div>
      </div>
    </>
  );
}
