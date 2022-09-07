import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`
const WrapperArticle = styled.div`
  width: 100%;
  height: 100%;
`
const Li = styled.li`
  /* @media only screen and (max-width: 768px) and (orientation: landscape) { */
  @media only screen and (orientation: landscape) {
    .wrapperImage {
      height: 100% !important;
    }
    /* width: 50vw; */
  }
  /* margin: 0 auto; */
  /* height: 100%; */
  /* max-width: 840px; */
`
const Text = styled.div`
  width: 100%;
  padding-top: 20px;
  color: #383838;
  text-shadow: 0 1px 2px rgb(0 0 0 / 90%);
  text-transform: none;
  line-height: 1em;
  letter-spacing: 5px;
  word-spacing: 0;
  font-size: 5vh;
  /* font-size: 5vw; */
  word-wrap: break-word;
  p {
    margin-bottom: 10px;
  }
`

export const Main = () => {
  return (
    <Container>
      <WrapperArticle>
        <ul>
          <Li>
            <div
              className="wrapperImage"
              style={{
                // display: "grid",
                height: "calc(100vh - 120px)",
                maxWidth: "1190px",
                margin: "0 auto",
              }}
            >
              <StaticImage
                style={
                  {
                    // gridArea: "1 / 1",
                  }
                }
                src="../../images/main/main.jpg"
                alt="main"
                placeholder="blurred"
                layout="fullWidth"
                // quality="50"
                // aspectRatio={4 / 3}
                // transformOptions={{ grayscale: true, cropFocus: "attention" }}
              />
              {/* <div
                style={{
                  paddingLeft: "8px",
                  gridArea: "2 / 1",
                  position: "relative",
                  placeItems: "center",
                  display: "grid",
                  height: "100%",
                }}
              >
                <Text>
                  <p className="exhibition-date">CLOSED for Installation</p>
                  <p className="exhibition-title">KÖNIG GALERIE, Berlin</p>
                  <p className="exhibition-dates">31.01.2021-05.11.2021</p>
                </Text>
              </div> */}
            </div>
          </Li>
        </ul>
      </WrapperArticle>
    </Container>
  )
}
