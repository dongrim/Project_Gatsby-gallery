// import React from "react"
// import { useStaticQuery, StaticQuery, graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

// #1
/* export const PostImg = () => (
  <StaticQuery
    query={graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
        <>
          <h1>{data.site.siteMetadata.title}</h1>
          <div>123123</div>
        </>
      )
    }}
  />
) */

// #2
/* export function PostImg() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              image_url {
                childImageSharp {
                  gatsbyImageData(
                    width: 1155
                    placeholder: BLURRED
                    blurredOptions: { width: 100 }
                    transformOptions: { cropFocus: CENTER }
                    aspectRatio: 1.7
                  )
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <h1>Iterator below</h1>
      {data.allMarkdownRemark.edges.map(image => {
        return (
          <div key={image.node.id}>
            <GatsbyImage
              image={getImage(image.node.frontmatter.image_url)}
              alt={image.node.frontmatter.title}
            />
            <h1>{image.node.frontmatter.title}</h1>
          </div>
        )
      })}
    </>
  )
} */
