import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Images = props => {
  const {
    foto01,
    foto02,
    foto03,
    foto04,
    foto05,
    foto06,
    foto07,
    foto08,
    foto09,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
    foto15,
    foto16,
    foto17,
    foto18,
    foto19,
    foto20,
    foto21,
    foto22,
    foto23,
    foto24,
    foto25,
    foto26,
    foto27,
    foto28,
    foto29,
    foto30,
    foto31,
    foto32,
    foto33,
    foto34,
    foto35,
    foto36,
  } = useStaticQuery(graphql`
    query {
      foto01: file(relativePath: { eq: "01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto02: file(relativePath: { eq: "02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto03: file(relativePath: { eq: "03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto04: file(relativePath: { eq: "04.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto05: file(relativePath: { eq: "05.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto06: file(relativePath: { eq: "06.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto07: file(relativePath: { eq: "07.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto08: file(relativePath: { eq: "08.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto09: file(relativePath: { eq: "09.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto10: file(relativePath: { eq: "10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto11: file(relativePath: { eq: "11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto12: file(relativePath: { eq: "12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto13: file(relativePath: { eq: "13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto14: file(relativePath: { eq: "14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto15: file(relativePath: { eq: "15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto16: file(relativePath: { eq: "16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto17: file(relativePath: { eq: "17.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto18: file(relativePath: { eq: "18.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto19: file(relativePath: { eq: "19.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto20: file(relativePath: { eq: "20.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto21: file(relativePath: { eq: "21.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto22: file(relativePath: { eq: "22.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto23: file(relativePath: { eq: "23.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto24: file(relativePath: { eq: "24.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto25: file(relativePath: { eq: "25.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto26: file(relativePath: { eq: "26.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto27: file(relativePath: { eq: "27.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto28: file(relativePath: { eq: "28.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto29: file(relativePath: { eq: "29.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto30: file(relativePath: { eq: "30.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto31: file(relativePath: { eq: "31.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto32: file(relativePath: { eq: "32.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto33: file(relativePath: { eq: "33.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto34: file(relativePath: { eq: "34.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto35: file(relativePath: { eq: "35.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto36: file(relativePath: { eq: "36.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
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
          case "01":
            return <Img fluid={foto01.childImageSharp.fluid} alt="" />
          case "02":
            return <Img fluid={foto02.childImageSharp.fluid} alt="" />
          case "03":
            return <Img fluid={foto03.childImageSharp.fluid} alt="" />
          case "04":
            return <Img fluid={foto04.childImageSharp.fluid} alt="" />
          case "05":
            return <Img fluid={foto05.childImageSharp.fluid} alt="" />
          case "06":
            return <Img fluid={foto06.childImageSharp.fluid} alt="" />
          case "07":
            return <Img fluid={foto07.childImageSharp.fluid} alt="" />
          case "08":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto08.childImageSharp.fluid}
                alt=""
              />
            )
          case "09":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto09.childImageSharp.fluid}
                alt=""
              />
            )
          case "10":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto10.childImageSharp.fluid}
                alt=""
              />
            )
          case "11":
            return <Img fluid={foto11.childImageSharp.fluid} alt="" />
          case "12":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto12.childImageSharp.fluid}
                alt=""
              />
            )
          case "13":
            return <Img fluid={foto13.childImageSharp.fluid} alt="" />
          case "14":
            return <Img fluid={foto14.childImageSharp.fluid} alt="" />
          case "15":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto15.childImageSharp.fluid}
                alt=""
              />
            )
          case "16":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto16.childImageSharp.fluid}
                alt=""
              />
            )
          case "17":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto17.childImageSharp.fluid}
                alt=""
              />
            )
          case "18":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto18.childImageSharp.fluid}
                alt=""
              />
            )
          case "19":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto19.childImageSharp.fluid}
                alt=""
              />
            )
          case "20":
            return <Img fluid={foto20.childImageSharp.fluid} alt="" />
          case "21":
            return <Img fluid={foto21.childImageSharp.fluid} alt="" />
          case "22":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto22.childImageSharp.fluid}
                alt=""
              />
            )
          case "23":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto23.childImageSharp.fluid}
                alt=""
              />
            )
          case "24":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto24.childImageSharp.fluid}
                alt=""
              />
            )
          case "25":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto25.childImageSharp.fluid}
                alt=""
              />
            )
          case "26":
            return <Img fluid={foto26.childImageSharp.fluid} alt="" />
          case "27":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto27.childImageSharp.fluid}
                alt=""
              />
            )
          case "28":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto28.childImageSharp.fluid}
                alt=""
              />
            )
          case "29":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto29.childImageSharp.fluid}
                alt=""
              />
            )
          case "30":
            return <Img fluid={foto30.childImageSharp.fluid} alt="" />
          case "31":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto31.childImageSharp.fluid}
                alt=""
              />
            )
          case "32":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto32.childImageSharp.fluid}
                alt=""
              />
            )
          case "33":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto33.childImageSharp.fluid}
                alt=""
              />
            )
          case "34":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto34.childImageSharp.fluid}
                alt=""
              />
            )
          case "35":
            return (
              <Img
                style={{ paddingBottom: "100%" }}
                fluid={foto35.childImageSharp.fluid}
                alt=""
              />
            )
          case "36":
            return <Img fluid={foto36.childImageSharp.fluid} alt="" />
          default:
            return null
        }
      })()}
    </div>
  )
}

export default Images
