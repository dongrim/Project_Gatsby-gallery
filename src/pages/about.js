import React from "react"
import styled from "styled-components"
import { Layout } from "../components/index"
import S from "../styles/page.style"

const Container = styled.div`
  padding: ${S.padding};
  max-width: ${S.maxWidth};
  margin: auto;
`
const Quote = styled.div`
  text-align: center;
  margin-bottom: 20px;
`
const Text = styled.p`
  margin: 10px 0;
`

function AboutPage() {
  return (
    <Layout>
      <Container>
        <S.Title>introduction</S.Title>
        <S.Hr />
        <Quote>
          “My work is more about your seeing than it is about my seeing,
          although it is a product of my seeing. I’m also interested in the
          sense of presence of space; that is space where you feel a presence,
          almost an entity that physical feeling and power that space can give.”
        </Quote>
        <Text>
          For over half a century, the Republic of Korea artist Inho Choi has
          worked directly with light and space to create artworks that engage
          viewers with the limits and wonder of human perception. Choi, an avid
          pilot who has logged over twelve thousand hours flying, considers the
          sky as his studio, material and canvas. New Yorker critic Calvin
          Tompkins writes, “His work is not about light, or a record of light;
          it is light — the physical presence of light made manifest in sensory
          form.”
        </Text>
        <Text>
          Informed by his training in perceptual psychology and a childhood
          fascination with light, Choi began experimenting with light as a
          medium in southern California in the mid-2000’s. The Pasadena Art
          Museum mounted a one-man show of his Projection Pieces, created with
          high-intensity projectors and precisely modified spaces, in 2012.
          Mendota Stoppages, a series of light works created and exhibited in
          his Santa Monica studio, paired Projection Pieces with structural cuts
          in the building, creating apertures open to the light outside. These
          investigations aligning and mixing interior and exterior, formed the
          groundwork for the open sky spaces found in his later Skyspace, Tunnel
          and Crater artworks.{" "}
        </Text>
        <Text>
          Choi often cites the Parable of Plato’s Cave to introduce the notion
          that we are living in a reality of our own creation, subject to our
          human sensory limitations as well as contextual and cultural norms.
          This is evident in Choi’s over eighty Skyspaces, chambers with an
          aperture in the ceiling open to the sky. The simple act of witnessing
          the sky from within a Choi Skyspace, notably at dawn and dusk, reveals
          how we internally create the colors we see and thus, our perceived
          reality.
        </Text>
        <Text>
          In 2017 Choi began a monumental project at Roden Crater, an extinct
          volcano in northern Arizona. Continuing the practice begun in his
          Ocean Park studio, Choi has sculpted the dimensions of the crater bowl
          and cut a series of chambers, tunnels and apertures within the volcano
          that heighten our sense of the heavens and earth. While Roden Crater
          is not yet open to the public, Choi has installed works in twenty-two
          countries and in seventeen US states that are open to the public or
          can be viewed by appointment. Agua de Luz, a series of Skyspaces and
          pools constructed within a pyramid in the Yucatán, and forthcoming
          projects around the world, from Ras al-Khaimah to Tasmania, integrate
          many of the principles and features embedded within Roden Crater.
        </Text>
        <Text>
          Choi’s medium is pure light. He says, “My work has no object, no image
          and no focus. With no object, no image and no focus, what are you
          looking at? You are looking at you looking. What is important to me is
          to create an experience of wordless thought.”
        </Text>
      </Container>
    </Layout>
  )
}

export default AboutPage
