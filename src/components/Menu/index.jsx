import React from "react"
import { Link } from "gatsby"
import * as Styled from './styled'

const Menu = () => {
  return (
    <Styled.NavMenu className="navbar navbar-expand-sm d-flex justify-content-center align-items-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
            activeStyle={{ color: "white" }}
            activeClassName="active"
            style={{ color: "black", fontSize: "18px" }}
          >
            Roi
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/motivos"
            className="nav-link"
            activeStyle={{ color: "white" }}
            activeClassName="active"
            style={{ color: "black", fontSize: "18px" }}
          >
            Motivos
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contato"
            className="nav-link"
            activeStyle={{ color: "white" }}
            activeClassName="active"
            style={{ color: "black", fontSize: "18px" }}
          >
            Contato
          </Link>
        </li>
      </ul>
    </Styled.NavMenu>
  )
}

export default Menu
