import React from "react"
import Layout from "../components/Layout"
import Cardv2 from "../components/Cardv2"
import SEO from "../components/seo.jsx"

const About = () => {
  const text = "meu texto"

  return (
    <Layout>
      <SEO title="About" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>About</h1>
            <h2>{text}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Cardv2
              nameImage="real"
              titleCard="Card 1"
              textCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra id eros at suscipit. Aliquam a posuere diam. Quisque quis urna ac velit ultricies cursus."
              colorButton="gatsby"
              backgroundCard="yellow"
              styleDefault={true}
            />
          </div>
          <div className="col-4">
            <Cardv2
              nameImage="real"
              titleCard="Card 2"
              textCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra id eros at suscipit. Aliquam a posuere diam. Quisque quis urna ac velit ultricies cursus."
              colorButton="gatsby"
              backgroundCard="red"
              styleDefault={false}
            />
          </div>
          <div className="col-4">
            <Cardv2
              nameImage="gatsby-astronaut"
              titleCard="Card 3"
              textCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra id eros at suscipit. Aliquam a posuere diam. Quisque quis urna ac velit ultricies cursus."
              colorButton="gatsby"
              backgroundCard="purple"
              styleDefault={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
