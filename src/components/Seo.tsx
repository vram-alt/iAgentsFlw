import { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  imageUrl?: string;
  keywords?: string[];
  tags?: string[];
  siteName?: string;
  locale?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
}

function normalizePageTitle(title?: string): string | undefined {
  if (!title) return title;

  const normalized = title
    .replace(/^\s*AgentsFlow AI\s*(?:[-|—]\s*)?/i, "")
    .replace(/\s*(?:[-|—]\s*)?AgentsFlow AI\s*$/i, "")
    .trim();

  return title;
}

function normalizeOpenGraphImageUrl(imageUrl: string, width: number, height: number): string {
  if (!imageUrl) return imageUrl;

  try {
    const url = new URL(imageUrl);

    if (url.hostname === "cdn.sanity.io" && url.pathname.startsWith("/images/")) {
      url.searchParams.set("w", String(width));
      url.searchParams.set("h", String(height));
      url.searchParams.set("fit", "crop");
      url.searchParams.set("auto", "format");
      return url.toString();
    }
  } catch {
    return imageUrl;
  }

  return imageUrl;
}

export function seoGenerateMetadata({
  title,
  description,
  url,
  imageUrl,
  image,
  keywords,
  tags,
  siteName = "AgentsFlow AI",
  locale = "en_US",
  imageWidth = 1200,
  imageHeight = 630,
  imageAlt,
}: SeoProps): Metadata {
  const siteUrl = getSiteUrl();
  let metaImageurl = "/og-image.png";
  const pageTitle = normalizePageTitle(title);
  
  if (imageUrl) {
    metaImageurl = normalizeOpenGraphImageUrl(imageUrl, imageWidth, imageHeight);
  } else if (image) {
    metaImageurl = normalizeOpenGraphImageUrl(image, imageWidth, imageHeight);
  }

  // Build images array for OpenGraph
  const images = [
    {
      url: metaImageurl,
      width: imageWidth,
      height: imageHeight,
      alt: imageAlt || pageTitle || siteName,
    },
  ];

  const metadata: Metadata = {
    title: pageTitle,
    description,
    //...(keywords && { keywords }),
    ...(tags && { keywords: tags }),
    alternates: {
      ...(url && { canonical: url }),
    },
    openGraph: {
      title: pageTitle,
      description,
      url: url || siteUrl,
      siteName,
      images,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: metaImageurl,
    },
  };

  return metadata;
}
