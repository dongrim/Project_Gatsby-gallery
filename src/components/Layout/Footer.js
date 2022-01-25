import React from "react"
import styled from "styled-components"
import { AiFillInstagram } from "react-icons/ai"
import { CgFacebook } from "react-icons/cg"
import { GiSailboat } from "react-icons/gi"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  margin-top: 100px;
  padding-bottom: 5px;
  @media screen and (max-width: 1005px) {
    .sns {
      span {
        display: none;
      }
    }
  }
  @media screen and (max-width: 405px) {
    .copyRight {
      display: none;
    }
    .footerNav {
      width: 100%;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 1225px;
  padding: 0 17px;
  display: flex;
  align-content: center;
  justify-content: space-between;
`
const CopyRight = styled.span`
  color: black;
  font-size: 17px;
  font-weight: 400;
  display: flex;
  align-items: center;
`
const FooterNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Sns = styled.ul`
  color: #343a40;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  a {
    display: flex;
    align-items: center;
  }
  span {
    color: grey;
    padding-top: 2px;
    font-size: 13px;
    font-weight: 500;
    margin: 0 3px;
    text-transform: uppercase;
  }
  li {
    margin: 0 5px;
  }
`
const Contact = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
  }
  span {
    color: black;
    padding-top: 2px;
    font-size: 13px;
    font-weight: 500;
    /* margin: 0 1px; */
    text-transform: uppercase;
  }
  li {
    margin-left: 10px;
  }
`

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <CopyRight className="copyRight">©2022 Inho Choi</CopyRight>
        <FooterNav className="footerNav">
          <Sns className="sns">
            <li>
              <a href="https://www.instagram.com/inhochoi_gmbh" target="_blank">
                <AiFillInstagram />
                <span>INSTAGRAM</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/inhochoi0108" target="_blank">
                <CgFacebook />
                <span>FACEBOOK</span>
              </a>
            </li>
            <li>
              <a href="https://opensea.io/Crypto-Resource" target="_blank">
                <GiSailboat />
                <span>OPENSEA</span>
              </a>
            </li>
          </Sns>
          <Contact>
            <li>
              <a href="/credits">
                <span>credits</span>
              </a>
            </li>
            <li>
              <a href="/contact">
                <span>contact</span>
              </a>
            </li>
          </Contact>
        </FooterNav>
      </Wrapper>
    </Container>
  )
}
