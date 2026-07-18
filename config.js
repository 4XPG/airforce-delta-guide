const config = {
  gatsby: {
    pathPrefix: '/airforce-delta-guide',
    siteUrl: 'https://4xpg.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title: 'Airforce Delta Strategy Guide Wiki',
    githubUrl: 'https://github.com/4XPG/airforce-delta-guide',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction',
      '/aircraft',
      '/missions',
      '/secrets' // add trailing slash if enabled above
    ],
    collapsedNav: [],
    links: [],
    frontLine: false,
    ignoreIndex: false
  },
  siteMetadata: {
    title: 'Airforce Delta Strategy Guide Wiki',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: 'https://github.com/4XPG/airforce-delta-guide/tree/master/content',
    favicon: 'https://raw.githubusercontent.com/4XPG/airforce-delta-guide/master/src/components/images/favicon-32x32.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icon: 'src/components/images/favicon-32x32.png',
      icons: [
        {
          src: 'src/components/images/favicon-32x32.png',
          sizes: `32x32`,
          type: `image/png`,
        },
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
