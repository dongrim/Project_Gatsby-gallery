import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Layout } from "../components/index"

const Container = styled.div`
  margin: auto;
  max-width: 1225px;
  padding: 0 17px;
`
const Title = styled.h1`
  /* border: 1px solid blue; */
  margin-top: 50px;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8); ;
`
const Subtitle = styled.h1`
  text-align: center;
  color: #666666;
  font-size: 1.1rem;
  margin: 20px 0 22px;
`
const Hr = styled.div`
  content: "";
  display: block;
  width: 132px;
  height: 0.125em;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 30px auto 30px;
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
        <Title>work (year)</Title>
        <Hr></Hr>
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
