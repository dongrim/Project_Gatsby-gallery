import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Container = styled.div``
const WrapperImage = styled.div`
  background: rgba(255, 255, 255, 0.92);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  top: 0;
  left: 0;
  /* right: 0;
  bottom: 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Header = styled.div`
  border: 1px solid orange;
  width: 100%;
  .exitBtn {
    cursor: pointer;
  }
`
const Footer = styled.div`
  width: 100%;
  padding: 6px 8px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 1px;
`

export const EnlargeImg = ({ selectedImage, setModalOpen }) => {
  return (
    <Container>
      <WrapperImage onClick={() => setModalOpen(false)}>
        <GatsbyImage
          style={{
            // transform: "scale(0.99)",
            width: "100vmin",
            objectFit: "fill",
          }}
          image={getImage(selectedImage.image_url)}
          alt={selectedImage.alt}
        />
        <Footer>
          <div>
            {selectedImage.title} ({selectedImage.year})
          </div>
          <div>
            {selectedImage.materials}, {selectedImage.size}
          </div>
        </Footer>
      </WrapperImage>
    </Container>
  )
}
