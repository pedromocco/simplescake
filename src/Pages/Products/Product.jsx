// pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { allProducts } from "./Products";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { WhatsappIcon } from "../../lib/icons";

const Product = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));

  // Número de WhatsApp (cámbialo por el tuyo)
  const businessPhone = "+584249167895";

  // Mensaje personalizado con el nombre del producto
  const whatsappMessage = encodeURIComponent(
    `¡Hola! Quiero encargar "${
      product?.name || "la delicia"
    }" que vi en su página.`
  );

  // URL de WhatsApp
  const whatsappUrl = `https://wa.me/${businessPhone}?text=${whatsappMessage}`;

  if (!product) return <div>Producto no encontrado</div>;

  console.log(product);

  return (
    <motion.div className="flex flex-col md:flex-row justify-center items-center mt-13 md:mt-27">
      <div className="mb-10">
        <img
          src={"/" + product.image}
          alt={product.name}
          className="object-cover rounded-lg max-w-full md:mx-10 md:size-120"
        />
      </div>
      <div>
        <div className="bg-pink-100 rounded-2xl">
          <div className="w-full p-7">
            <h1 className="text-3xl font-bold text-pink-500">{product.name}</h1>
            <p className="text-gray-600 my-4">{product.description}</p>
            <div className="text-2xl font-semibold">${product.price}</div>
          </div>

          <div className="p-7">
            <h3 className="text-xl font-bold">Detalles:</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <span className="font-bold text-pink-500">Ingredientes</span>:{" "}
                {product.details.ingredients}
              </li>
              <li>
                <span className="font-bold text-pink-500">Alérgenos</span>:{" "}
                {product.details.allergens.join(", ")}
              </li>
              <li>
                <span className="font-bold text-pink-500">Peso</span>:{" "}
                {product.details.weight}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-x-5 p-5">
          <Button className="px-4 py-2 rounded-lg hover:bg-green-400">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex gap-x-2">
              <WhatsappIcon />
              Encargar ahora
            </a>
          </Button>
          <Link to="/products">
            <Button className="bg-gray-700 hover:bg-gray-700/80 active:bg-gray-900">
              Volver
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
