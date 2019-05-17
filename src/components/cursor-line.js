import React, { Component } from "react"
import styles from "../styles/cursor-line.module.css"
import Cursor from "./cursor"

export default class CursorLine extends Component {
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.text}> {this.props.text} </span>

        <Cursor blink={this.props.blink} />
      </div>
    )
  }
}
