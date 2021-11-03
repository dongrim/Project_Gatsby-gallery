import React from "react"
import { Header } from "./Header.js"
import { Footer } from "../components/Footer.js"
import { GlobalStyle } from "../style/global-style.js"
import { Helmet } from "react-helmet"

export function Layout(props) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Exo:wght@100;300;500&family=Roboto:wght@100;300;400;500;700&display=swap"
        />
      </Helmet>
      <GlobalStyle theme="green" />
      <Header />
      {props.children}
      <Footer />
    </>
  )
}
