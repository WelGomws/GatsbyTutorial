import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Images = props => {
  const { foto01, foto02 } = useStaticQuery(graphql`
    query {
      foto01: file(relativePath: { eq: "real.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto02: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div>
      {(() => {
        switch (props.name) {
          case "real":
            return <Img fluid={foto01.childImageSharp.fluid} alt="foto01" />
          case "gatsby-astronaut":
            return <Img fluid={foto02.childImageSharp.fluid} alt="foto02" />
          default:
            return null
        }
      })()}
    </div>
  )
}

export default Images
