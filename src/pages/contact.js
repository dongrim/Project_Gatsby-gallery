import React from "react"
import styled from "styled-components"
import { Layout } from "../components/index"
import S from "../styles/page.style"

const Container = styled.div`
  padding: ${S.padding};
  max-width: ${S.maxWidth};
  margin: auto;
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
        <S.Title>contact</S.Title>
        <S.Hr />
        <Text>
          For inquiries, please contact info@inhochoistudio.com. If you would
          like to support Inho Choi, please click here.
        </Text>
        <Text>
          Please be advised that the studio is only able to approve of image
          requests related to a commission or exhibition of Inho Choi's work.
          Unfortunately, due to the large volume of image inquiries, the studio
          is not able to process or respond to individual requests. Thank you
          for your understanding and cooperation.
        </Text>
      </Container>
    </Layout>
  )
}

export default ContactPage
