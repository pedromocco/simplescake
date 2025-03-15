import React from "react";
import { User } from "../lib/icons";
import { motion } from "motion/react";

const ClientsComents = () => {
  const clientsComments = [
    {
      id: 1,
      img: "",
      name: "Jackie Chan",
      comment:
        "Chin chun chan chin chon chun chan chin chon chun chan chin chon",
    },
    {
      id: 2,
      img: "",
      name: "Chayanne",
      comment:
        "Pedí una selección de dulces para el cumpleaños de mi esposa y fue todo un éxito. Volveré a comprar.",
    },
    {
      id: 3,
      img: "",
      name: "Lele Pons",
      comment:
        "Los brownies son adictivos. La textura es perfecta y el sabor a chocolate es intenso pero no empalagoso.",
    },
    {
      id: 4,
      img: "",
      name: "Maria Corina Machado",
      comment:
        "Los mejores pasteles que he probado. El sabor es increíble y la presentación es hermosa.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {clientsComments.map((client) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ 
              delay: 0.2 * client.id, // Ajusta el 0.2 para controlar la velocidad del stagger
              duration: 0.5, // Duración de la animación
              type: "tween", // Para un efecto suave
            }}
            key={client.id}
            className="flex flex-col justify-around bg-gray-200 border border-black/20 rounded-2xl py-3  hover:scale-105 hover:shadow-xl transition"
          >
            <div className="flex justify-center">
              <div className="bg-pink-300 p-3 rounded-full">
                <User className={"stroke-pink-700 size-8"} />
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <span className="font-semibold">{client.name}</span>
              <span>⭐⭐⭐⭐⭐</span>
              <span className="px-10 mt-2 text-gray-600">
                "{client.comment}"
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ClientsComents;
