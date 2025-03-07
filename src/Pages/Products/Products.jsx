import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";

export const allProducts = [
  {
    id: 1,
    name: "Tarta de Chocolate Supreme",
    description: "Tarta de chocolate belga 70% cacao con frutos rojos frescos",
    price: 28.99,
    image: "/tarta-chocolate.jpg",
    category: "Tartas",
    badges: ["Más Vendido", "Recomendado"],
    details: {
      ingredients: "Chocolate belga, frutos rojos, mantequilla, azúcar moreno",
      allergens: ["Lácteos", "Frutos secos"],
      weight: "1.2 kg",
      dimensions: "25cm diámetro",
      stock: 15,
      rating: 4.8,
    },
  },
  {
    id: 2,
    name: "Cupcakes de Vainilla Premium",
    description:
      "Pack de 4 cupcakes con frosting de vainilla y decoración artesanal",
    price: 12.5,
    image: "/cupcakes-vainilla.jpg",
    category: "Cupcakes",
    badges: [],
    details: {
      ingredients: "Harina premium, vainilla bourbon, crema de mantequilla",
      allergens: ["Lácteos", "Gluten"],
      weight: "0.5 kg",
      dimensions: "20cm x 15cm",
      stock: 20,
      rating: 4.5,
    },
  },
  {
    id: 3,
    name: "Brownies de Nuez Gourmet",
    description: "Brownies caseros con trozos de nuez y chocolate intenso",
    price: 15.99,
    image: "/brownies-nuez.jpg",
    category: "Brownies",
    badges: ["Nuevo"],
    details: {
      ingredients:
        "Chocolate negro 85%, nueces de California, mantequilla irlandesa",
      allergens: ["Frutos secos", "Lácteos"],
      weight: "0.8 kg",
      dimensions: "20cm x 15cm",
      stock: 12,
      rating: 4.7,
    },
  },
  {
    id: 4,
    name: "Galletas de Mantequilla Artesanales",
    description: "Pack de 8 galletas artesanales de mantequilla",
    price: 9.99,
    image: "/galletas-mantequilla.jpg",
    category: "Galletas",
    badges: ["Sin Gluten"],
    details: {
      ingredients:
        "Mantequilla de vacas felices, harina integral, azúcar orgánico",
      allergens: ["Gluten", "Lácteos"],
      weight: "0.3 kg",
      dimensions: "15cm x 10cm",
      stock: 30,
      rating: 4.6,
    },
  },
  {
    id: 5,
    name: "Tarta de Fresas Frescas",
    description:
      "Tarta ligera con crema pastelera y fresas frescas de temporada",
    price: 26.99,
    image: "/tarta-fresas.jpg",
    category: "Tartas",
    badges: ["Temporada"],
    details: {
      ingredients: "Fresas frescas, crema pastelera, masa quebrada",
      allergens: ["Lácteos", "Gluten"],
      weight: "1.0 kg",
      dimensions: "22cm diámetro",
      stock: 10,
      rating: 4.9,
    },
  },
  {
    id: 6,
    name: "Macarons Surtidos Franceses",
    description: "Pack de 6 macarons con diferentes sabores y colores",
    price: 14.5,
    image: "/macarons-surtidos.jpg",
    category: "Macarons",
    badges: ["Importado"],
    details: {
      ingredients: "Almendra molida, azúcar glass, claras de huevo",
      allergens: ["Frutos secos", "Huevo"],
      weight: "0.4 kg",
      dimensions: "18cm x 12cm",
      stock: 18,
      rating: 4.4,
    },
  },
  {
    id: 7,
    name: "Cheesecake de Limón Mediterráneo",
    description: "Cheesecake cremoso con un toque refrescante de limón",
    price: 24.99,
    image: "/cheesecake-limon.jpg",
    category: "Tartas",
    badges: ["Sin Azúcar"],
    details: {
      ingredients: "Queso crema, limones sicilianos, edulcorante natural",
      allergens: ["Lácteos"],
      weight: "1.1 kg",
      dimensions: "24cm diámetro",
      stock: 8,
      rating: 4.8,
    },
  },
  {
    id: 8,
    name: "Cookies con Chips de Chocolate",
    description: "Pack de 6 cookies con abundantes chips de chocolate",
    price: 11.99,
    image: "/cookies-chocolate.jpg",
    category: "Galletas",
    badges: ["Vegano"],
    details: {
      ingredients: "Harina de trigo, chocolate negro vegano, aceite de coco",
      allergens: ["Gluten"],
      weight: "0.6 kg",
      dimensions: "20cm x 15cm",
      stock: 25,
      rating: 4.3,
    },
  },
  {
    id: 9,
    name: "Tiramisú Casero Tradicional",
    description:
      "Auténtico tiramisú italiano con café y cacao de primera calidad",
    price: 22.5,
    image: "/tiramisu.jpg",
    category: "Postres",
    badges: ["Edición Limitada"],
    details: {
      ingredients: "Mascarpone italiano, café expreso, savoiardi",
      allergens: ["Lácteos", "Huevo"],
      weight: "0.9 kg",
      dimensions: "18cm x 18cm",
      stock: 5,
      rating: 4.7,
    },
  },
  {
    id: 10,
    name: "Donas Glaseadas Artesanales",
    description: "Pack de 4 donas con diferentes glaseados y toppings",
    price: 10.99,
    image: "/donas-glaseadas.jpg",
    category: "Donas",
    badges: ["Orgánico"],
    details: {
      ingredients: "Harina orgánica, glaseado real, toppings naturales",
      allergens: ["Gluten", "Lácteos"],
      weight: "0.4 kg",
      dimensions: "12cm x 12cm",
      stock: 22,
      rating: 4.2,
    },
  },
];

const Products = () => {
  const categories = [
    ...new Set(allProducts.map((product) => product.category)),
  ];
  return (
    <div className="mt-20 px-4 py-12 mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Nuestros Dulces
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Descubre nuestra selección de postres artesanales elaborados con
          ingredientes de primera calidad
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <Button variant="outline" className="rounded-full bg-transparent text-gray-400 border border-black/20 hover:bg-gray-100 active:bg-gray-300">
          Todos
        </Button>
        {categories.map((category) => (
          <Button key={category} variant="outline" className="rounded-full bg-transparent text-gray-400 border border-black/20 hover:bg-gray-100 active:bg-gray-300">
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
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
            <Card.Footer className={"gap-x-1"}>
              <Button>
                <Link to={`/products/${product.id}`}>Ver producto</Link>
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
