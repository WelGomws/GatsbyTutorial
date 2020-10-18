import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo.jsx"

const IndexPage = () => (
  <Layout>
    <SEO title="Roi" description="Welcome!!" />
    <div className="container" style={{ display: "flex", fontSize: "16px"}}> 
      <div className="row">
        <div className="col-12 py-5">
          <h1>Oi mi vida!</h1>
          <p>
            Comecei a estudar esse criador de site quando precisei criar o site
            da empresa que trabalho, acompanhando os videos tutoriais do
            youtube, ficou um site bem bacana no projeto, pensei porque não
            adaptar pra uma surpresinha pra minha namoradinha né?
          </p>
          <p>
            Estou atualizando o site com a sua escolhas de cores em, te pedindo
            ajuda sem você perceber bobinha. Não sei o que escrever aqui, você
            sabe que não sou bom com palavras...
          </p>
          <p>
            Deixo claro aqui todo meu amor por você meu bbxinho mais lindo, me
            desculpa por cada erro meu, por eu ser seu estresse diário rsrs, te amo demais fofura. {"<3"}
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
