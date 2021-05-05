import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import signalBoostLoginStyles from "./signalBoostLogin.module.css"
import MenuBar from "../MenuBar"
import SignalBoost from "../SignalBoost"
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
        Welcome to AkashNeeds.Coffee!
      </span>
      <br />
      <br />
      <MenuBar />
      <p>
        [akki@AkashNeeds ~]${" "}
        <span className={signalBoostLoginStyles.typed}>
          &nbsp;connections <span>&nbsp;</span>
        </span>
      </p>
      <div className={hidden ? signalBoostLoginStyles.hiddenPart : ""}>
        <h1>Signal Boosts</h1>
        <hr />
        <p>
          These are Great folks. If you or your orgs needs technology
          assistance/Learning with these skills, please feel free to reach out
          to them.
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
        {data.allSignalboostYaml.edges[0].node.people.map((person) => (
          <SignalBoost
            name={person.name}
            hidden={person.hidden}
            tech={person.tech}
            blog={person.blog}
            devto={person.devto}
            dribbble={person.dribbble}
            github={person.github}
            gitlab={person.gitlab}
            linkedin={person.linkedin}
            twitter={person.twitter}
            website={person.website}
          />
        ))}
        <Footer />
      </div>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query signalBoostQuery {
        allSignalboostYaml {
          edges {
            node {
              people {
                name
                # hidden
                tech
                # blog
                # devto
                # dribbble
                github
                # gitlab
                # linkedin
                # twitter
                website
              }
            }
          }
        }
      }
    `}
    render={SignalBoostPage}
  />
)
