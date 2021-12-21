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

function ContactPage() {
  return (
    <Layout>
      <Container>
        <Title>contact</Title>
        <Text>
          For inquiries, please contact info@jamesturrell.com. If you would like
          to support the Roden Crater, please click here.
        </Text>
        <Text>
          Please be advised that the studio is only able to approve of image
          requests related to a commission or exhibition of James Turrell’s
          work. Unfortunately, due to the large volume of image inquiries, the
          studio is not able to process or respond to individual requests. Thank
          you for your understanding and cooperation.
        </Text>
      </Container>
    </Layout>
  )
}

export default ContactPage
