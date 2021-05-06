import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import resumeLoginStyles from "./resumeLogin.module.css"
import MenuBar from "../MenuBar"
import Job from "../Jobs"
import Project from "../Projects"
import Education from "../Education"
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

let currentOffset = currentTime.getTimezoneOffset()

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

const ResumeLogin = (data) => {
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
        <span className={resumeLoginStyles.typed}>
          &nbsp;whoami<span>&nbsp;</span>
        </span>
      </p>
      <div className={hidden ? resumeLoginStyles.hiddenPart : ""}>
        <h1>Akash Kaintura</h1>
        <h2>Associate Software Engineer</h2>
        <h3>Work Experience:</h3>
        {data.allResumeYaml.edges[0].node.jobs.map((job) => (
          <Job
            employer={job.employer}
            position={job.position}
            time={job.time}
            details={job.details}
            resource_url_1={job.resource_url_1}
            resource_title_1={job.resource_title_1}
            resource_url_2={job.resource_url_2}
            resource_title_2={job.resource_title_2}
          />
        ))}
        <hr />
        <h3>Projects:</h3>
        {data.allResumeYaml.edges[0].node.projects.map((project) => (
          <Project
            name={project.name}
            year={project.year}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            dockerhub={project.dockerhub}
          />
        ))}
        <hr />
        <h3>Education:</h3>
        <Education />
        <Footer />
      </div>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query resumeLoginQuery {
        allResumeYaml {
          edges {
            node {
              jobs {
                employer
                position
                details
                time
                # resource_url_1
                # resource_title_1
                # resource_url_2
                # resource_title_2
              }
              projects {
                name
                year
                description
                technologies
                github
                # dockerhub
              }
            }
          }
        }
      }
    `}
    render={ResumeLogin}
  />
)
