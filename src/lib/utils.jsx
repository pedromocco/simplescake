import clsx from "clsx";
import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";

export const cn = (...args) => {
  return clsx(...args);
};

export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export const MenuItem = React.memo(({ to, children, onClick }) => (
  <motion.li
    className="list-none w-full text-center p-4 hover:bg-pink-500/10 hover:text-pink-800 transition-all cursor-pointer"
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    <Link to={to} className="w-full h-full block">
      {children}
    </Link>
  </motion.li>
));