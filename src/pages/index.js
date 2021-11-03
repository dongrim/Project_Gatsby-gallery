import React from "react"
import { Helmet } from "react-helmet"
import { Layout } from "../components/Layout.js"
import { Article } from "../components/Article.js"

import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

function IndexPage() {
  return (
    <>
      <Helmet>
        <title>INHO</title>
      </Helmet>
      <Layout>
        <Article />
      </Layout>
    </>
  )
}

export default IndexPage

// export const pageQuery = graphql`
//   query {
//     indexImage: file(relativePath: { eq: "main1.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1800, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
