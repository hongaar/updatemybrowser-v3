import React from 'react'
import Header from './header'

export function Layout({ children, siteTitle }) {
  return (
    <>
      <Header siteTitle={siteTitle} />
      <div>{children}</div>
      <footer>
        <div>
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </>
  )
}
