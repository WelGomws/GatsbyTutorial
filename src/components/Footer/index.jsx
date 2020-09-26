import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Styled from "./styled"

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        socialMedia: { github, instaMeu, instaDela },
        copyright,
        description,
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            github
            instaMeu
            instaDela
          }
          copyright
          description
        }
      }
    }
  `)
  return (
    <div style={{ background: "#A9D0F5", borderRadius: "16px 16px 0px 0px" }}>
      <div className="container">
        <div className="row text-black py-4 mt-5">
          <div className="col-8">{description}</div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <a href={instaMeu} target="_blank" rel="noreferrer">
              <Styled.InstaIcon />
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <Styled.GitHubIcon />
            </a>
            <a href={instaDela} target="_blank" rel="noreferrer">
              <Styled.InstaIcon />
            </a>
          </div>
          <div
            className="col-12 d-flex justify-content-center"
            style={{ marginTop: "30px" }}
          >
            {copyright}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
