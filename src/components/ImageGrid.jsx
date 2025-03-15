import { useContext } from "react";
import { Link } from "react-router-dom";
import { GalleryContext } from "../Pages/Gallery";
import ImagePreview from "./ImagePreview"

const ImageGrid = () => {
  const { images } = useContext(GalleryContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Link
          key={index}
          to={`/gallery/image/${index}`}
          className="cursor-pointer"
        >
          <ImagePreview image={image} />
        </Link>
      ))}
    </div>
  );
};

export default ImageGrid;