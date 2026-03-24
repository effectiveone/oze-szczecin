module.exports = {
  siteMetadata: {
    title: 'OZE Szczecin',
    description: 'Wiedza o odnawialnych źródłach energii w Szczecinie i Zachodniopomorskiem',
    siteUrl: 'https://oze-szczecin.netlify.app',
    author: 'Redakcja OZE Szczecin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { resolve: 'gatsby-source-filesystem', options: { name: 'blog', path: `${__dirname}/content/blog` } },
    { resolve: 'gatsby-transformer-remark', options: { plugins: [] } },
  ],
};
