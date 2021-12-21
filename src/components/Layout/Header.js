import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { RiMenuFill } from "react-icons/ri"
import modalContext from "../UserContext/UserContext"

const Container = styled.div`
  height: 99px;
  @media screen and (max-width: 1005px) {
    & {
      height: 70px;
    }
    .wrapperMenu {
      display: none;
    }
    .wrapperHeader {
      text-align: center;
      height: 70px;
    }
    .wrapperLogo {
      width: 100%;
      user-select: none;
    }
    .logo {
      font-size: 18px;
    }
    .menu {
      margin-left: 3px;
      cursor: pointer;
      display: block !important;
    }
  }
`
const WrapperHeader = styled.div`
  background: white;
  position: fixed;
  width: 100%;
  height: 99px;
  z-index: 1000;
  box-shadow: ${({ isShadow }) =>
    isShadow ? "0px 1px 10px 0px rgba(0, 0, 0, 0.4)" : "none"};
  .navbar {
    height: inherit;
    margin: auto;
    max-width: 1225px;
    padding: 0 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .menu {
    display: none;
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
  letter-spacing: 1px;
  margin-left: 45px;
  text-transform: uppercase;
  font-size: 1.1em;
`
const B = styled.b`
  font-weight: 700;
`
const Button = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  letter-spacing: 1px;
  margin-left: 45px;
  text-transform: uppercase;
  font-size: 1.1em;
`
export const Header = () => {
  const [shadow, setShadow] = useState(null)
  const isShadow = () => {
    if (window.scrollY === 0) setShadow(false)
    if (window.scrollY !== 0) setShadow(!shadow)
  }
  useEffect(() => {
    window.addEventListener("scroll", isShadow)
    return () => window.removeEventListener("scroll", isShadow)
  }, [])

  const { modal, setModal } = useContext(modalContext)

  return (
    <Container>
      <WrapperHeader className="wrapperHeader" isShadow={shadow}>
        <div className="navbar">
          <RiMenuFill
            className="menu"
            size={26}
            onClick={() => setModal(true)}
          />
          <div className="wrapperLogo">
            <LinkLogo className="logo" to="/">
              INHO <B>CHOI</B> STUDIO
            </LinkLogo>
          </div>
          <WrapperMenu className="wrapperMenu">
            <ul>
              <li>
                <LinkNav to="/artist">artist</LinkNav>
              </li>
              <li>
                <LinkNav to="/works">works</LinkNav>
              </li>
              <li>
                <LinkNav to="/about">about</LinkNav>
              </li>
              <li>
                <Button>search</Button>
              </li>
            </ul>
          </WrapperMenu>
        </div>
      </WrapperHeader>
    </Container>
  )
}
