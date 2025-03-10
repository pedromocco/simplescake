import { useState } from "react";
import { motion } from "motion/react";
import Button from "./Button";
import Card from "./Card";

// Datos de ejemplo para los productos destacados
const featuredProducts = [
  {
    id: 1,
    name: "Tarta de Chocolate",
    description: "Deliciosa tarta con chocolate belga y frutos rojos",
    price: 28.99,
    image: "product.jpg",
    badge: "Más Vendido",
  },
  {
    id: 2,
    name: "Cupcakes de Vainilla",
    description:
      "Pack de 4 cupcakes con frosting de vainilla y decoración artesanal",
    price: 12.5,
    image: "product-2.jpg",
  },
  {
    id: 3,
    name: "Brownies de Nuez",
    description: "Brownies caseros con trozos de nuez y chocolate intenso",
    price: 15.99,
    image: "product-3.jpg",
    badge: "Nuevo",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="mt-10">
            <Card.Header>
              <Card.Image src={product.image} alt={product.name} />
            </Card.Header>
            <Card.Body>
              <span className="text-2xl font-semibold">{product.name}</span>
              <div className="text-sm text-gray-500 py-3">
                {product.description}
              </div>
              <div className="font-semibold text-2xl">${product.price}</div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
