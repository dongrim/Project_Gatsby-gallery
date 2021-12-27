import React, { useState } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { GlobalStyle } from "../../style/global-style"
import { Helmet } from "react-helmet"
import { Menu } from "../index"
import MyContext from "../UserContext/UserContext"

const mainTheme = {
  color: {
    background: "white",
    text: "black",
  },
  fonts: {
    header: "Exo",
    copy: "Roboto Sans Pro",
  },
}

export function Layout(props) {
  const [modal, setModal] = useState(false)

  return (
    <>
      <Helmet>
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Exo:wght@100;300;500&family=Roboto:wght@100;300;400;500;700&display=swap"
        /> */}
      </Helmet>
      <GlobalStyle theme={mainTheme} />
      <MyContext.Provider value={{ modal, setModal }}>
        {modal ? (
          <Menu />
        ) : (
          <>
            <Header />
            {props.children}
            <Footer />
          </>
        )}
      </MyContext.Provider>
    </>
  )
}
