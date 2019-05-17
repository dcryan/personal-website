import React from "react"
import styles from "../styles/layout.module.css"

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 1080, padding: `0 1rem` }}>
    {children}
  </div>
)

export const BoxContainer = ({ children }) => (
  <div className={styles.boxContainer}>{children}</div>
)
