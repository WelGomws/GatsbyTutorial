import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Menu = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <Img fixed={logo.childImageSharp.fixed} alt="Logo" />
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
            activeStyle={{ color: "red" }}
            activeClassName="active"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className="nav-link"
            activeStyle={{ color: "red" }}
            activeClassName="active"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/gallery"
            className="nav-link"
            activeStyle={{ color: "red" }}
            activeClassName="active"
          >
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className="nav-link"
            activeStyle={{ color: "red" }}
            activeClassName="active"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
