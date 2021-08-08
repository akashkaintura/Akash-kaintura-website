import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <div>
      ----------------------------------------------------------------------------------
      <br />
      <Link to="/">[ About Me ]</Link>&nbsp;
      {/* <Link to="/blog/">[ Blog ]</Link>&nbsp; */}
      <Link to="/contact/">[ Contact ]</Link>&nbsp;
      <Link to="/resume/">[ Resume ]</Link>&nbsp;
      <Link to="/signal-boost/">[ Signal Boost ]</Link>&nbsp;
      {/* <Link to="/portfolio">[Portfolio]</Link>&nbsp; */}
      {/* <Link to="/talks-and-pods/">[ Talks // Pods ]</Link> */}
      <br />
      ----------------------------------------------------------------------------------
      <br />
    </div>
  </div>
)
