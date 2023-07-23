const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("../tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Hürkan Yakay - Portfolio", // Navigation and Site Title
  siteTitleAlt: "Hürkan Yakay", // Alternative Site title for SEO
  siteUrl: "https://hurkanyakay.com", // Domain of your site. No trailing slash!
  githubUrl: "https://github.com/hurkanyakay/hurkanyakay.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/icons/icon-512x512.png", // Used for SEO and manifest
  siteLogo2: "/images/avatar2.jpg", // Used for SEO and manifest
  siteDescription:
    "Senior Developer - Creating and developing innovative software solutions for clients across a broad range of industries",

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@hurkanyakay", // Twitter Username
  ogSiteName: "Hürkan Yakay - Portfolio", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  role: "Senior Developer",
  // Manifest and Progress color
  themeColor: theme.colors.orange,
  backgroundColor: theme.colors.blue,

  email: "me@hurkanyakay.com",
  phone: "+905333666498",
  accounts: {
    twitter: "https://twitter.com/hurkanyakay",
    instagram: "https://instagram.com/hurkanyky",
    linkedin: "https://tr.linkedin.com/in/hurkanyakay",
    facebook: "https://www.facebook.com/hyakay",
    github: "https://github.com/hurkanyakay",
    fbiconlink:
      "https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook-s.png",
    twiconlink:
      "https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-twitter-s.png",
    lniconlink:
      "https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-linkedin-s.png",
    insiconlink:
      "https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-instagram-s.png",
    ghiconlink:
      "https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-github-s.png",
  },

  about: {
    sub: `Creating and developing innovative software solutions for clients across a broad range of industries.`,
    desc: `I am a Full Stack Software Engineer with #+ years of expertise in the designing, architecting, optimizing, deploying and configuring of frontend and backend technologies for the efficient operation of different mobile and web applications for clients. I have ample experience in the industry as Founder, Co-founder and lead engineer of different projects. I use a client-focused approach for the successful delivery of projects for clients.`,
  },
};
