import React from "react"
import styled from "styled-components"
import { Layout } from "../components/index"

const Container = styled.div`
  user-select: none;
  margin: 50px auto;
  width: 800px;
  line-height: 1.4;
  div {
    margin-bottom: 25px;
  }
  h2 {
    margin: 15px 0 7px;
    font-size: 1.125em;
    border-bottom: 1px solid gray;
    display: inline-block;
  }
  .address {
    user-select: auto;
    a {
      text-decoration: underline;
    }
  }
`
const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 400;
  margin-bottom: 30px;
`

function ArtistPage() {
  return (
    <>
      <Layout>
        <Container>
          <Title>Biography</Title>
          <div>
            <h2>Education</h2>
            <p>2011 Sung kyun kwan University, Seoul – Fine Art/Bachelor</p>
            <p>
              2013-2014 Staatliche Akademie der Bildenden Künste Stuttgart
              -Painting/ Cordula Güdemann
            </p>
            <p>
              2014-2019 Hochschule für Bildende Künste | HfBK Dresden -
              Sculpture & Spatial Concepts/ Eberhard Bosslet/Diplom
            </p>
            <p>
              2019-2021 Hochschule für Bildende Künste | HfBK Dresden -
              Sculpture & Spatial Concepts/ Susan Philipsz/Meisterschüler
              studium
            </p>
          </div>
          <div>
            <h2>Group Exhibition</h2>
            <p>2019, Beauty Plops in Art, JSM Plops, Seoul</p>
            <p>
              2018, Gewerbefläche zu vermieten, Hole of Fame, Dresden, Germany
            </p>
            <p>
              2018, Dresden art_excursion_seoul, 369 Art Space, 2 Exhibition
              center, seoul
            </p>
            <p>
              2017, Schatzkästchen, Hfbk Dresden, sponsored by the
              “Freundeskreis der Hochschule für Bildende Künste Dresden“,
              Gewandhausstraße 7, Dresden, Germany
            </p>
            <p>
              2017, Kunstzug, Wrocław(Poland)- Dresden Section Train Art
              Project, Poland, Germany
            </p>
            <p>2016, Wolrd and Painting , Earth Gallery, Dresden, Germany</p>
          </div>
          <div>
            <h2>Solo Exhibition</h2>
            <p>2016, Räumungsverkauf, Ex14 Dresden, Germany</p>
          </div>
          <div className="address">
            <h2>Contact</h2>
            <ul>
              <li>silverstarno@gmail.com</li>
              <li>
                <a
                  href="https://www.instagram.com/inhochoi_gmbh"
                  target="_blank"
                >
                  instagram@inhochoi_gmbh
                </a>
              </li>
              <li>
                <a href="https://opensea.io/Crypto-Resource" target="_blank">
                  opensea.io/Crypto-Resource
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default ArtistPage
