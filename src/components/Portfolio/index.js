import React, { useState, useEffect } from "react"
import portfolioStyles from "./portfolio.module.css"
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

const SignalBoostPage = (data) => {
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
        <span className={portfolioStyles.typed}>
          &nbsp;connections <span>&nbsp;</span>
        </span>
      </p>
      <div className={hidden ? portfolioStyles.hiddenPart : ""}>
        <h1>My Portfolio</h1>
        <hr />
        <p>
         Some of My works
        </p>
        <p>
          To add yourself to this list, fork{" "}
          <a
            href="https://github.com/Akash-kaintura-website"
            target="_blank"
            rel="noopener noreferrer">
            this website's source code
          </a>{" "}
          and submit a pull request with edits following{" "}
          <a
            href="https://github.com/Akash-kaintura-website/blob/master/src/signalboost/"
            target="_blank"
            rel="noopener noreferrer">
            these instructions
          </a>
          .
        </p>
        <p>
          With COVID-19 continuing to rage across the world, these people are in
          need of a job now more than ever.
        </p>
        <hr />
        <hr />
        <h2>People</h2>
        <hr />
        
        <Footer />
      </div>
    </div>
  )
}

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query signalBoostQuery {
//         allSignalboostYaml {
//           edges {
//             node {
//               people {
//                 name
//                 # hidden
//                 tech
//                 # blog
//                 # devto
//                 # dribbble
//                 github
//                 # gitlab
//                 linkedin
//                 # twitter
//                 website
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={SignalBoostPage}
//   />
// )
