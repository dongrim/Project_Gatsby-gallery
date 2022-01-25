import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Layout } from "../components/index"
import S from "../styles/page.style"

const Container = styled.div`
  padding: ${S.padding};
  margin: auto;
  max-width: 1225px;
`
const Subtitle = styled.h1`
  text-align: center;
  color: #676767;
  font-size: 0.925em;
  font-weight: 600;
  margin: 25px 0;
`
const WrapperImage = styled.div`
  /* border: 1px solid orange; */
  display: inline-block;
  margin-bottom: 7px;
`

function WorksPage({ data }) {
  const years = [2021, 2020, 2019, 2018, 2017, 2016, 2015]

  return (
    <Layout>
      <Container>
        <S.Title>work (year)</S.Title>
        <S.Hr />
        {years.map(year => {
          {
            return (
              <div key={year}>
                <Subtitle>{year}</Subtitle>
                {data.allMarkdownRemark.edges.map(edge => {
                  if (edge.node.frontmatter.year === year) {
                    return (
                      <WrapperImage key={edge.node.id}>
                        <GatsbyImage
                          image={getImage(edge.node.frontmatter.image_url)}
                          alt={edge.node.frontmatter.title}
                        />
                      </WrapperImage>
                    )
                  }
                })}
              </div>
            )
          }
        })}
      </Container>
    </Layout>
  )
}

export default WorksPage

export const Foo = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { eq: null } } }
      sort: { fields: frontmatter___group_order }
    ) {
      edges {
        node {
          id
          frontmatter {
            year
            title
            image_url {
              childImageSharp {
                gatsbyImageData(
                  height: 150
                  placeholder: BLURRED
                  blurredOptions: { width: 100 }
                  transformOptions: { fit: FILL, cropFocus: CENTER }
                  #aspectRatio: 1
                  formats: WEBP
                )
              }
            }
          }
        }
      }
    }
  }
`
