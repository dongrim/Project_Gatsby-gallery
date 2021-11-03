import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
  padding: 130px 0;
`
const WrapperImages = styled.ul`
  color: white;
  margin: 0 auto;
  max-width: 2000px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 35px;
`
const Li = styled.li`
  position: relative;
  cursor: pointer;
  &:hover {
    color: gold;
    transition: all 300ms ease-in-out;
    veil {
      transition: all 300ms ease-in-out;
      position: absolute;
      z-index: 2;
      background: rgba(10, 10, 10, 0.5);
      width: 100%;
      height: 100%;
    }
  }
`
const Text = styled.div`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 4px rgb(0 0 0 / 40%);
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  &:hover {
  }
`

function Category() {
  const width = 10
  const height = 50
  return (
    <Container>
      <WrapperImages>
        <Li>
          <veil />
          <Text>canvas</Text>
          <StaticImage
            src="../images/categories/c1.jpg"
            layout="fullWidth"
            alt="category_1"
            placeholder="blurred"
            width={width}
            height={height}
            aspectRatio={1 / 1}
            transformOptions={{ grayscale: false, cropFocus: "attention" }}
          />
        </Li>
        <Li>
          <veil />
          <Text>clearance sale</Text>
          <StaticImage
            src="../images/categories/c2.jpg"
            layout="fullWidth"
            alt="category_2"
            placeholder="blurred"
            width={width}
            height={height}
            aspectRatio={1 / 1}
            transformOptions={{ grayscale: false, cropFocus: "attention" }}
          />
        </Li>
        <Li>
          <veil />
          <Text>price etiquette</Text>
          <StaticImage
            src="../images/categories/c3.jpg"
            layout="fullWidth"
            alt="category_3"
            placeholder="blurred"
            width={width}
            height={height}
            aspectRatio={1 / 1}
            transformOptions={{ grayscale: false, cropFocus: "attention" }}
          />
        </Li>
        <Li>
          <veil />
          <Text>stone</Text>
          <StaticImage
            src="../images/categories/c4.jpg"
            layout="fullWidth"
            alt="category_4"
            placeholder="blurred"
            width={width}
            height={height}
            aspectRatio={1 / 1}
            transformOptions={{ grayscale: false, cropFocus: "attention" }}
          />
        </Li>
        <Li>
          <veil />
          <Text>still life</Text>
          <StaticImage
            src="../images/categories/c5.jpg"
            layout="fullWidth"
            alt="category_5"
            placeholder="blurred"
            width={width}
            height={height}
            aspectRatio={1 / 1}
            transformOptions={{ grayscale: false, cropFocus: "attention" }}
          />
        </Li>
        <Li>
          <veil />
          <Text>crypto resource</Text>
          <StaticImage
            src="../images/categories/c6.jpg"
            layout="fullWidth"
            alt="category_6"
            placeholder="blurred"
            width={width}
            height={height}
            aspectRatio={1 / 1}
            transformOptions={{ grayscale: false, cropFocus: "attention" }}
          />
        </Li>
      </WrapperImages>
    </Container>
  )
}

export default Category
