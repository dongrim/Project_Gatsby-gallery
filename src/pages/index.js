import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { Layout, Main, Category } from "../components/index"

function IndexPage() {
  useEffect(() => {
    const netlifyIdentity = window.netlifyIdentity

    if (!netlifyIdentity) return

    netlifyIdentity.on("init", user => {
      if (!user)
        netlifyIdentity.on("login", () => {
          document.location.href = "/admin/"
        })
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>INHO</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <Layout>
        <Main />
        <Category />
      </Layout>
    </>
  )
}

export default IndexPage
