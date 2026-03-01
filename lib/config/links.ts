// Single source of truth for all official VANTH links
// Used by: Navbar, Footer, Social Links page, About page

export const SOCIAL_LINKS = {
  x: {
    label: "X (Twitter)",
    url: "https://x.com/joinvanth",
    handle: "@joinvanth",
  },
  discord: {
    label: "Discord",
    url: "https://discord.gg/vanth",
    description: "Join our community",
  },
  gitbook: {
    meetVanth: {
      label: "VANTH",
      url: "https://vanth.gitbook.io/vanth",
    },
  },
  magicEden: {
    label: "Magic Eden",
    url: null, // add when collection is live
    comingSoon: true,
  },
} as const;

export const SITE_CONFIG = {
  name: "VANTH",
  tagline: "Vanth is a web3 focused project inspired by the best with an innovative and dynamic style.",
  chain: "Solana",
  mintVenue: "Magic Eden",
  supply: null, // TBA
  mintDate: null, // TBA
  stakingToken: "VNTH",
  scamWarning: {
    title: "Stay Safe — Official Links Only",
    body: "We will never DM you first. Always verify links through this website. Minting will happen on Magic Eden only.",
  },
} as const;
