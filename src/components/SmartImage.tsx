'use client'

import React, { useState } from 'react';
import Image from 'next/image';

interface SmartImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  priority?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  sizes?: string;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
}

// Generate a simple blur placeholder data URL
const generateBlurDataURL = (width: number = 400, height: number = 300): string => {
  // Use a simple base64 encoded SVG for blur placeholder
  // This creates a dark blur effect matching the site's dark theme
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><defs><filter id="blur"><feGaussianBlur stdDeviation="20"/></filter></defs><rect width="100%" height="100%" fill="#0A0F1A" filter="url(#blur)"/></svg>`;
  // URL encode the SVG for data URL
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  objectFit = 'cover',
  sizes,
  quality = 85,
  onLoad,
  onError,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if image is external (starts with http:// or https://)
  const isExternal = src.startsWith('http://') || src.startsWith('https://');
  
  // Check if it's an SVG (Next.js Image doesn't optimize SVGs)
  const isSvg = src.toLowerCase().endsWith('.svg');

  // Convert width/height to numbers for Next.js Image
  const numWidth = typeof width === 'number' ? width : typeof width === 'string' ? parseInt(width) || undefined : undefined;
  const numHeight = typeof height === 'number' ? height : typeof height === 'string' ? parseInt(height) || undefined : undefined;

  // Generate blur placeholder
  const blurDataURL = generateBlurDataURL(numWidth || 400, numHeight || 300);

  // Handle load event
  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  // Handle error event
  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  // For SVG files, use regular img tag (Next.js Image doesn't optimize SVGs)
  if (isSvg) {
    /* eslint-disable @next/next/no-img-element */
    return (
      <img
        src={src}
        alt={alt}
        width={numWidth}
        height={numHeight}
        className={className}
        style={{
          objectFit,
          width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
          height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
        }}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
      />
    );
    /* eslint-enable @next/next/no-img-element */
  }

  // For external images, we need to configure next.config.js to allow the domain
  // For now, we'll use a regular img tag with optimization hints
  if (isExternal) {
    /* eslint-disable @next/next/no-img-element */
    return (
      <img
        src={src}
        alt={alt}
        width={numWidth}
        height={numHeight}
        className={`${className} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{
          objectFit,
          width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
          height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
        }}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
      />
    );
    /* eslint-enable @next/next/no-img-element */
  }

  // Error fallback UI
  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-[#0F172A] text-gray-400 ${className}`}
        style={{
          width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
          height: height ? (typeof height === 'number' ? `${height}px` : height) : 'auto',
          objectFit,
        }}
      >
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  // Use Next.js Image for local images (optimal performance)
  return (
    <div
      className={`relative ${className}`}
      style={{
        width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
        height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={numWidth || 800}
        height={numHeight || 600}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{
          objectFit,
          width: '100%',
          height: '100%',
        }}
        priority={priority}
        quality={quality}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        placeholder="blur"
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        onError={handleError}
        // Enable modern image formats (AVIF, WebP)
        unoptimized={false}
      />
      {isLoading && (
        <div
          className="absolute inset-0 bg-[#0F172A] animate-pulse"
          style={{
            backgroundImage: `url("${blurDataURL}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
    </div>
  );
};

export default SmartImage;