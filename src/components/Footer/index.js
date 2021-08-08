import React from "react"
import footerStyles from "./footer.module.css"

let now = new Date()
let year = now.getFullYear()

export default () => (
  <div>
    <hr />
    <p className={footerStyles.footer}>
      Made with <span className={footerStyles.heart}>&#10084;</span> in
      Rishikesh, India || &copy; {year}, Akash Kaintura
    </p>
  </div>
)
