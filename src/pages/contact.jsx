import React from "react"
import Layout from "../components/Layout"
import * as Styled from "../styles/pages/contactStyles"
import SEO from "../components/seo.jsx"

const Contact = () => {
  const text = "meu texto contact"

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Contact</h1>
            <h2>{text}</h2>
          </div>
          <div className="col-6">
            <ul class="list-group">
              <li class="list-group-item">
                <Styled.EmailWrapper />
                Email
              </li>
              <li class="list-group-item">
                <Styled.PhoneWrapper />
                Telefone
              </li>
              <li class="list-group-item">
                <Styled.LocationOnWrapper />
                Localização
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
