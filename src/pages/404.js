import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div className="container" style={{ display: "flex", fontSize: "16px" }}>
      <div className="row">
        <div className="col-12 py-5">
          <h1>Opa meu lindo!</h1>
          <p>A página que você está procurando não exite.</p>
        </div>
      </div>
    </div>
  </Layout>
)
export default NotFoundPage
