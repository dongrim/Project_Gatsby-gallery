import React from "react"
import { Helmet } from "react-helmet"
import { Layout, Main, Category } from "../components/index"

function IndexPage() {
  return (
    <>
      <Helmet>
        <title>INHO</title>
      </Helmet>
      <Layout>
        <Main />
        <Category />
      </Layout>
    </>
  )
}

export default IndexPage
