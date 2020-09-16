/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */



// module.exports = {
//   /* Your site config here */
//   plugins: [
//     {
//       resolve: `gatsby-plugin-typography`,
//       options: {
//         pathToConfigModule: `src/utils/typography`,
//       },
//     },
//   ],
// }


module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`, // title data 관리용
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // name: `articles`,
        // path: `${__dirname}/src/articles`, // .md 모을 곳으로 수정함, 안 핻 될 거 같지만 ㅎㅎ
         name: `src`,
         path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`, // markdown 파일 변환
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
