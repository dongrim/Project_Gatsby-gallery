import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const WrapperItem = styled.div`
  /* border: 1px solid blue; */
  margin-top: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
    transition-property: opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }
`
const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
`
const ImageDetail = styled.div`
  padding-top: 3px;
  padding-left: 3px;
  line-height: 1.3;
  .title {
    /* font-size: 4vw; */
    font-size: 3.5vw;
    font-weight: 400;
  }
  .material,
  .size,
  .year {
    font-size: 0.85em;
    line-height: 1.5;
  }
`

export const ImageGroup = ({ data, group, setModalOpen, setselectedImage }) => {
  return data.allMarkdownRemark.edges.map((edge, index) => {
    if (group === edge.node.frontmatter.group) {
      return (
        <WrapperItem key={index}>
          <WrapperImage
            onClick={() => {
              // console.log(edge.node.frontmatter)
              setModalOpen(true)
              setselectedImage(edge.node.frontmatter)
            }}
          >
            <GatsbyImage
              image={getImage(edge.node.frontmatter.image_url)}
              alt={edge.node.frontmatter.title}
            />
            <ImageDetail>
              {/* \u00a0 */}
              <p className="title">{edge.node.frontmatter.title}</p>
            </ImageDetail>
          </WrapperImage>
        </WrapperItem>
      )
    }
  })
}
