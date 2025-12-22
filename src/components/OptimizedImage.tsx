import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  placeholderSrc?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  objectFit = 'cover',
  placeholderSrc,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Check if image is from external URL or static asset
  const isExternalUrl = src.startsWith('http://') || src.startsWith('https://');
  const isSanityImage = src.includes('cdn.sanity.io');

  // Generate WebP and AVIF versions only for static assets (not external URLs)
  // For Sanity images, we'll let Sanity handle optimization
  const getOptimizedSources = (originalSrc: string) => {
    // Don't generate optimized versions for external URLs or Sanity images
    if (isExternalUrl || isSanityImage) {
      return null;
    }

    const ext = originalSrc.split('.').pop()?.toLowerCase();
    if (!ext || ['webp', 'avif', 'svg'].includes(ext)) {
      return null;
    }

    const baseSrc = originalSrc.substring(0, originalSrc.lastIndexOf('.'));
    return {
      avif: `${baseSrc}.avif`,
      webp: `${baseSrc}.webp`,
      original: originalSrc,
    };
  };

  const sources = getOptimizedSources(src);

  useEffect(() => {
    // Preload critical images
    if (priority && !isExternalUrl) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [src, priority, isExternalUrl]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    // Fallback to original if optimized version fails
    if (sources && imageSrc !== sources.original) {
      setImageSrc(sources.original);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  // Handle external URLs and Sanity images
  // Sanity images are configured in next.config.js and can be optimized
  if (isExternalUrl || isSanityImage) {
    // For external images, provide width/height if available
    if (width && height) {
      return (
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={{ objectFit }}
          priority={priority}
          unoptimized={!isSanityImage}
          onLoad={handleLoad}
          onError={handleError}
        />
      );
    } else {
      // If no dimensions provided, use fill with a container
      return (
        <div className={`relative ${className}`} style={{ width: '100%', height: '100%' }}>
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className={className}
            style={{ objectFit }}
            priority={priority}
            unoptimized={!isSanityImage}
            onLoad={handleLoad}
            onError={handleError}
          />
        </div>
      );
    }
  }

  // For local images, use Next.js Image with optimization
  if (width && height) {
    return (
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{ objectFit }}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        placeholder={placeholderSrc ? 'blur' : undefined}
        blurDataURL={placeholderSrc}
      />
    );
  } else {
    // If no dimensions provided, use fill with a container
    return (
      <div className={`relative ${className}`} style={{ width: '100%', height: '100%' }}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className={className}
          style={{ objectFit }}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          placeholder={placeholderSrc ? 'blur' : undefined}
          blurDataURL={placeholderSrc}
        />
      </div>
    );
  }
};

export default OptimizedImage;

