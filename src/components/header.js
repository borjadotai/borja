import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

const Header = () => (
  <header>
    <div className="image">
      <Image />
    </div>
    <h1>
      Hi, I’m Borja{" "}
      <span role="img" aria-label="hello">
        👋
      </span>{" "}
      <br /> I think, design & build software.
    </h1>
    <div className="menu">
      <Link to="/" style={{ marginRight: "3rem" }}>
        timeline
      </Link>
      <Link to="/bio">bio</Link>
    </div>
  </header>
)

export default Header
