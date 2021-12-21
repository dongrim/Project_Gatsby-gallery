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
        <Title>introduction</Title>
        <Quote>
          “My work is more about your seeing than it is about my seeing,
          although it is a product of my seeing. I’m also interested in the
          sense of presence of space; that is space where you feel a presence,
          almost an entity — that physical feeling and power that space can
          give.”
        </Quote>
        <Text>
          For over half a century, the American artist James Turrell has worked
          directly with light and space to create artworks that engage viewers
          with the limits and wonder of human perception. Turrell, an avid pilot
          who has logged over twelve thousand hours flying, considers the sky as
          his studio, material and canvas. New Yorker critic Calvin Tompkins
          writes, “His work is not about light, or a record of light; it is
          light — the physical presence of light made manifest in sensory form.”
        </Text>
        <Text>
          Informed by his training in perceptual psychology and a childhood
          fascination with light, Turrell began experimenting with light as a
          medium in southern California in the mid-1960’s. The Pasadena Art
          Museum mounted a one-man show of his Projection Pieces, created with
          high-intensity projectors and precisely modified spaces, in 1967.
          Mendota Stoppages, a series of light works created and exhibited in
          his Santa Monica studio, paired Projection Pieces with structural cuts
          in the building, creating apertures open to the light outside. These
          investigations aligning and mixing interior and exterior, formed the
          groundwork for the open sky spaces found in his later Skyspace, Tunnel
          and Crater artworks.{" "}
        </Text>
        <Text>
          Turrell often cites the Parable of Plato’s Cave to introduce the
          notion that we are living in a reality of our own creation, subject to
          our human sensory limitations as well as contextual and cultural
          norms. This is evident in Turrell’s over eighty Skyspaces, chambers
          with an aperture in the ceiling open to the sky. The simple act of
          witnessing the sky from within a Turrell Skyspace, notably at dawn and
          dusk, reveals how we internally create the colors we see and thus, our
          perceived reality.
        </Text>
        <Text>
          In 1977 Turrell began a monumental project at Roden Crater, an extinct
          volcano in northern Arizona. Continuing the practice begun in his
          Ocean Park studio, Turrell has sculpted the dimensions of the crater
          bowl and cut a series of chambers, tunnels and apertures within the
          volcano that heighten our sense of the heavens and earth. While Roden
          Crater is not yet open to the public, Turrell has installed works in
          twenty-two countries and in seventeen US states that are open to the
          public or can be viewed by appointment. Agua de Luz, a series of
          Skyspaces and pools constructed within a pyramid in the Yucatán, and
          forthcoming projects around the world, from Ras al-Khaimah to
          Tasmania, integrate many of the principles and features embedded
          within Roden Crater.
        </Text>
        <Text>
          Turrell’s medium is pure light. He says, “My work has no object, no
          image and no focus. With no object, no image and no focus, what are
          you looking at? You are looking at you looking. What is important to
          me is to create an experience of wordless thought.”
        </Text>
      </Container>
    </Layout>
  )
}

export default AboutPage
