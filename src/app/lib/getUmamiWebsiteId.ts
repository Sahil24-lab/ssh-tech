// src/lib/getUmamiWebsiteId.ts

export function getUmamiWebsiteId(subdomain: string): string | undefined {
  switch (subdomain) {
    case "sahil":
      return process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID_SAHIL;
    case "embedded":
      return process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID_EMBEDDED;
    case "ai":
      return process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID_AI;
    case "web3":
      return process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID_WEB3;
    default:
      return process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID_DEFAULT;
  }
}
