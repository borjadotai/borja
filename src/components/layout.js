import React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
