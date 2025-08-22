import { useState, type CSSProperties } from "react";
import clsx from "clsx";

interface ImageLoaderProps {
  src: string;
  style?: CSSProperties;
  className?: string;
  alt?: string;

  
}

const ImageLoader = ({ src, style, className, alt }: ImageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const defaultPlaceholder = "https://shrturl.app/CiGbRo";

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative size-full flex items-center justify-center">
      {isLoading && (
        <div
          className={clsx(
            "absolute inset-0 animate-pulse bg-gray-200",
            className
          )}
          style={style}
        />
      )}
      <img
        src={!src?.includes("undefined") ? src : defaultPlaceholder}
        onLoad={handleLoad}
        className={clsx(
          className,
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        loading="lazy"
        style={style}
        alt={alt}
      />
    </div>
  );
};

export default ImageLoader;
