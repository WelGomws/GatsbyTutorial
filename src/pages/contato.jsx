import React from "react"
import Layout from "../components/Layout"
import * as Styled from "../styles/pages/contatoStyles"
import SEO from "../components/seo.jsx"

const Contato = () => {
  return (
    <Layout>
      <SEO title="Contato" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-5">
            <h1>Contato</h1>
          </div>
          <div className="col-6">
            <ul class="list-group">
              <li class="list-group-item" style={{ fontSize: "20px" }}>
                <Styled.EmailWrapper />
                wellingtondomingos.gomes@gmail.com
              </li>
              <li class="list-group-item" style={{ fontSize: "20px" }}>
                <Styled.PhoneWrapper />
                (11) 9 7310-3819
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contato
