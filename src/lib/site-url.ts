/**
 * Get the site URL from environment variable or fallback to default
 * This ensures consistent site URL usage across the application
 */
export const getSiteUrl = (): string => {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://AgentsFlow.com';
};

/**
 * Get the site URL without trailing slash
 */
export const getSiteUrlClean = (): string => {
  const url = getSiteUrl();
  return url.endsWith('/') ? url.slice(0, -1) : url;
};

