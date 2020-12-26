const siteMetadata = {
  siteUrl: "https://youtube.buzzing.cc",
  author: `Youtube`,
  locale: "zh",
  title: "Youtuber热门",
  shortTitle: "Youtube热门",
  description: "用中文浏览 Youtube 上的全球热门视频",
  keywords: ["buzzing", "Youtube", "视频", "国外流行", "热门视频"],
  menuLinks: [
    // {
    //   name: "每周精选",
    //   url: "/issues",
    // },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `Youtube`,
      url: `https://www.youtube.com/`,
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Youtube`,
      shortTitle: "BuzzYoutube",
      description: `See what's buzzing on Youtube in your native language`,
      keywords: ["buzzing", "Youtube", "Youtube Top", "Youtube Hot"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/issues",
        // },
        {
          name: "RSS",
          url: "/en/rss.xml",
          prefetch: false,
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "Youtuber熱門",
      shortTitle: "Youtube熱門",
      description: "用中文瀏覽 Youtube 上的全球熱門視頻",
      keywords: ["buzzing", "Youtube", "視頻", "國外流行", "熱門視頻"],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/issues",
        // },
        {
          name: "RSS",
          url: "/zh-Hant/rss.xml",
          prefetch: false,
        },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
};
