// next-sitemap.config.js

const subdomain = process.env.NEXT_PUBLIC_SITE ?? "web3";

const baseUrl = {
  web3: "https://web3.ssh-tech.xyz",
  profile: "https://sahil.ssh-tech.xyz",
  robotics: "https://robotics.ssh-tech.xyz",
};

module.exports = {
  siteUrl: baseUrl[subdomain],
  generateRobotsTxt: true,
};
