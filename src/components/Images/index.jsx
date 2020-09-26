import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Images = props => {
  const { foto01, foto02, foto03 } = useStaticQuery(graphql`
    query {
      foto01: file(relativePath: { eq: "real.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto02: file(relativePath: { eq: "foto-05.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto03: file(relativePath: { eq: "foto-04.jpeg" }) {
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
          case "foto-05":
            return <Img fluid={foto02.childImageSharp.fluid} alt="foto02" />
          case "foto-04":
            return <Img fluid={foto03.childImageSharp.fluid} alt="foto03" />

          default:
            return null
        }
      })()}
    </div>
  )
}

export default Images
