import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <nav
      className="navbar navbar-expand-sm d-flex justify-content-center align-items-center"
      style={{ borderRadius: "0px 0px 16px 16px", background: "#A9D0F5" }}
    >
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
    </nav>
  )
}

export default Menu
