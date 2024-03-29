import React from "react"
import styled from "styled-components"
import { Layout } from "../components/index"
import S from "../styles/page.style"

const Container = styled.div`
  padding: ${S.padding};
  max-width: ${S.maxWidth};
  margin: auto;
  min-height: 480px;
`
const Text = styled.p`
  margin: 10px 0;
  word-break: break-word;
  line-height: 1.375rem;
`

function CreditsPage() {
  return (
    <Layout>
      <Container>
        <S.Title>photograph credits</S.Title>
        <S.Hr />
        <Text>
          The photographer or owner of the images can be found by hovering over
          the image. The majority of the photographs appearing on this site are
          courtesy Florian Holzherr. Photographs not otherwise credited are from
          INHO CHOI Studio files.{<br />}
          {<br />} Many thanks to the photographers who have shared their
          images: Kelly Akashi, Grant Delin, Patrick Goetelen, John Gollings,
          James Hart, George Holzer, Florian Holzherr, Ivar Kvaal, LACMA, Sergio
          Martucci, Ben McMillan, Pirje Mykkänen, Mike Newman, Städtische
          Galerie im Lenbachhaus und Kunstbau, München, P Weil, and Dick Wiser.
          {<br />}
          {<br />}If you see a photo incorrectly credited, please contact us at
          info@inhochoistudio.com.
        </Text>
      </Container>
    </Layout>
  )
}

export default CreditsPage
