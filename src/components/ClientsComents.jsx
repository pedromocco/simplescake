import React from "react";
import { User } from "../lib/icons";

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
          <div
            key={client.id}
            className="flex flex-col justify-around bg-gray-200 border border-black/20 rounded-2xl py-3"
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
          </div>
        ))}
      </div>
    </>
  );
};

export default ClientsComents;
