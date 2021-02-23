module.exports = {
  siteMetadata: {
    title: 'Sean Murphy Portfolio',
  },
  plugins: [
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
  ],
};
