import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/humana.svg"
const Header = ({ siteTitle }) => (
  <header>
    <div className="flex items-center justify-end w-full h-12 bg-humana-dark">
      <Link className="px-24 mx-64 text-lg text-white" to="/">
        Login
      </Link>
    </div>
    <nav className="flex flex-wrap items-center justify-between w-full h-20 bg-humana-green">
      <Link to="/">
        <img className="h-10 mx-8" src={Logo} />
      </Link>
      <div className="mx-64 space-x-8">
        <Link className="text-xl font-semibold text-white" to="/">
          Getting Started
        </Link>
        <Link className="text-xl font-semibold text-white" to="/">
          APIs
        </Link>
        <Link className="text-xl font-semibold text-white" to="/">
          Support
        </Link>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
