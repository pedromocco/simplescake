import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { MenuItem } from "../lib/utils";
import { MenuIcon } from "../lib/icons";

// Hook personalizado para el menú móvil
const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  return { isOpen, toggleMenu, closeMenu };
};


const Navbar = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-2 px-8 border border-gray-300/50 ${
        isOpen ? "bg-pink-100" : "bg-white"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <span className="font-extrabold font-lexend text-2xl text-pink-900">
        SIMPLESCAKE
      </span>

      {/* Menú desktop */}
      <nav className="hidden lg:flex items-center gap-2 my-2 px-2 py-1 font-semibold">
       
          <Link
            to={"/"}
            className="px-3 py-1 rounded-lg transition-all hover:text-pink-800 hover:bg-pink-800/3"
          >
            Inicio
          </Link>
          <Link
            to={"/products"}
            className="px-3 py-1 rounded-lg transition-all hover:text-pink-800 hover:bg-pink-800/3"
          >
            Productos
          </Link>
          <Link
            to={"/about"}
            className="px-3 py-1 rounded-lg transition-all hover:text-pink-800 hover:bg-pink-800/3"
          >
            Sobre mi
          </Link>
          <Link
            to={"/contact"}
            className="px-3 py-1 rounded-lg transition-all hover:text-pink-800 hover:bg-pink-800/3"
          >
            Contacto
          </Link>

      </nav>

      {/* Botón hamburguesa */}
      <motion.button
        className="lg:hidden text-3xl focus:outline-none"
        aria-label="Menú"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
      >
        <MenuIcon isOpen={isOpen} />
      </motion.button>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="absolute top-14 left-0 w-full bg-pink-500/5 backdrop-blur-md flex flex-col items-center gap-6 text-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MenuItem to="/" onClick={closeMenu}>
              Inicio
            </MenuItem>
            <MenuItem to="/products" onClick={closeMenu}>
              Productos
            </MenuItem>
            <MenuItem to="/about" onClick={closeMenu}>
              Sobre mi
            </MenuItem>
            <MenuItem to="/contact" onClick={closeMenu}>
              Contacto
            </MenuItem>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;