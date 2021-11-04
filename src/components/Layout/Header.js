import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  height: 125px;
`
const WrapperHeader = styled.div`
  background: white;
  position: fixed;
  width: 100%;
  height: inherit;
  z-index: 1000;
  .navbar {
    margin: 0 auto;
    padding: 0 17px;
    height: inherit;
    max-width: 1670px;
    min-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const WrapperMenu = styled.div`
  display: flex;
  padding: 0;
  justify-content: space-evenly;
  ul {
    display: flex;
    justify-content: space-evenly;
  }
`
const LinkLogo = styled(Link)`
  letter-spacing: 1.5px;
  word-spacing: -4px;
  font-size: 24px;
`
const LinkNav = styled(Link)`
  letter-spacing: 2px;
  margin-left: 65px;
`
const B = styled.b`
  font-weight: 700;
`
const Button = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  margin-left: 65px;
  padding: 0;
  font-size: 20px;
`

export const Header = () => {
  return (
    <Container>
      <WrapperHeader>
        <div className="navbar">
          <LinkLogo to="/">
            INHO <B>CHOI</B> STUDIO
          </LinkLogo>
          <WrapperMenu>
            <ul>
              <li>
                <LinkNav to="/artist">Artists</LinkNav>
              </li>
              <li>
                <LinkNav to="/exhibition">Exhibitions</LinkNav>
              </li>
              <li>
                <LinkNav to="/storie">Stories</LinkNav>
              </li>
              <li>
                <LinkNav to="/about">About</LinkNav>
              </li>
            </ul>
            <Button>Search</Button>
          </WrapperMenu>
        </div>
      </WrapperHeader>
    </Container>
  )
}
