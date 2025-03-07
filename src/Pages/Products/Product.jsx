// pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { allProducts } from "./Products";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="mt-30 py-5 px-15">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-4">
        
        {/* Imagen */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-96 object-cover rounded-lg"
        />
        
        {/* Detalles */}
        <div className="space-y-4">
        <Link to="/products">Volver</Link>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-2xl font-semibold">${product.price}</div>
          
          {/* Información adicional */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Detalles:</h3>
            <ul className="list-disc list-inside">
              <li>Ingredientes: {product.details.ingredients}</li>
              <li>Alérgenos: {product.details.allergens.join(", ")}</li>
              <li>Peso: {product.details.weight}</li>
            </ul>
          </div>
          
          {/* Botones de acción */}
          <div className="flex space-x-4">
            <Button className="px-4 py-2 rounded-lg">
              Añadir al carrito
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-500/80 active:bg-blue-600 px-4 py-2 rounded-lg">
              Contactar ahora
            </Button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Product;