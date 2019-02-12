const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Hürkan Yakay - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Hürkan Yakay', // Alternative Site title for SEO
  siteUrl: 'https://hurkanyakay.com', // Domain of your site. No trailing slash!
  githubUrl: 'https://github.com/hurkanyakay/hurkanyakay.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/icons/icon-512x512.png', // Used for SEO and manifest
  siteDescription: 'Senior Developer - Creating and developing innovative software solutions for clients across a broad range of industries',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@hurkanyakay', // Twitter Username
  ogSiteName: 'Hürkan Yakay - Portfolio', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,

  email: 'me@hurkanyakay.com',
  accounts: {
    twitter: 'https://twitter.com/hurkanyakay',
    instagram: 'https://instagram.com/hurkan_',
    linkedin: 'https://tr.linkedin.com/in/hurkanyakay',
    facebook: 'https://www.facebook.com/hyakay',
    github: 'https://github.com/hurkanyakay',
  },

  about: {
    sub: `Creating and developing innovative software solutions for clients across a broad range of industries.`,
    desc: `
    I am a Full Stack Software Engineer with years of expertise in the designing, architecting, optimizing, deploying and configuring of frontend and backend technologies for the efficient operation of different mobile and web applications for clients. I have ample experience in the industry as Founder, Co-founder and lead engineer of different projects. I use a client-focused approach for the successful delivery of projects for clients.`,
  },
};
