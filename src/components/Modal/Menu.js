import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import modalContext from "../UserContext/UserContext"
import { MdOutlineCancel } from "react-icons/md"

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
  div {
    margin: 15px;
    font-size: 1.3em;
    color: #495057;
  }
`
const LinkNav = styled(Link)`
  margin: 18px 0;
`

export const Menu = () => {
  const { setModal } = useContext(modalContext)

  return (
    <Container>
      <Header>
        <h1>menu</h1>
        <MdOutlineCancel
          size={22}
          className="exitBtn"
          onClick={() => setModal(false)}
        />
      </Header>
      <MenuList>
        <LinkNav to="/artist">
          <span>artist</span>
        </LinkNav>
        <LinkNav to="/works">
          <span>works</span>
        </LinkNav>
        <LinkNav to="/about">
          <span>about</span>
        </LinkNav>
        <LinkNav to="#">
          <span>search</span>
        </LinkNav>
        <div>Gallery InHo Choi</div>
      </MenuList>
    </Container>
  )
}
