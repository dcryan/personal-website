import React from "react"

import { Link } from "gatsby"
import styles from "../styles/header.module.css"

export default ({ isActive }) => {
  const daniel = [styles.daniel]
  const resume = [styles.resume]
  const portfolio = [styles.portfolio]
  const contact = [styles.contact]

  switch (isActive) {
    case "daniel":
      daniel.push(styles.active)
      break
    case "resume":
      resume.push(styles.active)
      break
    case "portfolio":
      portfolio.push(styles.active)
      break
  }

  return (
    <div>
      <Link to="" className={daniel.join(" ")}>
        Daniel
      </Link>
      <Link to="resume" className={resume.join(" ")}>
        Resume
      </Link>
      <Link to="portfolio" className={portfolio.join(" ")}>
        Portfolio
      </Link>
      <a href="mailto: d@nielryan.com" className={contact}>
        Contact
      </a>
    </div>
  )
}
