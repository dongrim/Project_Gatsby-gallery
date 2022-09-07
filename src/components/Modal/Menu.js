import React, { useContext } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import modalContext from "../UserContext/UserContext"
import { GrClose } from "react-icons/gr"

const Container = styled.div``
const Header = styled.div`
  border-bottom: 1px solid #dfdfdf;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  h1 {
    text-transform: uppercase;
    font-weight: 700;
  }
  .exitBtn {
    position: absolute;
    right: 30px;
    cursor: pointer;
  }
`
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  Link {
    margin: 50px 0;
  }
  span {
    text-transform: capitalize;
    font-size: 2em;
    font-weight: 500;
  }
`
const Footer = styled.div`
  margin: 15px;
  font-size: 1.3em;
  color: #495057;
`
const LinkBtn = styled.div`
  margin: 18px 0;
  color: black;
  cursor: pointer;
`

export const Menu = () => {
  const { setModal } = useContext(modalContext)

  return (
    <Container>
      <Header>
        <h1>menu</h1>
        <GrClose
          size={22}
          className="exitBtn"
          onClick={() => setModal(false)}
        />
      </Header>
      <MenuList>
        <LinkBtn
          onClick={() => {
            navigate("/artist")
            setModal(false)
          }}
        >
          <span>artist</span>
        </LinkBtn>
        <LinkBtn
          onClick={() => {
            navigate("/works")
            setModal(false)
          }}
        >
          <span>works</span>
        </LinkBtn>
        <LinkBtn
          style={{ pointerEvents: "none" }}
          onClick={() => {
            navigate("/about")
            setModal(false)
          }}
        >
          <span>about</span>
        </LinkBtn>
        <LinkBtn
          style={{ pointerEvents: "none" }}
          onClick={() => navigate("#")}
        >
          <span>search</span>
        </LinkBtn>
        <Footer>Gallery InHo Choi</Footer>
      </MenuList>
    </Container>
  )
}
