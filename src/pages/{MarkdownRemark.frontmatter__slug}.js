import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Layout, ImageGroup, Pagination, EnlargeImg } from "../components/index"

const Container = styled.div`
  width: 100%;
  height: 100%;
`
const WrapperMain = styled.div`
  /* border: 1px solid blue; */
  margin: 0px auto 70px;
  max-width: 2000px;
`
const Text = styled.div`
  text-align: center;
  h1 {
    font-size: 3.125em;
    line-height: 1.3;
    letter-spacing: 1px;
  }
  p {
    display: block;
    width: 2px;
    height: 71px;
    background: #333;
    margin: 40px auto;
  }
`
const WrapperSub = styled.div`
  border-top: 1px solid #dfdfdf;
  padding: 1.5rem 1.25rem;
  margin: auto;
  max-width: 2000px;
  h1 {
    font-size: 1.5em;
    letter-spacing: -1px;
    margin-bottom: 50px;
    text-transform: capitalize;
  }
`
const WrapperImageGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  /* grid-template-columns: repeat(auto-fit, minmax(100px, max-content)); */
`

export default function Template({ data }) {
  const [currentPage, setCurrentPage] = useState(null)
  const [pageSet, setPageSet] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedImage, setselectedImage] = useState({})
  const heightRef = useRef()

  useEffect(() => {
    if (pageSet.length !== 0) return
    let chunkArr = []
    data.allMarkdownRemark.edges.map(edge => {
      const pagaeObj = {
        page: edge.node.frontmatter.group_order,
        page_title: edge.node.frontmatter.group,
      }
      const isDuplicated = chunkArr.some(
        element => element.page_title === pagaeObj.page_title
      )
      if (!isDuplicated) chunkArr.push(pagaeObj)
    })
    setPageSet(chunkArr)
  }, [])

  return (
    <Layout>
      <Container>
        <WrapperMain ref={heightRef}>
          <GatsbyImage
            image={getImage(
              data.markdownRemark.frontmatter.category_image_path
            )}
            alt={data.markdownRemark.frontmatter.title}
          />
          <Text>
            <p></p>
            <h1>
              InHo Choi :{" "}
              {/* <span>
                {data.markdownRemark.htmlAst.children[0].children[0].value}
              </span> */}
            </h1>
          </Text>
        </WrapperMain>
        <WrapperSub>
          {isModalOpen && (
            <EnlargeImg
              selectedImage={selectedImage}
              setModalOpen={setModalOpen}
            />
          )}
          <h1>{currentPage}</h1>
          <WrapperImageGroup>
            <ImageGroup
              data={data}
              group={currentPage}
              setModalOpen={setModalOpen}
              setselectedImage={setselectedImage}
            />
          </WrapperImageGroup>
          <Pagination
            pageSet={pageSet}
            setCurrentPage={setCurrentPage}
            autoScroll={heightRef}
          />
        </WrapperSub>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!, $frontmatter__slug: String) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      frontmatter {
        slug
        title
        category_image_path {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: frontmatter___order }
      filter: { frontmatter: { etc: { eq: $frontmatter__slug } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            artist
            year
            size
            materials
            etc
            group
            group_order
            order
            image_url {
              childImageSharp {
                gatsbyImageData(
                  #width: 800
                  #height: 300
                  placeholder: BLURRED
                  blurredOptions: { width: 100 }
                  #layout: CONSTRAINED
                  transformOptions: { fit: FILL, cropFocus: CENTER }
                  #aspectRatio: 1.5
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
