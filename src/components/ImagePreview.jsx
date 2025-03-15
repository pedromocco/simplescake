import { motion } from "motion/react";

const ImagePreview = ({ image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="overflow-hidden rounded-lg shadow-lg transition"
    >
      <img
        src={image}
        alt="Preview"
        className="w-full h-64 object-cover"
      />
    </motion.div>
  );
};

export default ImagePreview;