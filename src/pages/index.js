import React from "react"
import { Helmet } from "react-helmet"
import { Layout, Main, Category } from "../components/index"

function IndexPage() {
  return (
    <>
      <Helmet>
        <title>INHO</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script>
          if (window.netlifyIdentity){" "}
          {window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/"
              })
            }
          })}
        </script>
      </Helmet>
      <Layout>
        <Main />
        <Category />
      </Layout>
    </>
  )
}

export default IndexPage
