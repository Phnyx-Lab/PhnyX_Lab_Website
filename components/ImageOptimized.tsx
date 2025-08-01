import { useState } from 'react';
import { getOptimizedImageUrl } from '../utils/seo';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  width: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export function ImageOptimized({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "100vw",
  // quality = 85
}: ImageOptimizedProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generate optimized URLs for different screen sizes
  const generateSrcSet = () => {
    const sizes = [480, 768, 1024, 1280, 1920];
    return sizes
      .filter(size => size <= width * 2) // Don't upscale beyond 2x
      .map(size => {
        const optimizedUrl = getOptimizedImageUrl(src, size, height ? Math.round((height * size) / width) : undefined, 'webp');
        return `${optimizedUrl} ${size}w`;
      })
      .join(', ');
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <img
      src={getOptimizedImageUrl(src, width, height, 'webp')}
      srcSet={generateSrcSet()}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}