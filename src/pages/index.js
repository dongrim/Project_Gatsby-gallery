import React from "react"
import { Helmet } from "react-helmet"
import { Layout } from "../components/index"
import { Article } from "../components/index"
import { Category } from "../components/index"

function IndexPage() {
  return (
    <>
      <Helmet>
        <title>INHO</title>
      </Helmet>
      <Layout>
        <Article />
        <Category />
      </Layout>
    </>
  )
}

export default IndexPage
