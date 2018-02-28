module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    desc: "Mackenzie's new blog!"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "bbokvuhycv25",
        accessToken:
          "0d3945893e51c676933c079c7c0ee39c5178098bef5f72b2dfa6b760e6090c0d"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/static/assets`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark"
  ]
};

  // pathPrefix: "/gatsby-demo",