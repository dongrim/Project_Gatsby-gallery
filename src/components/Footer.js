import React from "react"
import styled from "styled-components"
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs"
import { MdMail } from "react-icons/md"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: grey;
  width: 100%;
  padding: 57px 15px 162px 15px;
  border-top: 1px solid #d6d6d6;
  margin-top: 130px;
`
const SnsNav = styled.ul`
  color: #343a40;
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  a {
    display: flex;
    align-items: center;
  }
  span {
    color: grey;
    padding-top: 2px;
    font-size: 14px;
    font-weight: 500;
    margin: 0 10px;
  }
`
const Address = styled.div`
  color: grey;
  font-size: 16px;
  letter-spacing: 1px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 70px;
  /* border: 1px dotted blue; */
`

export const Footer = () => {
  return (
    <Container>
      <SnsNav>
        <li>
          <a href="/instagram">
            <BsInstagram />
            <span>INSTAGRAM</span>
          </a>
        </li>
        <li>
          <a href="/facebook">
            <BsFacebook />
            <span>FACEBOOK</span>
          </a>
        </li>
        <li>
          <a href="/twitter">
            <BsTwitter />
            <span>TWITTER</span>
          </a>
        </li>
        <li>
          <a href="/youtube">
            <BsYoutube fontSize="1.2em" />
            <span>YOUTUBE</span>
          </a>
        </li>
        <li>
          <a href="/newsletter">
            <MdMail fontSize="1.2em" />
            <span>NEWSLETTER</span>
          </a>
        </li>
      </SnsNav>
      <Address>
        <address>14 Samcheong-ro, Jongro-gu, Seoul 03062 Korea</address>
        <p>Studio InhoChoi - All rights reserved 2020</p>
      </Address>
    </Container>
  )
}
