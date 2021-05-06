import React, { useState, useEffect } from "react"
import contactLoginStyles from "./contactLogin.module.css"
import MenuBar from "../MenuBar"
import Footer from "../Footer"

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

function zerosAreHard(n) {
  if (n < 10) {
    n = "0" + n
  }
  return n
}

let now = new Date()
let day = days[now.getDay()]
let month = months[now.getMonth()]
let date = now.getDate()
let hours = zerosAreHard(now.getHours())
let minutes = zerosAreHard(now.getMinutes())
let seconds = zerosAreHard(now.getSeconds())
let ampm = hours >= 12 ? "PM" : "AM"
let year = now.getFullYear()

let currentLoginPrompt =
  "Current login: " +
  day +
  " " +
  month +
  " " +
  date +
  " " +
  hours +
  ":" +
  minutes +
  ":" +
  seconds +
  " " +
  ampm +
  " " +
  year

let myEmail = "akashkaintura" + String.fromCharCode(64) + "yahoo.com"

const ContactPage = () => {
  const [hidden, setHidden] = useState(true)
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <span>
        {currentLoginPrompt}
        <br />
        Welcome to AkashNeeds.Coffee!
      </span>
      <br />
      <br />
      <MenuBar />
      <p>
        [akki@AkashNeeds ~]${" "}
        <span className={contactLoginStyles.typed}>
          &nbsp;sendmail<span>&nbsp;</span>
        </span>
      </p>
      <div className={hidden ? contactLoginStyles.hiddenPart : ""}>
        <h1>Contact</h1>
        <hr />
        <h2>Email</h2>
        <a href={"mailto:" + myEmail}> [ Email Me ]</a>
        <h2>Social Media</h2>
        <a
          href="https://github.com/akashkaintura"
          target="_blank"
          rel="noopener noreferrer">
          [ GitHub ]
        </a>
        &nbsp;
        <a
          href="https://dev.to/akashkaintura"
          target="_blank"
          rel="noopener noreferrer">
          [ DEV ]
        </a>
        &nbsp;
        <a
          href="https://www.instagram.com/enfield_explorer"
          target="_blank"
          rel="noopener noreferrer">
          [ Insta ]
        </a>
        <h2>Other Information</h2>
        <p>
          I'm super open to being contacted. I support the organization that
          provides equal opportunities to all.
        </p>
        <p>Also please reach out if you'd like to collaborate on something!</p>
        <p>I've always wanted to:</p>
        <ul>
          <li>Write a guest blog post</li>
          <li>Have a guest write for my blog</li>
        </ul>
        <hr />
        <Footer />
      </div>
    </div>
  )
}

export default ContactPage
