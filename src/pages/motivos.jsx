import React from "react"
import Layout from "../components/Layout"
import Cardv2 from "../components/Cardv2"
import SEO from "../components/seo.jsx"

const Motivos = () => {
  const text = "Aqui vai alguns motivos de muitos para te amar fofura"

  return (
    <Layout>
      <SEO title="Motivos" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-5">
            <h1>Motivos</h1>
            <h2>{text}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Cardv2
              nameImage="foto-05"
              titleCard="Card 1"
              textCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra id eros at suscipit. Aliquam a posuere diam. Quisque quis urna ac velit ultricies cursus."
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
              nameImage="foto-04"
              titleCard="Card 2"
              textCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra id eros at suscipit. Aliquam a posuere diam. Quisque quis urna ac velit ultricies cursus."
              colorButton="gatsby"
              backgroundCard="red"
              styleDefault={false}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Motivos
