import React from "react"
import styled from "styled-components"
import { Layout } from "../components/index"

const Container = styled.div`
  border: 1px dotted grey;
  /* max-width: 1225px; */
  max-width: 520px;
  padding: 0 40px;
  height: 100%;
  margin: auto;
  /* text-align: center; */
`
const Title = styled.h1`
  font-size: 1em;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 10px 0;
`
const Text = styled.p`
  margin: 10px 0;
`

function CreditsPage() {
  return (
    <Layout>
      <Container>
        <Title>photograph credits</Title>
        <Text>
          The photographer or owner of the images can be found by hovering over
          the image. The majority of the photographs appearing on this site are
          courtesy Florian Holzherr. Photographs not otherwise credited are from
          James Turrell Studio files.
        </Text>
        <Text>
          Many thanks to the photographers who have shared their images: Kelly
          Akashi, Grant Delin, Patrick Goetelen, John Gollings, James Hart,
          George Holzer, Florian Holzherr, Ivar Kvaal, LACMA, Sergio Martucci,
          Ben McMillan, Pirje Mykkänen, Mike Newman, Städtische Galerie im
          Lenbachhaus und Kunstbau, München, P Weil, and Dick Wiser.
        </Text>
        <Text>
          If you see a photo incorrectly credited, please contact us at
          info@jamesturrell.com.
        </Text>
      </Container>
    </Layout>
  )
}

export default CreditsPage
