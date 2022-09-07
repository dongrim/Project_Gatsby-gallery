import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const WrapperItem = styled.div`
  margin-top: auto;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
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
    padding: 10px;
    font-size: 3vw;
    font-weight: 400;
  }
  .material,
  .size,
  .year {
    font-size: 0.85em;
    line-height: 1.5;
  }
  @media screen and (min-width: 950px) {
    .title {
      font-size: 2rem;
    }
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
