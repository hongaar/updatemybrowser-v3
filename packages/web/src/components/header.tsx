import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
