import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import homePageStyles from "./homePage.module.css"
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
  year

const HomePage = () => {
  const [hidden, setHidden] = useState(true)
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <span>
        {currentLoginPrompt}
        <br />
        Welcome to Akash Kaintura!
      </span>
      <br />
      <br />
      <MenuBar />
      <p>
        [akki@AkashKaintura ~]${" "}
        <span className={homePageStyles.typed}>
          &nbsp;aboutMe<span>&nbsp;</span>
        </span>
      </p>
      <div className={hidden ? homePageStyles.hiddenPart : ""}>
        <div>
          <h1>Hi, my name is Akash!</h1>
          <h3>
            I do wokr for{" "}
            <a
              href="https://www.rubicoit.com/"
              target="_blank"
              rel="noopener noreferrer">
              RubicoIT
            </a>
            , and development with{" "}
            <a
              href="https://akashneedscoffee.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">
              Akash Kaintura
            </a>
            , created .
          </h3>
          <h3>
            My friends,colleagues help me learn and run{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              prosposed website
            </a>
            , coach, and build web projects.
          </h3>
          <h3>
            Please <Link to="/contact/">hit me up</Link> if you want to collab
            on something!
          </h3>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
