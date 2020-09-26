import React from "react"
import PropTypes from "prop-types"
import "./layout.scss"
import Menu from "../Menu"
import GlobalStyles from "../../styles/globalStyled"
import Footer from "../Footer"
import Container from "../Container"

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <GlobalStyles />
        <Menu />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
