import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 150px;
`
const Ul = styled.ul`
  padding: 0 17px;
  margin: 0 auto;
  max-width: 1225px;
  display: flex;
  flex-direction: column;
`
const Li = styled.li`
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
`
const TextBox = styled.div`
  width: 40%;
  padding: 15px 0;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  margin: ${({ _margin }) => (_margin % 2 ? "0 0 0 30px" : "0 30px 0 0")};
  display: ${({ _display }) => (_display % 2 ? "none" : "block")};
`
const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
`
// const Description = styled.p`
//   font-size: 0.9rem;
//   margin-top: 30px;
// `
const Link = styled(GatsbyLink)`
  &:hover {
    transition: all 300ms ease-in-out;
    filter: brightness(50%);
  }
`

function Category() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            category_image_path: { absolutePath: { regex: "/categories/" } }
          }
        }
        sort: { fields: frontmatter___category_image_path___absolutePath }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            html
            frontmatter {
              slug
              title
              category_image_path {
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    #height: 450
                    placeholder: BLURRED
                    blurredOptions: { width: 100 }
                    transformOptions: { fit: COVER, cropFocus: CENTER }
                    aspectRatio: 1.7
                    formats: WEBP
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
    <Container>
      <Ul>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <Li key={edge.node.id}>
              <TextBox _margin={index} _display={index}>
                <Title>{edge.node.frontmatter.title}</Title>
                {/* <Description
                  style={{ color: "#ff2f00" }}
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                /> */}
              </TextBox>
              {/* <Link to={path.basename(edge.node.fileAbsolutePath, ".md")}> */}
              <Link to={edge.node.frontmatter.slug}>
                <GatsbyImage
                  image={getImage(edge.node.frontmatter.category_image_path)}
                  alt={edge.node.frontmatter.title}
                />
              </Link>
              <TextBox _margin={index} _display={index + 1}>
                <Title>{edge.node.frontmatter.title}</Title>
                {/* <Description
                  style={{ color: "#ff2f00" }}
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                /> */}
              </TextBox>
            </Li>
          )
        })}
      </Ul>
    </Container>
  )
}

export default Category
