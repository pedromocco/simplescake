import { useState, createContext } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ImageGrid from "../components/ImageGrid";
import ExpandedImage from "../components/ExpandedImage";
// Contexto para compartir datos entre componentes
export const GalleryContext = createContext();

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const location = useLocation();

  // Datos de ejemplo (reemplaza con tus URLs)
  const images = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/600?random=3",
    "https://picsum.photos/800/600?random=4",
    "https://picsum.photos/800/600?random=5",
    "https://picsum.photos/800/600?random=6",
    "https://picsum.photos/800/600?random=7",
    "https://picsum.photos/800/600?random=8",
    "https://picsum.photos/800/600?random=9",
    "https://picsum.photos/800/600?random=10",
  ];

  return (
    <GalleryContext.Provider
      value={{ images, selectedImageIndex, setSelectedImageIndex }}
    >
      <div className="container px-4 py-12 mx-auto mt-8 lg:mt-18">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl">
            Galería
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mb-12">
            Conoce la historia detrás de nuestros dulces caseros
          </p>

          <Routes location={location}>
            <Route index element={<ImageGrid />} />
            <Route path="image/:id" element={<ExpandedImage />} />
          </Routes>
        </div>
      </div>
    </GalleryContext.Provider>
  );
};

export default Gallery;
