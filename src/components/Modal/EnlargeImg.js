import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GrClose } from "react-icons/gr"

const Container = styled.div`
  background: rgba(255, 255, 255, 0.92);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const WrapperImage = styled.div`
  width: 90%;
  @media screen and (min-width: 961px) {
    width: 30vw;
  }
`
const Header = styled.div`
  width: 100%;
  min-height: 55px;
  position: relative;
  .exitBtn {
    position: absolute;
    right: 5px;
    bottom: 5px;
    cursor: pointer;
  }
`
const Footer = styled.div`
  width: inherit;
  padding: 6px 8px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 1px;
`

export const EnlargeImg = ({ selectedImage, setModalOpen }) => {
  return (
    <Container>
      <WrapperImage>
        <Header>
          <GrClose
            size={28}
            className="exitBtn"
            onClick={() => setModalOpen(false)}
          />
        </Header>
        <GatsbyImage
          style={{
            objectFit: "fill",
          }}
          image={getImage(selectedImage.image_url)}
          alt={selectedImage.alt}
          onClick={() => setModalOpen(false)}
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
