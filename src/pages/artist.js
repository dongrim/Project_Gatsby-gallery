import React from "react"
import styled from "styled-components"
import { Layout } from "../components/index"
import S from "../styles/page.style"

const Container = styled.div`
  padding: ${S.padding};
  font-size: 16px;
  .address {
    user-select: auto;
    a:hover {
      text-decoration: underline;
    }
  }
`
const Section = styled.div`
  margin-bottom: 50px;
  p {
    line-height: 1.7;
  }
`
const Article = styled.div`
  max-width: ${S.maxWidth};
  margin: auto;
`

function ArtistPage() {
  return (
    <Layout>
      <Container>
        <Article>
          <Section>
            <S.Title>education</S.Title>
            <S.Hr />
            <p>Sung kyun kwan University, Fine Art/Bachelor, Seoul, 2011</p>
            <p>
              Staatliche Akademie der Bildenden Künste Stuttgart, Painting/
              Cordula Güdemann, 2013-2014
            </p>
            <p>
              Hochschule für Bildende Künste | HfBK Dresden, Sculpture & Spatial
              Concepts/ Eberhard Bosslet/Diplom, 2014-2019
            </p>
            <p>
              Hochschule für Bildende Künste | HfBK Dresden, Sculpture & Spatial
              Concepts/ Susan Philipsz/Meisterschüler studium, 2019-2021
            </p>
          </Section>
          <Section>
            <S.Title>group exhibition</S.Title>
            <S.Hr />
            <p>Beauty Plops in Art, JSM Plops, Seoul, 2019</p>
            <p>
              Gewerbefläche zu vermieten, Hole of Fame, Dresden, Germany, 2018
            </p>
            <p>
              Dresden art_excursion_seoul, 369 Art Space, 2 Exhibition center,
              Seoul, 2018
            </p>
            <p>
              Schatzkästchen, Hfbk Dresden, sponsored by the "Freundeskreis der
              Hochschule für Bildende Künste Dresden", Gewandhausstraße 7,
              Dresden, Germany, 2017
            </p>
            <p>
              Kunstzug, Wrocław(Poland)- Dresden Section Train Art Project,
              Poland, Germany, 2017
            </p>
            <p>Wolrd and Painting , Earth Gallery, Dresden, Germany, 2016</p>
          </Section>
          <Section>
            <S.Title>solo exhibition</S.Title>
            <S.Hr />
            <p>Räumungsverkauf, Ex14 Dresden, Germany, 2016</p>
          </Section>
          <Section className="address">
            <S.Title>contact</S.Title>
            <S.Hr />
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
          </Section>
        </Article>
      </Container>
    </Layout>
  )
}

export default ArtistPage
