import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { GalleryContext } from "../Pages/Gallery";

const ExpandedImage = () => {
  const { images, selectedImageIndex, setSelectedImageIndex } =
    useContext(GalleryContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const index = parseInt(id);

  useEffect(() => {
    setSelectedImageIndex(index);
  }, [id]);

  const handleNext = () => {
    const nextIndex = (selectedImageIndex + 1) % images.length;
    navigate(`/gallery/image/${nextIndex}`);
  };

  const handlePrevious = () => {
    const prevIndex =
      (selectedImageIndex - 1 + images.length) % images.length;
    navigate(`/gallery/image/${prevIndex}`);
  };

  const handleClose = () => {
    navigate("/gallery");
  };

  return (
    <AnimatePresence>
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      >
        <button
          className="absolute top-4 right-4 text-white text-3xl z-50"
          onClick={handleClose}
        >
          &times;
        </button>

        <div className="relative max-w-4xl mx-auto">
          <motion.img
            src={images[selectedImageIndex]}
            alt={`Imagen ${selectedImageIndex}`}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-h-[90vh] rounded-lg shadow-2xl"
          />

          <button
            className="absolute -left-15 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full"
            onClick={handlePrevious}
          >
            ←
          </button>

          <button
            className="absolute -right-15 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full"
            onClick={handleNext}
          >
            →
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExpandedImage;