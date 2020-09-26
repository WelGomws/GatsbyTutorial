module.exports = {
  siteMetadata: {
    title: `Surpresinha`,
    description: `Site criado a partir de um projeto de estudo, créditos no repositório do GitHub.`,
    author: `@WelGomws`,
    copyright: `© Copyright - Todos os direitos reservados`,
    siteUrl: `https://www.example.com`,
    socialMedia: {
      github: "https://github.com/WelGomws",
      instaMeu: "https://www.instagram.com/weelgomws",
      instaDela: "https://www.instagram.com/marocha_cp",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `GSD`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
