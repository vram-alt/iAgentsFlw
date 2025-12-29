import { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  imageUrl?: string;
  keywords?: string[];
  siteName?: string;
  locale?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
}

export function seoGenerateMetadata({
  title,
  description,
  url,
  imageUrl,
  image,
  keywords,
  siteName = "AgentsFlow AI",
  locale = "en_US",
  imageWidth = 1200,
  imageHeight = 630,
  imageAlt,
}: SeoProps): Metadata {
  const siteUrl = getSiteUrl();
  let metaImageurl = "/og-image.png";
  
  if (imageUrl) {
    metaImageurl = imageUrl;
  } else if (image) {
    metaImageurl = image;
  }

  // Build images array for OpenGraph
  const images = [
    {
      url: metaImageurl,
      width: imageWidth,
      height: imageHeight,
      alt: imageAlt || title || siteName,
    },
  ];

  const metadata: Metadata = {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: {
      ...(url && { canonical: url }),
      languages: {
        "en-US": siteUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: url || siteUrl,
      siteName,
      images,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: metaImageurl,
    },
  };

  return metadata;
}

