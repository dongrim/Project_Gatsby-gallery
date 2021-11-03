import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Category from "../components/Category.js"

const Container = styled.div`
  width: 100%;
`
const WrapperArticle = styled.div`
  width: 100%;
  /* padding-top: 125px; */
`
const Ul = styled.ul`
  /* margin: 0 auto; */
  /* max-width: 1640px; */
  /* height: 500px; */
  /* display: flex;
  justify-content: space-evenly;
  align-items: center; */
`
const Li = styled.li`
  position: relative;
  margin: 0 auto;
  max-width: 1640px;
`
const Text = styled.div`
  width: 100%;
  z-index: 5;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 10px 30px;
  color: white;
  text-shadow: 0 0 4px rgb(0 0 0 / 40%);
  text-transform: none;
  word-spacing: 10px;
  /* letter-spacing: 5; */
  font-size: 2.5rem;
  font-weight: 600;
  p {
    margin-bottom: 10px;
  }
`

export const Article = () => {
  return (
    <Container>
      <WrapperArticle>
        <Ul>
          <Li>
            <Text>
              <p className="exhibition-date">
                19 April 2021 – 15 November 2022
              </p>
              <p className="exhibition-artist">Silverstar.no</p>
              <p className="exhibition-title">Stillleben</p>
              <p className="exhibition-room">Kesselhaus</p>
            </Text>
            <StaticImage
              src="../images/main/main1.jpg"
              alt="main_1"
              placeholder="blurred"
              layout="constrained"
              width={1640}
              height={840}
              transformOptions={{ cropFocus: "attention" }}
              // quality="50"
              // aspectRatio={4 / 3}
              // transformOptions={{ grayscale: true, cropFocus: "attention" }}
            />
          </Li>
        </Ul>
      </WrapperArticle>
      <Category />
    </Container>
  )
}
