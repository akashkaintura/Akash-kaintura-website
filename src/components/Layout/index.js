import React from "react"
import { Helmet } from "react-helmet"
import Header from "../Header"
import "prismjs/themes/prism-twilight.css"
import layoutStyles from "./layout.module.css"

export default ({ children }) => (
  <div className={layoutStyles.terminalWindow}>
    <Helmet>
      <meta
        name="description"
        content="The personal resume site for Akash Kaintura"
      />
      <meta
        name="keywords"
        content="Akash, kaintura, React, Engineer, Resume, Laravel, JavaScript, JS, Node, PHP"
      />
      <meta charset="UTF-8" />
      <html lang="en" />
      <title>Akash Kaintura</title>
    </Helmet>
    <Header />
    <section className={layoutStyles.terminal}>{children}</section>
  </div>
)
