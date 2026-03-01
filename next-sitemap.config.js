// next-sitemap.config.js

const { createClient } = require("contentful");

const subdomain = process.env.NEXT_PUBLIC_SITE ?? "web3";

const baseUrl = {
  web3: "https://web3.ssh-tech.xyz",
  sahil: "https://sahil.ssh-tech.xyz",
  profile: "https://sahil.ssh-tech.xyz",
  ai: "https://ai.ssh-tech.xyz",
  embedded: "https://embedded.ssh-tech.xyz",
};

const contentfulClient =
  process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
    ? createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
      })
    : null;

async function getProofOfWorkSlugs() {
  if (!contentfulClient) return [];
  const response = await contentfulClient.getEntries({
    content_type: "proofOfWork",
    select: ["fields.slug"],
  });

  return response.items
    .map((item) => {
      const { slug } = item.fields || {};
      return typeof slug === "string" ? slug : null;
    })
    .filter((slug) => Boolean(slug));
}

module.exports = {
  siteUrl: baseUrl[subdomain] ?? baseUrl.web3,
  generateRobotsTxt: true,
  additionalPaths: async () => {
    const slugs = await getProofOfWorkSlugs();
    return slugs.map((slug) => ({
      loc: `/proof-of-work/${slug}`,
      lastmod: new Date().toISOString(),
    }));
  },
  transformRobotsTxt: async (_config, robotsTxt) =>
    `${robotsTxt}\nContent-Signal: search=yes\nContent-Signal: ai-input=no\nContent-Signal: ai-train=no\n`,
};
