import { useState } from "react";
import { motion } from "motion/react"; // Corregido el import incorrecto de "motion/react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Variants para la animación del menú desplegable
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-2 px-8  border border-gray-300/50 ${
        isOpen ? "bg-pink-100" : "backdrop-blur-md"
      } `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="">
        <span className="font-bold text-2xl text-pink-900">Simplescake</span>
      </div>
      {/* Menú para pantallas grandes (md:flex) */}
      <ul className="hidden lg:flex items-center gap-2 my-2">
        <li>
          <a href="" className="p-3 rounded-lg transition-all hover:text-pink-800 hover:bg-pink-800/3">
            Inicio
          </a>
        </li>
        <li>
          <a href="" className="p-3 rounded-lg transition-all hover:text-pink-800 hover:bg-pink-800/3">
            Productos
          </a>
        </li>
        <li>
          <a href="" className="p-3 rounded-lg transition-all hover:text-pink-800 hover:bg-pink-800/3">
            Sobre mi
          </a>
        </li>
        <li>
          <a href="" className="p-3 rounded-lg transition-all hover:text-pink-800 hover:bg-pink-800/3">
            Contacto
          </a>
        </li>
      </ul>

      {/* Botón de Hamburguesa para pantallas pequeñas */}
      <motion.div
        className="lg:hidden block text-3xl cursor-pointer relative"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }} // Animación al hacer clic
      >
        {/* Ícono de hamburguesa animado */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-pink-800"
          animate={isOpen ? "open" : "closed"}
        >
          {/* Línea superior */}
          <motion.line
            x1="3"
            y1="7"
            x2="21"
            y2="7"
            variants={{
              open: {
                rotate: 45,
                translateY: 2, // Movimiento hacia abajo
                originX: "50%",
                originY: "50%",
              },
              closed: {
                rotate: 0,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Línea media */}
          <motion.line
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Línea inferior */}
          <motion.line
            x1="3"
            y1="17"
            x2="21"
            y2="17"
            variants={{
              open: {
                rotate: -45,
                translateY: -5, // Movimiento hacia arriba
                // Movimiento hacia arriba
                originX: "50%",
                originY: "50%",
              },
              closed: {
                rotate: 0,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.svg>
      </motion.div>

      {/* Menú desplegable para pantallas pequeñas */}
      <motion.div
        className={` absolute top-13 left-0 w-full bg-pink-500/5 backdrop-blur-md flex flex-col items-center gap-6 text-lg ${
          !isOpen && "hidden" // Ocultar el menú si no está abierto
        }`}
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        <motion.li
          className="list-none w-full text-center p-4 hover:bg-pink-500/10 hover:text-pink-800 transition-all cursor-pointer"
          whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
          onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
        >
          <a href="" className="w-full h-full block">
            Inicio
          </a>
        </motion.li>
        <motion.li
          className="list-none w-full text-center p-4 hover:bg-pink-500/10 hover:text-pink-800 transition-all cursor-pointer"
          whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
          onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
        >
          <a href="" className="w-full h-full block">
            Productos
          </a>
        </motion.li>
        <motion.li
          className="list-none w-full text-center p-4 hover:bg-pink-500/10 hover:text-pink-800 transition-all cursor-pointer"
          whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
          onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
        >
          <a href="" className="w-full h-full block">
            Sobre mi
          </a>
        </motion.li>
        <motion.li
          className="list-none w-full text-center p-4 hover:bg-pink-500/10 hover:text-pink-800 transition-all cursor-pointer"
          whileHover={{ scale: 1.05 }} // Animación al pasar el mouse
          onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
        >
          <a href="" className="w-full h-full block">
            Contacto
          </a>
        </motion.li>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
